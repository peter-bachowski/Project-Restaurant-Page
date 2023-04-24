function makeHeaderElements () {
    const navBar = document.createElement('div');
    const navMenu = document.createElement('div');
    const pageTitle = document.createElement('div');
    const homeLink = document.createElement('div');
    const menuLink = document.createElement('div');
    const aboutLink = document.createElement('div');
    const logoAndTitleCont = document.createElement('div');
    const logo = document.createElement('div');

    navBar.classList.add('navBar');
    navMenu.classList.add('navMenu');
    pageTitle.classList.add('pageTitle');
    homeLink.classList.add('homeLink');
    menuLink.classList.add('menuLink');
    aboutLink.classList.add('aboutLink');
    logo.classList.add('logo');
    logoAndTitleCont.classList.add('logoAndTitleCont');

    pageTitle.innerText = 'Slice of Seattle';
    pageTitle.appendChild(logo);

    homeLink.innerText = 'Home';
    menuLink.innerText = 'Menu';
    aboutLink.innerText = 'About';

    document.getElementById('mainContent1').appendChild(navBar);

    logoAndTitleCont.appendChild(logo);
    logoAndTitleCont.appendChild(pageTitle);
    navBar.appendChild(logoAndTitleCont);
    navBar.appendChild(navMenu);
    navMenu.appendChild(homeLink);
    navMenu.appendChild(menuLink);
    navMenu.appendChild(aboutLink);

}

export default makeHeaderElements;