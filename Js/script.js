// Mobile navigation
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

// Sticky header + active navigation
const header = document.querySelector(".header");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 80);

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;
        if (window.scrollY >= sectionTop) current = section.id;
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`,
        );
    });
});

// Close mobile menu after clicking a navigation item
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    });
});

// Scroll animations
if (typeof ScrollReveal !== "undefined") {
    ScrollReveal({
        distance: "60px",
        duration: 1200,
        delay: 100,
        reset: false,
    });

    ScrollReveal().reveal(".content, .section-heading", {
        origin: "top"
    });
    ScrollReveal().reveal(
        ".home-img, .skill-card, .project-box, .cert-card, .education-card, .contact form", {
            origin: "bottom",
            interval: 100
        },
    );
    ScrollReveal().reveal(".about-img, .timeline-card", {
        origin: "left"
    });
    ScrollReveal().reveal(".about-content, .contact-info", {
        origin: "right"
    });
}

// Hero typing effect
if (typeof Typed !== "undefined") {
    new Typed(".multiple-text", {
        strings: [
            "1+ Year of Professional Experience",
            "PHP & CodeIgniter Developer",
            "MySQL & REST API Developer",
            "Backend & Web Application Developer",
        ],
        typeSpeed: 55,
        backSpeed: 35,
        backDelay: 1800,
        loop: true,
    });
}