function createHeaderAndFooter (content){
    const header = document.createElement("div");
    const footer = document.createElement("div");
    
    header.classList.add("header");
    footer.classList.add("footer");
    
    header.innerText = "Hello";
    footer.innerText = "Goodbye";
    
    content.appendChild(header);
    content.appendChild(footer);
}

export default createHeaderAndFooter;