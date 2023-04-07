function resizeContent () {
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 750) {
            mainContent1.style.minHeight = '250px';
        }
        else {
            mainContent1.style.minHeight = '500px';
        }

    });
}

export default resizeContent;

