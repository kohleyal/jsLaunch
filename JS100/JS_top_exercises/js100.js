/*
let array = [1, 2, 3, 4];
let index = 0;

while(index < array.length) {
  console.log(array[index]);
  index +=1;
}

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (city of cities) {
  if (city) console.log(city);
}

let i = 1
while (i < 40) {
  if (i%2 !== 0) {
    console.log(i)
  }
  i++;
}

let fish = ['Dory', 'Marlin', 'Gill', "Nemo", 'Bruce'];
for (let ii = 0; ii < fish.length; ii++) {
  console.log(fish[ii]);
  if (fish[ii] === "Nemo") {
    break;
  }
}
*/
/*
let randomNumber = Math.round(Math.random());

if(randomNumber) {
  console.log('Yes!')
} else {
  console.log('No.')
}
console.log(randomNumber ? "Yes!" : "No.")

let weather = "sunny"
*/

/*
if (weather === "sunny") {
  console.log("It's a beautiful day!");
} else if (weather === "rainy") {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.")
}

*/


/*
switch(weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log("Grab your umbrella.");
    break;
  case 'windy':
    console.log('Hold onto your hats folks');
    break;
  default:
    console.log('Lets go outside!');
}

function sum( num1, num2) {
 return num1+num2
}

function citie (author, quote) {
  console.log(`${author} said: ${quote}.`);
}

function squareNumber (number) {
  return number*number
}

function compareByLength(str1, str2) {
  if (str1.length < str2.length) {
    return -1
  } else if ( str1.length === str2.length) {
    return 0
  } else {
    return 1
  }
}

function isBlank(string) {
  return !string.trim()
}
console.log(isBlank('  '))
*/

/*
//Arrays
const first = planets => {
  return planets[0]
}
console.log(first(['Earth', 'Moon', 'Mars'])) // 'Earth'

const last = planets => {
  return planets[planets.length-1]};

console.log(last(['Earth', 'Moon', 'Mars']));

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal')
console.log(energy)

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.split("")
console.log(alphabet);

let scores = [96, 47, 113, 89, 100, 102];
let passScores = scores.filter(score => {
  return score >= 100
}).length
console.log(passScores)

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach(subArr => {
  subArr.forEach(word =>{
    console.log(word)
  })
});

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let contains = (inputDestination, destinations) => {
  return destinations.some(destination => {
    if (destination === inputDestination) {
      return true
    }
  })
}
console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
let newPasscode = passcode.reduce((accum, currValue) => {
  return `${accum}-${currValue}`
},);
console.log(newPasscode); 
//or use the built in function .join() that you missed

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

for(let item=groceryList.length;item>0;item-- ) {
  console.log(groceryList.shift())
  
}
*/

//functions2 
/*function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}
*/

/*
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  return `${greeting()}, ${recipient()}!`
}

console.log(greet(undefined))

const calculateBMI = (height, weight) => {
  let bmi = (weight/(height/100)**2)
  return bmi.toFixed(2)
}
console.log(calculateBMI(180, 80));

function catAge(age) {
  let catYears = 0
  for(age; age>=1 ; age--) {
    if (age === 1) {
      catYears += 15;
    } else if (age === 2) {
      catYears += 9;
    } else {
      catYears +=4;
    }
  }
  return catYears
}
console.log(catAge(0), catAge(1), catAge(2),catAge(3), catAge(4));

const removeLastChar = word => {
  return word.slice(0,-1)
}
console.log(removeLastChar('ciao!'), removeLastChar('hello'));

let initGame = () => ({
    level: 1,
    score: 0
  });

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score); */

//objects
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};
console.log(student.courses);

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(jane.location?.country)

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 5;
fido['favorite food'] = 'meatballs';
console.log(fido);

jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: (name) => {
    return `Hej, ${name}!`
  }
};

console.log(jane.greet('Bobby')); // Hej, Bobby!

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
const keys = Object.getOwnPropertyNames(vehicle);
console.log(keys)

/*let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

console.log(Object.entries(person))

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

const nestToObj = (nestArr) => {
  let newObj = {}
  nestArr.forEach(element => {
    newObj[element[0]] = element[1];
  });
  return newObj
}
console.log(nestToObj(nestedArray));
*/

function clone(obj) {
  // TODO
  let cloned = Object.entries(obj);
  return Object.fromEntries(cloned)
}
// just return Object.assign({}, obj); would work. 

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false