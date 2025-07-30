const hamburger = document.getElementById("hamburger");
const sideNav = document.getElementById("side-nav");
const layer = document.getElementById("layer");
const nav = document.getElementsByTagName("nav");

const searchForm = document.getElementById("search-form")
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
    searchForm.classList.toggle("active")
    searchIcon.classList.toggle("active")
    searchBox.classList.toggle("active")
})


let slideIdx = 1;

const slideShows = (n) => {
    let slide = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll(".dot");

    if (n > slide.length) {
        slideIdx = 1;
    } else if (n < 1) {
        slideIdx = slide.length;
    } else {
        slideIdx = n;
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    slide[slideIdx - 1].style.display = "block";
    dots[slideIdx - 1].classList.add("active-dot");
}


slideShows(slideIdx);

const plusSlides = (n) => {
    slideShows(slideIdx += n);
}

const currentSlide = (n) => {
    slideShows(slideIdx = n);
}










