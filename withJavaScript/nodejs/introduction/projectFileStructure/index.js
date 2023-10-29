// the primary file which is to be runned by node
// can be named app.js

// a comment on the file purpose and author info
/**
 * Title : Basic Node app Example
 * Description : Simple node application that print random quotes per second interval.
 * Author : Rezoan Ahmed Abir (Rez_Wizardry)
 * Date : 9, Oct, 2023
 */

// define your dependencies
const mathLibrary = require('./lib/math');
/**
 * here by default identifies index.js even their have other js file
 */
const quotesLibrary = require('./lib/quotes');

// define module scaffolding which is denoted by app object
const app = {};

// define app configuration
app.config = {
    timeBetweenQuotes: 1000,
};
// Function that prints random quote
app.printQuote = function printQuote() {
    // Get All the quotes
    const allQuotes = quotesLibrary.quotes;

    // Get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    // Get A random number in between 1 to numberOfQuotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // Get the quote at that position of randomNumber
    const selectedQuote = allQuotes[randomNumber - 1];

    // print the quotes
    console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable define above
    setInterval(app.printQuote, app.config.timeBetweenQuotes);
};

// calling the application
app.indefiniteLoop();
