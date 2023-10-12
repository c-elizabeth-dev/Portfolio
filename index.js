document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the link and the container
    const showContainerAbout = document.getElementById("showContainer-about");
    const hiddenContainerAbout = document.getElementById("hiddenContainer-about");

    // Add a click event listener to the link
    showContainerAbout.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the link from navigating

        // Check if the container is currently hidden
        if (hiddenContainerAbout.style.display === "none") {
            // Show the container
            hiddenContainerAbout.style.display = "block";
        } else {
            // Hide the container
            hiddenContainerAbout.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the link and the container
    const showContainerSkills = document.getElementById("showContainer-skills");
    const hiddenContainerSkills = document.getElementById("hiddenContainer-skills");

    // Add a click event listener to the link
    showContainerSkills.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the link from navigating

        // Check if the container is currently hidden
        if (hiddenContainerSkills.style.display === "none") {
            // Show the container
            hiddenContainerSkills.style.display = "block";
        } else {
            // Hide the container
            hiddenContainerSkills.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the link and the container
    const showContainerProjects = document.getElementById("showContainer-projects");
    const hiddenContainerProjects = document.getElementById("hiddenContainer-projects");

    // Add a click event listener to the link
    showContainerProjects.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the link from navigating

        // Check if the container is currently hidden
        if (hiddenContainerProjects.style.display === "none") {
            // Show the container
            hiddenContainerProjects.style.display = "block";
        } else {
            // Hide the container
            hiddenContainerProjects.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the link and the container
    const showContainerContact = document.getElementById("showContainer-contact");
    const hiddenContainerContact = document.getElementById("hiddenContainer-contact");

    // Add a click event listener to the link
    showContainerContact.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the link from navigating

        // Check if the container is currently hidden
        if (hiddenContainerContact.style.display === "none") {
            // Show the container
            hiddenContainerContact.style.display = "block";
        } else {
            // Hide the container
            hiddenContainerContact.style.display = "block";
        }
    });
});

