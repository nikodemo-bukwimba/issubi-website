function renderMessage(msg) {
  const body = document.querySelector(".ai-panel .ai-body");
  if (!body) return;
  const div = document.createElement("div");
  div.className = "ai-msg " + msg.role;
  div.textContent = msg.text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function sendMessage() {
  const input = document.querySelector(".ai-input input");
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const userMsg = { role: "user", text: text };
  renderMessage(userMsg);

  const messages = window.AIStorage ? window.AIStorage.loadConversation() : [];
  messages.push(userMsg);
  if (window.AIStorage) window.AIStorage.saveConversation(messages);

  input.value = "";

  // TODO: once a real AI backend is available, send `text` (plus
  // window.AIContext.getLessonContext()) to the API here and render
  // the bot's reply with renderMessage({ role: "bot", text: reply }).
}

function restoreConversation() {
  if (!window.AIStorage) return;
  const messages = window.AIStorage.loadConversation();
  messages.forEach(renderMessage);
}

function initChatUI() {
  const sendBtn = document.querySelector(".ai-input button");
  const input = document.querySelector(".ai-input input");

  if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
  }
  if (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") sendMessage();
    });
  }

  restoreConversation();
}

window.AIChat = {
  renderMessage: renderMessage,
  sendMessage: sendMessage,
  restoreConversation: restoreConversation,
  initChatUI: initChatUI,
};