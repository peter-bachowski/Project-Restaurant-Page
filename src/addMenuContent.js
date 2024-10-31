function addMenuContent () {

    const menuSize = 7;
    let menuArray = [];

    const gridContainer = document.createElement('div');
    const mainContent2 = document.querySelector('.mainContent2');
    gridContainer.classList.add('gridContainer');
    mainContent2.appendChild(gridContainer);

    const menuElement = document.createElement('a');
    const menuElementImg = document.createElement('img');
    const menuElementTitle = document.createElement('div');

    menuElement.appendChild(menuElementImg);
    menuElement.appendChild(menuElementTitle);

    document.querySelector('.header').id = 'menuContent1';

    for (let i = 0; i < menuSize; i++){
        menuArray[i] = menuElement.cloneNode(true);
        menuArray[i].classList.add('menuElement');
        gridContainer.appendChild(menuArray[i]);
    }

    menuArray[0].id = 'chickenGarlicDiv';
    menuArray[0].firstChild.src = '../src/assets/images/chicken-alfredo.png';
    menuArray[0].lastChild.innerText = 'Chicken Garlic Alfredo Pizza\n$15.00';

    menuArray[1].id = 'bbqChickenDiv';
    menuArray[1].firstChild.src = '../src/assets/images/BBQ-chicken-pizza-1.png';
    menuArray[1].lastChild.innerText = 'BBQ Chicken Pizza\n$15.00';

    menuArray[2].id = 'chickenPestoDiv';
    menuArray[2].firstChild.src = '../src/assets/images/chicken-pesto-pizza.png';
    menuArray[2].lastChild.innerText = 'Chicken Pesto Pizza\n$15.00';

    menuArray[3].id = 'meatLoversDiv';
    menuArray[3].firstChild.src = '../src/assets/images/meat-lover-pizza.png';
    menuArray[3].lastChild.innerText = 'Meat Lovers Pizza\n$15.00';
    
    menuArray[4].id = 'spiroSpecialDiv';
    menuArray[4].firstChild.src = '../src/assets/images/spiro-special.png';
    menuArray[4].lastChild.innerText = 'Spiro Special Pizza\n$15.00';
    
    menuArray[5].id = 'sweetAndSpicyDiv';
    menuArray[5].firstChild.src = '../src/assets/images/SWEETSPICY.png';
    menuArray[5].lastChild.innerText = 'Sweet and Spicy Pizza\n$15.00';
    
    menuArray[6].id = 'veggieSpecialDiv';
    menuArray[6].firstChild.src = '../src/assets/images/veggie-special.png';
    menuArray[6].lastChild.innerText = 'Veggie Special Pizza\n$15.00';
}

export default addMenuContent;