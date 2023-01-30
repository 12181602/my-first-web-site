const title = document.querySelector(".hello h1");
console.dir(title);
function handleTitleClick() {
    title.style.color = "blue";
}
function handleMouseEvent() {
    title.innerHTML = "Mouse is here!";
}
function handleMouseLeave() {
    title.innerHTML = "Mouse is gone!";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEvent);
title.addEventListener("mouseleave", handleMouseLeave);
