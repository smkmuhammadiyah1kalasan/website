/* =====================================================
   SMK MUHAMMADIYAH 1 KALASAN
   PROFESSIONAL MARITIME WEBSITE
   POWERFULL JS PART 1
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("🚀 SMK Muhammadiyah 1 Kalasan Website Loaded Successfully");

/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */
    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header?.classList.add("scrolled");
        } else {
            header?.classList.remove("scrolled");
        }
    });

/* =====================================================
   SCROLL TO TOP BUTTON
===================================================== */
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 400) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        });

        scrollBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

/* =====================================================
   DARK MODE SYSTEM (SAVED)
===================================================== */
    const darkToggle = document.getElementById("darkModeToggle");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    darkToggle?.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.removeItem("darkMode");
        }
    });

/* =====================================================
   COUNTER ANIMATION (SMOOTH)
===================================================== */
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);

            counter.textContent = value;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        }

        requestAnimationFrame(update);
    };

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    counters.forEach(counter => counterObserver.observe(counter));

/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);

/* =====================================================
   LOADER FADE OUT
===================================================== */
    const loader = document.getElementById("loader-wrapper");

    window.addEventListener("load", function () {
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 800);
        }
    });

/* =====================================================
   CUSTOM CURSOR PREMIUM
===================================================== */
    const cursor = document.querySelector(".custom-cursor");
    const trail = document.querySelector(".cursor-trail");

    if (cursor && trail) {

        document.addEventListener("mousemove", function (e) {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            setTimeout(() => {
                trail.style.left = e.clientX + "px";
                trail.style.top = e.clientY + "px";
            }, 80);
        });

        document.querySelectorAll("a, button").forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursor.style.transform = "scale(1.5)";
                trail.style.transform = "scale(1.5)";
            });

            el.addEventListener("mouseleave", () => {
                cursor.style.transform = "scale(1)";
                trail.style.transform = "scale(1)";
            });
        });
    }

/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */
    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .btn-cta");

    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            const circle = document.createElement("span");
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
            circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
            circle.classList.add("ripple");

            const ripple = button.getElementsByClassName("ripple")[0];
            if (ripple) {
                ripple.remove();
            }

            button.appendChild(circle);
        });
    });

});
/* =====================================================
   JS PART 2 ULTRA EFFECT
   PARALLAX + 3D TILT + MARINE ANIMATION
===================================================== */

/* ==============================
   HERO SCROLL PARALLAX
============================== */
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    if (!heroSection) return;

    const scrollPosition = window.pageYOffset;
    heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});


/* ==============================
   HERO MOUSE PARALLAX EFFECT
============================== */
const heroContent = document.querySelector(".hero-content");

if (heroContent) {
    heroSection?.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        heroContent.style.transform = `translate(${x}px, ${y}px)`;
    });

    heroSection?.addEventListener("mouseleave", () => {
        heroContent.style.transform = `translate(0px, 0px)`;
    });
}


/* ==============================
   3D TILT CARD EFFECT
============================== */
const tiltCards = document.querySelectorAll(".fasilitas-card, .testimoni-card, .ppdb-info");

tiltCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 15) * -1;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    });

});


/* ==============================
   FLOATING MARINE OBJECT
============================== */
const floatElements = document.querySelectorAll(".float-marine");

floatElements.forEach(el => {
    let angle = 0;

    function animateFloat() {
        angle += 0.02;
        el.style.transform = `translateY(${Math.sin(angle) * 10}px)`;
        requestAnimationFrame(animateFloat);
    }

    animateFloat();
});


/* ==============================
   SMOOTH SCROLL FOR ANCHOR LINK
============================== */
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
