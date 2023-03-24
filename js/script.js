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



const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

document.addEventListener('click', function(e) {
  if (!table.contains(e.target)) {
    rows.forEach(row => row.querySelector('td').style.display = 'none');
  }
});

rows.forEach(row => {
  const th = row.querySelector('th');
  const td = row.querySelector('td');
  //toto je treba upratat do jednej funkcie
  rows.forEach(row => row.querySelector('td').style.display = 'none');
  th.addEventListener('click', function() {
    rows.forEach(row => row.querySelector('td').style.display = 'none');
    td.style.display = 'table-cell';
  });
});


/*const table = document.getElementById("my-table");
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
}*/