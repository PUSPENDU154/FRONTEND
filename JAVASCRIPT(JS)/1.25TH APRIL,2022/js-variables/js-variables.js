var func="I am"
console.log(func)
function myfunc(){
    var func="not"
    console.log(func)
}
myfunc()
var func="that person"
console.log(func)

// Hoisting of var:(1:54:40)
var sayhello;
console.log(sayhello)
sayhello="Hey There"
// var is global scoped or function scoped 
/*let sayhello;
console.log(sayhello)
sayhello="Hey There"
[It shows "error" for "let" as well as "const" but for "var" it shows "undefined"]*/

const we=45
console.log(we)

var cont="no bro"
var times=4
if(times>3){
    var cont="yes bro"
}
console.log(cont)