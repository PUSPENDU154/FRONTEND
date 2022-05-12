function multiply(p1,p2){
    return p1*p2
}

function divide(p1,p2){
    return (p1/p2)
}
// console.log(divide(56,8))

function toCelcius(fahrenheit){
    return (5/9)*(fahrenheit-32)
}

let x=toCelcius(99)
document.write("The Temperature is "+ x +" degree Celcius")//(2:01:00)

let object2={
    firstName:"Puspendu",
    lastName:"Saha",
    age:21,
    fullName:function(){
        return this.firstName+" "+this.lastName
    },
}

console.log(object2)
console.log(object2.fullName())// call the name fetched by "this" keyword
console.log(object2.fullName) // call the whole function inside the object
console.log(object2["firstName"])

