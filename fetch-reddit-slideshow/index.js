const container = document.querySelector('#container')
const slideShow = document.querySelector('#slide-show')
const searchBtn = document.querySelector('#search')
const form = document.querySelector('#form')

const onSlideShow = (element) => {
    container.style.display = 'none'
    const slideShowSpot = document.createElement('div')
    slideShowSpot.classList.add('container')
    slideShowSpot.innerHTML = `
        <h1>Enjoy these Pictures!</h1>
    `
}

const slideShow = (event) => {
    const redditUrl = event.target.getAttribute('data-url')
    fetch(redditUrl)
    .then(res => res.json())
    .catch(console.error)
}

form.addEventListener('submit', event => {
    // IMPORTANT
    // prevent default behavior of refresh
    // you will have to do this 99.99% of the time!
    event.preventDefault()

    // can access inputs with their 'ids'
    // console.log(input.value)
    const submit = input.value

    fetch("http://www.reddit.com/search.json?q=${submit}+nsfw:no")
    .then(res => res.json())
    .then(slideShow)
    .catch(console.error)
})


