function getLessonContext() {
  const article = document.querySelector(".reading");
  if (!article) return null;

  const title = article.querySelector("h1")
    ? article.querySelector("h1").textContent.trim()
    : "";

  const currentTopicEl = document.querySelector(".tree-item.current");
  const currentTopic = currentTopicEl ? currentTopicEl.textContent.trim() : "";

  const paragraphs = Array.from(article.querySelectorAll("p")).map((p) =>
    p.textContent.trim(),
  );

  return { title: title, currentTopic: currentTopic, paragraphs: paragraphs };
}

window.AIContext = {
  getLessonContext: getLessonContext,
};