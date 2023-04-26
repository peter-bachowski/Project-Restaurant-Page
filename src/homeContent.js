function homeContent () {
    const homeLink = document.querySelector('.homeLink');
    const homeContentDiv = document.createElement('div');
    const mainContent2 = document.querySelector('#mainContent2');

    homeLink.classList.add('selectedLink');
    homeContentDiv.classList.add('homeContentDiv');

    homeContentDiv.innerText = 'Welcome!';

    mainContent2.appendChild(homeContentDiv);
}

export default homeContent;