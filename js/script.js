// Menambahkan efek smooth scrolling untuk semua link internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efek sederhana saat halaman dimuat
window.addEventListener('load', () => {
    console.log("Website SMK Muhammadiyah 1 Kalasan siap!");
});

// Penjelasan Detail Jurusan (Bisa dipanggil via alert atau modal nanti)
const detailJurusan = {
    teknika: "Teknika Kapal Niaga: Mempelajari cara kerja mesin induk dan bantu, sistem perpipaan, listrik kapal, dan manajemen permesinan untuk menjadi engineer handal di laut.",
    nautika: "Nautika Kapal Niaga: Fokus pada ilmu navigasi, olah gerak kapal, radar, peta laut, dan aturan keselamatan internasional (IMO) untuk menjadi perwira dek.",
    musik: "Seni Musik Modern: Fokus pada teknik vokal, instrumen band, produksi musik digital, serta manajemen panggung dan industri musik kreatif."
};

// Contoh interaksi tombol (bisa diganti dengan pindah halaman)
// Di HTML sudah menggunakan onclick="location.href='...'"
