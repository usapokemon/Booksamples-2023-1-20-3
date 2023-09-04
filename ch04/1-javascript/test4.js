var a = [1,2,3,4,5];
console.log('The elements are:');
var str = ' ';
for (const i in a)
   str += a[i]+ " "; 
console.log(str);

var a =[{ name: 'Mary', major: 'CS'},
		{ name: 'John', major: 'Math'},
		{ name: 'Steve', major: 'Biology'}] ;

for ( const n in a )
	console.log( a[n].name + " majors in " + a[n].major + '.' );

