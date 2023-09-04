var even = function ( num ) {
	return (Math.floor(num/2)*2 === num? num: null);
}

var even =   ( num ) => {
	return (Math.floor(num/2)*2 === num? num: null);
}
		
var numbers = [1, 2, 3, 4, 5];
const  even_numbers= numbers.filter(even);
console.log( even_numbers); 
