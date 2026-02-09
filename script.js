window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-content");
  let scroll = window.scrollY;
  hero.style.transform = `translateY(${scroll * 0.1}px)`;
});
