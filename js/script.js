// ================= JAM DIGITAL =================
function updateClock() {
    const now = new Date();

    const hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    const bulan = ["Januari","Februari","Maret","April","Mei","Juni",
                   "Juli","Agustus","September","Oktober","November","Desember"];

    const h = hari[now.getDay()];
    const tanggal = now.getDate();
    const b = bulan[now.getMonth()];
    const tahun = now.getFullYear();

    let jam = now.getHours();
    let menit = now.getMinutes();
    let detik = now.getSeconds();

    jam = jam < 10 ? "0" + jam : jam;
    menit = menit < 10 ? "0" + menit : menit;
    detik = detik < 10 ? "0" + detik : detik;

    document.getElementById("digital-clock").innerHTML =
        jam + ":" + menit + ":" + detik + " WIB";

    document.getElementById("date-info").innerHTML =
        h + ", " + tanggal + " " + b + " " + tahun;
}

setInterval(updateClock, 1000);
updateClock();


// ================= COUNTER ANIMASI STATISTIK =================
const counters = document.querySelectorAll(".stat-item h3");

counters.forEach(counter => {
    const target = counter.innerText.replace('%','');
    let count = 0;
    const speed = 50;

    const updateCounter = () => {
        const increment = target / speed;
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count) + (counter.innerText.includes('%') ? '%' : '');
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target + (counter.innerText.includes('%') ? '%' : '');
        }
    };

    updateCounter();
});


// ================= CHART DATA =================
const ctx = document.getElementById("chartSekolah").getContext("2d");

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Siswa', 'Guru', 'Kelulusan %'],
        datasets: [{
            label: 'Data Statistik Sekolah',
            data: [850, 65, 95],
            backgroundColor: [
                '#0077b6',
                '#00b4d8',
                '#90e0ef'
            ],
            borderRadius: 10
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 2000
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});


// ================= ANIMASI SCROLL MUNCUL =================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 1s ease";
    observer.observe(section);
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
