const items = document.querySelectorAll(".song-item");

items.forEach(item => {
  const title = item.querySelector(".toggle-song");
  const cover = item.querySelector(".album-cover");
  const lyricsBtn = item.querySelector(".lyrics-btn");
  const englishBtn = item.querySelector(".english-btn");
  const lyricsBox = item.querySelector(".lyrics");
  const originalLyrics = item.querySelector(".original-lyrics");
  const englishLyrics = item.querySelector(".english-lyrics");

  // toggle song details
  const toggleDetails = () => {
    const isOpen = item.classList.contains("active");

    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".song-right").style.maxHeight = 0;
    });

    if (!isOpen) {
      item.classList.add("active");
      const right = item.querySelector(".song-right");
      right.style.maxHeight = right.scrollHeight + "px";
    }
  };

  title.addEventListener("click", toggleDetails);
  cover.addEventListener("click", toggleDetails);

  // toggle original lyrics
  lyricsBtn.addEventListener("click", () => {
    lyricsBox.classList.toggle("active");
    lyricsBtn.textContent = lyricsBox.classList.contains("active")
      ? "hide lyrics"
      : "show lyrics";

    originalLyrics.style.display = "block";
    englishLyrics.style.display = "none";

    if (item.classList.contains("active")) {
      const right = item.querySelector(".song-right");
      right.style.maxHeight = right.scrollHeight + "px";
    }
  });

  // toggle english lyrics
  if (englishBtn) {
    englishBtn.addEventListener("click", () => {
      lyricsBox.classList.add("active");
      lyricsBtn.textContent = "hide lyrics";

      originalLyrics.style.display = "none";
      englishLyrics.style.display = "block";

      if (item.classList.contains("active")) {
        const right = item.querySelector(".song-right");
        right.style.maxHeight = right.scrollHeight + "px";
      }
    });
  }
});
