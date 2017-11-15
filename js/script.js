/** the getRandomQuote function generates a quote picked at random from the
 * quotes array, which must be defined before this method (currently defined
 * in quotes.js. */

function getRandomQuote() {
  var number = Math.floor( Math.random() * quotes.length);
  var quote = quotes[number];
  return quote;
}

function getRandomColor() {
  var colors = ['blue', 'purple', 'green', 'orange', 'yellow', 'red'];
  var number = Math.floor( Math.random() * colors.length);
  var color = colors[number];
  return color;
}


/** the printQuote function takes no parameters and returns a
 * random quote that is printed to the page along with its source attribution.
 * It checks if a citation and date are present and displays
 * them as well if they exist. Note: a date will never be
 * displayed without a citation but a citation may be displayed
 * without a date. */

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
    var body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = color;
}



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function repeatedTimeout() {
  printQuote()
  window.setTimeout(repeatedTimeout,30000)
}

window.setTimeout(repeatedTimeout, 30000);
