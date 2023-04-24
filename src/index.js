import './styles/main.scss';
import addPageBaseElements from './addPageBaseElements';
import resizeContent from './resizeContent';
import makeHeaderElements from './makeHeaderElements';
import homeContent from './homeContent';
import menuContent from './menuContent';
import aboutContent from './aboutContent';


addPageBaseElements();
makeHeaderElements();
resizeContent();

const homeLink = document.querySelector('.homeLink');
const menuLink = document.querySelector('.menuLink');
const aboutLink = document.querySelector('.aboutLink');

homeLink.addEventListener('click', () => {
    removeSelectedLinkClass();
    homeContent();
    homeLink.classList.add('selectedLink');
});

menuLink.addEventListener('click', () => {
    removeSelectedLinkClass();
    menuContent();
    menuLink.classList.add('selectedLink');
});

aboutLink.addEventListener('click', () => {
    removeSelectedLinkClass();
    aboutContent();
    aboutLink.classList.add('selectedLink');
});

function removeSelectedLinkClass () {
    let links = document.querySelectorAll('.selectedLink');
    for (let i = 0; i < links.length; i++){
        links[i].classList.remove('selectedLink');
    }
}






