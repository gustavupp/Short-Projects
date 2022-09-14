function cakes(recipe, available) {
  let res = []

  for (let key in recipe) {
    if (!available[key] || available[key] < recipe[key]) return 0
    res.push(Math.floor(available[key] / recipe[key]))
  }

  return Math.min(...res)
}
