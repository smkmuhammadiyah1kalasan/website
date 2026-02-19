/* ===================================================== */
/* ================== LOADING SCREEN =================== */
/* ===================================================== */

// Membuat loading sederhana saat halaman dibuka
window.addEventListener("load", function(){
    const loader = document.createElement("div");
    loader.id = "loader";
    loader.style.position = "fixed";
    loader.style.width = "100%";
    loader.style.height = "100%";
    loader.style.background = "black";
    loader.style.display = "flex";
    loader.style.justifyContent = "center";
    loader.style.alignItems = "center";
    loader.style.color = "white";
    loader.style.fontSize = "24px";
    loader.innerHTML = "Loading Website...";
    document.body.appendChild(loader);

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s";
        setTimeout(() => loader.remove(), 500);
    }, 1200);
});


/* ===================================================== */
/* ================== SMOOTH SCROLL ==================== */
/* ===================================================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


/* ===================================================== */
/* ================== NAVBAR SCROLL EFFECT ============= */
/* ===================================================== */

window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(0,0,0,0.85)";
        navbar.style.boxShadow = "0 0 20px rgba(0,255,255,0.6)";
    }else{
        navbar.style.background = "rgba(255,255,255,0.08)";
        navbar.style.boxShadow = "none";
    }
});


/* ===================================================== */
/* ================== REVEAL ANIMATION ================= */
/* ===================================================== */

function reveal(){
    const reveals = document.querySelectorAll("section, .card");

    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
            reveals[i].style.transition = "0.6s ease";
        }else{
            reveals[i].style.opacity = "0";
            reveals[i].style.transform = "translateY(50px)";
        }
    }
}

window.addEventListener("scroll", reveal);


/* ===================================================== */
/* ================== 3D CARD TILT EFFECT ============== */
/* ===================================================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 15);
        const rotateY = ((centerX - x) / 15);

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});


/* ===================================================== */
/* ================== VIDEO AUTO PLAY ================== */
/* ===================================================== */

const video = document.querySelector("video");

if(video){
    window.addEventListener("scroll", () => {
        const rect = video.getBoundingClientRect();
        if(rect.top >= 0 && rect.bottom <= window.innerHeight){
            video.play();
        }else{
            video.pause();
        }
    });
}


/* ===================================================== */
/* ================== TYPING EFFECT ==================== */
/* ===================================================== */

const heroTitle = document.querySelector(".hero-text h1");

if(heroTitle){
    const text = heroTitle.innerText;
    heroTitle.innerText = "";
    let i = 0;

    function typeEffect(){
        if(i < text.length){
            heroTitle.innerText += text.charAt(i);
            i++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
}


/* ===================================================== */
/* ================== BACK TO TOP BUTTON =============== */
/* ===================================================== */

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.padding = "10px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00e0ff";
topBtn.style.color = "black";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
