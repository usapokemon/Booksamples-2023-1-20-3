var x = (a, b) => a + b;
console.log ( x(4, 5) );

(function () {
	var foo = (a, b) => { return a + b }
	console.log("Adding 10 and 20 gives you " , foo( 10, 20 ));
})();