const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const sidebar = document.getElementById("sidebar");

menuOpen.onclick = function () {
    sidebar.style.display = "flex";
    menuOpen.style.display = "none";
    menuClose.style.display = "flex";
}

menuClose.onclick = function () {
    sidebar.style.display = "none";
    menuOpen.style.display = "flex";
    menuClose.style.display = "none";
}
