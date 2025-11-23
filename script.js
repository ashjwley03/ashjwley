// ==================== SMOOTH PAGE LOAD ====================
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay for smoother page load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== INTERACTIVE HIGHLIGHTS ====================
// Add interactive hover effect to highlight words
document.querySelectorAll('.highlight').forEach(highlight => {
    highlight.addEventListener('click', () => {
        // Create a ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(0, 102, 204, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        const rect = highlight.getBoundingClientRect();
        ripple.style.left = `${rect.left + rect.width / 2}px`;
        ripple.style.top = `${rect.top + rect.height / 2}px`;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== SCROLL PROGRESS INDICATOR ====================
// Create a scroll progress bar
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '3px';
progressBar.style.background = 'linear-gradient(90deg, #0066CC, #00AAFF)';
progressBar.style.zIndex = '9999';
progressBar.style.transition = 'width 0.1s ease';
progressBar.style.width = '0';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// ==================== PARALLAX SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax effect for content sections
    document.querySelectorAll('.intro, .about, .current').forEach((section, index) => {
        const speed = 0.5 + (index * 0.1);
        section.style.transform = `translateY(${scrolled * speed * 0.05}px)`;
    });
});

// ==================== CURSOR GLOW EFFECT ====================
const cursorGlow = document.createElement('div');
cursorGlow.style.position = 'fixed';
cursorGlow.style.width = '300px';
cursorGlow.style.height = '300px';
cursorGlow.style.borderRadius = '50%';
cursorGlow.style.background = 'radial-gradient(circle, rgba(0, 102, 204, 0.1) 0%, transparent 70%)';
cursorGlow.style.pointerEvents = 'none';
cursorGlow.style.transform = 'translate(-50%, -50%)';
cursorGlow.style.transition = 'opacity 0.3s ease';
cursorGlow.style.opacity = '0';
cursorGlow.style.zIndex = '9998';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

// ==================== TECH TAG INTERACTIONS ====================
document.querySelectorAll('.tech-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        // Copy tag text to clipboard
        const text = tag.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = tag.textContent;
            tag.textContent = '✓ Copied!';
            tag.style.background = '#4CAF50';
            
            setTimeout(() => {
                tag.textContent = originalText;
                tag.style.background = '';
            }, 1000);
        });
    });
});

// ==================== ANIMATED COUNTER FOR STATS ====================
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe project items and experience items for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to all animated elements
document.querySelectorAll('.project-item, .experience-item, .portfolio-card').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    fadeObserver.observe(item);
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    // Press 'H' to go home
    if (e.key === 'h' || e.key === 'H') {
        if (!e.target.matches('input, textarea')) {
            window.location.href = 'index.html';
        }
    }
    
    // Press 'P' for projects
    if (e.key === 'p' || e.key === 'P') {
        if (!e.target.matches('input, textarea')) {
            window.location.href = 'projects.html';
        }
    }
    
    // Press 'E' for experience
    if (e.key === 'e' || e.key === 'E') {
        if (!e.target.matches('input, textarea')) {
            window.location.href = 'experience.html';
        }
    }
    
    // Press 'C' for contact
    if (e.key === 'c' || e.key === 'C') {
        if (!e.target.matches('input, textarea')) {
            window.location.href = 'contact.html';
        }
    }
});

// ==================== PROJECT LINK ARROW ANIMATION ====================
document.querySelectorAll('.project-link').forEach(link => {
    const arrow = link.textContent.includes('→') || link.textContent.includes('↗');
    if (arrow) {
        link.addEventListener('mouseenter', () => {
            link.style.letterSpacing = '2px';
        });
        link.addEventListener('mouseleave', () => {
            link.style.letterSpacing = '0';
        });
    }
});

// ==================== PORTFOLIO CARD TILT EFFECT ====================
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ==================== CONSOLE EASTER EGG ====================
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #0066CC;');
console.log('%cWelcome to my portfolio! Thanks for checking out the code.', 'font-size: 14px; color: #666;');
console.log('%c💡 Keyboard shortcuts:\n  H - Home\n  P - Projects\n  E - Experience\n  C - Contact', 'font-size: 12px; color: #999;');
console.log('%c✨ Click on tech tags to copy them!', 'font-size: 12px; color: #0066CC;');

// ==================== PAGE TRANSITION EFFECT ====================
// Smooth page transitions when clicking nav links
document.querySelectorAll('a[href^="index.html"], a[href^="projects.html"], a[href^="experience.html"], a[href^="portfolio.html"], a[href^="contact.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// ==================== FUN FLOATING EMOJI ====================
function createFloatingEmoji() {
    const emojis = ['✨', '🚀', '💡', '🎯', '⚡', '🌟'];
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.top = '100vh';
    emoji.style.fontSize = '24px';
    emoji.style.pointerEvents = 'none';
    emoji.style.zIndex = '9999';
    emoji.style.opacity = '0.7';
    emoji.style.transition = 'all 3s ease-out';
    
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        emoji.style.top = '-50px';
        emoji.style.opacity = '0';
    }, 100);
    
    setTimeout(() => emoji.remove(), 3100);
}

// Randomly create floating emojis when hovering over highlights
let emojiTimeout;
document.querySelectorAll('.highlight').forEach(highlight => {
    highlight.addEventListener('mouseenter', () => {
        if (Math.random() > 0.5) {
            createFloatingEmoji();
        }
    });
});
