# Curation Policy

This repository is an owned discovery hub for OpenAI-compatible API, gateway, routing, Web UI, and client configuration resources. It can include TKEN projects, but it should stay useful to developers who choose another compatible provider.

## Inclusion Standard

Include a resource only when it has at least one practical developer use:

- a runnable quickstart, config, script, or template
- clear docs for custom `base_url` or OpenAI-compatible endpoint setup
- routing, fallback, cost-estimation, monitoring, or troubleshooting examples
- Web UI, IDE, CLI, gateway, or deployment integration value
- a maintained public repo or stable documentation page

Avoid listing a resource when it is only a landing page, ad, affiliate page, scraped duplicate, unverifiable pricing claim, or brand-only fork.

## TKEN Affiliation

TKEN-related projects are allowed, but the README must keep the disclosure visible and must not imply that TKEN is officially affiliated with OpenAI, Anthropic, ChatGPT, Claude, LiteLLM, Open WebUI, Continue, Docker, Vercel, Railway, GitHub, or other named tools.

When this list is submitted to a third-party community, directory, or upstream awesome list, use a disclosure line such as:

```text
Disclosure: I maintain TKEN-related tooling, and this list includes TKEN projects alongside provider-neutral resources.
```

## Entry Format

Each entry should use this shape:

```md
- [Name](https://example.com) - Concrete developer use case in one sentence.
```

Prefer specific use cases over claims. For example:

- good: "FastAPI starter for an OpenAI-compatible chat completions proxy."
- avoid: "The cheapest and best AI API gateway."

## Review Checklist

Before publishing or submitting this repo anywhere:

1. Confirm all links resolve to the intended project or docs.
2. Confirm TKEN links use `https://www.tken.shop/` for marketing CTAs.
3. Confirm developer examples use `https://www.tken.shop/v1` only where an API base URL is needed.
4. Run `npm run check`.
5. Run the workspace guardrail script from the main growth workspace.
6. Confirm no API keys, session tokens, old domains, price-superiority promises, unrestricted-use promises, or affiliation claims are present.
7. Confirm owner approval covers the exact public action.

## Removal Rules

Remove or hold an entry when it:

- ships secrets or asks users to paste secrets into unsafe locations
- makes unverifiable benchmark, pricing, affiliation, unrestricted-access, or savings claims
- no longer has a working repo, docs page, or reproducible setup path
- is unrelated to OpenAI-compatible APIs, gateways, model routing, compatible clients, Web UIs, deployment, cost estimation, or troubleshooting
- creates a conflict with upstream community rules or maintainer requests

## Public Movement Gate

This policy does not authorize public repo creation, GitHub metadata edits, upstream PRs, directory submissions, social posts, comments, ads, DMs, or paid placements. Those actions require explicit owner approval for the exact target and wording.
