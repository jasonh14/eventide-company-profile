// fade In animation when scroll
window.addEventListener("scroll", () => {
  const fadeIn = document.querySelectorAll(".bReveal");
  const windowHeight = window.innerHeight;
  for (let i = 0; i < fadeIn.length; i++) {
    const fadeInPosition = fadeIn[i].getBoundingClientRect().top;
    if (fadeInPosition < windowHeight - 150) {
      fadeIn[i].classList.add("aReveal");
    }
  }
});
