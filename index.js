//get elements
const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteButton = document.querySelector('#new-quote');
const loader = document.querySelector('#loader');


let apiQuotes = [];
//hide loading 
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
//show loading

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// extract a single quote
function getQuote(){
    loading();
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
    //insert quote and hide loader
    quoteText.innerHTML = quote.text;
    complete();
    
}
// Fetch a collection of quotes from API

async function getQuotes(){

    loading();
    const apiUrl = "https://type.fit/api/quotes";

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        getQuote();
        

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

