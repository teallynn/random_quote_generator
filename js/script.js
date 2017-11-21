/**
 * the getRandomQuote function generates a quote picked at random from the
 * quotes array, which must be defined before this method (currently defined
 * in quotes.js.
 */
let usedQuoteIds = [];

function getRandomQuote() {
  let number = Math.floor( Math.random() * quotes.length);
  if (usedQuoteIds.length === quotes.length) {
    usedQuoteIds = [];
  }
  while (usedQuoteIds.includes(number) === true) {
      number = Math.floor( Math.random() * quotes.length);
  }
  let quote = quotes[number];
  usedQuoteIds.push(quote.id);
  console.log(usedQuoteIds);
  return quote;
}

/**
 * the getRandomColor function returns a random color from the colors array .
 * New colors can be added to the array to add them to the cycle of background
 * colors.
 */
function getRandomColor() {
  let colors = ['blue', 'purple', 'green', 'orange', 'gold', 'red', 'teal'];
  let number = Math.floor( Math.random() * colors.length);
  let color = colors[number];
  return color;
}

/**
 * the printQuote function takes no parameters and returns a
 * random quote that is printed to the page along with its source attribution.
 * It checks if a citation and date are present and displays
 * them as well if they exist. Note: a date will never be
 * displayed without a citation but a citation may be displayed
 * without a date. It also changes the background color of the body element.
 */
function printQuote() {
  let quote = getRandomQuote();
  let display = '<p class="quote">' + quote.text + '</p>';
  display += '<p class="source">' + quote.source;
  if (quote.citation !== null && quote.date != null) {
    display += '<span class="citation">' + quote.citation + '</span><span class="year">' + quote.date + '</span></p>';
  } else if (quote.citation !== null) {
      display += '<span class="citation">' + quote.citation + '</span>';
    } else {
      display += '</p>';
    }
    document.getElementById('quote-box').innerHTML = display;
    let color = getRandomColor();
    document.body.style.backgroundColor = color;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
let showNewQuoteButton = document.getElementById('loadQuote');
showNewQuoteButton.addEventListener("click", printQuote, false);

// Automatically advance quote every 30 seconds regardless of user input
window.setInterval(printQuote, 30000);
