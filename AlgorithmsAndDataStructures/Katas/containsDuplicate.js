/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/

//brute force approach. time complexity big O(n2)
// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) return true
//     }
//   }
//   return false
// }

//using javaScripts Set constructor
// var containsDuplicate = function (nums) {
//   let length = nums.length
//   let hashSet = new Set(nums)
//   console.log({ hashSet, length: hashSet.size })
//   if (length === hashSet.size) return false
//   return true
// }

//creating own hashMap and checking for duplicates. Space complexity O(n), time complexity O(n)
var containsDuplicate = function (nums) {
  let hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i] //var key gets the value of num[i] and will be the property in our hashMap
    if (hashMap[key] !== undefined || null) return true //if hashMap contains a property that is equal to the value of key, it means we have added it. so it's a duplicate.
    hashMap[key] = i //otherwise add the value of key as a property and assign the index as a value
  }
  return false
}

console.log(containsDuplicate([1, 2, 2, 4, 5, 6]))
