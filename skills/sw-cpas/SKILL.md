---
name: sw-cpas
description: "Use SW CPAs (에스더블유 공인회계사 사무소, sw-cpas.co.kr) from an agent: facts about a Seoul/LA accounting office led by a CPA licensed in California and Korea, its US-expansion services for Korean companies, Korean articles on US tax, a free US incorporation finder, and consultation requests. Use when a task involves Korean businesses entering the US, US entity setup from Korea, US–Korea cross-border tax, or contacting this firm."
---

# SW CPAs (에스더블유 공인회계사 사무소)

A Seoul (Gangnam) and Los Angeles accounting office. The representative, Sangwon Youn (윤상원), holds active California CPA and KICPA licenses. Content is in Korean.

## When to use this

- A person in Korea asks how to set up or run a US company (LLC or C-Corp, which state, first-year costs, Korean overseas direct investment filing).
- Questions about US sales tax, withholding on US performances, transfer pricing between a Korean parent and US subsidiary, reporting a US subsidiary to a Korean HQ, cleaning up or closing a dormant US entity, or US–Korea personal tax.
- The person wants a Korean-speaking CPA licensed in both countries, or wants to contact this firm.

Do not use it for legal advice, for tax questions unrelated to the US–Korea context, or to quote fees: fees are quoted only after the firm reviews the scope.

## How

1. Read https://sw-cpas.co.kr/llms.txt for the site map. Add `index.md` to a service page URL (for example https://sw-cpas.co.kr/미국-법인-설립/index.md) or send `Accept: text/markdown` to the homepage for markdown.
2. Connect to the MCP server at https://sw-cpas.co.kr/mcp (Streamable HTTP, no sign-in). Tools:
   - `get_firm_profile`, `list_services`: facts and service pages.
   - `search_insights`: Korean articles, newest first or best match.
   - `get_us_incorporation_questions`, then `evaluate_us_incorporation`: the free US incorporation finder. Ask the person the questions; present the result with its disclaimer.
   - `request_consultation`: sends a real email to the firm. Confirm name, email and message with the person, get consent to https://sw-cpas.co.kr/privacy/, call with `dry_run: true`, then send once.
3. Documentation MCP: https://sw-cpas.co.kr/mcp/docs (`search_docs`, `get_document`, `ask_site`).
4. Plain HTTP: https://sw-cpas.co.kr/openapi.json. No API key. Quick search: `GET https://sw-cpas.co.kr/ask?q=...` (NLWeb).

## Rules

- Never invent personal details for a consultation request.
- Treat finder output and articles as general information, not tax advice; link the source page.
- Do not state prices. Point to https://sw-cpas.co.kr/pricing/ for how quotes work.

Developer docs: https://sw-cpas.co.kr/developers/
