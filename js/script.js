/* ========================================= */
/* ============ LOADER ===================== */
/* ========================================= */

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});


/* ========================================= */
/* ============ BACK TO TOP ================= */
/* ========================================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* ========================================= */
/* ============ SCROLL ANIMATION ============ */
/* ========================================= */

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const triggerPoint = window.innerHeight * 0.85;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add("active");
        }
    });
});


/* ========================================= */
/* ============ CUSTOM CURSOR =============== */
/* ========================================= */

const cursor = document.querySelector(".cursor");

if (cursor) {
    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        // TRAIL EFFECT
        const trail = document.createElement("div");
        trail.classList.add("trail");
        trail.style.left = e.clientX + "px";
        trail.style.top = e.clientY + "px";
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 500);
    });
}


/* ========================================= */
/* ============ FLOATING PARTICLES ========== */
/* ========================================= */

const particlesContainer = document.querySelector(".particles");

if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
        const span = document.createElement("span");

        span.style.left = Math.random() * 100 + "vw";
        span.style.animationDuration = (5 + Math.random() * 10) + "s";
        span.style.animationDelay = Math.random() * 5 + "s";

        particlesContainer.appendChild(span);
    }
}


/* ========================================= */
/* ============ 3D CARD EFFECT ============== */
/* ========================================= */

const cards = document.querySelectorAll(".card-3d");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});


/* ========================================= */
/* ============ DARK / LIGHT MODE =========== */
/* ========================================= */

const toggleBtn = document.querySelector(".toggle-theme");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
}


/* ========================================= */
/* ============ TYPING EFFECT =============== */
/* ========================================= */

const typingElement = document.querySelector(".typing");

if (typingElement) {
    const text = typingElement.innerText;
    typingElement.innerText = "";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingElement.innerText += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}
