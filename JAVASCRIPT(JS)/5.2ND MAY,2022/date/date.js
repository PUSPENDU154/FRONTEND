var a=new Date()//(1:01:15) let or const can also be putted
console.log(a)
var a=new Date("2022-06-12")//(1:01:40)
console.log(a)//yyyy-mm-dd
var a=new Date(0)
console.log(a)
var a=new Date(12786122454544)//in miliseonds
console.log(a)
var diff=new Date()-new Date(0)
console.log(diff)
var a=new Date("2022-10-05")
console.log(a)
console.log("getFullYear(): "+a.getFullYear())
console.log("getDate(): "+a.getDate())
console.log("getMonth(): "+a.getMonth())//starts from '0'<-January
console.log("getDay(): "+a.getDay())//output as a number starts from Sunaday as 0
console.log("getTime(): "+a.getTime())
console.log("Date.now(): "+Date.now())
console.log("getHours(): "+a.getHours())
console.log("getMinutes(): "+a.getMinutes())
console.log("getMilliseconds(): "+a.getMilliseconds())

// Select the date (1:11:45)
a.setDate(2)
console.log(a)
// all over in one (1:14:30)
console.log(new Date(2002,10,5,10,55,20,020))
// new Date(year,Month,Day,Hours,Minutes,Seconds,milliseconds)