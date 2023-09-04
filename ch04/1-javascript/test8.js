// the function name is not used; it is just a waste of characters
var foo1 = function namedFunction() { 
		console.log('foo1');
	}
foo1(); // foo1

	// anonymous function
var foo2 = function () { 
		console.log('foo2');
	}
foo2(); // foo2

// arrow functions
var numbers = [1, 2, 3, 4, 5];
const  power_of_three= numbers.map(e => e * e * e);
console.log( power_of_three); 

