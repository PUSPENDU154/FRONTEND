const person={
    firstName:"Puspendu",
    lastName:"Saha",
    fullName:function(){
        return this.firstName +" "+ this.lastName
    }
}

console.log(person.fullName())

const person1={
    firstName:"P",
    lastName:"S",
}
console.log(person.fullName.call(person1))


// while we giving arguments in call() method(1:54:00)
const personarg={
    firstName:"Puspendu",
    lastName:"Saha",
    fullName:function(city,state){
        return `${this.firstName} ${this.lastName}. lives in ${city} and, ${state}`
    }
}

console.log(personarg.fullName("chandannagar","west bengal"))

const person1arg={
    firstName:"P",
    lastName:"S",
}

console.log(personarg.fullName.call(person1arg,"chandannagar","west bengal"))

// apply() (1:56:20)

const personargApply={
    firstName:"Puspendu",
    lastName:"Saha",
    fullName:function(city,state){
        return `${this.firstName} ${this.lastName}. lives in ${city} and, ${state}`
    }
}

console.log("Apply() (not used apply) example: "+personargApply.fullName("chandannagar","west bengal"))

const person1argApply={
    firstName:"P",
    lastName:"S",
}

console.log("Apply() (used apply) example: "+personargApply.fullName.apply(person1argApply,["chandannagar","west bengal"]))

// spceial cases for apply() (1:58:50)

console.log("Math.max(): "+Math.max(1,2,3,434,54))

const arr=[45,4,85,5,4,46]
const maxVal=Math.max.apply(null,arr)
const maxVal1=Math.max.apply(null,[45,4,85,5,4,46])
console.log(maxVal,maxVal)

// bind() mathod (2:02:35)
const member={
    firstName:"babu",
    lastName:"Saha"
}
let fullName=personarg.fullName.bind(member)
console.log(fullName("agra","UP"))