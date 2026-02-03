console.log(a == undefined);
var a = 10;

console.log(b == undefined);
let b = 20;

console.log(c == undefined);
const c = 30;

/**
 * There are three types of data types in javascript : var, let and const
 * var data type can store undefined value 
 * let and const cannot store undefined value 
 * in let and var initializer is optional but in const, initialzer is not optional , value must be initialized during the declaration of variable
 * when let and const variables are used before the declaration its known as the "Temporal dead zone" or it shows a Referenceerror: b is not defined
 */

