// Run only after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.innerText = new Date().getFullYear();
    }

// Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        // Close menu on link click
        document.querySelectorAll('#menu a').forEach(link => {
            link.addEventListener('click', () => menu.classList.remove('show'));
        });
    }

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.12 });
    reveals.forEach(r => io.observe(r));

    // Countdown
    const target = new Date('2025-10-15T09:00:00');
    const cdEl = document.getElementById('countdown');
    function updateCountdown() {
        if (!cdEl) return;
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) {
            cdEl.innerText = 'Live — Follow our updates!';
            return;
        }
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        cdEl.innerText = `${d}d ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const id = a.getAttribute('href');
            if (id && document.querySelector(id)) {
                document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
