//variable + loop
const array = [1, 2, 3]
let sum

for (let i = 0; i < array.length; i++) {
  sum += array[i]
}
console.log(sum) //6

//simple example
const arr = [1, 2, 3]
const total = arr.reduce((accumulator, currentItem) => {
  return accumulator + currentItem
})
console.log(total) // 6

//turn variable + array into a function
function myReduce(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

//add the optional initialValue
function myReduce(arr, initialValue) {
  let total = initialValue
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

//array of objects
const objsArray = [{ number: 1 }, { number: 2 }, { number: 3 }]

function myReduce(arr, initialValue) {
  let total = initialValue
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

myReduce(objsArray)

//with a callback function
function myReduce(arr, callback, initialValue) {
  let total = initialValue
  for (let i = 0; i < arr.length; i++) {
    if (total !== undefined) total = callback(total, arr[i])
    else total = arr[i]
  }
  return total
}

function callback(accumulator, currentItem) {
  return accumulator + currentItem.number
}

myReduce(arr, callback, 0)

//shopping cart example
const shoppintCart = [
  { price: 10, amount: 1 },
  { price: 15, amount: 3 },
  { price: 20, amount: 2 },
]

shoppintCart.reduce(
  (accumulator, currentItem) => {
    return {
      totalItems: accumulator.totalItems + currentItem.amount,
      totalPrice:
        accumulator.totalPrice + currentItem.amount * currentItem.price,
    }
  },
  { totalItems: 0, totalPrice: 0 }
)

//menu categories example
const menuCategories = [
  { itemName: 'Marinated Olives', category: 'Appetizer' },
  { itemName: 'Tartare', category: 'Entree' },
  { itemName: 'Octopus Grillé', category: 'Entree' },
  { itemName: 'Market Fish', category: 'Main' },
]

menuCategories.reduce((accumulator, currentItem) => {
  if (!accumulator.includes(currentItem.category))
    accumulator.push(currentItem.category)

  return accumulator
}, [])

//array with duplicate objects
const objsArr = [
  { id: 0, name: 'banana' },
  { id: 0, name: 'banana' },
  { id: 1, name: 'apple' },
  { id: 2, name: 'pineapple' },
]

objsArr.reduce((accumulator, currentItem) => {
  if (!accumulator.some((el) => el.id === currentItem.id))
    accumulator.push(currentItem)

  return accumulator
}, [])

//replacing filter().map() with .reduce()
menuCategories
  .filter((item) => item.category === 'Entree')
  .map((item) => item.itemName)

menuCategories.reduce((accumulator, currentItem) => {
  if (currentItem.category === 'Entree') accumulator.push(currentItem.itemName)

  return accumulator
}, [])

//groupBy function
function groupBy(arr, key) {
  return arr.reduce((accumulator, currentItem) => {
    const accumulatorKey = currentItem[key]

    accumulator[accumulatorKey] = accumulator[accumulatorKey] || []
    accumulator[accumulatorKey].push(currentItem)

    return accumulator
  }, {})
}

const menuByCategory = groupBy(menuCategories, 'category')

//alowing function as key
function groupBy(arr, key) {
  return arr.reduce((accumulator, currentItem) => {
    const accumulatorKey =
      key instanceof Function ? key(currentItem) : currentItem[key]

    accumulator[accumulatorKey] = accumulator[accumulatorKey] || []
    accumulator[accumulatorKey].push(currentItem)

    return accumulator
  }, {})
}

const menuByCategory1 = groupBy(menuCategories, (x) => x.category)

//Flatenning an array of arrays
const arrayOfArrays = [1, 2, 3, [4, 5], [6, 7], [8, 9]]
const flatArray = arrayOfArrays.reduce((acc, cur) => acc.concat(cur), [])
