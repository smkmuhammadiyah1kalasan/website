/* ================================
   SMK Muhammadiyah 1 Kalasan
   Modern JavaScript Interaction
   ================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     LOADING SCREEN
  ================================= */
  const loader = document.querySelector(".loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.classList.add("loader-hide");
      setTimeout(() => loader.remove(), 800);
    });
  }

  /* ================================
     NAVBAR SCROLL EFFECT
  ================================= */
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar?.classList.add("navbar-scroll");
    } else {
      navbar?.classList.remove("navbar-scroll");
    }
  });

  /* ================================
     MOBILE MENU TOGGLE
  ================================= */
  const menuBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuBtn?.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });

  /* ================================
     SMOOTH SCROLL
  ================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      target?.scrollIntoView({ behavior: "smooth" });
      navMenu?.classList.remove("active");
    });
  });

  /* ================================
     HERO TEXT ANIMATION
  ================================= */
  const heroText = document.querySelector(".hero-content");
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(40px)";
    setTimeout(() => {
      heroText.style.transition = "all 1s ease";
      heroText.style.opacity = 1;
      heroText.style.transform = "translateY(0)";
    }, 300);
  }

  /* ================================
     SCROLL REVEAL (INTERSECTION)
  ================================= */
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ================================
     COUNTER ANIMATION
  ================================= */
  const counters = document.querySelectorAll(".counter");

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        let start = 0;
        const end = parseInt(counter.dataset.target);
        const speed = 50;

        const updateCounter = () => {
          start += Math.ceil(end / speed);
          if (start < end) {
            counter.innerText = start;
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = end;
          }
        };
        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => counterObserver.observe(counter));

  /* ================================
     SCROLL TO TOP BUTTON
  ================================= */
  const scrollBtn = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn?.classList.add("show");
    } else {
      scrollBtn?.classList.remove("show");
    }
  });

  scrollBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ================================
     ACTIVE MENU HIGHLIGHT
  ================================= */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  /* ================================
     LAZY LOAD IMAGES
  ================================= */
  const lazyImages = document.querySelectorAll("img[data-src]");

  const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        imgObserver.unobserve(img);
      }
    });
  }, { threshold: 0.2 });

  lazyImages.forEach(img => imgObserver.observe(img));

  /* ================================
     PARALLAX HERO EFFECT
  ================================= */
  const hero = document.querySelector(".hero");
  window.addEventListener("scroll", () => {
    if (hero) {
      hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
    }
  });

  /* ================================
     FOOTER YEAR AUTO UPDATE
  ================================= */
  const year = document.querySelector(".year");
  if (year) year.textContent = new Date().getFullYear();

});
