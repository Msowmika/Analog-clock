let modeSwitch = document.querySelector(".mode-switch")
let body = document.querySelector("body")

modeSwitch.addEventListener("click",() => {
    document.body.classList.toggle("dark-mode")
    modeSwitch.textContent = document.body.classList.contains("dark-mode") ? "Dark mode" : "Light mode"
})

function updateClock(){
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const hourDeg = (hours * 30) + (minutes * 0.5);
    //hours= 360/12 = 30deg per hr and minutes also moves with hours 30/60=0.5deg per minute
    const minDeg = (minutes * 6) + (seconds * 0.1);
    //minutes = 360/60 = 6deg per minute and seconds also moves with minutes 6/60= 0.1deg per sec
    const secDeg = (seconds * 6)

    document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`
    document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minDeg}deg)`
    document.getElementById("second").style.transform = `translateX(-50%) rotate(${secDeg}deg)`
}

setInterval(updateClock,1000)

updateClock()