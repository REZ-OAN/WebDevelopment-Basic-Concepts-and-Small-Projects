const b = 30;
// we can access the a of script1 or we can say the whole
/**
 * code written in script1 are available to script2 code
 * and we can use them properly
 * but if we change a code
 * of script1 in script2
 * the code of script1 will be overwritten
 * this is a major problem
 * this problem is solved by using module
 * the creator of node.js implemented the module system to solve this kinds of problems
 * for this every .js file if encapsulated to one another
 * one files code is not accessible from another file if we do not export it
 */
console.log(a + b);
