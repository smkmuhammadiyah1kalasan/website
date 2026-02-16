// ===============================
// LOADER
// ===============================
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "all 1s ease";
    }
});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0,0,0,0.8)";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
        } else {
            navbar.style.background = "rgba(0,0,0,0.4)";
            navbar.style.boxShadow = "none";
        }
    }
});

// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll(".card, .section-title, .tentang");

function revealOnScroll() {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "all 1s ease";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// Initial state
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
});

// ===============================
// RIPPLE EFFECT BUTTON
// ===============================
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        this.appendChild(circle);
    });
});

// ===============================
// CARD 3D TILT EFFECT
// ===============================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let centerX = card.offsetWidth / 2;
        let centerY = card.offsetHeight / 2;
        let rotateX = ((y - centerY) / 20);
        let rotateY = ((x - centerX) / 20);

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});

// ===============================
// COUNTER ANIMATION
// ===============================
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 200;

    const updateCounter = () => {
        const current = +counter.innerText;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
};

window.addEventListener("scroll", () => {
    counters.forEach(counter => {
        const position = counter.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            startCounter(counter);
        }
    });
});

// ===============================
// HERO TYPING EFFECT
// ===============================
const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {
    const text = heroTitle.innerText;
    heroTitle.innerText = "";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            heroTitle.innerText += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
}

// ===============================
// ACTIVE MENU ON SCROLL
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "cyan";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.zIndex = "999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// PARALLAX EFFECT
// ===============================
window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.backgroundPositionY = window.pageYOffset * 0.5 + "px";
    }
});

console.log("SMK Muhammadiyah 1 Kalasan - Premium JS Active 🚀");
