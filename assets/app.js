const translations = {
  zh: {
    navPackages: "配套",
    navSales: "售前流程",
    navSupport: "售后支持",
    navBlog: "文章",
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
const translatableNodes = document.querySelectorAll("[data-i18n]");
const defaultTexts = new Map(
  Array.from(translatableNodes, (node) => [node, node.textContent])
);

function applyLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = lang === "en" ? defaultTexts.get(node) : translations[lang]?.[key];
    if (value !== undefined) node.textContent = value;
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

const blogImages = Array.from(
  document.querySelectorAll(".blog-card img, .image-gallery img, .post-media-stack img")
);

if (blogImages.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Image preview");
  lightbox.innerHTML = `
    <div class="lightbox-toolbar">
      <button class="lightbox-button" type="button" data-lightbox-prev aria-label="Previous image">Prev</button>
      <button class="lightbox-button" type="button" data-lightbox-zoom-out aria-label="Zoom out">-</button>
      <button class="lightbox-button" type="button" data-lightbox-reset aria-label="Reset zoom">100%</button>
      <button class="lightbox-button" type="button" data-lightbox-zoom-in aria-label="Zoom in">+</button>
      <button class="lightbox-button" type="button" data-lightbox-next aria-label="Next image">Next</button>
      <button class="lightbox-button" type="button" data-lightbox-close aria-label="Close image preview">Close</button>
    </div>
    <div class="lightbox-stage" data-lightbox-stage>
      <img class="lightbox-image" alt="" draggable="false" />
    </div>
    <div class="lightbox-caption" data-lightbox-caption></div>
  `;
  document.body.appendChild(lightbox);

  const stage = lightbox.querySelector("[data-lightbox-stage]");
  const preview = lightbox.querySelector(".lightbox-image");
  const caption = lightbox.querySelector("[data-lightbox-caption]");
  const resetButton = lightbox.querySelector("[data-lightbox-reset]");
  let activeIndex = 0;
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let dragStart = null;

  function updateTransform() {
    preview.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    resetButton.textContent = `${Math.round(scale * 100)}%`;
  }

  function setZoom(nextScale) {
    scale = Math.min(4, Math.max(0.5, nextScale));
    if (scale === 1) {
      translateX = 0;
      translateY = 0;
    }
    updateTransform();
  }

  function openLightbox(index) {
    activeIndex = index;
    const source = blogImages[activeIndex];
    preview.src = source.currentSrc || source.src;
    preview.alt = source.alt || "Blog image preview";
    caption.textContent = `${activeIndex + 1} / ${blogImages.length}${source.alt ? ` - ${source.alt}` : ""}`;
    scale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    preview.removeAttribute("src");
  }

  function moveImage(direction) {
    activeIndex = (activeIndex + direction + blogImages.length) % blogImages.length;
    openLightbox(activeIndex);
  }

  blogImages.forEach((image, index) => {
    image.setAttribute("tabindex", "0");
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `Open image preview: ${image.alt || `image ${index + 1}`}`);
    image.addEventListener("click", () => openLightbox(index));
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index);
      }
    });
  });

  lightbox.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
  lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", () => moveImage(-1));
  lightbox.querySelector("[data-lightbox-next]").addEventListener("click", () => moveImage(1));
  lightbox.querySelector("[data-lightbox-zoom-in]").addEventListener("click", () => setZoom(scale + 0.25));
  lightbox.querySelector("[data-lightbox-zoom-out]").addEventListener("click", () => setZoom(scale - 0.25));
  resetButton.addEventListener("click", () => setZoom(1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === stage) closeLightbox();
  });

  stage.addEventListener("wheel", (event) => {
    event.preventDefault();
    setZoom(scale + (event.deltaY < 0 ? 0.15 : -0.15));
  });

  preview.addEventListener("pointerdown", (event) => {
    if (scale <= 1) return;
    preview.setPointerCapture(event.pointerId);
    preview.classList.add("is-dragging");
    dragStart = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      translateX,
      translateY
    };
  });

  preview.addEventListener("pointermove", (event) => {
    if (!dragStart || dragStart.pointerId !== event.pointerId) return;
    translateX = dragStart.translateX + event.clientX - dragStart.x;
    translateY = dragStart.translateY + event.clientY - dragStart.y;
    updateTransform();
  });

  preview.addEventListener("pointerup", (event) => {
    if (dragStart?.pointerId === event.pointerId) {
      dragStart = null;
      preview.classList.remove("is-dragging");
    }
  });

  window.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveImage(-1);
    if (event.key === "ArrowRight") moveImage(1);
    if (event.key === "+" || event.key === "=") setZoom(scale + 0.25);
    if (event.key === "-") setZoom(scale - 0.25);
  });
}

const XIAO_O_WEBHOOK_URL = "https://n8n-kktan.zeabur.app/webhook/ai-omic-xiao-o";
const INTAKE_FORM_URL = "https://my-pricing-list.zeabur.app/intake-form";
const AI_DISCLAIMERS = {
  en: "Note: The above is an AI assistant response for reference only. The final technical solution and quotation are subject to official confirmation by the AI Omic project team.",
  zh: "温馨提示：以上为 AI 助理回答，仅供参考。具体技术方案与最终报价请以 AI Omic 项目团队的官方确认内容为准。"
};

function getXiaoOLanguage(text) {
  const hasChinese = /[\u3400-\u9fff]/.test(text);
  const hasEnglish = /[A-Za-z]/.test(text);
  if (hasChinese && hasEnglish) return "mixed";
  if (hasChinese) return "zh";
  return "en";
}

function getXiaoOPageLanguage() {
  return document.documentElement.lang?.startsWith("zh") ? "zh" : "en";
}

function getXiaoODisclaimer(language) {
  if (language === "zh") return AI_DISCLAIMERS.zh;
  if (language === "mixed") return `${AI_DISCLAIMERS.en}\n${AI_DISCLAIMERS.zh}`;
  return AI_DISCLAIMERS.en;
}

function getXiaoOFallbackAnswer(language) {
  if (language === "zh") {
    return `小O 目前离线，请直接填写需求表单，我们会在 1 个工作日内回复：\n\n${INTAKE_FORM_URL}\n\n${AI_DISCLAIMERS.zh}`;
  }

  if (language === "mixed") {
    return `Xiao O is currently offline. Please fill in the intake form directly:\n小O 目前离线，请直接填写需求表单，我们会在 1 个工作日内回复：\n\n${INTAKE_FORM_URL}\n\n${AI_DISCLAIMERS.en}\n${AI_DISCLAIMERS.zh}`;
  }

  return `Xiao O is currently offline. Please fill in the intake form directly:\n\n${INTAKE_FORM_URL}\n\n${AI_DISCLAIMERS.en}`;
}
const XIAO_O_SCOPE_KEYWORDS = [
  "ai omic",
  "小o",
  "小O",
  "automation",
  "workflow",
  "rag",
  "n8n",
  "audit",
  "chatbot",
  "service",
  "services",
  "provide",
  "provided",
  "offer",
  "offering",
  "package",
  "packages",
  "plan",
  "plans",
  "pricing",
  "price",
  "cost",
  "fee",
  "quote",
  "quotation",
  "how much",
  "support",
  "aftercare",
  "presales",
  "whatsapp",
  "google sheets",
  "ocr",
  "deepseek",
  "自动化",
  "工作流",
  "流程",
  "价格",
  "报价",
  "费用",
  "收费",
  "多少钱",
  "几多钱",
  "预算",
  "售前",
  "售后",
  "配套",
  "服务",
  "提供",
  "方案",
  "客服",
  "表单",
  "审计",
  "发票",
  "单据",
  "你是谁",
  "who are you"
];

const XIAO_O_FALLBACKS = [
  {
    test: /(services?|provide|provided|offer|offering|packages?|plans?|服务|提供|方案|有什么服务|你们做什么)/i,
    answer:
      `AI Omic 主要提供 4 类服务：\n\nWorkflow Audit：RM299-RM499，适合需求还不清楚、需要先梳理流程的客户。\nBasic Automation：RM500-RM1,200，适合 Excel、Google Sheets、表单、admin tracking 和通知流程。\nAI Automation Flow：RM1,500-RM3,500，适合 n8n、AI 分类、文件提取、routing、提醒和审批流程。\nAI Chatbot：RM2,000-RM4,500，适合 WhatsApp、Web、Telegram、FAQ、文件问答和 lead capture。\n\n如果你想确认哪一个适合你的 workflow，可以填写 intake form：${INTAKE_FORM_URL}\n我们会在 1 个工作日内回复。`
  },
  {
    test: /(price|pricing|cost|fee|quote|quotation|how much|价格|报价|配套|多少钱|几多钱|收费|费用|预算)/i,
    answer:
      `如果你问“多少钱”，小O 可以先给你一个范围：\n\nWorkflow Audit：RM299-RM499\nBasic Automation：RM500-RM1,200\nAI Automation Flow：RM1,500-RM3,500\nAI Chatbot：RM2,000-RM4,500\n\n如果只是维护和小修改，月费一般从 RM300 起。真正报价要看你的 workflow 有多少步骤、接多少系统、有没有 AI/RAG/OCR、以及要不要 WhatsApp 或 API。你可以先填写 intake form：${INTAKE_FORM_URL}\n我们会在 1 个工作日内回复。`
  },
  {
    test: /(audit|审计|不清楚|scope|范围)/i,
    answer:
      "如果需求还不清楚，小O 会建议先做 Workflow Audit。Audit 会交付简单流程图、推荐方案、预算范围和实施计划，避免一开始就做错 scope。"
  },
  {
    test: /(support|aftercare|售后|维护|月费)/i,
    answer:
      "AI Omic 项目包含 14 天 WhatsApp support。之后可转月费维护：Basic RM300-RM500/月、AI Flow RM500-RM800/月、Chatbot RM600-RM1,000/月。月费主要包含 bug fixing、monitoring、小修改和轻量 prompt tuning。"
  },
  {
    test: /(chatbot|客服|whatsapp|telegram|web)/i,
    answer:
      "AI Omic 可以做 WhatsApp、Web 或 Telegram AI Chatbot，适合 FAQ、文件问答、lead capture 和人工交接。第三方平台费用由客户直接支付。"
  },
  {
    test: /(ocr|发票|收据|单据|document|文件)/i,
    answer:
      "AI Omic 的 OCR 自动化方向适合发票、收据、财务报表和知识归档。典型流程是文件收集 → OCR 识别 → AI 总结/分类 → 数据处理 → 归档或人工 review。"
  },
  {
    test: /(who are you|你是谁|小o|小O)/i,
    answer:
      "我是小O，AI Omic 的网站助理。我只回答 AI Omic、工作流自动化、RAG、OCR、售前售后和服务配套相关的问题。"
  }
];

function isXiaoOInScope(message) {
  const normalized = message.toLowerCase();
  return XIAO_O_SCOPE_KEYWORDS.some((keyword) => normalized.includes(keyword.toLowerCase()));
}

function getXiaoOFallback(message) {
  if (!isXiaoOInScope(message)) {
    return `这个问题可能超出 AI Omic 的范围。小O 只回答关于 AI Omic、工作流自动化、RAG、OCR、服务配套、售前与售后的问题。\n\n如果你想咨询具体 workflow 或小O 回答不上来，可以填写 intake form：${INTAKE_FORM_URL}\n我们会在 1 个工作日内回复。`;
  }

  const match = XIAO_O_FALLBACKS.find((item) => item.test.test(message));
  if (match) return match.answer;

  return `小O 可以帮你了解 AI Omic 的 Workflow Audit、Basic Automation、AI Automation Flow、AI Chatbot、售前流程和售后支持。\n\n如果你想咨询具体 workflow 或小O 回答不上来，可以填写 intake form：${INTAKE_FORM_URL}\n我们会在 1 个工作日内回复。`;
}

function getXiaoOSessionId() {
  const key = "xiaoOSessionId";
  let sessionId = localStorage.getItem(key);
  if (!sessionId) {
    sessionId = `xiao-o-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    localStorage.setItem(key, sessionId);
  }
  return sessionId;
}

function createXiaoOAssistant() {
  const assistant = document.createElement("section");
  assistant.className = "xiao-o";
  assistant.setAttribute("aria-label", "小O AI Omic assistant");
  assistant.innerHTML = `
    <button class="xiao-o-launcher" type="button" aria-expanded="false" aria-controls="xiao-o-panel">
      <span class="xiao-o-bot" aria-hidden="true">
        <span class="xiao-o-antenna"></span>
        <span class="xiao-o-face">
          <span class="xiao-o-eye"></span>
          <span class="xiao-o-eye"></span>
          <span class="xiao-o-smile"></span>
          <span class="xiao-o-scan"></span>
        </span>
        <span class="xiao-o-arm xiao-o-arm-left"></span>
        <span class="xiao-o-arm xiao-o-arm-right"></span>
        <span class="xiao-o-body">
          <span class="xiao-o-core"></span>
        </span>
      </span>
      <span class="sr-only">Open 小O / Xiao O</span>
    </button>
    <div class="xiao-o-panel" id="xiao-o-panel" hidden>
      <header class="xiao-o-header">
        <div class="xiao-o-title">
          <span class="xiao-o-mini-bot" aria-hidden="true">
            <span class="xiao-o-mini-face">
              <span></span>
              <span></span>
            </span>
          </span>
          <div>
            <strong>小O (Xiao O)</strong>
            <span>AI Omic Assistant / AI Omic 助理</span>
          </div>
        </div>
        <button class="xiao-o-close" type="button" aria-label="Close 小O">Close</button>
      </header>
      <div class="xiao-o-messages" aria-live="polite">
        <div class="xiao-o-message assistant">
          Hi! I'm Xiao O. You can ask me about AI Omic services, pricing, Workflow Audit, RAG, OCR, or aftercare.
          <br><br>
          你好！我是小O。你可以问我关于 AI Omic 的服务、价格、Workflow Audit、RAG、OCR 或售后支持。
        </div>
      </div>
      <div class="xiao-o-prompts" aria-label="Suggested questions">
        <button type="button" data-prompt-en="What services does AI Omic provide?" data-prompt-zh="AI Omic 有什么服务？">Our Services / 我们的服务</button>
        <button type="button" data-prompt-en="What is Workflow Audit?" data-prompt-zh="Workflow Audit 是什么？">Workflow Audit? / 什么是审计？</button>
        <button type="button" data-prompt-en="How much does AI Omic cost?" data-prompt-zh="AI Omic 的价格怎么算？">Pricing / 价格咨询</button>
      </div>
      <form class="xiao-o-form">
        <label class="sr-only" for="xiao-o-input">Ask 小O / Xiao O</label>
        <input id="xiao-o-input" name="message" autocomplete="off" placeholder="Type here... / 请输入问题..." />
        <button type="submit">Send</button>
      </form>
    </div>
  `;
  document.body.appendChild(assistant);

  const launcher = assistant.querySelector(".xiao-o-launcher");
  const panel = assistant.querySelector(".xiao-o-panel");
  const close = assistant.querySelector(".xiao-o-close");
  const messages = assistant.querySelector(".xiao-o-messages");
  const form = assistant.querySelector(".xiao-o-form");
  const input = assistant.querySelector("#xiao-o-input");

  function setOpen(isOpen) {
    panel.hidden = !isOpen;
    launcher.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) input.focus();
  }

  function renderMessageText(bubble, role, text, isUnsure = false, language = "en") {
    bubble.replaceChildren();
    if (role === "assistant") {
      const alreadyHasDisclaimer = /AI assistant'?s answer|AI 助理回答|AI assistant response/i.test(text);
      const disclaimer = isUnsure && !alreadyHasDisclaimer ? `\n\n---\n${getXiaoODisclaimer(language)}` : "";
      const cleanText = `${text}${disclaimer}`.replace(/\*\*/g, "");
      const parts = cleanText.split(/(https?:\/\/[^\s]+)/g);
      parts.forEach((part) => {
        if (/^https?:\/\//.test(part)) {
          const link = document.createElement("a");
          link.href = part;
          link.textContent = part;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          bubble.appendChild(link);
        } else {
          part.split("\n").forEach((line, index, lines) => {
            const span = document.createElement("span");
            if (line.includes("温馨提示") || line.includes("AI assistant's answer")) {
              span.className = "xiao-o-disclaimer";
            }
            span.textContent = line;
            bubble.appendChild(span);
            if (index < lines.length - 1) bubble.appendChild(document.createElement("br"));
          });
        }
      });
    } else {
      bubble.textContent = text;
    }
  }

  function addMessage(role, text) {
    const bubble = document.createElement("div");
    bubble.className = `xiao-o-message ${role}`;
    renderMessageText(bubble, role, text);
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
    return bubble;
  }

  async function askXiaoO(message, languageOverride, displayMessage = message) {
    const messageLanguage = languageOverride || getXiaoOLanguage(message);
    const fallbackAnswer = getXiaoOFallbackAnswer(messageLanguage);
    addMessage("user", displayMessage);
    const loading = addMessage("assistant", "Thinking / 正在整理答案...");
    assistant.classList.add("xiao-o-thinking");

    if (!XIAO_O_WEBHOOK_URL) {
      renderMessageText(loading, "assistant", fallbackAnswer, false, messageLanguage);
      assistant.classList.remove("xiao-o-thinking");
      return;
    }

    try {
      const response = await fetch(XIAO_O_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          page: window.location.pathname,
          language: document.documentElement.lang,
          sessionId: getXiaoOSessionId(),
          source: "ai-omic-site"
        })
      });

      if (!response.ok) throw new Error(`n8n returned ${response.status}`);
      const data = await response.json();
      const finalAnswer = data.answer || data.output || data.text || fallbackAnswer;
      const isUnsure =
        finalAnswer !== fallbackAnswer &&
        /intake-form|sorry|抱歉|不确定|超出范围|cannot answer|subject to/i.test(finalAnswer);
      renderMessageText(loading, "assistant", finalAnswer, isUnsure, messageLanguage);
    } catch (error) {
      renderMessageText(loading, "assistant", fallbackAnswer, false, messageLanguage);
    } finally {
      assistant.classList.remove("xiao-o-thinking");
    }
  }

  launcher.addEventListener("click", () => setOpen(panel.hidden));
  close.addEventListener("click", () => setOpen(false));
  assistant.querySelectorAll(".xiao-o-prompts button").forEach((button) => {
    button.addEventListener("click", () => {
      const pageLanguage = getXiaoOPageLanguage();
      const prompt = pageLanguage === "zh" ? button.dataset.promptZh : button.dataset.promptEn;
      setOpen(true);
      askXiaoO(prompt || button.textContent.trim(), pageLanguage, button.textContent.trim());
    });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;
    input.value = "";
    askXiaoO(message);
  });
}

createXiaoOAssistant();
