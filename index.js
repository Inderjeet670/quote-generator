//get elements

const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteButton = document.querySelector('#new-quote');


let apiQuotes = [];

// extract a single quote
function getQuote(){
    const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length) ];
    quoteText.innerHTML = quote.text;
    authorText.innerHTML = quote.author;
    
}
// Fetch a collection of quotes from API

async function getQuotes(){
    const apiUrl = "https://type.fit/api/quotes";

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(getQuote())

    } catch (error) {
        
    }
}

getQuotes();

newQuoteButton.addEventListener('click', ()=>{
    getQuotes();
})