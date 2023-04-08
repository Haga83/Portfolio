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

const accordions = document.querySelectorAll(".accordion .arrow");
accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.parentNode.parentNode.classList.toggle("open");
  });
});
