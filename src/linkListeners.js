import homeContent from './homeContent';
import menuContent from './menuContent';
import aboutContent from './aboutContent';

function linkListeners () {
    const homeLink = document.querySelector('.homeLink');
    const menuLink = document.querySelector('.menuLink');
    const aboutLink = document.querySelector('.aboutLink');
    const mainContent2 = document.querySelector('#mainContent2');

    homeLink.addEventListener('click', () => {
        removeSelectedLinkClass();
        removeContent();
        homeContent();
        homeLink.classList.add('selectedLink');
    });

    menuLink.addEventListener('click', () => {
        removeSelectedLinkClass();
        removeContent();
        menuContent();
        menuLink.classList.add('selectedLink');
    });

    aboutLink.addEventListener('click', () => {
        removeSelectedLinkClass();
        removeContent();
        aboutContent();
        aboutLink.classList.add('selectedLink');
    });

    function removeSelectedLinkClass () {
        let links = document.querySelectorAll('.selectedLink');
        for (let i = 0; i < links.length; i++){
            links[i].classList.remove('selectedLink');
        }
    }

    function removeContent () {
        const content = document.querySelector('#mainContent2 :first-child');
        mainContent2.removeChild(content);
    }
}

export default linkListeners;