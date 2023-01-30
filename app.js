const title = document.querySelector(".hello h1");
console.dir(title);
function handleTitleClick() {
    const currentColor = title.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    title.style.color = newColor;
}
function handleMouseEvent() {
    title.innerHTML = "Mouse is here!";
}
function handleMouseLeave() {
    title.innerHTML = "Mouse is gone!";
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier!");
}
function handleWindowOffline() {
    alert("SOS no WIFI");
}
function handleWindowOnline() {
    alert("All good");
}
//title.addEventListener("click", handleTitleClick);
//title.addEventListener("mouseenter", handleMouseEvent);
//title.addEventListener("mouseleave", handleMouseLeave);

title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEvent;
title.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);