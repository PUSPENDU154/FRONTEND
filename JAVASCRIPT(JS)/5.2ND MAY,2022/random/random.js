console.log(Math.random())
// returns a value no between {0,1}
console.log(Math.floor(Math.random()*10))
// it comes an inetger value from 0 to 9 but in the case we want 1 to 10 then we have to add 1
console.log(Math.floor(Math.random()*10+1))

// returns a random number between minimum(included) and maximum(excluded)(1:23:50)

function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min)) +min
}
console.log(getRandomInteger(0,10))

// returns a random number between minimum(included) and maximum(included)(1:23:50)

function getRandomInteger1(min,max){
    return Math.floor(Math.random()*((max-min)+1)) +min//(1:25:20)
}
console.log(getRandomInteger1(0,10))