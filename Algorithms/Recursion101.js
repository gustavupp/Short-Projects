//code wars recursion 101 challenge

function solve(a,b) {
  if (!a || !b) return [a,b]
  if (a >= 2*b) return solve(a-2*b, b)
  if (b >= 2*a) return solve(a, b-2*a)    
  return [a,b]
}
