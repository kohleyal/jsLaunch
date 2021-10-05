//1. evaluate the following
/*
false || (true && false);  false
true || (1 + 2); true on first case
(1 + 2) || true; true on first case value : 3 
true && (1 + 2); true value : 3 
false && (1 + 2); fasle on first case
(1 + 2) && true; true
(32 * 4) >= 129; fasle
false !== !true; fasle
true === 4; false
false === (847 === '847'); true
false === (847 == '847'); false
(!true || f (!(100 / 5) === 20) ||t((328 / 4) === 82)) || false; true
*/
//2. Write function that determines if even or odd.

function evenOrOdd(num) {
  if(!Number.isInteger(num)) {
    console.log('Please use with integers only.');
    return;
  }
  if(num === 0) {
    console.log('Zero is zero');
    return;
  }
  else {
    console.log(!!(num%2) ? 'odd' : 'even');
    return;
  }
}

//3. Add check to fucntion if num is integer. 
// added to code above
evenOrOdd(0);
evenOrOdd(1);
evenOrOdd(2);
evenOrOdd(-56655);
evenOrOdd('abc');

//4. What does the following code log and why.
/* function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
It will log Product2, Product3, and Product not found!
It logs the three outputs because there is no break statment.
The following cases will all be evaluated after the matching
case '113'
*/

//5. Refactor the if statment - return foo() ? 'bar' : qux();
/*
if (foo()) {
  return 'bar';
} else {
  return qux();
}
*/

//6. What does this code output.
/*
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

It outputs 'Not Empty' becasue an empty arr does not give 
a falsy output. The if statment if evaluated. 
*/

//7. Write a function that returns an all-cap version of a
// string input if it is greater than 10 char. 

function cap10(inStr) {
  if (inStr.length > 10) {
    return inStr.toUpperCase();
  } else {
    return inStr;
  }
}
console.log(cap10('this is a long str'));
console.log(cap10('shortboy'));

//8. Write a function if a num is 0-50, 51-100, >100, or < 0

function numberRange (num) {
  if(num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else if (num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else {
    console.log(`${num} is between 51 and 100`);
  }
}
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
numberRange(50);