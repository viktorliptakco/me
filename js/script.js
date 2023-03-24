// JavaScript kód pre sledovanie polohy okna a pridávanie vlastných tried pre anchor linky
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const currentSectionIndex = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - 50) - 1;

    navLinks.forEach(link => {
        link.classList.remove('active');
        //link.classList.remove(`class${link.getAttribute('href').slice(1)}`);
    });

    const activeLink = navLinks[currentSectionIndex];
    activeLink.classList.add('active');
    //activeLink.classList.add(`class${activeLink.getAttribute('href').slice(1)}`);
});






const table = document.getElementById("myTable");
const rows = table.rows;

// Skryje všetky TD elementy
for (let i = 0; i < rows.length; i++) {
  rows[i].querySelector("td").style.display = "none";
}

// Pridá event listener na každý TH element
for (let i = 0; i < rows.length; i++) {
  const th = rows[i].querySelector("th");
  th.addEventListener("click", function () {
    // Skryje všetky TD elementy
    for (let j = 0; j < rows.length; j++) {
      rows[j].querySelector("td").style.display = "none";
    }

    // Zobrazí surodenca TD elementu kliknutého TH elementu
    this.parentElement.querySelector("td").style.display = "table-cell";
  });
}