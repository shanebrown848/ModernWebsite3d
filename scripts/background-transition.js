document.addEventListener("DOMContentLoaded", function () {
    const background = document.querySelector(".background-animation");
    const cubes = document.querySelectorAll(".cube");

    let colorToggle = false; // Track background state

    cubes.forEach((cube) => {
        cube.addEventListener("animationend", () => {
            colorToggle = !colorToggle;
            background.style.backgroundColor = colorToggle ? "black" : "white";
        });
    });
});
