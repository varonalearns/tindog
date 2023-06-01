import dogsData from './data.js'
import Dog from './Dog.js'

function render() {
    document.getElementById('dog').style.backgroundImage = `url(${dog.getDogImage()})`
    document.getElementById('dog').innerHTML = dog.getDogHtml()
}

const dog = new Dog(dogsData.Teddy)
render()