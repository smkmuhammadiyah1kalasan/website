/* ==========================================
   SMK MUHAMMADIYAH 1 KALASAN
   PROFESSIONAL WEBSITE
   JS PART 1 - SAFE & STABLE
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website SMK Muhammadiyah 1 Kalasan Loaded Successfully ✅");

    /* ===============================
       SCROLL TO TOP BUTTON
    =============================== */
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
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

    /* ===============================
       SIMPLE COUNTER ANIMATION
    =============================== */
    const counters = document.querySelectorAll(".counter");

    const runCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        const speed = 200;
        const increment = target / speed;

        let count = 0;

        const updateCounter = () => {
            count += increment;

            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    counters.forEach(counter => {
        observer.observe(counter);
    });

    /* ===============================
       SIMPLE LOADER
    =============================== */
    const loader = document.getElementById("loader-wrapper");

    if (loader) {
        window.addEventListener("load", function () {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 500);
        });
    }

    /* ===============================
       DARK MODE TOGGLE (OPTIONAL)
    =============================== */
    const darkToggle = document.getElementById("darkModeToggle");

    if (darkToggle) {
        darkToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

});
