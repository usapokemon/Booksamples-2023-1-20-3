/* a = 10
b = 20
console.log( a + b )
var a = 10;
var b = 10;
const sum = function (a, b) {
    return a + b;
}

console.log(sum(10, 20));
*/

u = 'a';
console.log(u);
var u;
if (u === 'a') {
    var u = 'b';
    console.log(u);
}
console.log(u);

let num = 10;
{
   let num = 20;
}
console.log(num); 

