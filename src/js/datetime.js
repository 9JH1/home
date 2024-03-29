function setDateTime() {
    document.getElementById("date").innerText = new Date().toLocaleDateString();
    document.getElementById("time").innerText = new Date().toLocaleTimeString(
        'en-US', {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
    document.getElementById("date").innerHTML = String(document.getElementById("date").innerHTML).replace(new RegExp("/", "gm"), "<span class='blink'>/</span>");
    document.getElementById("time").innerHTML = String(document.getElementById("time").innerHTML).replace(":", "<span class='blink'>:</span>");
}

setDateTime();



setInterval(() => {
    setDateTime();
}, 60000)