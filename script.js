document.addEventListener("DOMContentLoaded", () => {

    // Download-Buttons
    const downloadButtons = document.querySelectorAll(
        ".download-btn, .big-download"
    );

    downloadButtons.forEach(button => {

        button.addEventListener("click", () => {

            console.log(
                "Nova Browser Download gestartet."
            );

        });

    });


    // Alle Navigation-Links
    const navLinks = document.querySelectorAll(
        ".nav-links a"
    );

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
