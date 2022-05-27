// starts from (24:50)
const buttonsInJs=document.querySelectorAll(".btn")


buttonsInJs.forEach(btn => {
    btn.addEventListener("click",()=>{
        stopAllSounds()//(29:20)
        const id=btn.innerText
        document.getElementById(id).play()  
    }) 
});

const stopAllSounds=()=>{
    buttonsInJs.forEach(btn=>{
        const sound=document.getElementById(btn.innerText)
        sound.pause()//(30:15) stops the sound
        sound.currentTime=0 //starts from beginning
    })
}

// for stop button (30:45)
document.querySelector(".stop").addEventListener("click",()=>stopAllSounds())