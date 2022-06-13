// import x from "./quote.js"
// console.log(x)
// ABOVE THESE TWO ARE FOR FETCHING FROM JSON FILES

const quoteContainer =document.getElementById("quote-container")
const quoteText =document.getElementById("quote")
const authorText = document.getElementById("author")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")


let apiQuotes=[]

const showLoadSpinner=()=>{
    loader.hidden=false
    quoteContainer.hidden=true
}
const hideLoadSpinner=()=>{
    loader.hidden=true
    quoteContainer.hidden=false
}


const getQuotes=async ()=>{
    // show loader

    const apiUrl="https://type.fit/api/quotes"

    try {
        const response=await fetch(apiUrl)
        // apiQuotesPrev=response.json()
        // console.log(apiQuotesPrev)
        apiQuotes=await response.json()
        // console.log(response)
        console.log(apiQuotes)


        newQuote()
    
    } catch (error) {
        console.log(error)
    }
}

getQuotes()

// newQuote() Function below
const newQuote=()=>{
    showLoadSpinner()


    setTimeout(()=>{

        let setIndex=Math.floor(Math.random()*apiQuotes.length)
        const quoteWritten=apiQuotes[setIndex]
        
        if(quoteWritten.text.length>100){
            quoteText.classList.add("long-quote")
        }else{
            quoteText.classList.remove("long-quote")
        }

        quoteText.textContent=quoteWritten.text//for quote part

        
        if(quoteWritten.author===null){
            authorText.textContent="unknown"
        }else{
            authorText.textContent=quoteWritten.author
        }
        hideLoadSpinner()

    },200)
    
}

newQuoteBtn.addEventListener("click",newQuote)
