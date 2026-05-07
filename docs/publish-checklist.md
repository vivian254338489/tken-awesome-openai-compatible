# Publish Checklist

Status: local-only draft. Do not create, push, edit, or promote a public GitHub repo without explicit owner approval.

## Repo Metadata

Suggested repo:

`vivian254338489/tken-awesome-openai-compatible`

Description:

`Curated OpenAI-compatible gateway, Web UI, routing, client config, and cost resources.`

Homepage:

`https://www.tken.shop/`

Topics:

```text
awesome-list
openai-compatible
ai-gateway
llm-router
chatgpt-web-ui
open-webui
litellm
model-routing
developer-tools
tken
```

## Pre-Publish QA

Run from this project folder:

```powershell
npm run check
Select-String -Path .\README.md,.\PROMOTION.md,.\docs\*.md -Pattern 'retired-api-domain-placeholder' -SimpleMatch
Select-String -Path .\README.md,.\PROMOTION.md,.\docs\*.md -Pattern 'sk-[A-Za-z0-9_-]{20,}'
Select-String -Path .\README.md,.\PROMOTION.md,.\docs\*.md -Pattern 'unsupported-reseller-claim-placeholder','unlimited-claim-placeholder','guaranteed-lowest-claim-placeholder' -SimpleMatch
```

Expected result:

- `npm run check` returns `ok: true`.
- `CONTRIBUTING.md` and both issue templates are present so public suggestions can be reviewed without ad hoc outreach.
- Retired-domain scan returns no active publishable links. Use the workspace guardrail script for the current retired-domain list.
- Secret scan returns no real API keys.
- Risk-claim scan returns no unsupported publish-body claims.

## Approval Gate

Owner approval line:

`Approve public GitHub creation for vivian254338489/tken-awesome-openai-compatible only. Do not post externally.`

This approval would authorize only GitHub repo creation or push for this owned asset. It would not authorize dev.to, Reddit, Hacker News, Product Hunt, directory submissions, paid ads, DMs, or upstream PRs.

## After Publish

1. Confirm README renders correctly.
2. Confirm homepage and topics are saved.
3. Click the README UTM CTA once and confirm the landing page loads.
4. Record the repo URL and launch time in the growth notes.
5. Wait for owner Day 0 metric collection before external distribution.
