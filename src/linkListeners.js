import homeContent from './addHomeContent';
import addMenuContent from './addMenuContent';
import addAboutContent from './addAboutContent';

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
        addMenuContent();
        menuLink.classList.add('selectedLink');
    });

    aboutLink.addEventListener('click', () => {
        removeSelectedLinkClass();
        removeContent();
        addAboutContent();
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