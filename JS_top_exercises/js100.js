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
let randomNumber = Math.round(Math.random());

if(randomNumber) {
  console.log('Yes!')
} else {
  console.log('No.')
}
console.log(randomNumber ? "Yes!" : "No.")

let weather = "windy"

if (weather === "sunny") {
  console.log("It's a beautiful day!");
} else if (weather === "rainy") {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.")
}