//bfs implementation
//prints all nodes in the searching order

/*class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}*/

function bfsBinarySearchTree(rootNode) {
  if (root === null) return
  let queue = rootNode //create a queue and push root node to the queue

  while (queue !== null) {
    let curNode = queue.shift()
    console.log(curNode.value)
    if (curNode.left !== null) queue.push(curNode.left)
    if (curNode.right !== null) queue.push(curNode.right)
  }
}
