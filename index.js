const acceuil = document.querySelector(".Accueil");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkAnimation() {
  if (isElementInViewport(acceuil)) {
    acceuil.classList.add("animate");
    window.removeEventListener("scroll", checkAnimation);
  }
}

window.addEventListener("scroll", checkAnimation);
checkAnimation();

window.onload = function () {
  document.querySelector(".accueil").style.opacity = 1;
  document.querySelector(".accueil").style.transform = "translateY(0)";
};

const scrollTexts = document.querySelectorAll(".scroll-text");

scrollTexts.forEach((scrollText) => {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const scrollTextPosition =
      scrollText.offsetTop + scrollText.offsetHeight / 2;
    if (scrollPosition > scrollTextPosition) {
      scrollText.classList.add("visible");
    }
  });
});
