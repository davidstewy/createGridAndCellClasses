"use strict";

const grid = new Grid({
    rows: 8,
    columns: 8,
    parentElement: document.querySelector("main"),

    cell: {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        color: "rebeccapurple",
        classList: ["cell"],
    }
});








// "use strict";
// const container = document.querySelector("main");

// function Grid (rows, columns, parentElement) {
//     this.rows = rows;
//     this.columns = columns;
//     this.element = document.createElement("div");
//     this.element.classList.add(poo);
//     this.parentElement = parentElement
//     this.parentElement.appendChild(this.element);
//     for (let rowIndex = 0; rowIndex < this.rows; rowIndex++){
//         let cell = new Cell()
//     }
// }
// // Grid.prototype = {
// //     addElement: function (parentElement) {
// //         this.element = document.createElement("div");
// //         this.element.classList.add();
// //         this.parentElement = parentElement
// //         this.parentElement.appendChild(this.element);
// //     },
    
// //     constructor: Grid,
// // }


// function Cell (height, width, color, border, parentElement){
//     this.height = height;
//     this.width = width;
//     Grid.bind(this, rows, columns, parentElement);
//     // this.element = document.createElement("div");
//     // this.element.classList.add();
//     // this.parentElement = parentElement
//     // this.parentElement.appendChild(this.element);
// }

