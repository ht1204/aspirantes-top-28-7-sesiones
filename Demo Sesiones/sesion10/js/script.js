const addElement = document.getElementById('add');
const removeElement = document.getElementById('remove');
const divElementSection = document.querySelector('.div-element');

addElement.addEventListener('click', addHTMLElement);
removeElement.addEventListener('click', removeHTMLElement);


function addHTMLElement() {
    const divChild = document.createElement("div");
    divChild.setAttribute("class", "div-child");
    divElementSection.appendChild(divChild);
}

function removeHTMLElement() {
    divElementSection.removeChild(divElementSection.lastChild);
}
