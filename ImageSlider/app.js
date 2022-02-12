const images = [
  '../../gustavupp.github.io/gallery/images/city1.jpeg',
  '../../gustavupp.github.io/gallery/images/city2.jpeg',
  '../../gustavupp.github.io/gallery/images/city3.jpeg',
]

const mainImage = document.querySelector('.main-img')
const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')
let index = 0
mainImage.src = images[index]

function nextImage() {
  index++
  if (index > images.length - 1) index = 0
  mainImage.src = images[index]
}

function prevImage() {
  index--
  if (index < 0) index = images.length - 1
  mainImage.src = images[index]
}

next.addEventListener('click', nextImage)
prev.addEventListener('click', prevImage)
