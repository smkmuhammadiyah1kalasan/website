/* ===================================================== */
/* PRELOADER                                              */
/* ===================================================== */

window.addEventListener("load", function() {
    const loader = document.getElementById("preloader");
    if(loader){
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }
});


/* ===================================================== */
/* COUNTER ANIMATION                                      */
/* ===================================================== */

const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            let count = 0;

            const updateCounter = () => {
                const increment = target / 100;

                if(count < target){
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* ===================================================== */
/* NAVBAR SCROLL EFFECT                                   */
/* ===================================================== */

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if(window.scrollY > 50){
        navbar.style.background = "#0f4c81";
        navbar.style.color = "#fff";
    } else {
        navbar.style.background = "rgba(255,255,255,0.9)";
    }
});


/* ===================================================== */
/* SMOOTH SCROLL LINK                                     */
/* ===================================================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


/* ===================================================== */
/* SHIP FLOATING EFFECT (GOYANG)                          */
/* ===================================================== */

const ship = document.querySelector(".ship");

let angle = 0;

function floatShip(){
    angle += 0.05;
    if(ship){
        ship.style.transform = `translateY(${Math.sin(angle)*10}px) rotate(${Math.sin(angle)*2}deg)`;
    }
    requestAnimationFrame(floatShip);
}

floatShip();

/* ===================================================== */
/* 3D TILT EFFECT CARD                                    */
/* ===================================================== */

const tiltCards = document.querySelectorAll(
    ".stat-card, .testimonial-card, .fasilitas-card, .jurusan-box"
);

tiltCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        card.style.transition = "0.1s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
        card.style.transition = "0.5s";
    });
});


/* ===================================================== */
/* GALLERY POPUP MODAL                                    */
/* ===================================================== */

const galleryItems = document.querySelectorAll(".gallery-item");

const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = 0;
modal.style.left = 0;
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.8)";
modal.style.display = "none";
modal.style.alignItems = "center";
modal.style.justifyContent = "center";
modal.style.zIndex = "9999";

const modalContent = document.createElement("div");
modalContent.style.width = "60%";
modalContent.style.height = "60%";
modalContent.style.background = "linear-gradient(135deg,#4facfe,#00c6ff)";
modalContent.style.borderRadius = "20px";

modal.appendChild(modalContent);
document.body.appendChild(modal);

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});


/* ===================================================== */
/* DARK MODE MANUAL TOGGLE                                */
/* ===================================================== */

const darkToggle = document.createElement("button");
darkToggle.innerText = "🌙";
darkToggle.style.position = "fixed";
darkToggle.style.bottom = "100px";
darkToggle.style.right = "25px";
darkToggle.style.width = "50px";
darkToggle.style.height = "50px";
darkToggle.style.borderRadius = "50%";
darkToggle.style.border = "none";
darkToggle.style.cursor = "pointer";
darkToggle.style.background = "#0f4c81";
darkToggle.style.color = "white";
darkToggle.style.fontSize = "20px";
darkToggle.style.zIndex = "999";

document.body.appendChild(darkToggle);

let darkMode = false;

darkToggle.addEventListener("click", () => {
    darkMode = !darkMode;

    if(darkMode){
        document.body.style.background = "#0a192f";
        document.body.style.color = "white";
        darkToggle.innerText = "☀";
    } else {
        document.body.style.background = "";
        document.body.style.color = "";
        darkToggle.innerText = "🌙";
    }
});


/* ===================================================== */
/* HERO PARALLAX SCROLL                                   */
/* ===================================================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");
    let scrollPosition = window.pageYOffset;

    if(hero){
        hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    }

});


/* ===================================================== */
/* SOUND AMBIENCE LAUT (OPTIONAL)                         */
/* ===================================================== */

const seaSound = new Audio("https://www.soundjay.com/nature/sounds/ocean-wave-1.mp3");
seaSound.loop = true;

const soundButton = document.createElement("button");
soundButton.innerText = "🔊";
soundButton.style.position = "fixed";
soundButton.style.bottom = "170px";
soundButton.style.right = "25px";
soundButton.style.width = "50px";
soundButton.style.height = "50px";
soundButton.style.borderRadius = "50%";
soundButton.style.border = "none";
soundButton.style.cursor = "pointer";
soundButton.style.background = "#4facfe";
soundButton.style.color = "white";
soundButton.style.fontSize = "20px";
soundButton.style.zIndex = "999";

document.body.appendChild(soundButton);

let soundOn = false;

soundButton.addEventListener("click", () => {

    soundOn = !soundOn;

    if(soundOn){
        seaSound.play();
        soundButton.innerText = "🔈";
    } else {
        seaSound.pause();
        soundButton.innerText = "🔊";
    }

});
/* ===================================================== */
/* CINEMATIC PRELOADER ANIMATION                          */
/* ===================================================== */

const cinematicPreloader = document.createElement("div");
cinematicPreloader.id = "preloader";
cinematicPreloader.style.position = "fixed";
cinematicPreloader.style.top = 0;
cinematicPreloader.style.left = 0;
cinematicPreloader.style.width = "100%";
cinematicPreloader.style.height = "100%";
cinematicPreloader.style.background = "linear-gradient(to bottom,#4facfe,#0f4c81)";
cinematicPreloader.style.display = "flex";
cinematicPreloader.style.alignItems = "center";
cinematicPreloader.style.justifyContent = "center";
cinematicPreloader.style.flexDirection = "column";
cinematicPreloader.style.zIndex = "10000";
cinematicPreloader.style.transition = "1s";

const loaderShip = document.createElement("div");
loaderShip.innerHTML = "🚢";
loaderShip.style.fontSize = "60px";
loaderShip.style.animation = "sailLoader 2s infinite alternate ease-in-out";

cinematicPreloader.appendChild(loaderShip);
document.body.appendChild(cinematicPreloader);

const loaderStyle = document.createElement("style");
loaderStyle.innerHTML = `
@keyframes sailLoader {
    0% { transform: translateX(-20px) rotate(-5deg); }
    100% { transform: translateX(20px) rotate(5deg); }
}`;
document.head.appendChild(loaderStyle);

window.addEventListener("load", () => {
    setTimeout(() => {
        cinematicPreloader.style.opacity = "0";
        setTimeout(() => cinematicPreloader.remove(), 1000);
    }, 1500);
});


/* ===================================================== */
/* SMOOTH INERTIA SCROLL                                  */
/* ===================================================== */

let currentScroll = 0;
let targetScroll = 0;
const ease = 0.08;

function smoothScroll() {
    targetScroll = window.scrollY;
    currentScroll += (targetScroll - currentScroll) * ease;
    document.body.style.transform = `translateY(${-currentScroll}px)`;
    requestAnimationFrame(smoothScroll);
}

document.body.style.willChange = "transform";
smoothScroll();


/* ===================================================== */
/* MOUSE GLOW EFFECT                                      */
/* ===================================================== */

const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width = "200px";
glow.style.height = "200px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = "radial-gradient(circle, rgba(79,172,254,0.4) 0%, rgba(0,0,0,0) 70%)";
glow.style.transform = "translate(-50%, -50%)";
glow.style.zIndex = "0";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});


/* ===================================================== */
/* WATER PARTICLE EFFECT                                  */
/* ===================================================== */

function createParticle() {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.bottom = "0";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.background = "rgba(255,255,255,0.7)";
    particle.style.borderRadius = "50%";
    particle.style.zIndex = "1";
    particle.style.pointerEvents = "none";

    document.body.appendChild(particle);

    let rise = 0;
    const speed = Math.random() * 2 + 1;

    function animateParticle() {
        rise += speed;
        particle.style.bottom = rise + "px";
        particle.style.opacity = 1 - rise / 300;

        if (rise < 300) {
            requestAnimationFrame(animateParticle);
        } else {
            particle.remove();
        }
    }

    animateParticle();
}

setInterval(createParticle, 300);


/* ===================================================== */
/* SECTION TRANSITION FADE BETWEEN SCROLL                 */
/* ===================================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom > 0){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "1s";
        } else {
            section.style.opacity = "0.5";
            section.style.transform = "translateY(40px)";
        }
    });
});


/* ===================================================== */
/* HERO TEXT CINEMATIC ENTRANCE                           */
/* ===================================================== */

const heroTitle = document.querySelector(".hero h1");
const heroText = document.querySelector(".hero p");

if(heroTitle){
    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(50px)";
}

if(heroText){
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(50px)";
}

window.addEventListener("load", () => {

    setTimeout(() => {
        if(heroTitle){
            heroTitle.style.transition = "1s";
            heroTitle.style.opacity = "1";
            heroTitle.style.transform = "translateY(0)";
        }
    }, 500);

    setTimeout(() => {
        if(heroText){
            heroText.style.transition = "1s";
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        }
    }, 1000);

});
