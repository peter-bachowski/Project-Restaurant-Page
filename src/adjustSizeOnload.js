function adjustSizeOnload () {
    window.onload = () => {
        if (window.innerWidth <= 750) {
            mainContent1.style.minHeight = '250px';
        }
        else {
            mainContent1.style.minHeight = '500px';
        }

    };
}

export default adjustSizeOnload;

