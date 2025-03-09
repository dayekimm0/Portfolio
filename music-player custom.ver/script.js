document.addEventListener("DOMContentLoaded", () => {
  const playButtons = document.querySelectorAll(".play");
  const pauseButtons = document.querySelectorAll(".pause");
  const loadButtons = document.querySelectorAll(".load");

  // Play
  playButtons.forEach((play) => {
    play.addEventListener("click", (e) => {
      const article = e.currentTarget.closest("article");
      if (article.classList.contains("on")) {
        const activePic = article.querySelector(".pic");
        const activeAudio = article.querySelector("audio");

        if (activePic && activeAudio) {
          activePic.classList.add("on");
          activeAudio.play();

          activeAudio.addEventListener("ended", () => {
            activePic.classList.remove("on");
          });
        }
      }
    });
  });

  // Pause
  pauseButtons.forEach((pause) => {
    pause.addEventListener("click", (e) => {
      const article = e.currentTarget.closest("article");
      if (article.classList.contains("on")) {
        const activePic = article.querySelector(".pic");
        const activeAudio = article.querySelector("audio");

        if (activePic && activeAudio) {
          activePic.classList.remove("on");
          activeAudio.pause();
        }
      }
    });
  });

  // Load
  loadButtons.forEach((load) => {
    load.addEventListener("click", (e) => {
      const article = e.currentTarget.closest("article");
      if (article.classList.contains("on")) {
        const activePic = article.querySelector(".pic");
        const activeAudio = article.querySelector("audio");

        if (activePic && activeAudio) {
          activePic.classList.add("on");
          activeAudio.load();
          activeAudio.play();
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("article").forEach((article) => {
    let bg = article.getAttribute("data-bg");
    if (bg) {
      article.style.backgroundImage = `url(${bg})`;
      article.style.backgroundSize = "cover";
      article.style.backgroundPosition = "center";
    }
  });
});

$(document).ready(function () {
  const frame = $("section");
  const articles = $("article");
  const prevBtn = $(".btnPrev");
  const nextBtn = $(".btnNext");

  frame.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
  });

  function updateBackground(index) {
    const bgImage = $(articles[index]).attr("data-bg");
    if (bgImage) {
      document.documentElement.style.setProperty(
        "--bg-image",
        `url(${bgImage})`
      );
    }
  }

  frame.on("afterChange", function (event, slick, currentSlide) {
    $("article").removeClass("on");
    $(articles[currentSlide]).addClass("on");
    updateBackground(currentSlide);
  });

  prevBtn.on("click", function () {
    frame.slick("slickPrev");
  });

  nextBtn.on("click", function () {
    frame.slick("slickNext");
  });

  updateBackground(0);
});
