var minDepth = function (root) {
  if (root === null) return 0
  let left = this.minHeight(node.left)
  let right = this.minHeight(node.right)

  if (right === 0) return left + 1
  if (left === 0) return right + 1
  if (left < right) return 1 + left
  else return right + 1
}
