/**
 * AI Omic - 小O (Xiao O) Assistant 
 * Version: 2.2 (Added Professional Disclaimer)
 */

const XIAO_O_WEBHOOK_URL = "https://n8n-kktan.zeabur.app/webhook/ai-omic-xiao-o";
const INTAKE_FORM_URL = "https://my-pricing-list.zeabur.app/intake-form";

// 重点：免责声明文字
const AI_DISCLAIMER = "温馨提示：以上为 AI 助理回答，仅供参考。具体技术方案与最终报价请以 AI Omic 项目团队的官方确认内容为准。";

const XIAO_O_FALLBACK_ANSWER = `
Xiao O is currently offline. Please fill in the intake form directly:
小O 目前离线，请直接填写需求表单，我们会在 1 个工作日内回复：
\n${INTAKE_FORM_URL}
\n\n${AI_DISCLAIMER}`;

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
  // ... (HTML 结构保持不变，参考之前的双语版本)
  const assistant = document.createElement("section");
  assistant.className = "xiao-o";
  assistant.innerHTML = `
    <button class="xiao-o-launcher" type="button" aria-expanded="false" aria-controls="xiao-o-panel">
      <span class="xiao-o-bot">
        <span class="xiao-o-antenna"></span>
        <span class="xiao-o-face"><span class="xiao-o-eye"></span><span class="xiao-o-eye"></span><span class="xiao-o-smile"></span></span>
      </span>
    </button>
    <div class="xiao-o-panel" id="xiao-o-panel" hidden>
      <header class="xiao-o-header">
        <div class="xiao-o-title"><strong>小O (Xiao O)</strong><span>AI Omic Assistant</span></div>
        <button class="xiao-o-close" type="button">Close</button>
      </header>
      <div class="xiao-o-messages">
        <div class="xiao-o-message assistant">
          Hi! I'm Xiao O. You can ask me about AI Omic services or pricing.
          <br><br>
          你好！我是小O。你可以问我关于 AI Omic 的服务、价格或售后支持。
        </div>
      </div>
      <div class="xiao-o-prompts">
        <button type="button">Our Services / 我们的服务</button>
        <button type="button">Workflow Audit? / 什么是审计？</button>
        <button type="button">Pricing / 价格咨询</button>
      </div>
      <form class="xiao-o-form">
        <input id="xiao-o-input" placeholder="Type here... / 请输入问题..." />
        <button type="submit">Send</button>
      </form>
    </div>
  `;
  document.body.appendChild(assistant);

  const messages = assistant.querySelector(".xiao-o-messages");
  const input = assistant.querySelector("#xiao-o-input");
  const form = assistant.querySelector(".xiao-o-form");

  /**
   * 渲染带免责声明的消息
   */
  function renderMessageText(bubble, role, text, isUnsure = false) {
    bubble.replaceChildren();
    
    if (role === "assistant") {
      let cleanText = text.replace(/\*\*/g, '');
      
      // 如果 AI 表示不确定（或是在 fallback），加上免责声明
      if (isUnsure) {
        cleanText += `\n\n---\n${AI_DISCLAIMER}`;
      }

      const parts = cleanText.split(/(https?:\/\/[^\s]+)/g);
      parts.forEach((part) => {
        if (/^https?:\/\//.test(part)) {
          const link = document.createElement("a");
          link.href = part; link.textContent = part; link.target = "_blank";
          bubble.appendChild(link);
        } else {
          const lines = part.split('\n');
          lines.forEach((line, i) => {
            const span = document.createElement("span");
            // 如果是免责声明部分（---之后），设为灰色小字
            if (line.includes("项目对接人为准")) {
                span.style.fontSize = "0.8em";
                span.style.color = "#888";
            }
            span.textContent = line;
            bubble.appendChild(span);
            if (i < lines.length - 1) bubble.appendChild(document.createElement("br"));
          });
        }
      });
    } else {
      bubble.textContent = text;
    }
  }

  function addMessage(role, text, isUnsure = false) {
    const bubble = document.createElement("div");
    bubble.className = `xiao-o-message ${role}`;
    renderMessageText(bubble, role, text, isUnsure);
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

      const data = await response.json();
      const finalAnswer = data.answer || data.output || data.text;
      
      // 逻辑：如果 AI 回复包含 "intake-form" 或者 "sorry"，我们认为它是不确定的
      const isUnsure = /intake-form|sorry|抱歉|不确定|超出范围/.test(finalAnswer);
      
      renderMessageText(loading, "assistant", finalAnswer || XIAO_O_FALLBACK_ANSWER, isUnsure);

    } catch (error) {
      renderMessageText(loading, "assistant", XIAO_O_FALLBACK_ANSWER, true);
    }
  }

  // ... 剩下的事件监听保持不变
  assistant.querySelector(".xiao-o-close").onclick = () => { assistant.querySelector(".xiao-o-panel").hidden = true; };
  assistant.querySelector(".xiao-o-launcher").onclick = () => { assistant.querySelector(".xiao-o-panel").hidden = false; input.focus(); };
  form.onsubmit = (e) => { e.preventDefault(); const m = input.value.trim(); input.value = ""; askXiaoO(m); };
  assistant.querySelectorAll(".xiao-o-prompts button").forEach(b => b.onclick = () => askXiaoO(b.textContent));
}

createXiaoOAssistant();
