// src/main.js
// Anime.js animation for buttons
document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.button',
        translateY: [-20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 200 }),
        duration: 800,
        easing: 'easeOutQuad'
    });
});

// Dark/light mode toggle
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.toggle-button i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Apply saved theme on load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.toggle-button i').classList.replace('fa-moon', 'fa-sun');
    }
};