import './styles/main.scss';
import addPageBaseElements from './addPageBaseElements';
import resizeContent from './resizeContentDiv';
import adjustSizeOnload from './adjustSizeOnload';

addPageBaseElements();
adjustSizeOnload();
resizeContent();

const navBar = document.createElement('div');
const navMenu = document.createElement('div');
const pageTitle = document.createElement('div');
const homeLink = document.createElement('a');
const menuLink = document.createElement('a');
const aboutLink = document.createElement('a');
const logo = document.createElement('img');

navBar.classList.add('navBar');
navMenu.classList.add('navMenu');
pageTitle.classList.add('pageTitle');
homeLink.classList.add('homeLink');
menuLink.classList.add('menuLink');
aboutLink.classList.add('aboutLink');
logo.src = './images/space-needle.png';

homeLink.href = './index.html';
menuLink.href = '';
aboutLink.href = '';

pageTitle.innerText = 'Slice of Seattle';
pageTitle.appendChild(logo);

homeLink.innerText = 'Home';
menuLink.innerText = 'Menu';
aboutLink.innerText = 'About';

document.getElementById('mainContent1').appendChild(navBar);

navBar.appendChild(pageTitle);
navBar.appendChild(navMenu);
navMenu.appendChild(homeLink);
navMenu.appendChild(menuLink);
navMenu.appendChild(aboutLink);


