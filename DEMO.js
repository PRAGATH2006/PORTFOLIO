
window.onload = function () {
    alert("👋 Welcome to Pragathi's Portfolio!");
};
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.style.color = "white";
        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#facc15";
        }
    });
});

const footer = document.querySelector("footer p");
footer.innerHTML = `© ${new Date().getFullYear()} Pragathi | All Rights Reserved`;