# AGENTS.md — working with the SW CPAs agent kit

Instructions for coding agents (Codex, Claude Code, Cursor, Copilot) that integrate an app or workflow with SW CPAs (에스더블유 공인회계사 사무소, https://sw-cpas.co.kr).

## What this repository is

- `plugin.json`, `mcp.json`, `skills/sw-cpas/SKILL.md`: an Agent Plugin (https://agent-plugins.org) that connects an agent to the SW CPAs MCP servers.
- `server.json`: the listing in the official MCP Registry (`kr.co.sw-cpas/mcp`).
- The servers themselves run on sw-cpas.co.kr; this repository holds no server code or credentials.

## How to integrate

- Prefer the MCP servers: `https://sw-cpas.co.kr/mcp` (actions) and `https://sw-cpas.co.kr/mcp/docs` (docs). Streamable HTTP, no sign-in.
- For plain HTTP, read the contract at `https://sw-cpas.co.kr/openapi.json`. No API key. Errors are `application/problem+json`.
- Respect `RateLimit-*` and `Retry-After` headers. Do not loop on `429`.

## Rules

- `request_consultation` / `POST /api/v1/consultation-requests` sends a real email to the firm. Only call it with details the person gave you and after they agreed to https://sw-cpas.co.kr/privacy/. Use `dry_run: true` first and send an `Idempotency-Key`.
- Never write tests that submit real consultation requests. Use `dry_run: true`.
- Do not hard-code prices; fees are quoted after the scope is known.
- Finder results and articles are general information, not tax advice; keep the disclaimer.

## Changing this repository

- Keep `skills/sw-cpas/SKILL.md` identical to `https://sw-cpas.co.kr/.well-known/agent-skills/sw-cpas/SKILL.md`.
- Bump `version` in `plugin.json` and `server.json` together.
