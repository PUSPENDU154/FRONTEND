// starts from (36:10)

const sounds=["applause","boo","gasp","tada","victory","wrong"]
const abcs="stop"

const stopAllSounds=()=>{
    sounds.forEach((soundName)=>{
        const sound=document.getElementById(soundName)
        sound.pause()
        sound.currentTime=0
    })
}

sounds.forEach((sound)=>{
    const btn=document.createElement("button")
    btn.classList.add("btn")
    btn.innerText=sound

    btn.addEventListener("click",()=>{
        stopAllSounds()
        document.getElementById(sound).play()
    })
    const buttonContainer=document.getElementById("buttons")
    buttonContainer.append(btn)
})

//  for the stop button only
const btn=document.createElement("button")
btn.classList.add("stop")
btn.innerText=abcs
const buttonContainer=document.getElementById("buttons")
buttonContainer.append(btn)

btn.addEventListener("click",stopAllSounds)



