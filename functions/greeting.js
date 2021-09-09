/* let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople()

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening!');

greetPeople(); */

/* function greetPeople() {
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople();
console.log(greetingMessage); // raises ReferenceError */

//console.log(greetingMessage);

function changeFirstElement(array) { //mutates the parameter
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive);

function addToArray(array) { // non-mutating
  return array.concat(10);
}
oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive));
console.log(oneToFive);

