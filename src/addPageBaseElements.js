import { doc } from "prettier";

function addPageBaseElements () {
    const containerDiv = document.getElementById('container');
    const footer = document.createElement('div');
    const header = document.createElement('div');
    const mainContent2 = document.createElement('div');

    //elements for the footer
    const mediaLinksDiv = document.createElement('div');
    const facebookLink = document.createElement('a');
    const instagramLink = document.createElement('a');

    const infoContainer = document.createElement('div');
    const locationInfoDiv = document.createElement('div');
    const hoursInfoDiv = document.createElement('div');
    const copyrightDiv = document.createElement('div');



    locationInfoDiv.innerText = 'LOCATION\n\n\n\n12345 12th ave W\n\nLynnwood, WA 98087\n\n(123)456-7890';
    hoursInfoDiv.innerText = 'HOURS\n\n\n\nMonday through Sunday\n\n11am to 9pm';
    copyrightDiv.innerText = 'Copyright © Slice of Seattle | Made by Peter Bachowski';

    header.classList.add('header');
    mainContent2.classList.add('mainContent2');
    footer.classList.add('footer');

    mediaLinksDiv.classList.add('mediaLinksDiv');

    infoContainer.classList.add('infoContainer');
    locationInfoDiv.classList.add('locationInfoDiv');
    hoursInfoDiv.classList.add('hoursInfoDiv');

    copyrightDiv.classList.add('copyrightDiv');

    instagramLink.style.backgroundImage = "url('../src/assets/images/Instagram-logo-transparent-PNG.png')";

    mediaLinksDiv.appendChild(facebookLink);
    mediaLinksDiv.appendChild(instagramLink);
    
    infoContainer.appendChild(locationInfoDiv);
    infoContainer.appendChild(hoursInfoDiv);

    footer.appendChild(mediaLinksDiv);
    footer.appendChild(infoContainer);
    footer.appendChild(copyrightDiv);
    
    containerDiv.appendChild(header);
    containerDiv.appendChild(mainContent2);
    containerDiv.appendChild(footer);
}

export default addPageBaseElements;