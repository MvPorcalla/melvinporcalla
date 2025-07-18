document.addEventListener('DOMContentLoaded', () => {
    // ==============================
    // PRELOADER FUNCTIONALITY
    // ==============================
    const loader = document.getElementById('preloader');
    if (loader) loader.classList.add('hidden');

    // ==============================
    // SET ACTIVE NAV LINK
    // ==============================
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.mvp-nav-links a, .mvp-mobile-links a');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // ==============================
    // THEME TOGGLE FUNCTIONALITY
    // ==============================
    const toggleButton = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;

    const applyTheme = (isDark) => {
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            toggleButton.innerHTML = "<i class='bx bx-sun'></i>";
            toggleButton.setAttribute('aria-pressed', 'true');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            toggleButton.innerHTML = "<i class='bx bx-moon'></i>";
            toggleButton.setAttribute('aria-pressed', 'false');
            localStorage.setItem('theme', 'light');
        }
    };

    applyTheme(prefersDark);

    toggleButton.addEventListener('click', () => {
        const currentlyLight = document.documentElement.getAttribute('data-theme') === 'light';
        applyTheme(currentlyLight);
    });

});