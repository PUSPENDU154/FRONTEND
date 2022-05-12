let x=6,y=3
if(x<10 && y==3){
    console.log(true)
}else{
    console.log(false)
}

if(x==5 || y==3){
    console.log(true)
}else{
    console.log(false)
}

if(!(x===y)){
    console.log("x is not equal to y")
}else{
    console.log("x is equal to y")
}

// turnary opeartor (1:19:55)
let age=151
let canVote=((age<100)?((age>18)?"can vote":"can't vote"):((age>150)?"guranteed dead":"assumed dead"))
console.log(canVote)

// var name=prompt("Please Enter Your Namne:")

const value=true // (1:34:40)
const value2=(5===3)
console.log(value,value2)

const cars=["volvo","audi","BMW","Mercetez"] // (1:35:40)
console.log(cars)

const person ={  //(1:36:50)
    firstName:"Puspendu",
    lastName: "Saha",
    age: 20,
    phoneNumber: 
    [
        {
            first:"Rohan",
            Number:9038711844
        },
        {
            second:"Puspendu",
            Number:9658562351
        },
    ],
    nickname:
    {
        firstName:"babu",
        lastName:"Saha",
    },
    address:
    {
        HouseNo: 12,
        Street: "dulepara main road",
        town: "Chandannagar",
        Pincode: 712136,
    }
}
console.log(person)

const junkdata=[ //(1:38:00)
    "Puspendu",
    20,
    ["value",24,23,true],
    {
        first: 12,
        Second: "ghat",
    },
]
console.log(junkdata)
//(1:41:00) is imp. why the some elements are changing though i have given "const" keyword
 let abc
 var xyz
 console.log(typeof(abc),xyz)

 let aBc="puspendu"
 aBc=undefined
 console.log(aBc) //(1:42:40)

 let car=" "
 console.log(typeof(car))//tupeof of that car is string
 
 console.log("-----------------------------------------------------------")
 let Null=null // null os also referred as a false
 console.log(Null)
 Null=undefined
 console.log(Null)
