/**********************************OOP VERSION****************************************/
class Slider {
  constructor(landscape) {
    this.images = [
      `../../gustavupp.github.io/gallery/images/${landscape}1.jpeg`,
      `../../gustavupp.github.io/gallery/images/${landscape}2.jpeg`,
      `../../gustavupp.github.io/gallery/images/${landscape}3.jpeg`,
    ]

    this.mainImage = document.querySelector('.main-img')
    this.prev = document.querySelector('.prev-btn')
    this.next = document.querySelector('.next-btn')
    this.index = 0
    this.mainImage.src = this.images[this.index]

    //either bind 'this' here
    this.nextImage = this.nextImage.bind(this)

    this.next.addEventListener('click', this.nextImage)
    this.prev.addEventListener('click', this.prevImage.bind(this)) //or bind 'this' here
  }

  //methods add to constructor's prototype
  nextImage() {
    console.log(this)
    this.index++
    if (this.index > this.images.length - 1) this.index = 0
    this.mainImage.src = this.images[this.index]
  }

  prevImage() {
    this.index--
    if (this.index < 0) this.index = this.images.length - 1
    this.mainImage.src = this.images[this.index]
  }
}

const mySlider = new Slider('city')

/**********************************NORMAL VERSION****************************************/

// const images = [
//   '../../gustavupp.github.io/gallery/images/city1.jpeg',
//   '../../gustavupp.github.io/gallery/images/city2.jpeg',
//   '../../gustavupp.github.io/gallery/images/city3.jpeg',
// ]

// const mainImage = document.querySelector('.main-img')
// const prev = document.querySelector('.prev-btn')
// const next = document.querySelector('.next-btn')
// let index = 0
// mainImage.src = images[index]

// function nextImage() {
//   index++
//   if (index > images.length - 1) index = 0
//   mainImage.src = images[index]
// }

// function prevImage() {
//   index--
//   if (index < 0) index = images.length - 1
//   mainImage.src = images[index]
// }

// next.addEventListener('click', nextImage)
// prev.addEventListener('click', prevImage)
