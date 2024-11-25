// Crear elementos del header
const header = document.createElement('header');

// Logo
const logoDiv = document.createElement('div');
logoDiv.className = 'logo';

const logoImg = document.createElement('img');
logoImg.src = '../img/logo.png';
logoImg.alt = 'logo';
logoDiv.appendChild(logoImg);

// Buscador
const buscadorDiv = document.createElement('div');
buscadorDiv.className = 'buscardor';

const form = document.createElement('form');

const inputText = document.createElement('input');
inputText.className = 'buscador-tex';
inputText.id = 'buscador';
inputText.type = 'text';
inputText.placeholder = 'Buscador';

const inputSubmit = document.createElement('input');
inputSubmit.className = 'buscador-btn';
inputSubmit.type = 'submit';
inputSubmit.value = 'Buscar';

form.appendChild(inputText);
form.appendChild(inputSubmit);
buscadorDiv.appendChild(form);

// Navegación
const nav = document.createElement('nav');
nav.className = 'nav-general';

const links = [
    { href: '../Index.html', text: 'Inicio', file: 'Index.html' },
    { href: '#', text: 'Educacion', file: 'educacion.html' },
    { href: '#', text: 'Catalogo', file: 'catalogo.html' },
    { href: '../html/personal.html', text: 'Personal', file: 'personal.html' },
    { href: '#', text: 'Tu Carrito', file: 'carrito.html' }
];

links.forEach(link => {
  const a = document.createElement('a');
  a.className = 'nav-link';
  a.href = link.href;
  a.textContent = link.text;
  a.dataset.file = link.file; // Guardar el nombre del archivo en un atributo data para referencia
  nav.appendChild(a);
});

// Imagen personal
const personalLink = document.createElement('a');
personalLink.href = '#';

const personalDiv = document.createElement('div');
personalDiv.className = 'personal';

const personalImg = document.createElement('img');
personalImg.src = '../img/personal.png';
personalImg.alt = 'personal';

personalDiv.appendChild(personalImg);
personalLink.appendChild(personalDiv);
nav.appendChild(personalLink);

// Añadir todo al header
header.appendChild(logoDiv);
header.appendChild(buscadorDiv);
header.appendChild(nav);

// Agregar el header al cuerpo del documento
document.body.appendChild(header);

// Detectar la página actual usando el nombre del archivo
const currentPage = window.location.pathname.split('/').pop();

// Seleccionar todos los enlaces de la navegación
const navLinks = document.querySelectorAll('.nav-link');

// Recorrer los enlaces y agregar la clase 'nav-selec' al enlace correspondiente
navLinks.forEach(link => {
  // Comprobar si el data-file coincide con la página actual
  if (link.dataset.file === currentPage) {
    link.classList.add('nav-selec');
  } else {
    // Asegurarse de que los demás enlaces no tengan la clase 'nav-selec'
    link.classList.remove('nav-selec');
  }
});
