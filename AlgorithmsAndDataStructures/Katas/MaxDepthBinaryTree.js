//104. Maximum Depth of Binary Tree

/*Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  //recursive call to maxDepth for each node
  if (root === null) return 0 //if node is null, return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) //add 1 to the max value returned from each side of three.. if you want the min depth of three, just add 1 to the min of the returned values
}
