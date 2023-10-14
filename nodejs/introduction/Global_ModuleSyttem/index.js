// console.log(window);
/**
 * for node.js window object is not available
 */
// but we can use setTimeout why?
setTimeout(() => {
    console.log('test');
}, 1000);
console.log('hello');
// the creator of node.js give a global object called global
console.dir(global);
global.setTimeout(() => {
    console.log('testing interval');
}, 1000);
/**
 * we can't use var in node.js
 * this is a convention
 * and also you can't use var as a variable name or object name
 */
console.log(__dirname);
console.log(__filename);
