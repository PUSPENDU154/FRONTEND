// const url=`https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}&query=${query}&orientation=squarish;`


const APIkey= "dQlG1r5oYvJo1YXfbP3gXs4YxkX1A6pV4BzPlIAODro"
// This is an open source key so it's fine but NEVER push sensitive keys or any data like this on github
// I am doing this just to teach and cause this key is already readily available

let photosArray=[]
let totalImages=0
let imagesLoaded=0
let ready=false

const imageContainer=document.getElementById("image-container")
const loader=document.getElementById("loader")


function customSetAttribute(element,attributes){
  for(const key in attributes){
    element.setAttribute(key,attributes[key])
  }
}


function imageLoaded(){
    imagesLoaded++
    if(imagesLoaded===totalImages){
      ready=true
      loader.hidden=true
    }
}


function displayPhotos(){
  
  imagesLoaded=0
  totalImages=photosArray.length

  photosArray.forEach((photos)=>{
    
    const item=document.createElement("a")
    customSetAttribute(item,{
      href:photos.links.html,
      target:"_blank",
    })
    
    const img=document.createElement("img")
    customSetAttribute(img, {
      src: photos.urls.small,
      alt: photos.alt_description,
      title: photos.alt_description,
    });

    img.addEventListener("load",imageLoaded)
    item.appendChild(img)
    imageContainer.appendChild(item)

  })
}

// async function 
async function getPhotos(){
    const query="puppy"

    const count=100
    const apiUrl= `https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}&query=${query}&orientation=squarish;`

    try {
        const response=await fetch(apiUrl)
        photosArray=await response.json()
        
        displayPhotos()
        console.log(photosArray)
    } catch (error) {
      console.log(error)  
    }
}

getPhotos()

// for getting more photos
window.addEventListener("scroll",()=>{
  if(window.innerHeight+window.scrollY >= document.body.offsetHeight-1000 && ready){
    ready=false
    getPhotos()
  }
})