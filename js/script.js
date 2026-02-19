/* ===============================
   LOADING SCREEN
================================= */

window.addEventListener("load", function () {
    const loader = document.getElementById("loading-screen");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
        loader.style.display = "none";
    }, 800);
});


/* ===============================
   SIDEBAR TOGGLE
================================= */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

window.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove("active");
    }
});


/* ===============================
   CUSTOM CURSOR
================================= */

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
        cursor.style.background = "rgba(0,191,255,0.4)";
    });

    el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.background = "transparent";
    });
});


/* ===============================
   SMOOTH SCROLL
================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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


/* ===============================
   NAVBAR BACKGROUND CHANGE
================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 10, 25, 0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        header.style.background = "rgba(0, 20, 40, 0.8)";
        header.style.boxShadow = "none";
    }
});


/* ===============================
   SCROLL ANIMATION FADE IN
================================= */

const revealElements = document.querySelectorAll(".card, .info-item");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);


/* ===============================
   HERO PARALLAX EFFECT
================================= */

window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    let offset = window.scrollY;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});


/* ===============================
   RIPPLE BUTTON EFFECT
================================= */

document.querySelectorAll(".btn-primary, .btn-secondary, .btn-card")
    .forEach(button => {
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


/* ===============================
   FLOATING ICON ANIMATION
================================= */

setInterval(() => {
    document.querySelectorAll(".card img").forEach(img => {
        img.style.transform = "translateY(-5px)";
        setTimeout(() => {
            img.style.transform = "translateY(0)";
        }, 1000);
    });
}, 4000);


/* ===============================
   ACTIVE NAV LINK HIGHLIGHT
================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

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
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
/* ===============================
   COUNTER ANIMATION
================================= */

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounter() {
    counters.forEach(counter => {
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
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener("scroll", () => {
    const statistikSection = document.querySelector(".section-statistik");

    if (statistikSection && isInViewport(statistikSection) && !counterStarted) {
        startCounter();
        counterStarted = true;
    }
});
