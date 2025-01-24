const mega = document.querySelector("#mega");
const articles = mega.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    mega.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    mega.style.animationPlayState = "running";
  });
});
