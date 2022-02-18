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
class DoublyLinkedList {
  constructor() {
    let length = 0
    let head = null

    this.getLength = function () {
      return length
    }

    this.getHead = function () {
      return head
    }

    //add new node at the head of doubly linked list
    this.addAtHead = function (value) {
      let newNode = new Node(value)
      if (head === null) head = newNode
      else {
        head.prev = newNode
        newNode.next = head
        head = newNode
      }

      length++
    }

    //add new node at the tail of doubly linked list
    this.addAtTail = function (value) {
      let newNode = new Node(value)
      if (head === null) head = newNode
      else {
        let curNode = head
        while (curNode.next) {
          curNode = curNode.next
        }
        curNode.next = newNode
        newNode.prev = curNode
      }
      length++
    }

    //remove a node from the doubly linked list
    this.remove = function (value) {
      if (head === null) throw Error('Cannot delete from empty list')
      if (head.value === value) {
        head = head.next
        if (head !== null) head.prev = null
      } else {
        let curNode = head
        while (curNode.value !== value) {
          curNode = curNode.next
        }
        curNode.prev.next = curNode.next
        if (curNode.next !== null) curNode.next.prev = curNode.prev
      }
    }

    //return index of node
    this.indexOdNode = function (value) {
      let index = 0
      if (head === null) throw Error('Cannot return index of an empty list')
      let curNode = head
      while (curNode.value !== value) {
        index++
        curNode = curNode.next
      }
      return index
    }

    //reverse doubly linked list
    this.reverse = function () {
      while (head) {
        let nextNode = head.next //store pointer to next node
        head.next = head.prev //current node.next becomes previous node
        head.prev = nextNode //current node.prev becomes next node
        if (head.prev !== null) head = nextNode
        //if we are at the last node before null do not push head to next node, otherwise head = nextNode
        else break
      }
      return head
    }
  }
}

let myLinkedList = new DoublyLinkedList()
