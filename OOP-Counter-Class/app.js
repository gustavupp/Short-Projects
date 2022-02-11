class Counter {
  constructor(element, value) {
    this.counter = element
    this.value = value
    this.DOMvalue = element.querySelector('.value')
    this.DOMvalue.textContent = this.value
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.resetBtn = element.querySelector('.reset')
    this.subtract = this.subtract.bind(this) //binds method to 'this'(Counter Obj)
    this.reset = this.reset.bind(this)
    this.increaseBtn.addEventListener('click', this.add.bind(this)) //binds method to 'this'(Counter Obj)
    this.decreaseBtn.addEventListener('click', this.subtract)
    this.resetBtn.addEventListener('click', this.reset)
  }
  //bound to 'this' on the callback function
  add = function () {
    this.value++
    this.DOMvalue.textContent = this.value
  }

  //bound to 'this' before callback foo
  subtract = function () {
    this.value--
    this.DOMvalue.textContent = this.value
  }
}

//adding method to prototype still works
Counter.prototype.reset = function () {
  this.value = 0
  this.DOMvalue.textContent = this.value
}

let firstElement = document.querySelector('.first-counter')
let secondElement = document.querySelector('.second-counter')

//create instances
let firstCounter = new Counter(firstElement, 150)
let secondCounter = new Counter(secondElement, 250)
