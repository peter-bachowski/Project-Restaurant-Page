function makeHeaderElements () {
    const navBar = document.createElement('div');
    const navMenu = document.createElement('div');
    const pageTitle = document.createElement('div');
    const orderLink = document.createElement('a');
    const homeLink = document.createElement('div');
    const menuLink = document.createElement('div');
    const aboutLink = document.createElement('div');
    const logoAndTitleCont = document.createElement('div');
    const logo = document.createElement('div');
    const linkContainer = document.createElement('div');

    navBar.classList.add('navBar');
    navMenu.classList.add('navMenu');
    pageTitle.classList.add('pageTitle');
    orderLink.classList.add('orderLink');
    orderLink.href = '';
    homeLink.classList.add('homeLink');
    menuLink.classList.add('menuLink');
    aboutLink.classList.add('aboutLink');
    logo.classList.add('logo');
    logoAndTitleCont.classList.add('logoAndTitleCont');
    linkContainer.classList.add('linkContainer');

    pageTitle.innerText = 'Slice of Seattle';
    pageTitle.appendChild(logo);

    orderLink.innerText = 'Order Now!'
    homeLink.innerText = 'Home';
    menuLink.innerText = 'Menu';
    aboutLink.innerText = 'About';

    document.querySelector('.header').appendChild(navBar);

    logoAndTitleCont.appendChild(logo);
    logoAndTitleCont.appendChild(pageTitle);
    navBar.appendChild(logoAndTitleCont);
    navBar.appendChild(linkContainer);
    linkContainer.appendChild(orderLink);
    linkContainer.appendChild(navMenu);
    navMenu.appendChild(homeLink);
    navMenu.appendChild(menuLink);
    navMenu.appendChild(aboutLink);

}

export default makeHeaderElements;