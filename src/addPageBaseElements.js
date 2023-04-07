function addPageBaseElements () {
    const containerDiv = document.getElementById('container');
    const footer = document.createElement('div');
    const mainContent1 = document.createElement('div');
    const mainContent2 = document.createElement('div');

    mainContent1.id = 'mainContent1';
    mainContent2.id = 'mainContent2';

    footer.classList.add('footer');
    
    footer.innerText = 'Goodbye';
    
    containerDiv.appendChild(mainContent1);
    containerDiv.appendChild(mainContent2);
    containerDiv.appendChild(footer);
}

export default addPageBaseElements;