const translations = {
  zh: {
    navPackages: "配套",
    navSales: "售前流程",
    navSupport: "售后支持",
    navPlaybook: "模板",
    navCta: "开始填写",
    heroMeta: "2026 年 5 月起有效 · 马来西亚 · SME 友好",
    heroTitle: "把重复手工工作，变成清楚可交付的自动化流程。",
    heroLede:
      "先用免费初诊判断是否适合，再用付费 Workflow Audit 处理不清楚的范围，最后按明确交付、验收和月费支持来执行。",
    heroPrimary: "填写需求",
    heroSecondary: "查看流程",
    journey1Title: "需求表单",
    journey1Text: "客户说明痛点、现有工具、工作量、预算和时间线。",
    journey2Title: "免费初诊",
    journey2Text: "15-30 分钟确认自动化是否真的能省时间、减少漏单或漏回复。",
    journey3Title: "审计或报价",
    journey3Text: "范围不清楚先做 RM299-RM499 审计；范围清楚就直接报价。",
    journey4Title: "交付与支持",
    journey4Text: "Build、测试、handover、14 天 WhatsApp support，然后可转月费维护。",
    packagesLabel: "服务配套",
    packagesTitle: "四个入口：从诊断到 AI workflow 支持。",
    packagesIntro: "每个配套都围绕结果：省 admin 时间、减少漏回复、减少漏单，并让老板看得到流程状态。",
    auditTag: "需求不清楚",
    auditTitle: "Workflow Audit",
    auditDesc: "付费诊断，交付简单流程图、推荐方案、预算范围和实施计划。",
    basicTag: "Starter",
    basicTitle: "Basic Automation",
    basicSupport: "月费支持 RM 300-500",
    basicDesc: "Excel、Google Sheets、表单、admin tracking、通知和简单 reporting。",
    flowTag: "主推方案",
    flowTitle: "AI Automation Flow",
    flowSupport: "月费支持 RM 500-800",
    flowDesc: "n8n workflow、AI 分类、AI 回复、文件提取、routing、提醒和审批流程。",
    botTag: "WhatsApp / Web / Telegram",
    botTitle: "AI Chatbot",
    botSupport: "月费支持 RM 600-1,000",
    botDesc: "客服 chatbot、FAQ bot、文件问答、lead capture 和人工交接。",
    salesLabel: "售前流程",
    salesTitle: "Lead 如何变成有范围的项目。",
    salesIntro: "第一次沟通不是免费帮客户设计完整方案，而是判断 fit；范围不清楚就进入付费审计。",
    salesStep1Title: "1 个工作日内回复",
    salesStep1Text: "确认收到表单，只补问判断 fit 需要的缺失资料。",
    salesStep2Title: "15-30 分钟免费初诊",
    salesStep2Text: "确认痛点、工具、工作量、预算和时间线。",
    salesStep3Title: "不清楚做审计，清楚就报价",
    salesStep3Text: "Audit 交付流程图和建议；清楚范围直接给报价和付款条款。",
    salesStep4Title: "50% deposit，50% handover 前付清",
    salesStep4Text: "每份报价都写清 scope、deliverables、exclusions、revision、timeline 和平台费用。",
    quoteLabel: "报价清单",
    quoteTitle: "每份 proposal 都要让范围清楚可见。",
    includedTitle: "价格包含",
    included1: "Flow design 和 build",
    included2: "测试和 bug fixing",
    included3: "AI prompt tuning",
    included4: "基础培训和 handover doc",
    included5: "交付后 1 次 revision",
    included6: "14 天 WhatsApp support",
    excludedTitle: "不包含",
    excluded1: "n8n Cloud 或 hosting 费用",
    excluded2: "OpenAI / Claude API 费用",
    excluded3: "WhatsApp Business API 费用",
    excluded4: "Google Workspace、domain 和订阅",
    excluded5: "超出范围的额外 revision",
    excluded6: "sign-off 后的新功能",
    quoteMustTitle: "报价必须写明",
    quoteMust1: "项目范围和预期结果",
    quoteMust2: "交付物和 handover 项目",
    quoteMust3: "revision 限制和 support window",
    quoteMust4: "预计交付时间",
    quoteMust5: "50% deposit + 50% handover 前付清",
    quoteMust6: "第三方费用由客户直接支付",
    supportLabel: "交付与售后",
    supportTitle: "售后好做，是因为边界先讲清楚。",
    supportIntro: "前 14 天用来稳定已交付流程；之后的月费支持专注维护、监控、小修改和轻量 prompt tuning。",
    supportCta: "打开模板",
    deliveryTitle: "交付流程",
    delivery1: "Kickoff",
    delivery2: "账号和 access checklist",
    delivery3: "确认 workflow",
    delivery4: "Build 和内部测试",
    delivery5: "客户验收测试",
    delivery6: "培训和 handover doc",
    delivery7: "Sign-off 和 support 开始日期",
    examplesLabel: "SME 场景",
    examplesTitle: "销售沟通时可以用这些例子。",
    scenario1Title: "餐饮 / 零售",
    scenario1Text: "WhatsApp 询问自动记录到 Google Sheets，包含状态、负责人和 follow-up reminder。",
    scenario2Title: "电商",
    scenario2Text: "订单、客服讯息、库存提醒和发货更新进入同一条 workflow。",
    scenario3Title: "专业服务业",
    scenario3Text: "文件整理、客户 follow-up reminder，并用 chatbot 回答常见问题。",
    finalTitle: "准备把手工流程变成可运行的 workflow？",
    finalText: "告诉我们什么工作最花时间。我们会在 1 个工作日内通过 WhatsApp 回复。",
    finalCta: "从需求表单开始",
    footerText: "平台费用由客户直接支付。账号代管 add-on：RM100/hr 或另定固定月费。",
    formMeta: "少于 3 分钟",
    formTitle: "Workflow Automation 需求表单",
    formIntro: "告诉我们你现在的手工流程，我们会判断适合 audit、automation 或 chatbot support。",
    responseTitle: "回复承诺",
    responseText: "我们会 review 你的资料，并在 1 个工作日内通过 WhatsApp 回复。",
    clientInfo: "客户资料",
    fullName: "姓名 *",
    company: "公司名称",
    phone: "WhatsApp / 电话 *",
    email: "Email",
    industry: "行业 / 生意类型",
    manualWork: "手工工作和现有工具",
    tooMuchTime: "目前什么工作最花时间？",
    toolsLegend: "你现在使用哪些平台 / 工具？",
    volume: "每天 / 每周大概数量",
    desiredOutcome: "想要的结果",
    mainProblem: "你最想解决的问题是什么？",
    successLooks: "对你来说，怎样算成功？",
    timeline: "时间线",
    serviceFit: "服务适配",
    serviceDirection: "哪一个服务方向比较适合？*",
    supportType: "偏好的支持方式",
    budgetNotes: "预算和补充资料",
    budget: "大概预算",
    notes: "还有什么想让我们知道？",
    costNote: "平台费用由客户直接支付。账号代管 add-on 是 RM100/hr 或另定固定月费。",
    submitForm: "提交需求表单",
    copyPlain: "复制成文字",
    playbookMeta: "内部执行模板",
    playbookTitle: "售前与售后 Playbook",
    playbookIntro: "用这些模板统一 WhatsApp 回复、报价、handover 和售后边界。",
    playbookRuleTitle: "默认规则",
    playbookRuleText: "免费咨询只判断 fit；详细方案设计放在付费 Workflow Audit 里面。",
    waTitle: "WhatsApp 第一回复",
    auditTemplateTitle: "Workflow Audit 话术",
    quoteTemplateTitle: "报价结构",
    handoverTitle: "Handover checklist",
    supportTemplateTitle: "月费支持范围",
    signoffTitle: "Sign-off message",
    copyTemplate: "复制模板"
  }
};

const languageToggle = document.querySelector("[data-lang-toggle]");
const savedLang = localStorage.getItem("siteLang") || "en";

function applyLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[lang]?.[key];
    if (value) node.textContent = value;
  });
  if (languageToggle) languageToggle.textContent = lang === "zh" ? "EN" : "中文";
  localStorage.setItem("siteLang", lang);
}

applyLanguage(savedLang);

languageToggle?.addEventListener("click", () => {
  const nextLang = localStorage.getItem("siteLang") === "zh" ? "en" : "zh";
  applyLanguage(nextLang);
});

function buildSummary(form) {
  const data = new FormData(form);
  const lines = ["Workflow Automation Intake", ""];
  const names = [...new Set([...data.keys()])];
  names.forEach((name) => {
    const values = data.getAll(name).filter(Boolean);
    if (values.length) lines.push(`${name}: ${values.join(", ")}`);
  });
  return lines.join("\n");
}

const intakeForm = document.querySelector("[data-intake-form]");
const summaryOutput = document.querySelector("[data-summary]");

function showSummary(text, title = "Form submitted") {
  if (!summaryOutput) return;
  summaryOutput.hidden = false;
  summaryOutput.textContent = `${title}\n\n${text}`;
  summaryOutput.scrollIntoView({ behavior: "smooth", block: "center" });
}

intakeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = buildSummary(intakeForm);
  showSummary(text, "Form submitted. Please send this summary via WhatsApp or Telegram.");
});

document.querySelector("[data-copy-summary]")?.addEventListener("click", async () => {
  if (!intakeForm) return;
  const text = buildSummary(intakeForm);
  await navigator.clipboard.writeText(text);
  showSummary(text, "Copied to clipboard");
});

document.querySelectorAll("[data-copy-template]").forEach((button) => {
  button.addEventListener("click", async () => {
    const block = button.closest(".template-card")?.querySelector("[data-copy-block]");
    if (!block) return;
    await navigator.clipboard.writeText(block.textContent.trim());
    const original = button.textContent;
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = original;
    }, 1200);
  });
});
