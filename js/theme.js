document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const rtlToggle = document.getElementById('rtl-toggle');

    // Load saved settings
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedDir = localStorage.getItem('dir') || 'ltr';

    html.setAttribute('data-theme', savedTheme);
    html.setAttribute('dir', savedDir);
    updateIcons(savedTheme, savedDir);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcons(newTheme, html.getAttribute('dir'));
        });
    }

    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const currentDir = html.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            html.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
            updateIcons(html.getAttribute('data-theme'), newDir);
        });
    }

    function updateIcons(theme, dir) {
        const themeIcon = document.querySelector('#theme-toggle i');
        const rtlText = document.querySelector('#rtl-toggle span');

        if (themeIcon) {
            themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
        if (rtlText) {
            rtlText.textContent = dir === 'ltr' ? 'RTL' : 'LTR';
        }
    }
});
