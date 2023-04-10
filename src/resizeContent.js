import { forEach } from "lodash";

function resizeContent () {

    function resize () {
        const navBar = document.querySelector('.navBar');
        if (window.innerWidth <= 750) {
            mainContent1.style.minHeight = '250px';
        }
        else {
            mainContent1.style.minHeight = '500px';
        }
        if (window.innerWidth <= 607) {
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

