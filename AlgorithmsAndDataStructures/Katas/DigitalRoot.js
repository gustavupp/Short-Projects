function digitalRoot(n) {
  n = n.toString()
  if (n.length < 2) return n

  let res = sum(n)
  while (res > 9) {
    sum(res.toString())
  }
  return res
}

function sum(n) {
  let res = 0
  for (let char of n) {
    res += parseInt(char)
  }
  return res
}

console.log(digitalRoot(456))
