/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null || p.val !== q.val) return false
  let result =
    isSameTree(p.left, q.left) && isSameTree(p.right, q.right) ? true : false
  return result
}

///initial aproach code passes 58 of 60 cases, doesnt pass the [1,1][1,null,1]
// var isSameTree = function (p, q) {
//   if ((p === null && q !== null) || (q === null && p !== null)) return false
//   function dfsOnBst(node) {
//     let result = []
//     function callMe(node) {
//       if (node === null) return
//       if (node.left !== null) callMe(node.left)
//       result.push(node.val)
//       if (node.right !== null) callMe(node.right)
//     }
//     callMe(node)
//     return result
//   }
//   let pRes = dfsOnBst(p)
//   let qRes = dfsOnBst(q)
//   if (pRes.length !== qRes.length) return false

//   for (let i = 0; i < qRes.length; i++) {
//     if (pRes[i] !== qRes[i]) return false
//   }
//   return true
// }
