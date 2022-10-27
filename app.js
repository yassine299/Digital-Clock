// Display Local time
window.onload = displayClock();

function displayClock() {
    var time = new Date().toLocaleTimeString();
    var date = new Date().toLocaleDateString();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;

    setTimeout(displayClock, 1000);
}