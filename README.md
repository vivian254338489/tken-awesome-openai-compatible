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

Browse the agent tooling landing page:

https://vivian254338489.github.io/openai-compatible-agent-tooling-landing/

Disclosure: this list is maintained by TKEN-related tooling contributors and includes TKEN projects. Most resources are designed to stay useful with other compatible providers after you verify their docs and terms.

## Pick By What You Need

| Need | Start here |
| --- | --- |
| Browse agent, MCP, and OpenAI-compatible tooling by workflow | [OpenAI-Compatible Agent Tooling Landing](https://vivian254338489.github.io/openai-compatible-agent-tooling-landing/) |
| Generate MCP client configs for a compatible gateway | [MCP OpenAI Gateway Starter](https://github.com/vivian254338489/mcp-openai-gateway-starter) |
| Package a Claude Desktop MCPB extension | [Claude Desktop MCPB Starter](https://github.com/vivian254338489/claude-desktop-mcpb-starter) |
| One local stack with gateway + Web UIs | [TKEN One-Click AI Stack](https://github.com/vivian254338489/tken-one-click-ai-stack) |
| Connect Open WebUI to a unified gateway | [OpenWebUI TokenFlow Starter](https://github.com/vivian254338489/openwebui-tokenflow-starter) |
| Produce an OpenAI-compatible API conformance report | [OpenAI-Compatible API Conformance Kit](https://github.com/vivian254338489/openai-compatible-api-conformance-kit) |
| Test whether a custom endpoint works | [OpenAI-Compatible Endpoint Tester](https://github.com/vivian254338489/openai-compatible-endpoint-tester) |
| Copy-paste routing recipes | [OpenAI-Compatible Routing Cookbook](https://github.com/vivian254338489/openai-compatible-routing-cookbook) |
| Compare editable cost/latency assumptions | [Model Router Bench Lite](https://github.com/vivian254338489/model-router-bench-lite) |
| Edit model pricing metadata and budget-routing notes | [AI Gateway Pricing Metadata Kit](https://github.com/vivian254338489/ai-gateway-pricing-metadata-kit) |
| Diff LiteLLM-style pricing and metadata snapshots | [LiteLLM Pricing Metadata Diff](https://github.com/vivian254338489/litellm-pricing-metadata-diff) |
| Test a live cost calculator | [AI API Cost Calculator](https://vivian254338489.github.io/tken-ai-api-cost-calculator/) |
| Add fallback between providers/models | [AI Model Fallback Proxy](https://github.com/vivian254338489/ai-model-fallback-proxy) |
| Configure LiteLLM routing and fallback | [TKEN LiteLLM Router Config Pack](https://github.com/vivian254338489/tken-litellm-router-config-pack) |
| Build a FastAPI compatible gateway | [TKEN FastAPI AI Gateway Starter](https://github.com/vivian254338489/tken-fastapi-ai-gateway-starter) |
| Connect LangChain to a custom endpoint | [OpenAI-Compatible LangChain Starter](https://github.com/vivian254338489/openai-compatible-langchain-starter) |
| Configure Cursor or Windsurf base URLs | [TKEN Cursor/Windsurf Base URL Guide](https://github.com/vivian254338489/tken-cursor-windsurf-base-url-guide) |
| Validate Claude Desktop MCP config before restart | [Claude Desktop MCP Config Doctor](https://github.com/vivian254338489/claude-desktop-mcp-config-doctor) |
| Give agents an MCP endpoint diagnostic tool | [OpenAI-Compatible MCP Server](https://github.com/vivian254338489/openai-compatible-mcp-server) |
| Copy agent skills/rules for compatible endpoints | [Agent Skills OpenAI-Compatible Pack](https://github.com/vivian254338489/agent-skills-openai-compatible-pack) |
| Store local agent memory and context notes | [OpenAI-Compatible Agent Memory Kit](https://github.com/vivian254338489/openai-compatible-agent-memory-kit) |
| Plan safe browser-use/operator workflows | [Browser-Use OpenAI-Compatible Operator Kit](https://github.com/vivian254338489/browser-use-openai-compatible-operator-kit) |
| Generate Open WebUI provider setup files | [OpenWebUI OpenAI-Compatible Setup Wizard](https://github.com/vivian254338489/openwebui-openai-compatible-setup-wizard) |
| Connect Open WebUI to compatible gateways | [Open WebUI Gateway Recipes](https://github.com/vivian254338489/open-webui-gateway-recipes) |
| Decide which model route fits a task | [OpenAI-Compatible Model Route Decider](https://github.com/vivian254338489/openai-compatible-model-route-decider) |
| Generate LiteLLM provider/fallback configs | [LiteLLM OpenAI-Compatible Config Wizard](https://github.com/vivian254338489/litellm-openai-compatible-config-wizard) |
| Reproduce LiteLLM fallback and rate-limit behavior | [LiteLLM Fallback Rate Limit Lab](https://github.com/vivian254338489/litellm-fallback-rate-limit-lab) |
| Generate Continue/VS Code assistant configs | [Continue OpenAI-Compatible Config Wizard](https://github.com/vivian254338489/continue-openai-compatible-config-wizard) |
| Prepare Cursor-style provider setup notes | [Cursor OpenAI-Compatible Config Wizard](https://github.com/vivian254338489/cursor-openai-compatible-config-wizard) |
| Prepare Claude Desktop MCP endpoint config | [Claude Desktop MCP OpenAI-Compatible Bridge Kit](https://github.com/vivian254338489/claude-desktop-mcp-openai-compatible-bridge-kit) |
| Prepare MCP directory submission materials | [MCP Server Directory Submission Kit](https://github.com/vivian254338489/mcp-server-directory-submission-kit) |
| Test embeddings and RAG setup | [OpenAI-Compatible Embeddings Starter](https://github.com/vivian254338489/openai-compatible-embeddings-starter) |
| Test streaming and tool-call behavior | [OpenAI-Compatible Streaming Tool Calls](https://github.com/vivian254338489/openai-compatible-streaming-tool-calls) |
| Run a compatibility smoke-test matrix | [OpenAI-Compatible SDK Smoke Tests](https://github.com/vivian254338489/openai-compatible-sdk-smoke-tests) |
| Validate JSON mode and structured outputs | [OpenAI-Compatible JSON Mode Validator](https://github.com/vivian254338489/openai-compatible-json-mode-validator) |
| Cook JSON mode and schema-shaped outputs | [JSON Mode Structured Output Cookbook](https://github.com/vivian254338489/json-mode-structured-output-cookbook) |
| Add 429 retry, backoff, and fallback handling | [OpenAI-Compatible Rate Limit Retry Kit](https://github.com/vivian254338489/openai-compatible-rate-limit-retry-kit) |
| Connect Open WebUI | [TKEN Open WebUI Pipelines](https://github.com/vivian254338489/tken-openwebui-pipelines) |
| Configure VS Code / Continue | [TKEN VS Code Continue Config Pack](https://github.com/vivian254338489/tken-vscode-continue-config-pack) |
| Use DeepSeek/Qwen-style models from compatible clients | [DeepSeek/Qwen OpenAI-Compatible Guide](https://github.com/vivian254338489/deepseek-qwen-openai-compatible-guide) |

## Route Map

Use this list as a workflow map, not only a catalog:

| Workflow | Useful sequence |
| --- | --- |
| Validate a new `base_url` | API conformance kit -> endpoint tester -> SDK smoke tests -> JSON mode validator -> streaming/tool-call checks |
| Move an app from one provider route to several | Routing cookbook -> model route decider -> fallback proxy -> rate-limit retry kit |
| Set up a local operator or assistant | Agent skills pack -> agent memory kit -> MCP server -> Claude Desktop MCP bridge kit |
| Add a Web UI to a gateway | OpenWebUI TokenFlow starter -> Open WebUI setup wizard -> TKEN Open WebUI Pipelines -> provider pack -> one-click AI stack |
| Estimate before routing production traffic | Cost calculator -> pricing metadata kit -> LiteLLM pricing metadata diff -> model router bench lite -> health monitor -> status page template |
| Prepare a public or internal integration guide | Cursor/Continue/LiteLLM config wizard -> screenshots/QA docs -> publish checklist |

Each route should still be tested against the provider docs, terms, pricing, rate limits, and feature support you actually plan to use.

## Core Stack

- [TKEN One-Click AI Stack](https://github.com/vivian254338489/tken-one-click-ai-stack) - gateway, ChatGPT-style UI, Claude-style UI, Codex/OpenClaw kits, Docker/Railway/Render/Vercel support.
- [ChatGPT Web UI TKEN Starter](https://github.com/vivian254338489/chatgpt-web-ui-tken-starter) - standalone ChatGPT-style Web UI starter.
- [TKEN AI Gateway Starter](https://github.com/vivian254338489/tken-ai-gateway-starter) - minimal OpenAI-compatible gateway starter.
- [AI Model Fallback Proxy](https://github.com/vivian254338489/ai-model-fallback-proxy) - provider-neutral fallback proxy example.

## Routing And Migration

- [OpenAI-Compatible Routing Cookbook](https://github.com/vivian254338489/openai-compatible-routing-cookbook) - task routing, fallback, custom base URLs, SDK migration, security checks.
- [TKEN OpenAI-Compatible Examples](https://github.com/vivian254338489/tken-openai-compatible-examples) - Node.js, Python, and cURL examples.
- [OpenAI-Compatible API Conformance Kit](https://github.com/vivian254338489/openai-compatible-api-conformance-kit) - offline-first smoke-test matrix for custom `base_url`, model compatibility, streaming, JSON, embeddings, tools, and error behavior.
- [OpenAI-Compatible Embeddings Starter](https://github.com/vivian254338489/openai-compatible-embeddings-starter) - embeddings, vector search, and RAG starter examples.
- [OpenAI-Compatible Streaming Tool Calls](https://github.com/vivian254338489/openai-compatible-streaming-tool-calls) - streaming SSE, tool calls, JSON mode, and custom base URL checks.
- [OpenAI-Compatible SDK Smoke Tests](https://github.com/vivian254338489/openai-compatible-sdk-smoke-tests) - model list, chat, embeddings, and streaming smoke-test matrix.
- [OpenAI-Compatible Model Route Decider](https://github.com/vivian254338489/openai-compatible-model-route-decider) - offline route recommendations by task, budget preference, latency preference, JSON, vision, and tool-call needs.
- [Model Router Bench Lite](https://github.com/vivian254338489/model-router-bench-lite) - editable estimator for routing tradeoffs. Not a benchmark.
- [TKEN LLM Routing Recipes](https://github.com/vivian254338489/tken-llm-routing-recipes) - route simple work to low-cost routes and harder work to premium routes.
- [TKEN Free Model Fallback Recipes](https://github.com/vivian254338489/tken-free-model-fallback-recipes) - fallback and premium escalation patterns.

## Client And Tool Config

- [TKEN VS Code Continue Config Pack](https://github.com/vivian254338489/tken-vscode-continue-config-pack) - Continue/VS Code-style config examples.
- [Continue OpenAI-Compatible Config Wizard](https://github.com/vivian254338489/continue-openai-compatible-config-wizard) - offline Continue/VS Code-style config JSON, embeddings notes, env examples, and smoke tests.
- [Cursor OpenAI-Compatible Config Wizard](https://github.com/vivian254338489/cursor-openai-compatible-config-wizard) - offline Cursor-style provider setup notes, model aliases, env examples, and smoke tests.
- [Claude Desktop MCP OpenAI-Compatible Bridge Kit](https://github.com/vivian254338489/claude-desktop-mcp-openai-compatible-bridge-kit) - local MCP config snippets, endpoint readiness notes, smoke tests, and safety checklist.
- [Claude Desktop MCPB Starter](https://github.com/vivian254338489/claude-desktop-mcpb-starter) - validated MCPB extension starter with gateway notes, smoke-test commands, and release asset packaging.
- [Claude Desktop MCP Config Doctor](https://github.com/vivian254338489/claude-desktop-mcp-config-doctor) - offline validator and templates for `claude_desktop_config.json`, MCP command paths, env placeholders, and Windows/macOS setup notes.
- [MCP OpenAI Gateway Starter](https://github.com/vivian254338489/mcp-openai-gateway-starter) - MCP workspace for Claude Desktop, Cursor, Continue, compatible gateway profiles, and smoke-test plans.
- [MCP Server Directory Submission Kit](https://github.com/vivian254338489/mcp-server-directory-submission-kit) - transparent directory listing drafts, awesome-list PR bodies, disclosure wording, and submission checklists.
- [OpenAI-Compatible MCP Server](https://github.com/vivian254338489/openai-compatible-mcp-server) - MCP tools for endpoint info, model-list checks, chat probes, embeddings probes, and compatibility reports.
- [Agent Skills OpenAI-Compatible Pack](https://github.com/vivian254338489/agent-skills-openai-compatible-pack) - Codex skills, Claude skill notes, Cursor rules, Gemini instructions, and prompts for compatible `base_url` workflows.
- [OpenAI-Compatible Agent Memory Kit](https://github.com/vivian254338489/openai-compatible-agent-memory-kit) - local-first JSONL/Markdown memory for endpoint notes, model routes, prompt preferences, and context engineering.
- [Browser-Use OpenAI-Compatible Operator Kit](https://github.com/vivian254338489/browser-use-openai-compatible-operator-kit) - offline browser operator planning templates with safety checks for OpenAI-compatible agent workflows.
- [OpenAI-Compatible LangChain Starter](https://github.com/vivian254338489/openai-compatible-langchain-starter) - LangChain JS/Python custom OpenAI-compatible base URL examples.
- [TKEN Codex Client Kit](https://github.com/vivian254338489/tken-codex-client-kit) - Codex-style client config kit.
- [TKEN OpenClaw Client Kit](https://github.com/vivian254338489/tken-openclaw-client-kit) - OpenClaw-style provider config kit.
- [TKEN Cursor/Windsurf Base URL Guide](https://github.com/vivian254338489/tken-cursor-windsurf-base-url-guide) - custom API base URL examples.
- [TKEN AI SDK Provider Template](https://github.com/vivian254338489/tken-ai-sdk-provider-template) - JavaScript provider template.

## Open WebUI, LiteLLM, And Gateways

- [LiteLLM](https://docs.litellm.ai/) - proxy and SDK for using many LLM providers through OpenAI-style request and response formats, with routing, retry, fallback, and spend controls.
- [LiteLLM OpenAI-Compatible Config Wizard](https://github.com/vivian254338489/litellm-openai-compatible-config-wizard) - offline LiteLLM-style provider YAML, fallback notes, env examples, and smoke tests.
- [LiteLLM Fallback Rate Limit Lab](https://github.com/vivian254338489/litellm-fallback-rate-limit-lab) - local lab for 429, timeout, server error, retry, and fallback route behavior before production rollout.
- [LiteLLM Pricing Metadata Diff](https://github.com/vivian254338489/litellm-pricing-metadata-diff) - offline diff CLI for model price, context window, and capability metadata snapshots. Example values must be verified against current provider docs.
- [Open WebUI OpenAI-Compatible Connections](https://docs.openwebui.com/getting-started/quick-start/connect-a-provider/starting-with-openai-compatible) - setup guide for connecting Open WebUI to compatible cloud providers, local servers, and gateway URLs.
- [OpenWebUI TokenFlow Starter](https://github.com/vivian254338489/openwebui-tokenflow-starter) - Docker Compose starter, sanitized config generator, and smoke-test checklist for connecting Open WebUI to a unified compatible gateway.
- [Open WebUI Gateway Recipes](https://github.com/vivian254338489/open-webui-gateway-recipes) - provider-neutral Open WebUI recipes for compatible gateway base URLs, safe environment examples, and troubleshooting.
- [Vercel AI Gateway OpenAI-Compatible API](https://vercel.com/docs/ai-gateway/openai-compat) - OpenAI-compatible gateway endpoint for using existing OpenAI SDK clients with Vercel AI Gateway.
- [Helicone AI Gateway](https://docs.helicone.ai/gateway/overview) - OpenAI-compatible gateway with observability, routing, and fallback workflows.
- [LangChain ChatOpenAI custom base URL](https://docs.langchain.com/oss/javascript/integrations/chat/openai) - JavaScript ChatOpenAI configuration for compatible providers and proxies that use custom API base URLs.
- [vLLM OpenAI-Compatible Server](https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html) - local or hosted model server exposing OpenAI-compatible completions and chat APIs.
- [TKEN Open WebUI Pipelines](https://github.com/vivian254338489/tken-openwebui-pipelines) - Open WebUI Pipelines connector.
- [OpenWebUI OpenAI-Compatible Setup Wizard](https://github.com/vivian254338489/openwebui-openai-compatible-setup-wizard) - offline provider setup checklist, `.env` examples, and smoke tests for Open WebUI users.
- [TKEN Open WebUI Provider Pack](https://github.com/vivian254338489/tken-openwebui-provider-pack) - Open WebUI-style provider settings.
- [TKEN LiteLLM Router Config Pack](https://github.com/vivian254338489/tken-litellm-router-config-pack) - LiteLLM-style low-cost default and premium fallback configs.
- [TKEN Cloudflare Worker AI Proxy](https://github.com/vivian254338489/tken-cloudflare-worker-ai-proxy) - edge proxy template.
- [TKEN FastAPI AI Gateway Starter](https://github.com/vivian254338489/tken-fastapi-ai-gateway-starter) - FastAPI compatible gateway starter.
- [TKEN Express AI Gateway Starter](https://github.com/vivian254338489/tken-express-ai-gateway-starter) - Express gateway starter.

## Cost, Monitoring, And Troubleshooting

- [AI API Cost Calculator](https://github.com/vivian254338489/tken-ai-api-cost-calculator) - static calculator, live demo included.
- [AI Gateway Pricing Metadata Kit](https://github.com/vivian254338489/ai-gateway-pricing-metadata-kit) - editable model metadata, example pricing table, and budget-routing notes for compatible gateways.
- [OpenAI-Compatible Endpoint Tester](https://github.com/vivian254338489/openai-compatible-endpoint-tester) - CLI checks for `base_url`, `/v1/models`, and `/v1/chat/completions`.
- [OpenAI-Compatible JSON Mode Validator](https://github.com/vivian254338489/openai-compatible-json-mode-validator) - JSON mode, structured output, and schema validation compatibility checks.
- [JSON Mode Structured Output Cookbook](https://github.com/vivian254338489/json-mode-structured-output-cookbook) - provider-neutral recipes for valid JSON parsing, schema validation, and narrow repair prompts across compatible gateways.
- [OpenAI-Compatible Rate Limit Retry Kit](https://github.com/vivian254338489/openai-compatible-rate-limit-retry-kit) - 429, timeout, backoff, jitter, and fallback `base_url` examples.
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

- [OpenAI-Compatible Agent Tooling Landing](https://github.com/vivian254338489/openai-compatible-agent-tooling-landing) - GitHub Pages landing page for agent, MCP, Cursor, Continue, Open WebUI, LiteLLM, and TKEN evaluation paths.
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

Before suggesting a resource, read [CONTRIBUTING.md](CONTRIBUTING.md) and use the issue templates for resource suggestions or link/claim fixes.

See [CURATION.md](CURATION.md) for inclusion standards, TKEN affiliation handling, review checks, removal rules, and public movement gates.

## Disclosure

This list is maintained by TKEN-related tooling contributors. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, OpenClaw, Railway, Vercel, Docker, Reddit, YouTube, TikTok, DeepSeek, Qwen, Open WebUI, Continue, or LiteLLM.
