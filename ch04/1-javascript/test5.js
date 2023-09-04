var a = [1,2,3,4,5];
console.log('The elements are:');
var str = ' ';
for (const i of a)
   str += i + " "; 
console.log(str);

var a =[{ name: 'Mary', major: 'CS'},
		{ name: 'John', major: 'Math'},
		{ name: 'Steve', major: 'Biology'}] ;
for ( const n of a )
	console.log( n.name + " majors in " + n.major + '.' );

var a = { name: 'Mary', major: 'CS' }
for ( const [key, val]  of Object.entries(a) )
	console.log(key + ":" +  val);
