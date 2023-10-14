/**
 * importing something from any file
 * import {the things you wanna import} from 'url(relative/absolute path)';
 *  
 * */
import {pi,a} from './external.js'; //named import
console.log(pi,a);
import * as test from './external.js'; // test is a alias of all of the export  object export
import sqrt from './ext.js'; // default export
console.log(test.a);

console.log(test.pi);
console.log(sqrt(16));
