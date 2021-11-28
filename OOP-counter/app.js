function Counter(element, value){
    this.counter = element;
    this.value = value;
    this.DOMvalue = element.querySelector(".value");
    this.DOMvalue.textContent = this.value;
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.resetBtn = element.querySelector(".reset");
    this.add = function(){
        this.value++;
        this.DOMvalue.textContent = this.value;
    }
    this.subtract = this.subtract.bind(this);
    this.reset = this.reset.bind(this);
    this.increaseBtn.addEventListener("click", this.add.bind(this));
    this.decreaseBtn.addEventListener("click", this.subtract);
    this.resetBtn.addEventListener("click", this.reset);

    console.log(this)
}

Counter.prototype.subtract = function(){
    this.value--
    this.DOMvalue.textContent = this.value;
}

Counter.prototype.reset = function(){
    this.value = 0;
    this.DOMvalue.textContent = this.value;
}

let firstElement = document.querySelector(".first-counter");
let secondElement = document.querySelector(".second-counter");

let firstCounter = new Counter(firstElement, 150);
let secondCounter = new Counter(secondElement, 250);

console.log(Counter.hasOwnProperty(Counter.add))
