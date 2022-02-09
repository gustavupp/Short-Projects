//linked list implementation
function LinkedList() {
  let listLength = 0
  let head = null

  //function that creates Nodes
  const Node = function (element) {
    this.element = element
    this.next = null
  }

  //get the size of linked list
  this.size = () => {
    return listLength
  }

  //get the head of linked list
  this.head = () => {
    return head
  }

  //add a new node to the linked list (end of list)
  this.addToEnd = () => {
    let newNode = new Node(element) //create a new node
    if (head === null) head = newNode
    //if list is empty, set node as head
    else {
      let currentNode = head // mark head as current node

      while (currentNode.next) {
        //while there are elemements in the list keep moving forward
        currentNode = currentNode.next //at every iteration, set current node as the next element
      }

      currentNode.next = newNode // when currentNode.next === null we leave the loop(reaching the end the linked list) and set currentNode.next to the node we created.
    }
    listLength++ // increase the the lenght of the list
  }

  //add a new node to linked list (beggining)
  this.addToBeginning = () => {
    let newNode = new Node(element) //create new Node
    newNode.next = head //point new node to head
    head = newNode //assign head to new node
  }
}
