/**
 * AI Omic - 小O Assistant 核心脚本
 * 有效期：2026年5月起
 */

const XIAO_O_WEBHOOK_URL = "https://n8n-kktan.zeabur.app/webhook/ai-omic-xiao-o";
const INTAKE_FORM_URL = "https://my-pricing-list.zeabur.app/intake-form";

// 仅作为 n8n 离线时的兜底回复，不建议在这里写太多业务逻辑
const XIAO_O_FALLBACK_ANSWER = `小O 目前无法连接到大脑。你可以直接填写需求表单，我们会在 1 个工作日内回复：\n\n${INTAKE_FORM_URL}`;

/**
 * 获取或创建 Session ID，确保对话记忆连贯
 */
function getXiaoOSessionId() {
  const key = "xiaoOSessionId";
  let sessionId = localStorage.getItem(key);
  if (!sessionId) {
    sessionId = `xiao-o-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    localStorage.setItem(key, sessionId);
  }
  return sessionId;
}

/**
 * 初始化小O UI 组件
 */
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
        </span>
      </span>
      <span class="sr-only">Open 小O</span>
    </button>
    <div class="xiao-o-panel" id="xiao-o-panel" hidden>
      <header class="xiao-o-header">
        <div class="xiao-o-title">
          <span class="xiao-o-mini-bot" aria-hidden="true"><span></span></span>
          <div>
            <strong>小O</strong>
            <span>AI Omic 助理</span>
          </div>
        </div>
        <button class="xiao-o-close" type="button" aria-label="Close 小O">Close</button>
      </header>
      <div class="xiao-o-messages" aria-live="polite">
        <div class="xiao-o-message assistant">
          你好！我是 AI Omic 的助理小O。我可以回答关于自动化流程、RAG 知识库、报价和售后相关的问题。请问有什么可以帮到你？
        </div>
      </div>
      <div class="xiao-o-prompts" aria-label="Suggested questions">
        <button type="button">AI Omic 有什么服务？</button>
        <button type="button">Workflow Audit 是什么？</button>
        <button type="button">How much for a chatbot?</button>
      </div>
      <form class="xiao-o-form">
        <label class="sr-only" for="xiao-o-input">Ask 小O</label>
        <input id="xiao-o-input" name="message" autocomplete="off" placeholder="输入问题或点击上方快捷提问..." />
        <button type="submit">发送</button>
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

  /**
   * 渲染消息文本，并自动将链接转化为可点击状态
   */
  function renderMessageText(bubble, role, text) {
    bubble.replaceChildren();
    if (role === "assistant") {
      // 简单的 URL 正则匹配并渲染超链接
      const parts = text.split(/(https?:\/\/[^\s]+)/g);
      parts.forEach((part) => {
        if (/^https?:\/\//.test(part)) {
          const link = document.createElement("a");
          link.href = part;
          link.textContent = part;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          bubble.appendChild(link);
        } else {
          bubble.appendChild(document.createTextNode(part));
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

  /**
   * 与 n8n 后端通信
   */
  async function askXiaoO(message) {
    if (!message) return;
    addMessage("user", message);
    const loading = addMessage("assistant", "小O 正在思考...");

    try {
      const response = await fetch(XIAO_O_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          page: window.location.pathname,
          language: document.documentElement.lang || 'en',
          sessionId: getXiaoOSessionId(),
          source: "ai-omic-site"
        })
      });

      if (!response.ok) throw new Error(`Network response error: ${response.status}`);
      
      const data = await response.json();
      // 兼容多种返回格式 (answer, output, text)
      const finalAnswer = data.answer || data.output || data.text;
      
      if (finalAnswer) {
        renderMessageText(loading, "assistant", finalAnswer);
      } else {
        renderMessageText(loading, "assistant", XIAO_O_FALLBACK_ANSWER);
      }

    } catch (error) {
      console.error("Xiao O Webhook Error:", error);
      renderMessageText(loading, "assistant", "抱歉，小O 暂时连不上服务器。请检查网络，或直接查看：" + INTAKE_FORM_URL);
    }
  }

  // 事件监听
  launcher.addEventListener("click", () => setOpen(panel.hidden));
  close.addEventListener("click", () => setOpen(false));
  
  // 快捷提问按钮
  assistant.querySelectorAll(".xiao-o-prompts button").forEach((button) => {
    button.addEventListener("click", () => {
      setOpen(true);
      askXiaoO(button.textContent.trim());
    });
  });

  // 表单提交
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;
    input.value = "";
    askXiaoO(message);
  });
}

// 启动执行
createXiaoOAssistant();
