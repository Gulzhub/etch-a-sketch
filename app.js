const grid = document.querySelector(".grid");
const reset = document.querySelector(".reset");
const userValue = document.getElementById("squares");
const submit = document.querySelector(".submit");

let gridCount = 16;

function createGrid(square) {
    grid.innerHTML = "";
    let area = square * square;
    grid.style.gridTemplateColumns = `repeat(${square}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${square}, 1fr)`;
    for (let i = 0; i < area; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "grid-item")
        grid.appendChild(div);
    }
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            const color = document.getElementById("color");
            item.style.backgroundColor = `${color.value}`;
        })
    });  
}

createGrid(gridCount);




reset.addEventListener("click", (e) => {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        item.style.backgroundColor = "white";
    })
})

submit.addEventListener('click', (event) => {
    event.preventDefault();
    if(userValue.value) {
    gridCount = Number(userValue.value);
    createGrid(gridCount);
    }
})



// Future changes for RGB hover effect

// function getRandomColor(){
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//       }
//       return color;
// }
