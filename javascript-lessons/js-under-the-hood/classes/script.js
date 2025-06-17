//Write a JavaScript program to create a class called "Person" 
// with properties for name, age and country. Include a method to display the 
// person's details. Create two instances of the 'Person' class and display their details.
class Person{
    constructor(name, age, country){
        this.name =name;
        this.age=age;
        this.country=country;
    }
    personDetails(){
return `Name:${this.name}, Age:${this.age}, Country:${this.country}`;
    }
    //or
    get personDetails(){
        return `Name:${this.name}, Age:${this.age}, Country:${this.country}`;
    }

}
let person1 =new Person("pepe", 20, "canada");
console.log(person1.personDetails);
let person2 =new Person("jorvis", 30, "Vzla");
console.log(person2.personDetails);

//Write a JavaScript program to create a class called 'Rectangle' with properties 
// for width and height. Include two methods to calculate rectangle area and perimeter. 
// Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle{
    constructor(width, length){
        this.width=width;
        this.length=length;
    }
getRectangleArea(){
let area = this.width*this.length;
return area;
}
getRectanglePerimeter(){
let perimeter = 2* (this.length+this.width);
return perimeter;
}
}
let rectangle1 = new Rectangle(2, 2);
console.log(rectangle1.getRectangleArea());
let rectangle2 =new Rectangle(3, 4);
console.log(rectangle2.getRectanglePerimeter());

//Write a JavaScript program that creates a class called 'Vehicle' with properties 
// for make, model, and year. Include a method to display vehicle details. Create a 
// subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional 
// property for the number of doors. 
// Override the display method to include the number of doors.

class Vehicle{
    constructor(make, model, year){
        this.make =make;
        this.model=model;
        this.year =year;
    };
    get vehicleDetails(){
  return `${this.year} ${this.make} ${this.model}`;

    }
};
class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors=doors;
    }
    get vehicleDetails(){
return `The vehicle is: ${super.vehicleDetails}, and has ${this.doors} doors.`;

    }
};
let corolla = new Car("Toyota", "Corolla", 2025, 4);
let result =corolla.vehicleDetails;
console.log(result);

//Write a JavaScript program that creates a class called "BankAccount" 
// with properties for account number and balance. Include methods to deposit 
// and withdraw money from the account. Create some instances of the "BankAccount" 
// class, deposit some money, and withdraw a portion of it.
//v1
class BankAtm{
    constructor(accountNum, balance=0){
        this.accountNum =accountNum;
        this.balance =balance; 
    }
    deposit(amount){
if(amount>0){
    this.balance+=amount;
    return `Deposited: ${amount}, new balance: ${this.balance}`;
}else{
    return "Not a valid amount. It must be positve.";
}
    }
    withdraw(amount){
        if (amount > this.balance) {
            return `Insufficient funds. Current balance: $${this.balance}`;
          } else if (amount <= 0) {
            return `Withdrawal amount must be positive.`;
          }
          this.balance -= amount;
          return `Withdrew $${amount}. Remaining balance: $${this.balance}`;
    }
}
// Example usage:
// const account1 = new BankAtm("ACC1001");
// console.log(account1.deposit(500));      // Deposited $500. New balance: $500
// console.log(account1.withdraw(200));     // Withdrew $200. Remaining balance: $300
// console.log(account1.withdraw(400));     // Insufficient funds
// console.log(account1.deposit(100)); 

// const account2 = new BankAtm("ACC1002", 1000);
// console.log(account2.deposit(250));      // Deposited $250. New balance: $1250
// console.log(account2.withdraw(1250));    // Withdrew $1250. Remaining balance: $0
// //v2
class BankAccount{
    constructor(){
        this.balance =0;
        this.transactions=[];
    }
    deposit(amount){
     if(amount<=0){
        return "Deposit amount must be greater than zero."
     }
     this.transactions.push({amount});
     this.balance +=amount;
     return `Successfully deposited A:${amount}. New balance: ${this.balance}`;
    };
withdraw(amount) {
    if (amount <= 0 || amount > this.balance){
      return "Insufficient balance or invalid amount."
    }
    this.transactions.push({ amount: -amount });
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`
  }
   // Method to get the balance of the account
   checkBalance() {
    return `Current balance: $${this.balance}`;
  }
  // Method to list all deposits
  listAllDeposits() {
    let deposits = [];
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].amount > 0) {
        deposits.push(this.transactions[i].amount);
      }
    }
    return "Deposits: " + deposits.join(',');
  }

  // Method to list all withdrawals
  listAllWithdrawals() {
    let withdrawals = [];
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].amount < 0) {
        withdrawals.push(Math.abs(this.transactions[i].amount));
      }
    }
    return "Withdrawals: " + withdrawals.join(',');
  } 

 }
 let account01 = new BankAccount();
 console.log(account01);
 console.log(account01.deposit(100));
 console.log(account01.deposit(200));
 console.log(account01.withdraw(100));
 console.log(account01.withdraw(50));
 console.log(account01.checkBalance());
console.log(account01.transactions);
console.log(account01.listAllWithdrawals());
console.log(account01.listAllDeposits());

//Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', 
// that inherit from the 'Shape' class and override the area calculation method. 
// Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape{
    calculateArea(){
        throw new Error("Method 'calculateArea()' must be overridden in subclasses");
    }
}
class Circle extends Shape{
    constructor(radius){
    super();
    this.radius=radius;
    }
    calculateArea(){
         return Math.PI*this.radius*this.radius;
    }
    
}
class Triangle extends Shape{
constructor(base, height){
    super();
    this.base=base;
    this.height =height;
}
calculateArea(){
    return this.base*this.height/2;
}
}


// Create an instance of the Circle class
const circle = new Circle(7);
const circleArea = circle.calculateArea();
console.log(`Circle Area: ${circleArea}`);

// Create an instance of the triangle class
const triangle = new Triangle(8, 9);
const triangleArea = triangle.calculateArea();
console.log(`Rectangle Area: ${triangleArea}`);


