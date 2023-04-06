// JavaScript kód pre sledovanie polohy okna a pridávanie vlastných tried pre anchor linky
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const currentSectionIndex = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - 50) - 1;

    navLinks.forEach(link => {
        //link.classList.remove('active');
        link.classList.remove(`active-${link.getAttribute('href').slice(1)}`);
    });

    const activeLink = navLinks[currentSectionIndex];
    //activeLink.classList.add('active');
    activeLink.classList.add(`active-${activeLink.getAttribute('href').slice(1)}`);
});

// Mení opacity gradient pre druhú sekciu
const sectionTwo = document.querySelector('#two');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const height = window.innerHeight;
  const maxScroll = (document.documentElement.scrollHeight - height) / 2;
  const percent = scrollTop / maxScroll;
  const gradientStop = percent * 15 + 85;
  sectionTwo.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 1) ${gradientStop}%, rgba(0, 0, 0, 0) 100%)`;
});

// Vyberie všetky odkazy so triedou "item-link"
const itemLinks = document.querySelectorAll('.item-link');

// Pridá preventDefault na každý z nich
itemLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
  });
});
