//linked list implementation
export function LinkedList() {
  let length = 0
  let head = null

  //function that creates Nodes
  const Node = function (value) {
    this.value = value
    this.next = null
  }

  //get the size of linked list
  this.size = () => {
    return length
  }

  //get the head of linked list
  this.head = () => {
    return head
  }

  //add a new node to the linked list (end of list)
  this.addToEnd = (value) => {
    let newNode = new Node(value) //create a new node
    if (head === null) head = newNode
    //if list is empty, set node as head
    else {
      let currentNode = head // mark head as current node
      while (currentNode.next) {
        //while there are elemements in the list keep moving forward
        currentNode = currentNode.next //at every iteration, set current node as the next value
      }
      currentNode.next = newNode // when currentNode.next === null we leave the loop(reaching the end the linked list) and set currentNode.next to the node we created.
    }
    length++ // increase the the length of the list
  }

  //add a new node to linked list (beggining)
  this.addToBeginning = (value) => {
    let newNode = new Node(value) //create new Node
    newNode.next = head //point new node to head
    head = newNode //assign head to new node
    length++ //add to length
  }

  //removes a node
  this.remove = (value) => {
    let currentNode = head //set current node as first node
    let previousNode
    //if value of current element (which is head at first) equals the value we want to delete, set head to next node
    if (currentNode.value === value) head = currentNode.next
    else {
      while (currentNode.value !== value) {
        //move through the list while value we havent found the value we want to delete
        previousNode = currentNode //update previous node
        currentNode = currentNode.next //update next node
      }

      previousNode.next = currentNode.next //once the node we want to delete is found, point the preious node.next to current.next, bypassing current node.
    }
    length-- //decrease length
  }

  //returns the index of an element
  this.indexOfNode = (value) => {
    let currentNode = head
    let index = -1

    while (currentNode) {
      index++
      if (currentNode.value === value) return index
      currentNode = currentNode.next
    }

    return 'Not Found'
  }

  //reverse linked List
  this.reverse = () => {
    let previousNode = null //create a "pointer" and intialize with it with null
    let nextNode
    while (head !== null) {
      //while we are not at the end of list, keep going
      nextNode = head.next //asign the pointer to the next node to a variable before changing it
      head.next = previousNode // assign head/current.next to previous node
      previousNode = head //before moving to next node, assign head/current as previousNode
      head = nextNode //and nextNode as head/current
    }
    head = previousNode //assign the value of previousNode back to head, so that .head() method words.
    return head //return the head
  }

  //insert value in order
  this.addInOrder = (value) => {
    let newNode = new Node(value) //create new node

    if (head === null) {
      //if list is empty, set newNode as head and return head
      head = newNode
      length++
      return head
    }
    if (head.value >= value) {
      newNode.next = head
      head = newNode
      length++
      return head
    }
    let currentNode = head

    while (currentNode.next?.value < value) {
      currentNode = currentNode.next
    }
    let nextPointer = currentNode.next
    currentNode.next = newNode
    newNode.next = nextPointer
    length++
    return head
  }

  //print list
  this.print = () => {
    let currentNode = head

    while (currentNode !== null) {
      console.log(currentNode)
      currentNode = currentNode.next
    }
  }
}

let myLinkedList = new LinkedList()
//myLinkedList.addToBeginning(2)
//myLinkedList.addToBeginning(1)
myLinkedList.addToEnd(4)
myLinkedList.addInOrder(2)
myLinkedList.addInOrder(4)
//myLinkedList.addInOrder(0)
myLinkedList.addInOrder(7)
myLinkedList.addInOrder(6)
myLinkedList.addInOrder(5)
//myLinkedList.reverse()

console.log(myLinkedList.print())
