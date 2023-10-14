/**
 * Title : math Library
 * Description : Utility library for math-related functions
 * Author : Rezoan Ahmed Abir (Rez_Wizardry)
 * Date : 10/09/23
 */
// define dependencies

// define Module scaffolding Math object
const math = {};

// Get a random integer between two integers
math.getRandomNumber = function getRandomNumber(min, max) {
    // we don't want to accidentally modify the passed parameters
    let minimum = min;
    let maximum = max;
    // checking for validation of passed parameters
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;

    // defining randomNumber
    const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1) + min);

    // returning the randomNumber
    return randomNumber;
};

// export the library
module.exports = math;
