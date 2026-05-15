# AI Omic Pricing Site

Static website for AI Omic's Malaysia SME automation service pricing, presales flow, aftercare boundaries, and operating templates.

## Pages

- `index.html` - pricing, service journey, quote checklist, support scope, and SME examples.
- `blog.html` - public blog page for OCR, workflow friction, and AI workflow articles.
- `intake-form.html` - customer requirement intake with copyable plain-text summary.
- `playbook.html` - WhatsApp reply, audit offer, quotation, handover, support, and sign-off templates.

## Local Preview

```powershell
python -m http.server 4173
```

Open `http://localhost:4173/index.html`.

## Deployment

This is a static site. Deploy the folder contents directly to Zeabur or any static hosting service.

## Xiao O Assistant

- Frontend widget: `assets/app.js`
- n8n workflow backup: `docs/n8n-xiao-o-workflow.import.json`
- Workflow notes: `docs/n8n-xiao-o-workflow.md`
- Public webhook: `https://n8n-kktan.zeabur.app/webhook/ai-omic-xiao-o`

The webhook is public because the static website calls it directly. Keep n8n API keys, DeepSeek keys, and other credentials inside n8n or Zeabur environment settings only.

## Sales Defaults

- Main audience: Malaysia local SME.
- Presales: free 15-30 minute fit check, paid Workflow Audit for unclear scope.
- Payment: 50% deposit, 50% before handover.
- Aftercare: 14-day WhatsApp support, then optional monthly maintenance.
- Third-party platform costs are paid directly by the client.
