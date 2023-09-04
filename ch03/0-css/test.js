a=10
b=20
console.log(a+b)
console.log(a*b)
const myFunc =  () => {
    console.log("This statement is inside the function");
    };
    console.log("This statement is outside the function");
myFunc();



var x = (a, b) => a + b;

console.log ( x(4, "5") );


var x = (a, b) => a + b;

console.log ( x(4, 5) );

var foo = 123;


if (true) {

            (function () { 

                        var foo = 456;

            })();

}

console.log(foo); 




/*
var f = (a, b) => { a + b }; //arrow funciton

var g = (foo, n1, n2) => {
  if (foo != 'function') 
      foo = (n1, n2)=> (n1+n2);
  return foo(n1, n2) 
};        
console.log(g(f, 20, 30));

(function foo() {
    console.log('foo was executed!');
})();
var x = (a, b) => a + b;
console.log ( x(4, 5) );

function outerFunction(arg) {
    var variableInOuterFunction = arg;
    function bar() {
        console.log(variableInOuterFunction); // Access a variable from the outer scope
    }
    // Call the local function to demonstrate that it has access to arg
    bar();
    }
outerFunction('hello closure!'); 

 */