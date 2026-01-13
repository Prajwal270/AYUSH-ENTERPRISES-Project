const menuToggle = document.getElementById('menuToggle');
const navRight = document.getElementById('navRight');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navRight) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navRight.classList.toggle('active');
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);

        // 🔒 Lock body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking link
    if (navMenu) {
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navRight.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
                document.body.style.overflow = '';
            });
        });
    }
}