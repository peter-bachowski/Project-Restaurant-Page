function addHomeContent () {
    const homeLink = document.querySelector('.homeLink');
    const homeContentDiv = document.createElement('div');
    const mainContent2 = document.querySelector('.mainContent2');

    document.querySelector('.header').id = 'homeContent1';

    homeLink.classList.add('selectedLink');
    homeContentDiv.classList.add('homeContentDiv');

    homeContentDiv.innerText = 'Welcome!';

    mainContent2.appendChild(homeContentDiv);
}

export default addHomeContent;