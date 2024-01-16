/******************************************
Treehouse FSJS Techdegree:
project 1 A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
Created an array "quotes" containing 9 quotes, according to the project requirements:
 - every quote contains "quote and "source" properties;
 - 4 quotes contain a "year" property; 
 - 2 quotes contain a "citation" property;
 - 4 quotes contain a "tags" property;
***/
const quotes = [
  {
    quote: "Keep smiling, because life is a beautiful thing and there is so much to smile about.",
    source: "Marilyn Monroe",
    tags: "wisdom"
  },
  {
    quote: "The beautiful thing about learning is nobody can take it away from you.",
    source: "B.B. King",
    year: "September 1996"    
  },
  {
    quote: "May the Force be with you",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars, 1977",
    tags: "movie"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "After all, tomorrow is another day!",
    source: "Scarlett",
    citation: "Gone with the Wind",
    year: "1939",
    tags: "movie"
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    source: "Oscar Wilde",
    year: "June 1954",
    tags: "wisdom"
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

/***
 * Declared a variable "length" that will hold the quantity of quotes in the array "quotes"
 ***/

const length = quotes.length;

/***
 * Created a getRandomQuote function which purpose is to return a random quote from the array "quotes" 
 * by generating a random number (the index of the random element of the array) in the range from 0 
 * (1st item of the array) to "length" (last item of the array)m and returning a quote itself.
***/
function getRandomQuote () {
  let randomNumber = Math.floor( Math.random() * length);
  return quotes[randomNumber];
}


/***
 * Created a printQuote function. 
***/
function printQuote() {

  //calling getRandomQuote function to get a random quote.
  let randomQuote = getRandomQuote();
  //starting building a string with main <p> tags containing main properties "quote" and "source"
  let quoteString = `<p class="quote">${randomQuote.quote}</p>
                     <p class="source">${randomQuote.source}`;
  //checking if a random quote has "citation" property. If yes - adding it to the orinted quote 
  //using <span> tags              
if (randomQuote.citation) {
  quoteString+=`<span class="citation">${randomQuote.citation}</span>`;                   
}
//same way checking if a random quote has "year" property and adding it to the printed quote
if (randomQuote.year) {
  quoteString+=`<span class="year">${randomQuote.year}</span>`;                   
} 
//checking if a random quote has "tags" property and adding it to the printed quote.
//I used "citation" styling class for printing"tags" saince we're not allowed to change initial CSS file
if (randomQuote.tags) {
  quoteString+=`<span class="citation">${randomQuote.tags}</span>`;                   
} 
//closing the printed quote with a closing </p> tag 
quoteString+=`</p>`;
//chosing div with "quote-box" ID and changing it's content to reflect newly built random quote
document.getElementById('quote-box').innerHTML = quoteString; 
//assinging new random background color for every newly printed quote
document.body.style.backgroundColor = changeBackgroundColor();          
}


/***Created a timing function with the setInterval() method to print a new quote to the page with 10 sec intervals
 * just using one string of code - setInterval(printQuote, 3000); - had the same effect, but the project instructions
 * stated "Create a timing function", so I left it as it is.
 ***/
function autoRefreshQuotes() {
  return setInterval(printQuote, 3000);
}
//Calling a timing function 
autoRefreshQuotes();

//created randomColor function which purpose was to generate a random number from 0 to 255
function randomColor() {
  color = Math.floor(Math.random() * 256);
  return color;
}

//created changeBackgroundColor function that will generate a new rgb color with 3 different values for r, g and b
function changeBackgroundColor() {
let randomRGB = `rgb( ${randomColor()}, ${randomColor()}, ${randomColor()} )`;
  return randomRGB;
}


/***
 * Creating an event listener to be able to print a new quote into page after clicking the button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);