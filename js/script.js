// ============================
// JAM DIGITAL
// ============================

function updateClock(){
    const now = new Date();

    const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    const day = days[now.getDay()];
    const date = now.toLocaleDateString("id-ID");
    const time = now.toLocaleTimeString("id-ID");

    document.getElementById("clock-day").innerHTML = day;
    document.getElementById("clock-date").innerHTML = date;
    document.getElementById("clock-time").innerHTML = time;
}

setInterval(updateClock,1000);


// ============================
// SCROLL FADE UP
// ============================

const fadeElements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll',()=>{
    fadeElements.forEach(el=>{
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){
            el.classList.add('active');
        }
    });
});


// ============================
// CHART.JS
// ============================

const ctx = document.getElementById('jurusanChart');

if(ctx){
new Chart(ctx,{
    type:'doughnut',
    data:{
        labels:['Nautika Kapal Niaga','Teknika Kapal Niaga','Seni Musik'],
        datasets:[{
            data:[45,35,20],
        }]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{
                labels:{
                    color:'#fff'
                }
            }
        }
    }
});
}
