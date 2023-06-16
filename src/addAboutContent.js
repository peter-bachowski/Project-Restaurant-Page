function addAboutContent () {
    const aboutLink = document.querySelector('.aboutLink');
    const aboutContentDiv = document.createElement('div');
    const mainContent2 = document.querySelector('.mainContent2');
    const aboutPar1 = document.createElement('div');
    const aboutPar2 = document.createElement('div');
    const aboutContentImg = document.createElement('img');
    
    document.querySelector('.header').id = 'aboutContent1';

    aboutLink.classList.add('selectedLink');
    aboutContentDiv.classList.add('aboutContentDiv');
    aboutContentImg.id = 'aboutContentImg';
    aboutContentImg.src = '..assets/images/pizza-background.jpg';

    aboutPar1.innerText = 'Here at Slice of Seattle we have always strived to make something that we can be proud of, something made with the freshest and most delicious ingredients the we can get. It has been a passion of ours for over five years and we hope to continue to serve you the best pizza in town. We strive to be a world class establishment that can surpass all our competition and more.';
    aboutPar2.innerText = 'This area will be used as additional space for more information about your restaurant.'

    aboutContentDiv.appendChild(aboutPar1);
    aboutContentDiv.appendChild(aboutPar2);

    mainContent2.appendChild(aboutContentImg);
    mainContent2.appendChild(aboutContentDiv);
}

export default addAboutContent;