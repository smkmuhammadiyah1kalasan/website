/* ===============================
   ISLAMIC PREMIUM JS
================================= */

/* ========= NAVBAR SCROLL EFFECT ========= */
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(7,20,40,0.95)";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        nav.style.background = "rgba(11,29,58,0.85)";
        nav.style.boxShadow = "none";
    }
});


/* ========= SMOOTH SCROLL ========= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


/* ========= BUTTON CLICK EFFECT ========= */
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});


/* ========= SCROLL REVEAL ANIMATION ========= */
const revealElements = document.querySelectorAll(".card, .section-title");

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

window.addEventListener("scroll", revealOnScroll);


/* ========= INITIAL STATE REVEAL ========= */
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
});


/* ========= SCROLL TO TOP BUTTON ========= */
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#d4af37";
scrollBtn.style.color = "#0b1d3a";
scrollBtn.style.fontWeight = "bold";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.boxShadow = "0 0 20px rgba(212,175,55,0.6)";
scrollBtn.style.zIndex = "999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
