const AI_CONVERSATION_KEY = "issubi_ai_conversation";
const AI_PANEL_STATE_KEY = "issubi_ai_panel_open";

function saveConversation(messages) {
  try {
    localStorage.setItem(AI_CONVERSATION_KEY, JSON.stringify(messages));
  } catch (e) {
    /* storage unavailable, ignore */
  }
}

function loadConversation() {
  try {
    const raw = localStorage.getItem(AI_CONVERSATION_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function savePanelState(isOpen) {
  try {
    localStorage.setItem(AI_PANEL_STATE_KEY, isOpen ? "1" : "0");
  } catch (e) {
    /* storage unavailable, ignore */
  }
}

function loadPanelState() {
  try {
    return localStorage.getItem(AI_PANEL_STATE_KEY) === "1";
  } catch (e) {
    return false;
  }
}

window.AIStorage = {
  saveConversation: saveConversation,
  loadConversation: loadConversation,
  savePanelState: savePanelState,
  loadPanelState: loadPanelState,
};