#!/usr/bin/env node
// SW CPAs official CLI + stdio MCP server. Every call goes to the public API at https://sw-cpas.co.kr (no key).
//   sw-cpas-mcp                 run as an MCP server over stdio (relays to https://sw-cpas.co.kr/mcp)
//   sw-cpas firm                firm profile
//   sw-cpas services            services and pages
//   sw-cpas search <words>      Korean articles
//   sw-cpas questions           US incorporation finder questions
//   sw-cpas evaluate '<json>'   run the finder with an answers object
import readline from "node:readline";

const BASE = process.env.SW_CPAS_BASE || "https://sw-cpas.co.kr";
const out = (v) => process.stdout.write(JSON.stringify(v, null, 2) + "\n");

async function api(path, init) {
  const res = await fetch(BASE + path, init);
  const body = await res.json();
  if (!res.ok) { out(body); process.exit(1); }
  return body;
}

async function relay() {
  const rl = readline.createInterface({ input: process.stdin });
  for await (const line of rl) {
    if (!line.trim()) continue;
    let msg;
    try { msg = JSON.parse(line); } catch { continue; }
    const res = await fetch(`${BASE}/mcp`, { method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream" }, body: line });
    if (res.status === 202 || msg.id === undefined) continue;
    const text = await res.text();
    process.stdout.write(text.trim() + "\n");
  }
}

const [cmd, ...rest] = process.argv.slice(2);
const commands = {
  firm: () => api("/api/v1/firm").then(out),
  services: () => api("/api/v1/services").then(out),
  search: () => api(`/api/v1/insights?q=${encodeURIComponent(rest.join(" "))}`).then(out),
  questions: () => api("/api/v1/us-incorporation/questions").then(out),
  evaluate: () => api("/api/v1/us-incorporation/evaluate", { method: "POST",
    headers: { "Content-Type": "application/json" }, body: JSON.stringify({ answers: JSON.parse(rest[0] || "{}") }) }).then(out),
  help: () => console.log("sw-cpas [firm|services|search <words>|questions|evaluate '<answers json>']  — no args: MCP server over stdio"),
};
(cmd ? (commands[cmd] || commands.help)() : relay()).catch((e) => { console.error(e.message); process.exit(1); });
