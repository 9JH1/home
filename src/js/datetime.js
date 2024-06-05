function setDateTime() {
    document.getElementById("time").innerText = new Date().toLocaleTimeString(
        'en-US', {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        hour12: true, 
    });
    document.getElementById("time").innerHTML = String(document.getElementById("time").innerHTML).replace(":", "<span class='blink'>:</span>");
}

setDateTime();

setInterval(() => {
    setDateTime();
}, 60000)
document.getElementById("date").innerHTML = `0x-0y`

document.addEventListener("mousemove", event=>{
    document.getElementById("date").innerHTML = `${event.clientX}x-${event.clientY}y`
})