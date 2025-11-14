const items = document.querySelectorAll(".song-item");

items.forEach(item => {
  const title = item.querySelector(".toggle-song");
  const cover = item.querySelector(".album-cover");
  const content = document.createElement("div");
  const songContent = item.querySelector(".song-content") || item.querySelector(".song-right");
  const lyricsBtn = item.querySelector(".lyrics-btn");
  const lyricsBox = item.querySelector(".lyrics");

  // toggle song
  const toggleDetails = () => {
    const isOpen = item.classList.contains("active");

    items.forEach(i => {
      i.classList.remove("active");
      i.style.maxHeight = "none";
      i.querySelector(".song-right").style.maxHeight = 0;
    });

    if (!isOpen) {
      item.classList.add("active");
      const right = item.querySelector(".song-right");
      const newHeight = right.scrollHeight + 20;
      right.style.maxHeight = newHeight + "px";
    }
  };

  title.addEventListener("click", toggleDetails);
  cover.addEventListener("click", toggleDetails);

  // toggle lyrics
  lyricsBtn.addEventListener("click", () => {
    lyricsBox.classList.toggle("active");

    lyricsBtn.textContent = lyricsBox.classList.contains("active")
      ? "hide lyrics"
      : "show lyrics";

    if (item.classList.contains("active")) {
      const right = item.querySelector(".song-right");
      right.style.maxHeight = right.scrollHeight + "px";
    }
  });
});
