/* ===============================
   INTERNATIONAL CLEAN PREMIUM JS
================================= */

document.addEventListener("DOMContentLoaded", function(){

    /* ================= HAMBURGER ================= */
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });


    /* ================= NAVBAR SCROLL EFFECT ================= */
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
            navbar.style.background = "rgba(255,255,255,0.95)";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        } else {
            navbar.style.background = "rgba(255,255,255,0.8)";
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });


    /* ================= SMOOTH SCROLL ================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth"
            });
            navLinks.classList.remove("active");
        });
    });


    /* ================= SCROLL ANIMATION ================= */
    const revealElements = document.querySelectorAll("section, .jurusan-card, .guru-card, .info-card");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if(boxTop < triggerBottom){
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
    revealOnScroll();


    /* ================= 3D TILT EFFECT ================= */
    const cards = document.querySelectorAll(".jurusan-card, .guru-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / 20);
            const rotateY = ((centerX - x) / 20);

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0) rotateY(0)";
            card.style.transition = "0.5s ease";
        });

    });


    /* ================= COUNTER ANIMATION ================= */
    const counters = document.querySelectorAll(".counter");

    const runCounter = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const increment = target / 200;

            const updateCounter = () => {
                const current = +counter.innerText;

                if(current < target){
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 10);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    };

    const counterSection = document.querySelector(".statistik");

    if(counterSection){
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                runCounter();
                observer.disconnect();
            }
        });

        observer.observe(counterSection);
    }

});
