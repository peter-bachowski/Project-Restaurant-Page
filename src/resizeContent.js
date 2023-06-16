import { forEach } from "lodash";

function resizeContent () {

    function resize () {
        const navBar = document.querySelector('.navBar');
        const header = document.querySelector('.header');
        if (window.innerWidth <= 750) {
            header.style.minHeight = '250px';
        }
        else {
            header.style.minHeight = '500px';
        }
        if (window.innerWidth <= 647) {
            navBar.style.justifyContent = 'center';
        }
        else {
            navBar.style.justifyContent = 'space-between';
        }
    } 

    window.addEventListener('resize', resize);
    window.onload = resize;
}

export default resizeContent;

