const APIkey= "dQlG1r5oYvJo1YXfbP3gXs4YxkX1A6pV4BzPlIAODro"
// This is an open source key so it's fine but NEVER push sensitive keys or any data like this on github
// I am doing this just to teach and cause this key is already readily available

let photosArray=[]
let totalImages=0
let imagesLoaded=0
let ready=false


// const url=`https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}&query=${query}&orientation=squarish;`

function customSetAttribute(element,attributes){
  
}
function displayPhotos(){
  imagesLoaded=0
  totalImages=photosArray.length

  photosArray.forEach((photos)=>{
    const item=document.createElement("a")
    customSetAttribute(item,{
      href:photos.urls.small
      target:"_blank"
    })

  })
}

// async function 
async function getPhotos(){
    const query="puppy"

    const count=10
    const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}&query=${query}&orientation=squarish;`

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