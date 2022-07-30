console.log('js conected!');

const button = document.getElementById('button')
const body = document.querySelector('body')

let clicksCount = 0
let outputClicks = document.getElementById('outputClicks')
outputClicks.innerText = clicksCount;

button.addEventListener('click', ()=>{
    clicksCount +=1
    outputClicks.innerText = clicksCount
})