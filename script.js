const hamburger = document.getElementById("hamburger");
const sideNav = document.getElementById("side-nav");
const layer = document.getElementById("layer");
const nav = document.getElementsByTagName("nav");

const searchIcon = document.getElementById("search-icon")
const searchBox = document.getElementById("search-box")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sideNav.classList.toggle("active");
    layer.classList.toggle("active");
})


layer.addEventListener("click", () => {
    hamburger.classList.remove("active")
    sideNav.classList.remove("active")
    layer.classList.remove("active")
})

searchIcon.addEventListener("click", () => {
    searchIcon.classList.toggle("active")
    searchBox.classList.toggle("active")
})





