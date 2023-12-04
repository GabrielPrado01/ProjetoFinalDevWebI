
    document.addEventListener("DOMContentLoaded", function () {
        const genreSelector = document.getElementById("genreSelector");

        genreSelector.addEventListener("click", function () {
            genreSelector.size = genreSelector.size === 1 ? genreSelector.length : 1;
        });
    });
