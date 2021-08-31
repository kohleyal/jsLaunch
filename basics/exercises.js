/* First set of exercises from launch school javascript book */

// 1. Concate my name
let myName = 'Alex ' + 'Kohley';
console.log(myName);

//2. Find the digits. Number 5544
let num = 5544;
let ones = num % 10;
let tens = ((num - ones) % 100) / 10;
let hundreds = ((num - ones - tens * 10) % 1000) / 100;
let thousands = (num - (hundreds * 100 + tens * 10 + ones)) / 1000
console.log(`Thers are ${ones} ones, ${tens} tens, \
${hundreds} hundres, and ${thousands} thousands!`);

//3. Identify the data types
console.log(typeof('true'));
console.log(typeof(false));
console.log(typeof(1.5));
console.log(typeof(2));
console.log(typeof(undefined));
console.log(typeof({foo: 'bar'}));

//4. Explain log.
console.log('5' + 10);
/* 5 above is a string.
 The interpreter will implicilty coerce 10 to a string. 
 It will then concatinate the two strings to 510 */

//5.Change #4 to evaluate to 15
console.log(Number('5')+10);

//6.Temple literal #5.
console.log(`The value of 5 + 10 is ${Number('5'+10)}.`);

//7. Error or not. 
let foo = ['a', 'b', 'c',];
console.log(foo.length);
console.log(foo[3]);
/* no error is thrown. 
  undefined is returned */

//8. Create array of pet names. 
let names = ['asta', 'bob', 'ginger', 'fred', 'tom',];

//9. Create object of pet name and animal type. 
let pets = {
  'asta': 'cat',
  'bob': 'fish',
  'ginger': 'cat',
  'fred': 'snail',
  'tom': 'dog',
};

//10. What is the eval.
console.log('foo' === 'Foo');
//evaluates to false f and F are different characters.

//11. Expression eval.
console.log(parseInt(3.1415));
//3 is returned. Int is parced and stops at the . char

//12. Express eval.
console.log('12' < '9');
/*evaluates to true.
  strings are compared first by the first char on each side.
  '1' is less than '9'. Unicode 49 is < unicode 57. */ 
