// Wait for DOM and all critical resources
window.addEventListener('DOMContentLoaded', function() {
    // Apply transitions only after initial render
    setTimeout(function() {
        document.documentElement.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
        document.querySelectorAll('*').forEach(function(el) {
            el.style.transition = 'background-color 0.8s cubic-bezier(0.19, 1, 0.22, 1), ' +
                                 'color 0.8s cubic-bezier(0.19, 1, 0.22, 1), ' +
                                 'box-shadow 0.8s cubic-bezier(0.19, 1, 0.22, 1), ' +
                                 'border-color 0.8s cubic-bezier(0.19, 1, 0.22, 1), ' +
                                 'opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), ' +
                                 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
        });
    }, 100);

    // Button animations
    function animateButtons() {
        if (typeof anime !== 'undefined') {
            anime({
                targets: '.button',
                translateY: [-20, 0],
                opacity: [0, 1],
                delay: anime.stagger(100, { start: 200 }),
                duration: 800,
                easing: 'easeOutQuad'
            });
        } else {
            // Fallback animation
            document.querySelectorAll('.button').forEach(function(button, index) {
                setTimeout(function() {
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                    button.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                }, 200 + (index * 100));
            });
        }
    }

    // Wait for fonts to load if possible
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function() {
            setTimeout(animateButtons, 100);
        });
    } else {
        setTimeout(animateButtons, 300);
    }
});

// Smooth mode transition
function toggleMode() {
    if (document.documentElement.classList.contains('transitioning')) return;
    
    document.documentElement.classList.add('transitioning');
    
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.toggle-button i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        try {
            localStorage.setItem('theme', 'dark');
        } catch (e) {
            console.log('Error saving theme preference:', e);
        }
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        try {
            localStorage.setItem('theme', 'light');
        } catch (e) {
            console.log('Error saving theme preference:', e);
        }
    }
    
    // Smooth icon rotation
    icon.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        icon.style.transform = 'rotate(0deg)';
    }, 800);
    
    setTimeout(() => {
        document.documentElement.classList.remove('transitioning');
    }, 800);
}

// Font loading helper
window.addEventListener('load', function() {
    // Add loaded class for font-specific styles
    setTimeout(function() {
        document.documentElement.classList.add('fonts-loaded');
    }, 500);
});