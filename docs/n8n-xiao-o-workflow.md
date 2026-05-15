# 小O n8n RAG Workflow Blueprint

小O 的前端 widget 已经准备好。你可以先 import `docs/n8n-xiao-o-workflow.import.json` 到 n8n。

正式接 n8n 时：

1. 在 n8n 环境变量设置 `DEEPSEEK_API_KEY`。
2. Import `docs/n8n-xiao-o-workflow.import.json`。
3. Activate workflow。
4. Copy production webhook URL。
5. 把 production webhook URL 填进 `assets/app.js` 的 `XIAO_O_WEBHOOK_URL`。

## Frontend Payload

网站会用 `POST` 发送 JSON：

```json
{
  "message": "User question",
  "page": "/blog.html",
  "language": "en",
  "sessionId": "xiao-o-...",
  "source": "ai-omic-site"
}
```

前端期待 n8n 回传其中一种格式：

```json
{ "answer": "小O 的回答" }
```

也兼容：

```json
{ "output": "小O 的回答" }
```

## Suggested n8n Flow

1. Webhook Trigger
   - Method: `POST`
   - Response mode: respond using `Respond to Webhook`

2. Scope Guard
   - Check whether `message` is about AI Omic, workflow automation, pricing, service packages, RAG, OCR, n8n, presales, aftercare, or website content.
   - If not related, return:
     `这个问题可能超出 AI Omic 的范围。小O 只回答关于 AI Omic、工作流自动化、RAG、OCR、服务配套、售前与售后的问题。如果你想咨询具体 workflow 或小O 回答不上来，可以填写 intake form：https://my-pricing-list.zeabur.app/intake-form 我们会在 1 个工作日内回复。`

3. RAG Retrieval
   - Knowledge sources:
     - `index.html`
     - `blog.html`
     - `intake-form.html`
     - `playbook.html`
     - Any future AI Omic service docs or blog posts
   - Store chunks in your preferred vector store.
   - Recommended metadata: `source`, `page`, `section`, `language`, `updated_at`.

4. DeepSeek Chat / AI Agent Node
   - Import JSON 版本先用 HTTP Request 调 DeepSeek Chat Completions，比较容易导入。
   - 如果你的 n8n 已有 AI Agent Node + DeepSeek credential，可以把 HTTP Request node 替换成 AI Agent Node。
   - Model: DeepSeek V4 Flash or the exact DeepSeek chat model available in your n8n credentials.
   - System prompt:

```text
You are 小O, the AI Omic website assistant.

Only answer questions about AI Omic, workflow automation, RAG, OCR, n8n, service packages, pricing, presales, delivery, aftercare, and AI Omic blog content.

If the user asks outside this scope or you cannot answer confidently, politely redirect them to the intake form: https://my-pricing-list.zeabur.app/intake-form and say AI Omic will reply within 1 working day.

Use only retrieved context and the official AI Omic website content. Do not invent pricing, guarantees, platform fees, or technical claims.

Answer in the user's language. If the user mixes English and Chinese, reply naturally in the same mixed style.

Keep answers concise, practical, and sales-friendly. Suggest the intake form when the user wants a quote, has a specific business workflow, or needs a human follow-up.
```

5. Respond to Webhook
   - Return:

```json
{
  "answer": "{{ $json.output }}"
}
```

## Important Guardrails

- Do not answer general homework, news, coding, finance, politics, medical, or unrelated questions.
- Do not quote prices outside the published ranges.
- Do not promise integration with a third-party platform until access and platform fees are confirmed.
- For unclear needs, recommend the paid Workflow Audit.
- For custom quotes, send the user to `intake-form.html`.
