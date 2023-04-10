function makeGridForMenu () {

    const menuSize = 7;
    let menuArray = [];

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
    mainContent2.appendChild(gridContainer);

    for (let i = 0; i <= menuSize; i++){
        menuArray[i] = document.createElement('div');
        menuArray[i].classList.add('menuElement');
        gridContainer.appendChild(menuArray[i]);
    }

    menuArray[0].style.backgroundImage = "url('../src/assets/images/chicken-alfredo.png')";
    menuArray[1].style.backgroundImage = "url('../src/assets/images/BBQ-chicken-pizza-1.png')";
    menuArray[2].style.backgroundImage = "url('../src/assets/images/chicken-pesto-pizza.png')";
    menuArray[3].style.backgroundImage = "url('../src/assets/images/meat-lover-pizza.png')";
    menuArray[4].style.backgroundImage = "url('../src/assets/images/spiro-special.png')";
    menuArray[5].style.backgroundImage = "url('../src/assets/images/SWEETSPICY.png')";
    menuArray[6].style.backgroundImage = "url('../src/assets/images/veggie-special.png')";
}

export default makeGridForMenu;