// script.js
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("caption");
  const overlays = document.querySelectorAll(".portfolio-item .overlay");
  const close = document.querySelector(".close");

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", function () {
      const img = this.previousElementSibling;
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
      captionText.innerHTML = img.alt;
    });
  });

  close.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
});
