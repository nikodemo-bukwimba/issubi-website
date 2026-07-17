document.addEventListener("DOMContentLoaded", function () {
  if (window.AIChat) {
    window.AIChat.initChatUI();
  }

  const panel = document.getElementById("aiPanel");
  if (panel && window.AIStorage && window.AIStorage.loadPanelState()) {
    panel.classList.add("open");
  }

  if (panel && window.AIStorage) {
    const observer = new MutationObserver(function () {
      window.AIStorage.savePanelState(panel.classList.contains("open"));
    });
    observer.observe(panel, { attributes: true, attributeFilter: ["class"] });
  }
});