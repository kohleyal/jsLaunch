/* exercises problems from JS launch book. Variables */

//1. write a greeter.js file . In variables directory. 

//2. write age.js file. saved ^^

//3. run programe from book. Done. 
/* 
{
  let foo = 'bar';
}

console.log(foo);

when the program is run you get:
  Uncaught ReferenceError: foo is not defined
the scope of foo is inside the curly braces and no longer
avalible after to log onto the console */

//4. run code new code from book. 
/*
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
you get an error on the second assigment because you can not 
reassign to a constant varible. The following console.logs
will print out the same as the first ones. */

//5. run code from book
/*
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
it will print out 'bar' to the console.
It does it because foo is being re-initilized with a declaration
inside the block. That new declaration has scope only inside the block. 
When then console.log is done at the end only the 'bar' declaration of
foo has scope. */

//6. run code from book
/*
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
It does not produce an error. Just like above, inside the code
block FOO is redeclared in as new in a new scope. */