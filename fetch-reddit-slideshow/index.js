// Suggested Process:

// It is important to break down any development project in to smaller pieces and tackle them one at a time. Here is a list of how you might want to attack this project.

// Create your form (HTML/CSS)
// Prevent default form submission and verify that you can type something into the form
// Use AJAX to make a request. Show data in console
// Create an array of image URLs (tip: use filter and map).
// Make the form / title / description hide
// Cycle through images
// tip: use setInterval
// Either add images, or change the src of a single image tag
// Add some interesting style / animation
// Create button to stop animation (tip: use clearInterval).


const container = document.querySelector('#container')
const slideShow = document.querySelector('#slide-show')
const searchBtn = document.querySelector('#search')
const form = document.querySelector('#form')
const stopBtn = document.querySelector('#stop')
const textBox = document.querySelector('#text-box')
const info = document.querySelector('.info')
const action = document.querySelector('.action')

let after = ''

// const fetchSlides = () => {

//     if(document.getElementById('slides')) {
//         document.getElementById('slides').remove()
//     }

//     let parentdiv = document.createElement('div')
//     parentdiv.id='slides'
//     fetch(`http://www.reddit.com/search.json?q=${'cat'}+nsfw:no`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(console.error)
// }

const onSlideShow = () => {
    info.style.display = 'none'
    action.style.display = 'block'
    // const slideShowSpot = document.createElement('div')
    // slideShowSpot.classList.add('container')
    // slideShowSpot.innerHTML = `
    // <h1>Enjoy these Pictures!</h1>
    // `
}

const offSlideShow = () => {
    info.style.display = 'block'
    action.style.display = 'none'
}

const showSlides = (event) => {
    const redditUrl = event.target.getAttribute('data-url')
    fetch(redditUrl)
    .then(res => res.json())
    .catch(console.error)
}

let intervalId;

function startSlideShow(arr, index) {
   intervalId = setInterval(function() {
        placePic(arr[index++ % arr.length]);
    }, 1000);  
    // intervalId = setInterval(placePic, 500, urls);
}

function stopSlideShow () {
    clearInterval(intervalId);
}

form.addEventListener('submit', event => {
    // IMPORTANT
    // prevent default behavior of refresh
    // you will have to do this 99.99% of the time!
    event.preventDefault()
    
    // can access inputs with their 'ids'
    const submit = textBox.value
    console.log(textBox.value)
    
    // I don't think "submit" should be the thing in the line above so I changed it to "textBox"
    
    fetch(`http://www.reddit.com/search.json?q=${submit}+nsfw:no`)
    .then(res => res.json())
    // .then(slideShow)
    .then(response => {
        let urls = response.data.children.map(obj => {
            return obj.data.url
        }).filter(url => {
            let arr = url.split('.')
            if(arr[arr.length - 1] === 'jpg') {
                return true
            }
            return false
        })
    startSlideShow(urls, 0)
    // placePic()
    // showSlides()
        console.log(urls)
    // setTimeout(stopSlideShow, 4000)
    })
    .catch(console.error)
    onSlideShow()
})

// below is where I tried to start and stop the slideshow but it didn't work

function changeImage() {
    let imageSrc = document.getElementById('image').getAttribute('src');
    let currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf('/') + 1, imageSrc.lastIndexOf('/') +2);
    let newImage = "/Images" + (Number(currentImageNumber) + 1) +".jpg";
    document.getElementById('result').innerHTML = newImage;
    document.getElementById('result').innerHTML = currentImageNumber;
    document.getElementById('image').setAttribute('src', newImage);
}

function placePic (url) {
    console.log(url)
    let catPic = `<img src= ${url}></img>`
    slideShow.innerHTML= catPic
}


// I want the slideshow to stop when the user clicks the stop button
stopBtn.addEventListener('click', () => {
    container.style.display = 'none'
    stopSlideShow()
    offSlideShow()
})

// Just for some help in the right direction if you go to this url and search the page for the thumbnail key you will find a https link at one of them. That is the link you want to use in your src in your img tag

// "https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg"

// how did she console.log to see if the API is working?
// .then( (res) =>{
    //     console.log(res) 
    //     return(res)
    //     }

    // .then(body => {
    //     after = body.datat.after 
    //     for(let i=0; i < body.data.children.length; i++) {
    //         if(body.data.children[i].data.post_hint === 'image'){
    //             let div = document.createElement('div')
    //             let h4 = document.createElement('h4')
    //             let image = document.createElement('img')
    //             image.src = "https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg"
    //             h4.textContent = body.data.children[i].data.title
    //             div.appendChild(h4)
    //             div.appendChild(image)
    //             parentdiv.appendChild(div)
    //         }
    //     }
    //     document.body.appendChild(parentdiv)
    // })