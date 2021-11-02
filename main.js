const sec = document.querySelector(".seconds");
const min = document.querySelector(".minute");
const hours = document.querySelector(".hours");

function myFunction() {
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();

    sec.style.transform = `rotate(${180 + (second * 6)}deg)`
    min.style.transform = `rotate(${180 + (minute * 6)}deg)`
    hours.style.transform = `rotate(${180 + (hour * 30)}deg)`
}

function digitalClock(){
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();
    if(minute<10){
        minute = "0" + minute
    }
    if(second<10){
        second = "0" + second
    }



    var time = hour + ":" + minute + ":" + second
    document.getElementById("digital-clock").innerText = time
    setTimeout(digitalClock, 1000)
}


digitalClock()
setInterval(myFunction, 1000);

