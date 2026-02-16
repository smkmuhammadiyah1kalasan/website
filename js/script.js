/* =====================================================
   SMK MUHAMMADIYAH 1 KALASAN
   PREMIUM LUXURY STYLE
===================================================== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');

:root {
    --primary: #0d47a1;
    --secondary: #1565c0;
    --accent: #00c853;
    --gold: #ffd700;
    --dark: #0a0f1c;
    --light: #ffffff;
    --text: #333;
}

/* DARK MODE VARIABLES */
body.dark {
    --primary: #111827;
    --secondary: #1f2937;
    --light: #0f172a;
    --text: #f3f4f6;
}

/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: var(--light);
    color: var(--text);
    transition: 0.4s ease;
    overflow-x: hidden;
}

/* =====================================================
   NAVBAR
===================================================== */

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 50px;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(12px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    transition: 0.4s;
}

.navbar.scrolled {
    background: var(--primary);
}

.logo {
    font-weight: 800;
    font-size: 22px;
    color: white;
    letter-spacing: 1px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
}

.nav-links li a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    position: relative;
    transition: 0.3s;
}

.nav-links li a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background: var(--gold);
    left: 0;
    bottom: -5px;
    transition: 0.3s;
}

.nav-links li a:hover::after {
    width: 100%;
}

.nav-links li a:hover {
    color: var(--gold);
}

/* HAMBURGER */
.hamburger {
    display: none;
    font-size: 28px;
    color: white;
    cursor: pointer;
}

/* =====================================================
   HERO SECTION
===================================================== */

.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
        url('../images/hero.jpg') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px;
    color: white;
}

.hero-content h1 {
    font-size: 20px;
    letter-spacing: 3px;
    animation: fadeDown 1.2s ease;
}

.hero-content h2 {
    font-size: 50px;
    margin: 20px 0;
    font-weight: 800;
    background: linear-gradient(90deg, #ffd700, #00e5ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeUp 1.5s ease;
}

.hero-content p {
    max-width: 700px;
    margin: auto;
    opacity: 0.9;
    animation: fadeUp 1.8s ease;
}

.btn-primary {
    margin-top: 30px;
    padding: 15px 35px;
    border-radius: 40px;
    border: none;
    font-weight: 600;
    background: linear-gradient(45deg, #ffd700, #ff9100);
    color: black;
    cursor: pointer;
    transition: 0.4s;
}

.btn-primary:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px #ffd700;
}

/* =====================================================
   SECTION TITLE
===================================================== */

.section-title {
    text-align: center;
    font-size: 40px;
    margin-bottom: 60px;
    font-weight: 800;
    color: var(--primary);
}

/* =====================================================
   JURUSAN CARDS
===================================================== */

.jurusan {
    padding: 120px 50px;
    background: #f5f7fa;
}

.card-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.card {
    width: 320px;
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
}

.card::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background: linear-gradient(45deg, transparent, rgba(0,0,0,0.05), transparent);
    transform: rotate(45deg);
    top: -100%;
    left: -100%;
    transition: 0.6s;
}

.card:hover::before {
    top: 100%;
    left: 100%;
}

.card:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 40px rgba(0,0,0,0.2);
}

.card h3 {
    margin-bottom: 15px;
    color: var(--primary);
}

.card p {
    font-size: 14px;
    line-height: 1.7;
}

/* =====================================================
   FOOTER
===================================================== */

footer {
    background: var(--dark);
    color: white;
    padding: 70px 50px 30px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-section h3 {
    margin-bottom: 20px;
    color: var(--gold);
}

.footer-section p,
.footer-section a {
    font-size: 14px;
    color: #ccc;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
}

.footer-section a:hover {
    color: white;
}

.footer-bottom {
    text-align: center;
    margin-top: 40px;
    border-top: 1px solid #444;
    padding-top: 20px;
    font-size: 13px;
}

/* =====================================================
   ANIMATIONS
===================================================== */

@keyframes fadeDown {
    from {opacity:0; transform:translateY(-40px);}
    to {opacity:1; transform:translateY(0);}
}

@keyframes fadeUp {
    from {opacity:0; transform:translateY(40px);}
    to {opacity:1; transform:translateY(0);}
}

/* =====================================================
   RESPONSIVE DESIGN
===================================================== */

@media (max-width: 992px) {
    .hero-content h2 {
        font-size: 36px;
    }
}

@media (max-width: 768px) {

    .navbar {
        padding: 15px 20px;
    }

    .hamburger {
        display: block;
    }

    .nav-links {
        position: absolute;
        right: -100%;
        top: 70px;
        background: rgba(0,0,0,0.9);
        width: 200px;
        height: 100vh;
        flex-direction: column;
        padding-top: 40px;
        transition: 0.4s;
    }

    .nav-links.active {
        right: 0;
    }

    .nav-links li {
        margin: 20px 0;
    }

    .hero-content h2 {
        font-size: 28px;
    }

    .section-title {
        font-size: 28px;
    }

    .card {
        width: 95%;
    }

    .jurusan {
        padding: 100px 20px;
    }

    footer {
        padding: 50px 20px;
    }

    .footer-content {
        flex-direction: column;
        gap: 30px;
    }
}
