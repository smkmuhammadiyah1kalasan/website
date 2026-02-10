/* =====================================================
   AI FUTURE WEBSITE - SCRIPT.JS
   Version : Premium Full
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SMOOTH ACTIVE NAV LINK ON SCROLL
    ========================================= */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (pageYOffset >= sectionTop) {
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

    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
    });

    /* =========================================
       FADE IN ELEMENT ON SCROLL
    ========================================= */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll(
        ".hero h1, .hero p, .btn, .feature-card, .plan, footer"
    ).forEach(el => observer.observe(el));

    /* =========================================
       BUTTON RIPPLE EFFECT
    ========================================= */
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function (e) {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");

            const rect = this.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    /* =========================================
       PRICING HOVER SOUND (OPTIONAL)
       (aktif jika file sound ada)
    ========================================= */
    const plans = document.querySelectorAll(".plan");

    plans.forEach(plan => {
        plan.addEventListener("mouseenter", () => {
            plan.classList.add("glow");
        });

        plan.addEventListener("mouseleave", () => {
            plan.classList.remove("glow");
        });
    });

    /* =========================================
       SCROLL TO TOP BUTTON
    ========================================= */
    const scrollBtn = document.createElement("div");
    scrollBtn.innerHTML = "⬆";
    scrollBtn.className = "scroll-top";
    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /* =========================================
       DYNAMIC YEAR FOOTER
    ========================================= */
    const footer = document.querySelector("footer p");
    if (footer) {
        footer.innerHTML = `© ${new Date().getFullYear()} AI Future Platform | Dibuat dengan ❤️ & Teknologi`;
    }

});

/* =====================================================
   EXTRA: MOBILE MENU (OPTIONAL FUTURE READY)
===================================================== */

// Jika nanti ditambahkan tombol hamburger
function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("open");
}

/* =====================================================
   UTILITY: SIMPLE CONSOLE BRANDING 😎
===================================================== */
console.log(
    "%c⚡ AI FUTURE PLATFORM\n%cPowered by Futuristic Web Tech",
    "color:#00f5ff; font-size:20px; font-weight:bold;",
    "color:#00ff9d; font-size:14px;"
);
