const fruits = ['banana', 'orange', 'kiwi'];
var str = [];
for (const i in fruits)
    str.push(fruits[i] + " ");
console.log("Original:", str);
fruits.pop();
console.log ("After pop():", fruits);
fruits.push('apple');
console.log("After push() 'apple':", fruits);
fruits.unshift( 'watermelon');
console.log('Unshift "Watermelon" adds to the beginning:', fruits);



