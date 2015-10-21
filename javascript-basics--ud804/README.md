# JavaScript Basics

---

## Variables

-  "var" is used by JavaScript to identify variables.
Example of variable declaration :-
```
	var foo = 'hello world';
```

## Operators

### Basic Operators

- Concatenation
```
	var foo = 'hello';
	console.log(foo + ' ');
```
- Multiplication and division
```
	2 * 3;
	2 / 3;
```
- Incrementing and decrementing
```
	++i; //pre-increment
	i++; //post-increment
```

### Logical Operators

- Logical AND and OR operators
```
	var foo = 1;
	var bar = 0;
	foo || bar; // returns 1
	foo && bar; // returns 0
```
- Comparison Operators
```
	foo == bar;   // returns false
	foo != bar;   // returns true
```

## Truthy and Falsy Values

- Truthy values:
```
	* '0';
	* 'any string';
	* [];  // an empty array
	* {};  // an empty object
	* 1;   // any non-zero number
```

- Falsy values:
```
	* 0;
	* '';  // an empty string
	* NaN; // JavaScript's "not-a-number" variable
	* null;
	* undefined;  // be careful -- undefined can be redefined!
```

## Arrays

- Arrays are lists of values.
- An array can include multiple types of items, including other arrays.
A simple array:-
```
var myArray = [ 'hello', 'world' ];
```

## Objects

- Objects contain one or more key-value pairs.
- The key portion can be any string.
- The value portion can be any type of value: a number, a string, an array, a function, or even another object.
Example :-
```
var myObject = {
    key : value,
    key : value,
    key : value
};
```
- There are 2 ways of accessing the properties of an object :-
	* Dot notation
		```
		foo['key'];
		```
	* Bracket notation
		```
		foo.key;
		```

## JSON

- JSON stands for JavaScript Object Notation.
- JSON is a syntax for storing and exchanging data.

## Function

- Functions may or may not take one or more arguments, and can optionally return a value.
Function Declaration :-
```
var foo = function() { /* do something */ }
```
- Anonymous Functions : An anonymous function is a function that was declared without any named identifier to refer to it.


## LOOPS

- Loops let you run a block of code a certain number of times.

- There are 3 types of loops:-
	* The for loop
	```
	for ([initialisation]; [conditional]; [iteration])[loopBody]
	```
	* The while loop
	```
	while ([conditional]) [loopBody]
	```
	* The do-while loop
	```
	do [loopBody] while ([conditional])
	```
 
## Conditional Statements

- Switch Statements : Switch statements look at the value of a variable or expression, and run different blocks of code depending on the value.
```
	switch(expression) {
	    case n:
	        code block
	        break;
	    case n:
	        code block
	        break;
	    default:
	        default code block
	}
```
- if/else Statements : Use the if statement to specify a block of JavaScript code to be executed if a condition is true.Use the else statement to specify a block of code to be executed if the condition is false.
```
	if (condition) {
	    block of code to be executed if the condition is true
	} else { 
	    block of code to be executed if the condition is false
	}
```


