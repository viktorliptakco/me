// JavaScript kód pre sledovanie polohy okna a pridávanie vlastných tried pre anchor linky
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const currentSectionIndex = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - 50) - 1;

    navLinks.forEach(link => {
        link.classList.remove('active');
        link.classList.remove(`class${link.getAttribute('href').slice(1)}`);
    });

    const activeLink = navLinks[currentSectionIndex];
    activeLink.classList.add('active');
    activeLink.classList.add(`class${activeLink.getAttribute('href').slice(1)}`);
});