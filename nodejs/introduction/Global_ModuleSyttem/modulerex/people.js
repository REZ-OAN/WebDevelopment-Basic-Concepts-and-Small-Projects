const people = ['sakib', 'mashrafe', 'tamim'];
const a = 3;
function test() {
    console.log('test');
}
console.dir(module);
module.exports = {
    people,
    a,
    test,
};
// shorthand of js also can pass in object (good practice)
/**
 * what we write in js code in the nodejs
 * it goes to an IIFE like below
 * (function(exports, require, module, __filename, __dirname) {
 *  const people = ['sakib', 'mashrafe', 'tamim'];
    const a = 3;
    function test() {
        console.log('test');
    }
    console.dir(module);
    module.exports = people;
 * });
    this iife known as module wrapper function
 */
