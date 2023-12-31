

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const body = document.querySelector("body");
    const navList = document.querySelector(".nav-list ul");

    hamburger.addEventListener("click", function() {
        if (body.classList.contains("menu-open")) {
            body.classList.remove("menu-open");
            navList.classList.remove("active");
        } else {
            body.classList.add("menu-open");
            navList.classList.add("active");
        }
    });

    // Get references to the section containers
    const aboutSection = document.getElementById("hiddenContainer-about");
    const skillsSection = document.getElementById("hiddenContainer-skills");
    const projectsSection = document.getElementById("hiddenContainer-projects");
    const contactSection = document.getElementById("hiddenContainer-contact");

    // Get references to the menu links
    const aboutLink = document.querySelector(".aboutlink");
    const skillsLink = document.querySelector(".skillslink");
    const projectsLink = document.querySelector(".projectslink");
    const contactLink = document.querySelector(".contactlink");

    // Function to hide all sections
    function hideAllSections() {
        aboutSection.style.display = "none";
        skillsSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none";
    }

    // Add click event listeners to show/hide sections and close the menu
    aboutLink.addEventListener("click", function() {
        hideAllSections();
        aboutSection.style.display = "flex";
        body.classList.remove("menu-open");
        navList.classList.remove("active");
    });

    skillsLink.addEventListener("click", function() {
        hideAllSections();
        skillsSection.style.display = "flex";
        body.classList.remove("menu-open");
        navList.classList.remove("active");
    });

    projectsLink.addEventListener("click", function() {
        hideAllSections();
        projectsSection.style.display = "flex";
        body.classList.remove("menu-open");
        navList.classList.remove("active");
    });

    contactLink.addEventListener("click", function() {
        hideAllSections();
        contactSection.style.display = "flex";
        body.classList.remove("menu-open");
        navList.classList.remove("active");
    });
});

// // Function to add the 'spin' class when scrolling
// function handleScroll() {
//     const elements = document.querySelectorAll('.cross, .circle, .arrow, .shape');
//     elements.forEach((element) => {
//         const rect = element.getBoundingClientRect();
//         const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
//         if (isVisible) {
//             element.classList.add('spin');
//         } else {
//             element.classList.remove('spin');
//         }
//     });
// }

// // Add a scroll event listener to trigger animation on scroll
// window.addEventListener('scroll', handleScroll);

// // Initial check to apply animation to visible elements on page load
// handleScroll();
