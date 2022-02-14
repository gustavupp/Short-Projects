//LeetCode 206. Reverse Linked List
//Given the head of a singly linked list, reverse the list, and return the reversed list.

//Definition for singly-linked list.
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val
//   this.next = next === undefined ? null : next
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  let nextPointer
  let prev = null

  while (head) {
    nextPointer = head.next
    head.next = prev
    prev = head
    head = nextPointer
  }
  head = prev
  return head
}
