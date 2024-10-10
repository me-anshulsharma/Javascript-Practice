// "use strict"; -------> ensures that the code is written in newer JS


// JavaScript is a dynamically typed language.
// powerful programming language that can add interactivity to a website.
// able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!
// Browser APIs, Third-party APIs, Third-party frameworks and libraries are some of the tools created usng JS


// let (cannot re-declare a variable again - block level scope)
// const (cannot redeclare and re-assign a value - block level scope)
// var (can re-declare a variable and re-assign a value - global scope)


// typeof => returns the type of a variable or datatype also


// Primitive datatypes: String, Number, BigInt, Boolean, Null, Undefined, Symbol
// Non-Primitive (Referenced) datatypes: Arrays, Objects and Functions


// Datatype     Return value    Object Wrapper 
// --------------------------------------------
// Null	        "object"	        N/A
// Undefined	"undefined"	        N/A
// Boolean	    "boolean"	        Boolean (true = 1 and false = 0)
// Number	    "number"	        Number 
// BigInt	    "bigint"	        BigInt
// String	    "string"	        String
// Symbol	    "symbol"	        Symbol

//  Null is a standalone value (returns object), Undefined indicates the absence of a value (value is yet to be assigned)
// 'null' is a keyword, but 'undefined' is a normal identifier
// let name;
// console.log(name); // undefined

// let sname = null;
// console.log(sname); // null ------> we have to specify the value of a variable to null

// let score = 100;
// console.log(typeof score); // number

// let score2 = "200";
// console.log(typeof score2); // string

// let score3 = Number("200")
// console.log(typeof score3); // number

// let score4 = Number("200abc")
// console.log(typeof score4); // number
// console.log(score4); // NaN

// NaN ("Not a Number") is a special type of 'number' value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number.
// e.g: 42abc = NaN

// console.log(NaN == NaN) // Always false
// console.log(NaN === NaN) // Always false
// It is also the only value in JavaScript that is not equal to itself.


// Symbol is a unique and immutable primitive value and may be used as the key of an Object property. The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.

// let id = Symbol('123')
// let newId = Symbol('123')

// console.log(id === newId) // false
// console.log(id == newId) // false

