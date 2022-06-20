const message=document.querySelector(".message")
const submit=document.getElementById("submit")
const game=document.querySelector(".game")
const details=document.querySelector(".details")


let Player1=""
let Player2=""
let playGame=true
let chances=0

let activePlayer=0
// 0 for Player1
// 1 for Player2

function showMessage(msg){
    message.innerHTML=`<h3 style="font-size:16px; font-family: "Permanent Marker";">${msg}</h3>`
}

function updateActivePlayer(){
    if(activePlayer===0){
        activePlayer=1
    }else
        activePlayer=0
}

function initializeGame(){
    Player1=document.getElementById("player1").value
    Player2=document.getElementById("player2").value

    activePlayer=0

    details.style.display="none"
    game.style.display="flex"
    
    showMessage(`${activePlayer===0 ? Player1: Player2},you're up`)
    for(let i=1;i<=9;i++){
        const div=document.createElement("div")
        div.id=i
        // div.classList=i
        // CLASSLIST FOR ADDING CLASS 
        
        div.classList.add("game-slot")

        div.addEventListener("click",function(){
            
            if(!div.innerText && playGame){
                div.innerText= activePlayer===0 ? "x" : "o"
                chances=chances+1
    
                const winner=checkWinner()
    
                if(!winner && chances!=9){
                    updateActivePlayer()
                    showMessage(`${activePlayer===0 ? Player1: Player2},you're up`)
                }else if(chances==9 && !winner){
                    showMessage("Match Drawn")
                }else{
                    showMessage(`${activePlayer===0 ? Player1: Player2},congrats you won!`)
                }
            }
        })


        // game.append(div)
        game.appendChild(div)
    
    }
      

}

// function checkWinner

function checkWinner(){
    
    let winnerbool=false

    for(let i=0;i<winningSequences.length;i++){
        let winningCombo=winningSequences[i]

        const cell1=document.getElementById(winningCombo[0]+1)
        const cell2=document.getElementById(winningCombo[1]+1)
        const cell3=document.getElementById(winningCombo[2]+1)

        const val1=cell1.innerText
        const val2=cell2.innerText
        const val3=cell3.innerText

        if(val1===val2 && val2===val3 && val1!=""){
            winnerbool=true
            cell1.style.background="purple"
            cell2.style.background="purple"
            cell3.style.background="purple"
            playGame=false
            break
        }

    }
    return winnerbool
}


const winningSequences=[
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]

submit.addEventListener("click",initializeGame)

