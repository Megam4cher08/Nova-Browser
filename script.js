document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(
        ".download-btn, .big-download"
    );

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            console.log("Nova Browser Download gestartet.");

        });

    });

});
