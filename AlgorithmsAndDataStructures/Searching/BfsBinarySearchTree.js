//bfs implementation
//prints all nodes in the searching order

/*class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}*/

function bfsBinarySearchTree(node = root) {
  if (root === null) return
  let queue = [node] //create a queue and push root node to the queue
  let searchOrder = [] //create an array to return elements in search order

  while (queue.length !== 0) {
    let curNode = queue.shift() //remove first element of queue and assign it as current Node
    searchOrder.push(curNode.value) //push its value to return array
    if (curNode.left !== null) queue.push(curNode.left) //if left or right children are not null, push them to queue
    if (curNode.right !== null) queue.push(curNode.right)
  }
  return searchOrder
}
