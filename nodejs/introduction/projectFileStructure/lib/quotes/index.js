// primary file for this library
/**
 * Title : Qoutes Libary
 * Description : It takes quotes from a file and then convert into a array of strings.
 *  where each string contains a quote
 * Author : Rezoan Ahmed Abir (Rez_Wizardry)
 * Date : 10/09/23
 */
// define dependencies
const fs = require('fs');

// defining module scaffolding quote object
const quote = {};

// declaring an array which stores the quotes
quote.quotes = [];
quote.getQuotes = function getQuotes() {
    // getting the data of the file quotes.txt which returns a buffer
    const quotesBuffer = fs.readFileSync(`${__dirname}/quotes.txt`);
    // converting the buffer into readable string and the split it using the delimeter \n
    this.quotes = quotesBuffer.toString().split('\n');
};

//  calling the getQuotes() function
quote.getQuotes();

// exporting the library
module.exports = quote;
