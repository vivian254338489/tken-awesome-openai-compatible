# Awesome OpenAI-Compatible Stack

A curated, practical list of OpenAI-compatible gateways, local Web UIs, routing recipes, fallback examples, client config kits, and cost tools.

The goal is simple: keep your app on a familiar OpenAI-style API surface while you test different model routes, UI shells, clients, and deployment patterns.

## Fast Start

Need an OpenAI-compatible endpoint for testing?

```text
https://www.tken.shop/v1
```

Start here:

https://www.tken.shop/?utm_source=github&utm_medium=awesome_readme&utm_campaign=customer_acquisition&utm_content=fast_start_endpoint

Disclosure: this list is maintained by TKEN-related tooling contributors and includes TKEN projects. Most resources are designed to stay useful with other compatible providers after you verify their docs and terms.

## Pick By What You Need

| Need | Start here |
| --- | --- |
| One local stack with gateway + Web UIs | [TKEN One-Click AI Stack](https://github.com/vivian254338489/tken-one-click-ai-stack) |
| Copy-paste routing recipes | [OpenAI-Compatible Routing Cookbook](https://github.com/vivian254338489/openai-compatible-routing-cookbook) |
| Compare editable cost/latency assumptions | [Model Router Bench Lite](https://github.com/vivian254338489/model-router-bench-lite) |
| Test a live cost calculator | [AI API Cost Calculator](https://vivian254338489.github.io/tken-ai-api-cost-calculator/) |
| Add fallback between providers/models | [AI Model Fallback Proxy](https://github.com/vivian254338489/ai-model-fallback-proxy) |
| Connect Open WebUI | [TKEN Open WebUI Pipelines](https://github.com/vivian254338489/tken-openwebui-pipelines) |
| Configure VS Code / Continue | [TKEN VS Code Continue Config Pack](https://github.com/vivian254338489/tken-vscode-continue-config-pack) |
| Use DeepSeek/Qwen-style models from compatible clients | [DeepSeek/Qwen OpenAI-Compatible Guide](https://github.com/vivian254338489/deepseek-qwen-openai-compatible-guide) |

## Core Stack

- [TKEN One-Click AI Stack](https://github.com/vivian254338489/tken-one-click-ai-stack) - gateway, ChatGPT-style UI, Claude-style UI, Codex/OpenClaw kits, Docker/Railway/Render/Vercel support.
- [ChatGPT Web UI TKEN Starter](https://github.com/vivian254338489/chatgpt-web-ui-tken-starter) - standalone ChatGPT-style Web UI starter.
- [TKEN AI Gateway Starter](https://github.com/vivian254338489/tken-ai-gateway-starter) - minimal OpenAI-compatible gateway starter.
- [AI Model Fallback Proxy](https://github.com/vivian254338489/ai-model-fallback-proxy) - provider-neutral fallback proxy example.

## Routing And Migration

- [OpenAI-Compatible Routing Cookbook](https://github.com/vivian254338489/openai-compatible-routing-cookbook) - task routing, fallback, custom base URLs, SDK migration, security checks.
- [TKEN OpenAI-Compatible Examples](https://github.com/vivian254338489/tken-openai-compatible-examples) - Node.js, Python, and cURL examples.
- [Model Router Bench Lite](https://github.com/vivian254338489/model-router-bench-lite) - editable estimator for routing tradeoffs. Not a benchmark.
- [TKEN LLM Routing Recipes](https://github.com/vivian254338489/tken-llm-routing-recipes) - route simple work to low-cost routes and harder work to premium routes.
- [TKEN Free Model Fallback Recipes](https://github.com/vivian254338489/tken-free-model-fallback-recipes) - fallback and premium escalation patterns.

## Client And Tool Config

- [TKEN VS Code Continue Config Pack](https://github.com/vivian254338489/tken-vscode-continue-config-pack) - Continue/VS Code-style config examples.
- [TKEN Codex Client Kit](https://github.com/vivian254338489/tken-codex-client-kit) - Codex-style client config kit.
- [TKEN OpenClaw Client Kit](https://github.com/vivian254338489/tken-openclaw-client-kit) - OpenClaw-style provider config kit.
- [TKEN Cursor/Windsurf Base URL Guide](https://github.com/vivian254338489/tken-cursor-windsurf-base-url-guide) - custom API base URL examples.
- [TKEN AI SDK Provider Template](https://github.com/vivian254338489/tken-ai-sdk-provider-template) - JavaScript provider template.

## Open WebUI, LiteLLM, And Gateways

- [TKEN Open WebUI Pipelines](https://github.com/vivian254338489/tken-openwebui-pipelines) - Open WebUI Pipelines connector.
- [TKEN Open WebUI Provider Pack](https://github.com/vivian254338489/tken-openwebui-provider-pack) - Open WebUI-style provider settings.
- [TKEN LiteLLM Router Config Pack](https://github.com/vivian254338489/tken-litellm-router-config-pack) - LiteLLM-style low-cost default and premium fallback configs.
- [TKEN Cloudflare Worker AI Proxy](https://github.com/vivian254338489/tken-cloudflare-worker-ai-proxy) - edge proxy template.
- [TKEN FastAPI AI Gateway Starter](https://github.com/vivian254338489/tken-fastapi-ai-gateway-starter) - FastAPI compatible gateway starter.
- [TKEN Express AI Gateway Starter](https://github.com/vivian254338489/tken-express-ai-gateway-starter) - Express gateway starter.

## Cost, Monitoring, And Troubleshooting

- [AI API Cost Calculator](https://github.com/vivian254338489/tken-ai-api-cost-calculator) - static calculator, live demo included.
- [TKEN API Cost Calculator](https://github.com/vivian254338489/tken-api-cost-calculator) - compare premium-only usage against routed usage.
- [TKEN API Health Monitor](https://github.com/vivian254338489/tken-api-health-monitor) - CLI and local status page.
- [TKEN AI API Status Page Template](https://github.com/vivian254338489/tken-ai-api-status-page-template) - status page template.
- [TKEN AI API Troubleshooting Guide](https://github.com/vivian254338489/tken-ai-api-troubleshooting-guide) - base URL, auth, CORS, gateway, and model routing errors.

## Guides

- [DeepSeek/Qwen OpenAI-Compatible Guide](https://github.com/vivian254338489/deepseek-qwen-openai-compatible-guide) - using DeepSeek/Qwen-style model routes from compatible clients.
- [TKEN Chinese Model API Guide](https://github.com/vivian254338489/tken-chinese-model-api-guide) - Chinese model routes with one API base URL.
- [TKEN ChatGPT Gateway 3-Minute Guide](https://github.com/vivian254338489/tken-chatgpt-gateway-3-minute-guide) - quick gateway setup.
- [TKEN GPT vs Claude Routing Guide](https://github.com/vivian254338489/tken-gpt-vs-claude-routing-guide) - route tasks by model strengths.
- [TKEN Cheapest AI API 2026](https://github.com/vivian254338489/tken-cheapest-ai-api-2026) - route-based AI API cost guide. Verify current pricing before relying on public claims.

## Launch And Content Assets

- [TKEN Reddit Launch Pack](https://github.com/vivian254338489/tken-reddit-launch-pack) - soft-launch drafts.
- [TKEN AI API Video Script Pack](https://github.com/vivian254338489/tken-ai-api-video-script-pack) - short-form video scripts.
- [TKEN AI API SEO Landing Kit](https://github.com/vivian254338489/tken-ai-api-seo-landing-kit) - static SEO landing pages.

## Safety Notes

- OpenAI-compatible does not mean every provider supports the same models, streaming format, tool calls, JSON mode, rate limits, billing, or data policy.
- Keep provider base URLs, keys, and model names in environment variables.
- Test non-streaming chat before streaming/tool calls.
- Track routing decisions and fallback reasons.
- Verify current provider docs, pricing, and terms before production use.

## Contributing

Useful additions:

- provider-neutral setup notes
- reproducible examples
- troubleshooting guides
- security checklists
- migration recipes

Avoid:

- unsupported benchmark claims
- fake "official partner" language
- hardcoded API keys
- spammy directory stuffing

## Disclosure

This list is maintained by TKEN-related tooling contributors. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, OpenClaw, Railway, Vercel, Docker, Reddit, YouTube, TikTok, DeepSeek, Qwen, Open WebUI, Continue, or LiteLLM.
