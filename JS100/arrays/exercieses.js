let arr = [2, 3, 7, 5, 1];
console.log(arr.reduce((accumulator, element) => accumulator*element,2));

// console.log(arr.sort());
// console.log(arr);
// let brr = arr.slice(1,3);
// console.log(arr, brr);

//1. What are the final length for array1-array5
/*
they are 4,5,0,3,101
length is highest index position plus one.
*/

//2. log all the evens values from myArray
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(function (num){
  if(num%2 == 0){
    return console.log(num);
  }
});

//3. pull even nums from arr with nested arrays
myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(arrNest){
  arrNest.forEach(function(num){
    if(num%2 ==0) {
      console.log(num);
    }
  })
});

//4. use map to create new arra with words odd/even for each element
myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
let wordArray = myArray.map(function(num){
  if(num%2 ==0) {
    return 'even'
  }
  return 'odd'
});
console.log(wordArray);

//5. write a function that takes an array and rtn arr that
// only contains the int from the array. 

function findIntegers (arr){
  return arr.filter(num => Number.isInteger(num))
}
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
console.log(findIntegers(things));

//6. func detrmine len of strings in arr, return arr with lengths odd value

arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths (arr){
  return arr.map(str => str.length).filter(num => num%2 !==0)

}
console.log(oddLengths(arr));

//7.use reduce to compute the sum fo the squares for all nums in arr

function sumOfSquares(arr) {
  return arr.reduce(function (accum, num,){
    return num * num + accum
  },0)
}
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

//8. do 6. again but with reduce and not map or filter

function reduceStrArr(arr){
  let redArr = []
  arr.reduce(function(accum, str){
    if (str.length%2 ===1){
      redArr.push(str.length)
    return 1
    }
  });
  return redArr
}
arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

//9. wrtie function that check for 3 in an array. returns boolean
// no for or while.

function checkArr(arr) {
  return arr.reduce(function(accum, num){
    return accum || num === 3 
  },false)
}
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(checkArr(numbers1));
console.log(checkArr(numbers2));
console.log(checkArr(numbers3));

//10. wirte an assignment to replace 6 in the array
/*
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;
*/