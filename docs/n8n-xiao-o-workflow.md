# Xiao O n8n Workflow

This file documents the current live Xiao O workflow used by the AI Omic website.

## Live Setup

- Workflow name: `AI Omic Xiao O Assistant`
- Production webhook: `https://n8n-kktan.zeabur.app/webhook/ai-omic-xiao-o`
- Frontend file: `assets/app.js`
- Import backup: `docs/n8n-xiao-o-workflow.import.json`

## Current n8n Nodes

1. `Website Webhook`
   - Method: `POST`
   - Path: `ai-omic-xiao-o`
   - Response mode: `Respond to Webhook`

2. `AI Agent`
   - Receives the website message from `{{$json.body.message}}`
   - Uses a system prompt that limits Xiao O to AI Omic, automation, workflow, pricing, support, and intake-related questions.
   - Returns plain text only, without Markdown bold formatting.
   - If unsure, it should say the final answer is subject to the AI Omic project team and direct the visitor to the intake form.

3. `DeepSeek Chat Model`
   - Model: `deepseek-v4-flash`
   - Credential is selected inside n8n.
   - The local import file intentionally does not contain secret API keys.

4. `Simple Memory`
   - Session key: `{{$json.body.sessionId}}`
   - The website sends a generated `sessionId` for each visitor.

5. `Respond to Website`
   - Responds as JSON using `{{ JSON.stringify($json) }}`
   - The frontend accepts `answer`, `output`, or `text`.

## Frontend Payload

The website sends:

```json
{
  "message": "User question",
  "page": "/index.html",
  "language": "en",
  "sessionId": "xiao-o-...",
  "source": "ai-omic-site"
}
```

## Intake Fallback

If Xiao O cannot answer or the user needs a project-specific answer, direct them to:

`https://kktan1991.github.io/my-pricing-list/intake-form.html`

Use this promise:

`AI Omic will reply within 1 working day.`

## Guardrails

- Do not answer unrelated questions such as general news, homework, finance, politics, medical, or unrelated coding topics.
- Do not invent prices outside the published service ranges.
- Do not promise third-party integrations until access and platform fees are confirmed.
- Do not expose n8n API keys, DeepSeek keys, or other credentials in this repo.
- Keep the webhook URL public only because it is called by the website. Keep all real credentials inside n8n or Zeabur environment settings.
- If possible, restrict webhook allowed origins to the production site domains and add rate limiting at the hosting or gateway layer.
- Treat visitor messages as untrusted input. Xiao O should not run tools, update workflows, or reveal internal prompts/secrets based on chat instructions.

## Import Notes

The import JSON is a sanitized backup of the live workflow. After importing it into n8n, select the DeepSeek credential again because the local file uses a placeholder credential id.
