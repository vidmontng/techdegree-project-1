/******************************************
Treehouse FSJS Techdegree:
project 1 A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Keep smiling, because life is a beautiful thing and there is so much to smile about.",
    source: "Marilyn Monroe",
  },
  {
    quote: "The beautiful thing about learning is nobody can take it away from you.",
    source: "B.B. King",
    year: "September 1996"
  },
  {
    quote: "May the Force be with you",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars, 1977"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "After all, tomorrow is another day!",
    source: "Scarlett",
    citation: "Gone with the Wind",
    year: "1939"
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    source: "Oscar Wilde",
    year: "June 1954"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source:"Oprah Winfrey"
  },
  {
    quote: "Well done is better than well said",
    source: "Benjamin Franklin"
  },
  {
    quote: "Not in doing what you like but in liking what you do is the secret of happiness.",
    source: "J.M. Barrie",
    year: "August 1933"
  }  
];

const length = quotes.length;

/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  let randomNumber = Math.floor( Math.random() * length +1);
  return quotes[randomNumber];
}




/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let quoteString = `<p class="quote">${randomQuote.quote}</p>
                      <p class="source">${randomQuote.source}`;
if (randomQuote.citation) {
  quoteString+=`<span class="citation">${randomQuote.citation}</span>`;                   
}
if (randomQuote.year) {
  quoteString+=`<span class="year">${randomQuote.year}</span>`;                   
} 
quoteString+=`</p>`;
document.getElementById('quote-box').innerHTML = quoteString;                        

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);