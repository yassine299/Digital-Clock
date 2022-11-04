// Display Local time
window.onload = displayClock();

function displayClock() {
    var time = new Date().toLocaleTimeString();
    var date = new Date().toLocaleDateString();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;

    if(time.includes("PM")){
        document.getElementById("hi").innerHTML = "Good Morning";
    }
    else{
        document.getElementById("hi").innerHTML = "Good Evening";
    }

    setTimeout(displayClock, 1000);
}
