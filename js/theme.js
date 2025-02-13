// script.js

const checkbox = document.getElementById('themeToggle');
const body = document.body;

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        checkbox.checked = true;
    } else if (theme === 'light') {
        body.setAttribute('data-theme', 'light');
        checkbox.checked = false;
    } else {
        // No theme set, use system preference
        body.removeAttribute('data-theme');
        checkbox.checked = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}

// Function to toggle theme and save preference
function toggleTheme() {
    if (checkbox.checked) {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    }
}

// Event listener for theme toggle
checkbox.addEventListener('change', toggleTheme);

// Apply theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme);
});
