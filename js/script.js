// ================= HAMBURGER MENU =================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Tutup menu saat klik link (mobile)
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ================= DIGITAL CLOCK =================
function updateClock() {
    const now = new Date();

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const timeString = now.toLocaleTimeString('id-ID', timeOptions);
    const dateString = now.toLocaleDateString('id-ID', dateOptions);

    document.getElementById("clock-time").textContent = timeString;
    document.getElementById("clock-date").textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();


// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 10, 30, 0.9)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "rgba(0, 15, 40, 0.6)";
        navbar.style.boxShadow = "none";
    }
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ================= FLOATING ICON RANDOM MOVEMENT =================
const floatIcons = document.querySelectorAll(".float-icon");

floatIcons.forEach(icon => {
    setInterval(() => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;

        icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 3000);
});a

/* ================= WOW PART 2 ANIMATION ================= */

/* 1️⃣ ADVANCED SCROLL REVEAL (STAGGER EFFECT) */
const revealElements = document.querySelectorAll(".reveal");

function advancedReveal() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el, index) => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            setTimeout(() => {
                el.classList.add("active");
            }, index * 150); // delay antar elemen
        }
    });
}

window.addEventListener("scroll", advancedReveal);
window.addEventListener("load", advancedReveal);


/* 2️⃣ COUNTER ANIMATION */
const counters = document.querySelectorAll(".about-stats h3");

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.innerText.replace("+", "").replace("%","");
        let count = 0;

        const updateCounter = () => {
            const increment = target / 80;

            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count) + 
                    (counter.innerText.includes("%") ? "%" : "+");
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + 
                    (counter.innerText.includes("%") ? "%" : "+");
            }
        };

        updateCounter();
    });
}

window.addEventListener("load", animateCounters);


/* 3️⃣ BACKGROUND PARTICLE EFFECT */
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1";

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = "rgba(0,212,255,0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < 80; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});


/* 4️⃣ PARALLAX MOUSE EFFECT */
document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    document.querySelectorAll(".about-image img, .kepsek-image img")
        .forEach(img => {
            img.style.transform = 
                `translate(${moveX}px, ${moveY}px)`;
        });
});
