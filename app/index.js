

// distruction assignment with arrays

// let c =[100, 200];
// let [a,b,d] = c

// console.log(a, b, d);

// let fellowship = ['hobbit', 'wizard', 'ranger'];
// let [hobbit, wizard, ranger] = fellowship;

// console.log(hobbit, wizard, ranger);

// let a = [1, 2, 5, 33];
// let [n, ...b] = a;
// console.log(n, b);

//-----------------------------------------------------------
// distruction assignment with objects

// let wizard = {magical: true, power: 10};

// let magical = wizard.magical;
// let power = wizard.power;
// let {magical, power} = wizard;
// console.log(magical, power);

// let ranger ={magical: false, power: 9};
//if we redeclared variables we need to take all statment in ()
// ({magical, power} = ranger);


// console.log('second',magical, power);
// ___________________________________________________________
// Arrow annonimous functions

// Arrow functions do not bind their own this.

// .map helper method

let poins = [10, 20, 30];
// we need to add one on each point

let addOne = poins.map(number => number +1 );
 
console.log(addOne);

let lengths = [3, 7, 5];
let multiple = 8;

const scale = (multiple) => {
  return lengths.map(n => n*multiple);
};

// const scale = multiple => lengths.map(n => n*multiple);

console.log(scale(multiple));

//--------------------------------------------------------------

// .filter helper method

// let isPassing = grade => {
// 	return grade >=70;
// }

let scores = [80, 75, 45, 73, 56, 37, 89, 47];

let passing = scores.filter(element => element >=70);

console.log('passing', passing);
// will return new array with values passes the callback function conditions;

const averages = [6, 15.7, 9, 18, 22.1, 9.2, 4];

const highlight = averages.filter(points => points > 15);


console.log('highlight', highlight);

//----------------------------------------------------------------

// .find() returns a value in an array that passes a given test
// .forEach(), similar to map calls a function for each array element.
// .reduce(), .some(), .keys(), .values()...
//-------------------------------------------------------------------

