let dayel = document.getElementById("day")
let hoursel = document.getElementById("hours")
let minsel = document.getElementById("mins")
let secondel = document.getElementById("second")

const newyear = "1 jan 2025"

function countdown() {

    let newyeardate = new Date(newyear);
    let currentdate = new Date();

    const totalsecond = (newyeardate - currentdate) / 1000;
    const days = Math.floor(totalsecond / 3600 / 24);
    const hours = Math.floor(totalsecond / 3600) % 24;
    const minutes = Math.floor(totalsecond / 60) % 60;
    const second = Math.floor(totalsecond) % 60

    // console.log(days, hours, minutes, second);

    dayel.innerHTML=timeformate(days);
    hoursel.innerHTML=timeformate(hours);
    minsel.innerHTML=timeformate(minutes);
    secondel.innerHTML=timeformate(second);
}
function timeformate(time) {
    return time<10 ? `0${time}`:time;
}
countdown();

setInterval(countdown, 1000)
