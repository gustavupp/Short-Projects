/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.*/

var isValid = function (s) {
  let hashMap = { ']': '[', ')': '(', '}': '{' } //create hashmap of parentheses and its counterparts
  let stack = [] //create a stack array

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[' || s[i] === '(' || s[i] === '{') stack.push(s[i])
    //if an opening parentheses, push to the stack
    else if (stack[stack.length - 1] === hashMap[s[i]]) {
      //if closing parentheses is equal to the counterpart of what is on top of the stack, pop it from stack
      stack.pop()
    } else return false //if closing parentheses is NOT equal to the counterpart of what is on top of the stack, the order is not right
  }

  if (stack.length === 0) return true
  else return false //lastly if we end up with an empty array, return true
}

console.log(isValid('([{[]]]}])'))
