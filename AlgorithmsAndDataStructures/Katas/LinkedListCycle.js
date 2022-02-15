//LeetCode 141. Linked List Cycle
/*Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.*/

var hasCycle = function (head) {
  let current = head
  let index = 0 //create an index to keep track of visited nodes

  while (current) {
    //if current node does't have a property called 'pos'(no univisited node does, we are creating this prop on the next line)
    if (!current.pos) {
      current.pos = index //create this prop, and assign it the value of index
      current = current.next //move to next node
      index++ //increase index
    } else return true //if you visit a node that contains the .pos prop, it means you have already visited it, so return true
  }
  return false //otherwise return false
}
