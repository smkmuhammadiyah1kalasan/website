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
