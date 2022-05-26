const displayed = document.getElementById("display")

function clearExp(){
    displayed.innerText=""
}

function backButton(){
    displayed.innerText=displayed.innerText.slice(0,-1)
}

function evalExpInEqual(){
    try{
        const lastChar=displayed.innerText.slice(-1)
        const firstChar=displayed.innerText.slice(0,1)
        if(isOpeartor(lastChar) || isMulorDiv(firstChar)){
            alert("cannot evaluate an expressiion using an operator")//(1:51:30)
        }else
        displayed.innerText=eval(displayed.innerText)
    }catch(error){
        displayed.innerText="Error"
    }
}

function isOpeartor(op){
    if(op==='+' || op=== '-' || op==='*' || op==='/' ){
        return true
    }
    return false
}

function isMulorDiv(op){
    if(op==='*' || op==='/' ){
        return true
    }
    return false
}

function appendChar(char){
    if(displayed.innerText===""){
        if(char != 0 && !isMulorDiv(char)){
            displayed.innerText=displayed.innerText+char
        }
    }else{
        const prevChar=displayed.innerText.slice(-1)
        if(isOpeartor(prevChar) && isOpeartor(char)){
            displayed.innerText=displayed.innerText.slice(0,-1)
        }
        displayed.innerText=displayed.innerText+char
    }
 
}

