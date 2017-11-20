/**
 * the getRandomQuote function generates a quote picked at random from the
 * quotes array, which must be defined before this method (currently defined
 * in quotes.js.
 */
let usedQuotes = [];

function getRandomQuote() {
  let number = Math.floor( Math.random() * quotes.length);
  if (quotes.length === 0) {
    repopulateQuotesArray();
  }
  let quote = quotes[number];
  quotes.splice(number, 1);
  usedQuotes.push(quote);
  console.log(usedQuotes);
  console.log(quotes);
  return quote;
}


function repopulateQuotesArray() {
  while (usedQuotes.length > 0) {
    quotes.push(usedQuotes.pop());
  }
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

// NEW_QUOTE_INT sets the interval for the auto-advance function below. It is set to 30 seconds
const NEW_QUOTE_INT = 30000;

/**
 * the repeatedTimeout function calls the printQuote function every 30 seconds
 * to advance the displayed quote even if the button isnt pushed.
 */
function repeatedTimeout() {
  printQuote();
  window.setTimeout(repeatedTimeout, NEW_QUOTE_INT);
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
let showNewQuoteButton = document.getElementById('loadQuote');
showNewQuoteButton.addEventListener("click", printQuote, false);

/*
 * this call to set timeout delays the start of the repeatedTimeout function by
 * 30 seconds. Without it the first quote will be a random quote with a random
 * background color instead of the quote I want to display first which is
 * written into the HTML in index.html
 */
window.setTimeout(repeatedTimeout, 30000);
