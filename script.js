// Dynamic Typing Effect
const typewriter = document.getElementById("typewriter");
const texts = ["Cloud Enthusiast"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
    if (!isDeleting && j <= texts[i].length) {
        typewriter.textContent = texts[i].substring(0, j++);
        setTimeout(typeEffect, 100); // Typing speed
    } else if (isDeleting && j >= 0) {
        typewriter.textContent = texts[i].substring(0, j--);
        setTimeout(typeEffect, 50); // Deleting speed
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % texts.length; // Move to the next text
        setTimeout(typeEffect, 1000); // Pause before switching
    }
}

typeEffect();

// Particles.js Initialization
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6
        }
    },
    retina_detect: true
});

// Scroll Animation
const sections = document.querySelectorAll(".section");
const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Offset for sticky header
            behavior: "smooth"
        });

        // Update active link
        document.querySelectorAll("nav ul li a").forEach((el) => el.classList.remove("active"));
        e.target.classList.add("active");
    });
});
