function countText() {
  const text = document.getElementById('textInput').value.trim();

  const wordCount = text === "" ? 0 : text.split(/\s+/).length;
  const charCount = text.length;
  const readingTime = Math.ceil(wordCount / 200); // avg. 200 wpm

  document.getElementById('wordCount').textContent = `Words: ${wordCount}`;
  document.getElementById('charCount').textContent = `Characters: ${charCount}`;
  document.getElementById('readTime').textContent = `Estimated Reading Time: ${readingTime} min`;
}
