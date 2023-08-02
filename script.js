let clock = document.getElementById("clock");
let h = document.getElementById("hour");
let m = document.getElementById('minute');
let s = document.getElementById("second")

function timeupdate(){
    // get current time;

    let now = new Date();

    // get hours, minute and second;

    let hours = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();


    // get formatted time;

    // let formattedHour = hours.toString().padEnd(2,'0');
    // let formattedMinute = minute
    // let formattedSecond = second

    //  display time;

    h.textContent = `${hours}`;
    m.textContent = `${minute}`;
    s.textContent = `${second}`;
    if(second < 10){
        s.textContent = `0${second}`
    } else if( minute < 10){
        m.textContent = `0${minute}`;
    } else if(hours < 10){
        h.textContent = `0${hours}`
    }
}

timeupdate();

setInterval(timeupdate,1000)