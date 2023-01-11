const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const sidebarView = document.getElementById("sidebarView");

menuClose.style.display = "none";
menuOpen.onclick = function () {
    menuClose.style.display = "block";
    sidebarView.style.display = "flex";
    menuOpen.style.display = "none";
}
menuClose.onclick = function () {
    menuClose.style.display = "none";
    sidebarView.style.display = "none";
    menuOpen.style.display = "block";
}
