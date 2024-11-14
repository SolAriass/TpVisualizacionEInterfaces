function toggleDarkMode() {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    // Lo guarda en localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (
        savedTheme === "dark" ||
        (!savedTheme &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

applySavedTheme();

document.querySelector(".darkMode").addEventListener("click", toggleDarkMode);
console.log(document.querySelector(".darkMode"))