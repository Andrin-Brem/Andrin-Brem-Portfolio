const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
sections.forEach(section => {
    observer.observe(section);
});
const homeButton = document.getElementById("homeButton");
const impressum = document.getElementById("impressum");

window.addEventListener("scroll", () => {
    const impressumTop = impressum.offsetTop;

    if (window.scrollY + window.innerHeight >= impressumTop) {
        homeButton.classList.add("hide-home");
    } else {
        homeButton.classList.remove("hide-home");
    }
});
const scrollElements = document.querySelectorAll(".scroll-text");

const scrollObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

scrollElements.forEach(function(element) {
    scrollObserver.observe(element);
});