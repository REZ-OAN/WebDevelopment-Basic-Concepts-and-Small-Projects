const _ = require('lodash');
const p = require('./people');
// when we require something then the iife called
/**
 * then the iife functions return the module parameter
 */
// don't have to use url for core modules

console.log(p.people);
p.test();
console.log(_.last(p.people));
// .last a method in lodash module
