# SW CPAs agent kit

AI 에이전트가 에스더블유 공인회계사 사무소(SW CPAs, https://sw-cpas.co.kr)의 정보와 도구를 쓰도록 연결하는 공식 묶음입니다.
The official kit for connecting AI agents to SW CPAs, a Seoul/LA accounting office led by a CPA licensed in California and Korea.

## What agents can do

- Read firm facts, services and Korean articles on US tax for Korean businesses
- Run the free US incorporation finder (state and LLC/C-Corp recommendation, first-year costs)
- Send a consultation request on a person's behalf (with their consent)

## Connect

MCP (Streamable HTTP, no sign-in):

```json
{
  "mcpServers": {
    "sw-cpas": { "type": "http", "url": "https://sw-cpas.co.kr/mcp" },
    "sw-cpas-docs": { "type": "http", "url": "https://sw-cpas.co.kr/mcp/docs" }
  }
}
```

- API contract: https://sw-cpas.co.kr/openapi.json
- Developer docs: https://sw-cpas.co.kr/developers/
- Agent skill: [skills/sw-cpas/SKILL.md](skills/sw-cpas/SKILL.md)
- MCP Registry: `kr.co.sw-cpas/mcp`

CLI and stdio MCP server (npm package `sw-cpas-mcp`, Node 18+):

```bash
npx sw-cpas-mcp firm                 # firm profile
npx sw-cpas-mcp search LLC           # Korean articles
npx sw-cpas-mcp questions            # US incorporation finder questions
npx sw-cpas-mcp                      # run as an MCP server over stdio
```

## Contact

swyoun@sw-cpas.com · +82-70-5276-7107
