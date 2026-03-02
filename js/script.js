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
/* ================================
   PART 3 - ULTRA WOW EFFECT
================================ */

/* ========= PARTICLE BACKGROUND ========= */
function createParticles() {
    const section = document.querySelector(".about-section");

    for (let i = 0; i < 30; i++) {
        let particle = document.createElement("span");
        particle.classList.add("particle");

        let size = Math.random() * 6 + 4;
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDuration = (Math.random() * 10 + 10) + "s";

        section.appendChild(particle);
    }
}

createParticles();

/* ========= ICON ANIMATION ========= */
const statsIcons = document.querySelectorAll(".about-stats div");

statsIcons.forEach((box, index) => {
    box.innerHTML = `
        <i class="fas fa-star"></i>
        <h3>${box.querySelector("h3").innerText}</h3>
        <p>${box.querySelector("p").innerText}</p>
    `;
    box.style.opacity = "0";
    box.style.transform = "translateY(30px)";

    setTimeout(() => {
        box.style.transition = "0.8s ease";
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
    }, index * 200);
});

/* ========= PARALLAX EFFECT ========= */
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    document.querySelectorAll(".about-image img, .kepsek-image img").forEach(img => {
        img.style.transform = `translateY(${scrollY * 0.05}px)`;
    });
});

/* ========= AUTO SHINE EFFECT ========= */
const images = document.querySelectorAll(".about-image img, .kepsek-image img");

images.forEach(img => {
    setInterval(() => {
        img.style.boxShadow = "0 0 40px rgba(0,212,255,0.7)";
        setTimeout(() => {
            img.style.boxShadow = "0 10px 40px rgba(0,0,0,0.4)";
        }, 800);
    }, 5000);
});
/* =========================================
   PART 3 - JURUSAN ADVANCED ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", function() {

    const jurusanSection = document.querySelector(".jurusan-section");
    const jurusanCards = document.querySelectorAll(".jurusan-card");

    /* ===== SCROLL REVEAL EFFECT ===== */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.classList.add("active-card");
            }
        });
    }, { threshold: 0.3 });

    jurusanCards.forEach(card => {
        observer.observe(card);
    });

    /* ===== REAL 3D TILT EFFECT ===== */
    jurusanCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / 15);
            const rotateY = ((centerX - x) / 15);

            card.style.transform =
                `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
        });
    });

    /* ===== PARALLAX BACKGROUND EFFECT ===== */
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        jurusanSection.style.backgroundPositionY = scrollY * 0.3 + "px";
    });

    /* ===== AUTO STAR GENERATOR ===== */
    for (let i = 0; i < 25; i++) {
        let star = document.createElement("span");
        star.classList.add("star");

        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDuration = (Math.random() * 3 + 2) + "s";

        jurusanSection.appendChild(star);
    }

});

/* =========================================
   PART 3 EXTENSION - ULTRA EFFECT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const jurusanSection = document.querySelector(".jurusan-section");
    const cards = document.querySelectorAll(".jurusan-card");

    /* ===== MOUSE SPOTLIGHT EFFECT ===== */
    jurusanSection.addEventListener("mousemove", (e) => {
        const rect = jurusanSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        jurusanSection.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(0,212,255,0.15),
            #0a192f 60%)`;
    });

    /* ===== ACTIVE GLOW SAAT CARD TERLIHAT ===== */
    const glowObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.boxShadow =
                    "0 20px 70px rgba(0,212,255,0.4)";
            } else {
                entry.target.style.boxShadow =
                    "0 10px 40px rgba(0,0,0,0.3)";
            }
        });
    }, { threshold: 0.6 });

    cards.forEach(card => glowObserver.observe(card));

    /* ===== RIPPLE CLICK EFFECT ===== */
    cards.forEach(card => {
        card.addEventListener("click", function (e) {
            const ripple = document.createElement("span");
            ripple.style.position = "absolute";
            ripple.style.width = "20px";
            ripple.style.height = "20px";
            ripple.style.background = "rgba(0,212,255,0.6)";
            ripple.style.borderRadius = "50%";
            ripple.style.left = e.offsetX + "px";
            ripple.style.top = e.offsetY + "px";
            ripple.style.transform = "scale(0)";
            ripple.style.pointerEvents = "none";
            ripple.style.transition = "0.6s ease";

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.style.transform = "scale(15)";
                ripple.style.opacity = "0";
            }, 10);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    /* ===== ICON FLOATING EFFECT ===== */
    const titles = document.querySelectorAll(".jurusan-card h3");

    titles.forEach(title => {
        let angle = 0;
        setInterval(() => {
            angle += 0.02;
            title.style.transform = `translateY(${Math.sin(angle) * 3}px)`;
        }, 30);
    });

    /* ===== BACKGROUND GRADIENT MOVE ===== */
    let bgAngle = 0;
    setInterval(() => {
        bgAngle += 0.3;
        jurusanSection.style.background =
            `linear-gradient(${bgAngle}deg, #0a192f, #112240, #0f3057)`;
    }, 100);

});
