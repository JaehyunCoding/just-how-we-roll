/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

let d6img = document.querySelector(`#d6-roll`)
let double6click = document.querySelector(`#double-d6-buttons`)
let double6img1 = document.querySelector(`#double-d6-roll-1`)
let double6img2 = document.querySelector(`#double-d6-roll-2`)
let d12img = document.querySelector(`#d12-roll`)
let d20img = document.querySelector(`#d20-roll`)

let d6mean = document.querySelector(`#d6-rolls-mean`)
let doublemean = document.querySelector(`#double-d6-rolls-mean`)
let d12mean = document.querySelector(`#d12-rolls-mean`)
let d20mean = document.querySelector(`#d20-rolls-mean`)

let resetButton = document.querySelector(`#reset-button`)

    console.log(`Opening the webpage`)
    d6img.src = `./images/start/d6.png`
    double6img1.src = `./images/start/d6.png`
    double6img2.src = `./images/start/d6.png`
    d12img.src = `./images/start/d12.jpeg`
    d20img.src = `./images/start/d20.jpg`

    d6mean.innerText = "NA"
    doublemean.innerText = "NA"
    d12mean.innerText = "NA"
    d20mean.innerText = "NA"

/*******************
 * EVENT LISTENERS *
 *******************/

d6img.addEventListener(`click`, function(){
    console.log(`d6 clicked`)
    let ran6 = getRandomNumber(6)
    console.log(ran6)
    sixes.push(ran6)
    console.log(sixes)
    d6img.src = `/images/d6/${ran6}.png`
    d6mean.innerText = `${diceSum(sixes)/sixes.length}`
})

double6click.addEventListener(`click`, function(){
    console.log(`double6 clicked`)
    let rand1 = getRandomNumber(6)
    let rand2 = getRandomNumber(6)
    console.log(rand1, rand2)
    doubleSixes.push(rand1)
    doubleSixes.push(rand2)
    console.log(doubleSixes)
    double6img1.src = `/images/d6/${rand1}.png`
    double6img2.src = `/images/d6/${rand2}.png`
    doublemean.innerText = `${diceSum(doubleSixes)/doubleSixes.length}`
})

d12img.addEventListener(`click`, function(){
    console.log(`d12 clicked`)
    let ran12 = getRandomNumber(12)
    console.log(ran12)
    twelves.push(ran12)
    console.log(twelves)
    d12img.src = `/images/numbers/${ran12}.png`
    d12mean.innerText = `${diceSum(twelves)/twelves.length}`
})

d20img.addEventListener(`click`, function(){
    console.log(`d20 clicked`)
    let ran20 = getRandomNumber(20)
    console.log(ran20)
    twenties.push(ran20)
    console.log(twenties)
    d20img.src = `/images/numbers/${ran20}.png`
    d20mean.innerText = `${diceSum(twenties)/twenties.length}`
})

resetButton.addEventListener(`click`, function(){
    console.log(`reset clicked`)
    reset()
})

/******************
 * RESET FUNCTION *
 ******************/

function reset(){
    
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    d6img.src = `./images/start/d6.png`
    double6img1.src = `./images/start/d6.png`
    double6img2.src = `./images/start/d6.png`
    d12img.src = `./images/start/d12.jpeg`
    d20img.src = `./images/start/d20.jpg`

    d6mean.innerText = "NA"
    doublemean.innerText = "NA"
    d12mean.innerText = "NA"
    d20mean.innerText = "NA"
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function diceSum (arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
    sum += arr[i]
    } return sum
}


/****************
 * MATH SECTION *
 ****************/

// 더블의 경우, 한번 누르면 두개가 쫙 뜨는거인가?