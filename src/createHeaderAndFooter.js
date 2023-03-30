function createHeaderAndFooter (){
    
    const header = document.createElement("div");
    const footer = document.createElement("div");

    header.classList.add(".header");
    footer.classList.add(".footer");

    header.innerText = "Hello";
    footer.innerText = "Goodbye";

    document.getElementById("content").appendChild(header);
    document.getElementById("content").appendChild(footer);
}

export default createHeaderAndFooter;