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
    //IF AUTHOR NAME IS NOT KNOWN
    if(!quote.author){
        authorText.innerHTML = 'Unknown';
    }else{
        authorText.innerHTML = quote.author;
    }

    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.innerHTML = quote.text;
    
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

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


newQuoteButton.addEventListener('click', ()=>{
    getQuotes();
})

twitterBtn.addEventListener('click', ()=>{
    tweetQuote();
})

