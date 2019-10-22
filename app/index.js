

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


// distruction assignment with objects

let wizard = {magical: true, power: 10};

// let magical = wizard.magical;
// let power = wizard.power;
let {magical, power} = wizard;
console.log(magical, power);

let ranger ={magical: false, power: 9};
({magical, power} = ranger);


console.log('second',magical, power);