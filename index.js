import dogsData from './data.js'
import Dog from './Dog.js'

let dogsArray = ["Rex", "Bella"]

document.getElementById('like-btn').addEventListener('click', likeBtn)
document.getElementById('dislike-btn').addEventListener('click', dislikeBtn)

function likeBtn() {
    document.getElementById("dog").insertAdjacentHTML('beforebegin', `
        <div class="decision-img">
            <img src="/images/badge-like.png" alt="liked">
        </div>`)
    reset()

    setTimeout(()=>{
        nextDog()
    }, 750) 
}

function dislikeBtn() {
    document.getElementById("dog").insertAdjacentHTML('beforebegin', `
        <div class="decision-img">
            <img src="/images/badge-nope.png" alt="disliked">
        </div>`)
    reset()

    setTimeout(()=>{
        nextDog()
    }, 750) 
}

function reset() {
    setTimeout(()=>{
        document.querySelector(".decision-img").remove()
    }, 750) 
}

function nextDog() {
    const nextDogData = dogsData[dogsArray.shift()]
    if (nextDogData) {
        const nextDog = new Dog(nextDogData)
        render(nextDog)
    }
}
function render(dog) {
    document.getElementById('dog').style.backgroundImage = `url(${dog.getDogImage()})`
    document.getElementById('dog').innerHTML = dog.getDogHtml()
}

const initialDog = new Dog(dogsData.Teddy)
render(initialDog)