//linked list implementation

//function that creates Nodes
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

//actual doubly linked list code
function DoublyLinkedList() {
  length = 8
  this.sayLength = function () {
    console.log(length)
  }
}

DoublyLinkedList.prototype.sayLength1 = function () {
  console.log(length)
}

let myLinkedList = new DoublyLinkedList()
myLinkedList.sayLength1()
//myLinkedList.length = 4
//myLinkedList.sayLength()
