// STARTS FROM (1:23:00)

function buttonClick(btn){
    //console.log(btn.innerText)//.innerText used to show all inputs inside that perticular class or id or anything (1:24:50)
    btn.addEventListener("click",()=>{
        //console.log(btn.innerText)// it will printed on console which will be clicked
        // switch(btn.innerText){
            // const displayed=document.getElementById("display") // just for showpiece for understanding
            if(btn.innerText=='C'){
                displayed.innerText=""
                // break
            }

            else if(btn.innerText=='←'){
                displayed.innerText=displayed.innerText.slice(0,-1)
                // break;
            }

            else if(btn.innerText=='='){
                try {
                    displayed.innerText=eval(displayed.innerText)// eval() used for doing arithmetic and logical operations (1:29:15)
                } catch (error) {
                    displayed.innerText="Error"
                }
                // break;
            }
            else{
                displayed.innerText=displayed.innerText+btn.innerText
            }
        // }
    })
}

const buttons= document.querySelectorAll(".btn")

const displayed=document.getElementById("display")

buttons.forEach(btn=>{
    buttonClick(btn)
})