import fs from "node:fs";
import path from "node:path";

const required = [
  "README.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "PROMOTION.md",
  "CURATION.md",
  "docs/utm-links.md",
  "docs/publish-checklist.md",
  ".github/ISSUE_TEMPLATE/resource-suggestion.md",
  ".github/ISSUE_TEMPLATE/link-or-claim-fix.md"
];
const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const readme = fs.readFileSync("README.md", "utf8");
for (const text of [
  "Awesome OpenAI-Compatible",
  "tken-one-click-ai-stack",
  "Disclosure",
  "openai-compatible-mcp-server",
  "agent-skills-openai-compatible-pack",
  "openai-compatible-agent-memory-kit",
  "browser-use-openai-compatible-operator-kit",
  "openai-compatible-json-mode-validator",
  "openai-compatible-rate-limit-retry-kit",
  "https://docs.litellm.ai/",
  "https://docs.openwebui.com/getting-started/quick-start/connect-a-provider/starting-with-openai-compatible",
  "https://vercel.com/docs/ai-gateway/openai-compat",
  "https://docs.helicone.ai/gateway/overview",
  "https://docs.langchain.com/oss/javascript/integrations/chat/openai",
  "https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html"
]) {
  if (!readme.includes(text)) {
    console.error(`README missing expected text: ${text}`);
    process.exit(1);
  }
}

const curation = fs.readFileSync("CURATION.md", "utf8");
for (const text of ["Inclusion Standard", "TKEN Affiliation", "Removal Rules"]) {
  if (!curation.includes(text)) {
    console.error(`CURATION.md missing expected text: ${text}`);
    process.exit(1);
  }
}

const contributing = fs.readFileSync("CONTRIBUTING.md", "utf8");
for (const text of ["Good Additions", "TKEN-Related Entries", "Local Checks"]) {
  if (!contributing.includes(text)) {
    console.error(`CONTRIBUTING.md missing expected text: ${text}`);
    process.exit(1);
  }
}

const oldDomainPattern = /https:\/\/api\.tken\.ai|https:\/\/api\.tken\.shop|https:\/\/tken\.shop|http:\/\/www\.tken\.shop/g;
const secretPattern = /sk-[A-Za-z0-9_-]{20,}/g;
const riskyClaimPattern = /official OpenAI reseller|unlimited GPT|guaranteed cheapest/gi;

for (const file of required) {
  const body = fs.readFileSync(file, "utf8");
  const findings = [
    ["old-domain", body.match(oldDomainPattern)],
    ["secret-pattern", body.match(secretPattern)],
    ["risky-claim", body.match(riskyClaimPattern)]
  ].filter(([, matches]) => matches?.length);

  if (findings.length) {
    for (const [kind, matches] of findings) {
      console.error(`${path.normalize(file)} contains ${kind}: ${[...new Set(matches)].join(", ")}`);
    }
    process.exit(1);
  }
}

console.log(JSON.stringify({ ok: true, checked: required.length }, null, 2));
