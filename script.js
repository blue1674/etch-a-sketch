const body = document.getElementsByTagName("body")[0];
const container = document.getElementById("container");
const button = document.createElement("button");
body.insertBefore(button, container);
button.classList.add("button");
container.style.cssText = 'display: grid; grid-template: repeat(16, 1fr)/repeat(16,1fr);';
button.textContent = "Reset!";

button.addEventListener("click", reset);

function reset() {
    document.getElementById('container').innerHTML = '';
    let size; 
    do {
        size = prompt("Enter size of new grid?");
        if (size > 100) alert("Size must be less than 100");
    }
    while (size > 100);
    container.style.gridTemplate = `repeat(${size}, 1fr)/repeat(${size}, 1fr)`;
    createGrid(size);
}
function createGrid(size) {
    for (let i = 1; i <= size * size; i++) {
        const subDiv = document.createElement("div");
        subDiv.setAttribute("class", "cell"); 
        container.appendChild(subDiv);
        subDiv.addEventListener("mouseover", (e) => colorIt(e));
    }
}
createGrid(16);

function colorIt(e) {
    e.target.style.background = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
