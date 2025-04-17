let cars =["Saab","Volvo","BMW"];
console.log(cars);
console.log(cars[1]);
console.log(cars.toString());
console.log(typeof cars);
console.log(cars.length);
//accessing the last array of an element
let car =cars[cars.length -1];
console.log(car);
//looping array elements
for(let i=0; i<cars.length;i++){
   console.log(cars[i]);
}
//adding an element to an array using push and length
cars.push("Honda");
console.log(cars);
cars[cars.length]="Toyota";
console.log(cars);
//Array methods
console.log(cars.pop());
console.log(cars);
cars[0]="Tesla";
console.log(cars);