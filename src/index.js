import './styles/main.scss';
import createHeaderAndFooter from './createHeaderAndFooter';

const containerDiv = document.getElementById("container");
const contentDiv = document.createElement("div");

contentDiv.id = "contentDiv";

containerDiv.appendChild(contentDiv);
createHeaderAndFooter(containerDiv);

window.addEventListener("resize", () => {
    if (window.innerWidth <= 500) {
        contentDiv.style.height = "250px";
    }

});


