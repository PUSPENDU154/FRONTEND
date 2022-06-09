const display=document.getElementById("display")

const playButton=document.getElementById("playButton")
const pauseButton=document.getElementById("pauseButton")
const resetButton=document.getElementById("resetButton")

let startTime;
let elapsedTime=0;
let stopwatchInterval;

const timeToString=(time)=>{
    
    let diffInHours=time/3600000
    let hh=Math.floor(diffInHours)
    
    let diffInMins=(diffInHours-hh)*60
    let mm=Math.floor(diffInMins)

    let diffInSec=(diffInMins-mm)*60
    let ss=Math.floor(diffInSec)

    let diffInMs=(diffInSec-ss)*1000
    let ms=Math.floor(diffInMs)
      
    hh=hh.toString().padStart(2,"0")
    mm=mm.toString().padStart(2,"0")
    ss=ss.toString().padStart(2,"0")
    ms=ms.toString().padStart(3,"0")

    display.innerHTML=`${hh}:${mm}:${ss}:${ms}`
}

const showButton=(buttonKey)=>{
    if(buttonKey=="PLAY"){
        playButton.style.display="block"
        pauseButton.style.display="none"
    }else{
        playButton.style.display="none"
        pauseButton.style.display="block" 
    }
}

const startStopwatch=()=>{
    startTime=Date.now()-elapsedTime
    
    stopwatchInterval= setInterval(()=>{
        elapsedTime=Date.now()-startTime

        timeToString(elapsedTime)
    },1)
    showButton("PAUSE")
}

const pauseStopwatch=()=>{
    clearInterval(stopwatchInterval)
    showButton("PLAY")
}
const resetStopwatch=()=>{
    clearInterval(stopwatchInterval)
    display.innerHTML="00:00:00:000"
    elapsedTime=0;
    showButton("PLAY")
}

playButton.addEventListener("click",startStopwatch)
pauseButton.addEventListener("click",pauseStopwatch)
resetButton.addEventListener("click",resetStopwatch)