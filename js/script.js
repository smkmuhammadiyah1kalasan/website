/* ========================================= */
/* ============ PRELOADER ================== */
/* ========================================= */

window.addEventListener("load", () => {
const preloader = document.getElementById("preloader");

if(preloader){
setTimeout(() => {
preloader.style.opacity = "0";
preloader.style.visibility = "hidden";
}, 600);
}
});


/* ========================================= */
/* ============ MENU TOGGLE ================= */
/* ========================================= */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

if(menuToggle){
menuToggle.addEventListener("click", () => {
sidebar.classList.toggle("active");
});
}

if(closeSidebar){
closeSidebar.addEventListener("click", () => {
sidebar.classList.remove("active");
});
}


/* ========================================= */
/* ============ CLOSE SIDEBAR CLICK OUTSIDE */
/* ========================================= */

document.addEventListener("click", (e) => {

if(!sidebar) return;

if(
!sidebar.contains(e.target) &&
!menuToggle.contains(e.target)
){
sidebar.classList.remove("active");
}

});


/* ========================================= */
/* ============ SMOOTH SCROLL ============== */
/* ========================================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e){

const target = document.querySelector(this.getAttribute("href"));

if(target){
e.preventDefault();

target.scrollIntoView({
behavior:"smooth",
block:"start"
});

sidebar.classList.remove("active");
}

});

});


/* ========================================= */
/* ============ HEADER SCROLL EFFECT ======= */
/* ========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
header.style.background = "#081c33";
header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
}else{
header.style.background = "#0a2540";
header.style.boxShadow = "none";
}

});


/* ========================================= */
/* ============ SCROLL ANIMATION =========== */
/* ========================================= */

const revealElements = document.querySelectorAll(
".card, .jurusan-card, .stat-box, .galeri-item, .testimoni-card"
);

function revealOnScroll(){

const windowHeight = window.innerHeight;

revealElements.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}

});

}

window.addEventListener("scroll", revealOnScroll);


/* ========================================= */
/* ============ INIT ANIMATION STYLE ======= */
/* ========================================= */

revealElements.forEach(el => {
el.style.opacity = "0";
el.style.transform = "translateY(40px)";
el.style.transition = "0.6s ease";
});


/* ========================================= */
/* ============ HERO BUTTON CLICK ========== */
/* ========================================= */

const heroBtn = document.querySelector(".btn-primary");

if(heroBtn){
heroBtn.addEventListener("click", () => {
alert("Fitur pendaftaran akan segera tersedia.");
});
}


/* ========================================= */
/* ============ STATS COUNTER ANIMATION ==== */
/* ========================================= */

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function runCounter(){

if(counterStarted) return;

const section = document.querySelector(".stats-section");

if(!section) return;

const sectionTop = section.getBoundingClientRect().top;

if(sectionTop < window.innerHeight - 100){

counterStarted = true;

counters.forEach(counter => {

const target = parseInt(counter.innerText);
let count = 0;

const update = () => {

if(count < target){
count += Math.ceil(target / 60);
counter.innerText = count;
requestAnimationFrame(update);
}else{
counter.innerText = target + "+";
}

};

update();

});

}

}

window.addEventListener("scroll", runCounter);
