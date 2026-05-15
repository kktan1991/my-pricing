/**
 * AI Omic - 小O (Xiao O) Assistant 
 * Version: 2.1 (Anti-Markdown Fix)
 */

const XIAO_O_WEBHOOK_URL = "https://n8n-kktan.zeabur.app/webhook/ai-omic-xiao-o";
const INTAKE_FORM_URL = "https://my-pricing-list.zeabur.app/intake-form";

const XIAO_O_FALLBACK_ANSWER = `
Xiao O is currently offline. Please fill in the intake form directly:
小O 目前离线，请直接填写需求表单，我们会在 1 个工作日内回复：
\n${INTAKE_FORM_URL}`;

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
        </span>
      </span>
      <span class="sr-only">Open 小O</span>
    </button>
    <div class="xiao-o-panel" id="xiao-o-panel" hidden>
      <header class="xiao-o-header">
        <div class="xiao-o-title">
          <span class="xiao-o-mini-bot" aria-hidden="true"><span></span></span>
          <div>
            <strong>小O (Xiao O)</strong>
            <span>AI Omic Assistant / 助理</span>
          </div>
        </div>
        <button class="xiao-o-close" type="button" aria-label="Close 小O">Close</button>
      </header>
      <div class="xiao-o-messages" aria-live="polite">
        <div class="xiao-o-message assistant">
          Hi! I'm Xiao O, your AI Omic assistant. You can ask me about our services, pricing, RAG, or aftercare. 
          <br><br>
          你好！我是小O。你可以问我关于 AI Omic 的服务、价格、RAG、OCR 或售后支持。
        </div>
      </div>
      <div class="xiao-o-prompts" aria-label="Suggested questions">
        <button type="button">Our Services / 我们的服务</button>
        <button type="button">What is Workflow Audit? / 什么是审计？</button>
        <button type="button">Pricing & Support / 价格与支持</button>
      </div>
      <form class="xiao-o-form">
        <label class="sr-only" for="xiao-o-input">Ask 小O</label>
        <input id="xiao-o-input" name="message" autocomplete="off" placeholder="Type here... / 请输入问题..." />
        <button type="submit">Send / 发送</button>
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
   * 核心修复：处理消息文本
   */
  function renderMessageText(bubble, role, text) {
    bubble.replaceChildren();
    
    if (role === "assistant") {
      // 1. 清洗：移除所有的 ** 符号
      let cleanText = text.replace(/\*\*/g, '');
      
      // 2. 处理链接和换行
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
          // 3. 将换行符 \n 转换为 <br>
          const lines = part.split('\n');
          lines.forEach((line, i) => {
            bubble.appendChild(document.createTextNode(line));
            if (i < lines.length - 1) {
              bubble.appendChild(document.createElement("br"));
            }
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

  async function askXiaoO(message) {
    if (!message) return;
    addMessage("user", message);
    const loading = addMessage("assistant", "Thinking / 正在整理答案...");

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

      if (!response.ok) throw new Error(`n8n error: ${response.status}`);
      
      const data = await response.json();
      const finalAnswer = data.answer || data.output || data.text;
      
      if (finalAnswer) {
        renderMessageText(loading, "assistant", finalAnswer);
      } else {
        renderMessageText(loading, "assistant", XIAO_O_FALLBACK_ANSWER);
      }

    } catch (error) {
      console.error("Xiao O Webhook Error:", error);
      renderMessageText(loading, "assistant", "Connection error / 连不上大脑: \n" + INTAKE_FORM_URL);
    }
  }

  launcher.addEventListener("click", () => setOpen(panel.hidden));
  close.addEventListener("click", () => setOpen(false));
  
  assistant.querySelectorAll(".xiao-o-prompts button").forEach((button) => {
    button.addEventListener("click", () => {
      setOpen(true);
      askXiaoO(button.textContent.trim());
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
