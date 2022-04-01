/*
given the following array sum the amounts of the same year and return an array of objects as: 
    [
    {year: 2022, amount: 3}, 
    {year: 2019, amount:2}, 
    ...
    ]
*/

const arr = [
  { year: 2022, amount: 1 },
  { year: 2021, amount: 1 },
  { year: 2019, amount: 1 },
  { year: 2022, amount: 1 },
  { year: 2019, amount: 1 },
  { year: 2020, amount: 1 },
  { year: 2022, amount: 1 },
  { year: 2020, amount: 1 },
  { year: 2021, amount: 1 },
]

let result = Array.from(
  arr.reduce(
    //use Map.set() and Map.get() to add curr.year and if acc.get(cur.year) exists in array, add cur.amount else add 0
    (acc, { year, amount }) => acc.set(year, (acc.get(year) || 0) + amount),
    new Map() //pass new Map() as a initial value
  ),
  ([year, amount]) => ({ year, amount })
)

console.log(result)
