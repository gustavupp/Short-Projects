const log = function (msg) {
  console.log(msg)
}

const log1 = (msg) => console.log(msg)

function letMeKnowWHenDonw(msg, callback) {
  for (let i = 0; i < 1000; i++) {
    console.log(i)
  }

  callback(msg)
}

let callback = (msg) => console.log(msg)
console.log(letMeKnowWHenDonw('Done', callback))
