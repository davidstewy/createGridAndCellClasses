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

const grid2 = new Grid({
    rows: 100,
    columns: 100,
    parentElement: document.querySelector("main"),

    cell: {
        width: "6px",
        height: "6px",
        border: "2px solid white",
        color: "black",
        classList: ["cell"],
    }
});

