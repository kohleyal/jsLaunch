//1. how can you access the name of the person 
/*
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};
access it with dot or bracket notation
person.name
person['name']
*/

//2. which are valid keys for an object? 
/*

1 - valid
'1' - valid
undefined - valid 
'hello world' - valid 
true - valid
'true' - valid
js will coerce 1 and true to strings of '1' and 'true'
*/

//3. use object literal syntax to create obj that behave as an array.

let myArray = {
  0 : 'dog',
  1 : 'cat',
  2 : 'duck',
  length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
// notes from book. not a perfect mimic. doesn't update length on change or have 
// normal array methods. 

//4. creat an arry from the keys of obj w/ all keys converted to uppercase. not mutate obj

let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let newarr = Object.keys(obj).map(key => key.toUpperCase());
console.log(newarr);

//5. create a new objext named myObj taht use myProtoObj as itss prototype

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj);

//6.Which of the following values are primitive values? Which are objects? Which are neither?
/*
"foo" - primitive string
3.1415 - primitive number
[ 'a', 'b', 'c' ] - object array 
false - primitive boolean
foo - neither varible name
function bar() { return "bar"; } - object function
undefined -  primitive undefined
{ a: 1, b: 2 } - object simple object
*/
 
//7. add qux prop w/ val 3 to myObj from #5. what does the following code do.
myObj.qux = 3


let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
// this will print qux

for (let key in myObj) {
  console.log(key);
}
// this will print qux and the inherited keys from myProtoObj foo and bar

//8.create function that returns copy of an object. 
//https://launchschool.com/books/javascript/read/objects#exercises

function copyObj(originalObj, arr) {
  //assume only valid keys are passed
  let newTempObj = {};
  if (!arr) {
    Object.assign(newTempObj,originalObj);
  }
  else {
  arr.forEach(key => newTempObj[key] = originalObj[key]);
  }
  return newTempObj
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

//9. What does the following program log and why
/*
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

I will log 'hi' and 'hello'. foo's object is passed in and mutable
for arg1. the property a is re-assigned to 'hi'. where qux's value 
is passed in and the arg2 local scope value is re-assigned but the 
value of qux is unchanged. 
*/

//10. what are the primitive and object values in the following.
/* [1, 2, ["a", ["b", false]], null, {}] 
1, 2 'a', 'b', false, null are primitive 
the complete array and two nested arrays as well as {} are 
objects. 
*/

//11. Write code to replace the value 6 in the following object w/ 606
//You don't have to search the object. Just write an assignment that replaces 6.
let obj11 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
obj11.bar[3].xyz = 606 ; 
