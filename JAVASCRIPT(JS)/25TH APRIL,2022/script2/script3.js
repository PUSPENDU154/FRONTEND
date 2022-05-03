document.getElementById("root3").innerHTML="<h1>another javascript</h1>"

let x,y,z
x=10;y=20
console.log(x);console.log(y)
let a=x+y
console.log(a)
var c;
var c=5;
console.log(c)
var c=6;
console.log(c)
let v="Puspendu"
console.log(v)
console.log(typeof(v))
console.log(typeof(c))

function myfunc()
{
    var res=23+9+"Puspendu"+235;
    let res1="Avantika"
    console.log(res);
    //var is a function scoped
    console.log(res1)
}

myfunc()
let op=55
console.log(op)
op=59
console.log(op)
const omg=56
console.log(omg)
omg=6
// console.log(omg) --it won't happen once const have defined and initialized it can't be changed
