function Grid (rows, columns, parentElement) {
    this.rows = rows;
    this.columns = columns;
    
}


Grid.prototype = {
    addElement: function (parentElement) {
        this.element = document.createElement("div");
        this.element.classList.add();
        this.parentElement = parentElement
        this.parentElement.appendChild(this.element);
    },
    
    constructor: Grid,
}


function Cell (height, width, color, border, parentElement){
    this.height = height;
    this.width = width;
    this.color = color;
    this.border = border;
}