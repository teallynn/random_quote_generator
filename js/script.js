/** the getRandomQuote function generates a quote picked at random from the
 * quotes array, which must be defined before this method (currently defined
 * in quotes.js. */

function getRandomQuote() {
  var number = Math.floor( Math.random() * quotes.length);
  var quote = quotes[number];
  return quote;
}

/** the getRandomColor function returns a random color from the colors array .
 * New colors can be added to the array to add them to the cycle of background
 * colors. */

function getRandomColor() {
  var colors = ['blue', 'purple', 'green', 'orange', 'gold', 'red', 'teal'];
  var number = Math.floor( Math.random() * colors.length);
  var color = colors[number];
  return color;
}

/** the printQuote function takes no parameters and returns a
 * random quote that is printed to the page along with its source attribution.
 * It checks if a citation and date are present and displays
 * them as well if they exist. Note: a date will never be
 * displayed without a citation but a citation may be displayed
 * without a date. It also changes the background color of the body element. */

function printQuote() {
  var quote = getRandomQuote();
  var display = '<p class="quote">' + quote.quote + '</p>';
  display += '<p class="source">' + quote.source;
  if (quote.citation != null && quote.date != null) {
    display += '<span class="citation">' + quote.citation + '</span><span class="year">' + quote.date + '</span></p>'
    } else if (quote.citation != null) {
      display += '<span class="citation">' + quote.citation + '</span>'
    } else {
      display += '</p>'
    }
    document.getElementById('quote-box').innerHTML = display;
    var color = getRandomColor();
    document.body.style.backgroundColor = color;
}

/** the repeatedTimeout function calls the printQuote function every 30 seconds
 * to advance the displayed quote even if the button isnt pushed. */

function repeatedTimeout(interval) {
  printQuote();
  window.setTimeout(repeatedTimeout, 30000);
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*this call to set timeout delays the start of the repeatedTimeout function by
 * 30 seconds. Without it the first quote will be a rando quote with a random
 * background color instead of the quote written into the HTML in index.html */
window.setTimeout(repeatedTimeout, 30000);