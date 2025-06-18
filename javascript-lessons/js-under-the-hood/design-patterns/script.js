//command pattern
class Calculator{
    constructor(){
        this.value =0;
        this.history =[];
    }
    //regular class method
    // add(valueToAdd){
    //     return this.value =this.value+valueToAdd;
    // }
    //command
    executeCommnad(command){
this.value =command.execute(this.value);
this.history.push(command);
    }
    undo(){
        const command =this.history.pop();
        this.value =command.undo(this.value);
    }
}
class AddCommand{
    constructor(valueToAdd){
        this.valueToAdd=valueToAdd
    }
    execute(currentValue){
return currentValue+this.valueToAdd;
    }
    undo(currentValue){
return currentValue -this.valueToAdd;
    }
}
class SubtractCommand{
    constructor(valueToSubtract){
        this.valueToSubtract=valueToSubtract;
    }
    execute(currentValue){
return currentValue -this.valueToSubtract;
    }
    undo(currentValue){
return currentValue+this.valueToSubtract;
    }
}
class MultiplyCommand{
    constructor(valueToMultiply){
        this.valueToMultiply =valueToMultiply;
    }
    execute(currentValue){
        return currentValue *this.valueToMultiply;
            }
            undo(currentValue){
        return currentValue/this.valueToMultiply;
            }
}
class AddThenMultiplyCommand{
    constructor(valueToAdd, valueToMultiply){
        this.AddCommand =new AddCommand(valueToAdd);
        this.multiplyCommand =new MultiplyCommand(valueToMultiply);
    }
    execute(currentValue){
const newValue =this.AddCommand.execute(currentValue);
return this.multiplyCommand.execute(newValue);
    }
    undo(currentValue){
        const newValue =this.multiplyCommand.undo(currentValue);
        return this.AddCommand.undo(newValue);
    }
}

// const addCommand =new AddCommand(10);
// const newValue =addCommand.execute(10);
// console.log(newValue);
// console.log(addCommand.undo(newValue));

const calculator = new Calculator();
calculator.executeCommnad(new AddThenMultiplyCommand(10, 2));
// calculator.executeCommnad(new MultiplyCommand(2));
console.log(calculator.value);
calculator.undo();
console.log(calculator.value);
// const add = calculator.add(10);
// console.log(calculator.value);
// console.log(add);

//factory Pattern
const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  });

  //example 2
  const createUsers = ({
    userName = 'Anonymous',
    avatar = 'anon.png'
  } = {}) => ({
    userName,
    avatar
  });
  console.log(createUsers({ userName: 'echo' }),   // { userName: "echo", avatar: 'anon.png' }
    createUsers()  // { userName: "Anonymous", avatar: 'anon.png' }
  );

  //prototype pattern
  class Dog {
    constructor(name) {
      this.name = name;
    }
  
    bark() {
      return `${this.name} says Woof!`;
    }
  }
  
  const dog1 = new Dog("Daisy");
  const dog2 = new Dog("Max");
  const dog3 = new Dog("Spot");
  console.log(dog3.bark())

  console.log(Dog.prototype);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()

console.log(dog1.__proto__);
console.log(Dog.prototype.isPrototypeOf(dog1));
// constructor: ƒ Dog(name, breed) bark: ƒ bark()


//Mixin pattern
class Dogs{
    constructor(name){
        this.name =name;
    }
}

const dogFunctionality ={
    bark:()=>console.log("Woooof Wooof!!"),
    wagTail(){
        console.log("I'm wagging my tail!!")
    },
    play:()=>console.log("I'm playinggg!!"),

    walk() {
    super.walk();
    },
sleep(){
  super.sleep();
    }
};

const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!"),
  };
//We can add the dogFunctionality mixin to the Dog prototype with the Object.assign method. 
// This method lets us add properties to the target object: Dog.prototype in this case.
Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dogs.prototype, dogFunctionality);
const pet1 = new Dogs("Sky");
console.log(pet1.name);
pet1.bark();
pet1.play();
pet1.sleep();

//Flyweight pattern
//Here you define a Book class — this is what you’ll use to represent unique books based on their ISBN.
class Book{
    
    constructor(title, author, isbn){
        this.title= title;
        this.author =author;
        this.isbn =isbn;
    }
}
const books = new Map();
//Here, we’ll store unique books by their isbn so we can reuse them.
const createBook =(title, author, isbn)=>{
    const existingBook =books.has(isbn);
    if(existingBook){
        return books.get(isbn);
    }
    const book =new Book(title, author, isbn);
    books.set(isbn, book);
    return book;
};
const bookList=[];
const addBook =(title, author, isbn, availability, sales)=>{
    const book ={
        ...createBook(title, author,isbn),
        sales,
        availability,
        isbn,
    };
    bookList.push(book);
    return book;
};

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

//Proxy pattern
const person ={
    name:"John Doe",
    age:42,
    nationality:"American",
};
//person is the target — the real object being wrapped.
//{} is the handler object — where we define what to do when someone accesses or modifies personProxy.
const personProxy =new Proxy(person,{
//obj is the original object (person).
//prop is the property you’re trying to access, like "name" or "age".
    get:(obj, prop)=>{
       console.log(`The value of ${prop} is ${obj[prop]}`); 
    //    return obj[prop];
    },
    set:(obj, prop, value)=>{
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop]=value;
        return true;
    },
});

personProxy.name;
personProxy.age =20;
console.log(personProxy.age =20);

//a better example
const person2Proxy = new Proxy(person, {
    get: (obj, prop) => {
      if (!obj[prop]) {
        console.log(
          `Hmm.. this property doesn't seem to exist on the target object`
        );
      } else {
        console.log(`The value of ${prop} is ${obj[prop]}`);
      }
    },
    set: (obj, prop, value) => {
      if (prop === "age" && typeof value !== "number") {
        console.log(`Sorry, you can only pass numeric values for age.`);
      } else if (prop === "name" && value.length < 2) {
        console.log(`You need to provide a valid name.`);
      } else {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
        obj[prop] = value;
      }
      return true;

    },
  });

person2Proxy.nonExistentProperty;
person2Proxy.age = "44";
person2Proxy.name = "";
//using built in reflect object with proxy:
const person3Proxy = new Proxy(person, {
    get: (obj, prop) => {
      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    },
    set: (obj, prop, value) => {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      Reflect.set(obj, prop, value);
    },
  });
  person3Proxy.name;
person3Proxy.age = 43;
person3Proxy.name = "Jane Doe";


//Mediator pattern
function Member(name){
    this.name =name;
    this.chatroom=null;
}
Member.prototype.send = function(message, toMember){
this.chatroom.send(message,this,toMember);
}
Member.prototype.receive=function(message, fromMember){
console.log(`${fromMember.name} to ${this.name}: ${message}`);
}

function Chatroom(){
    this.members={}
}
Chatroom.prototype={
    addMember: function(member){
this.members[member.name]=member;
member.chatroom=this;
    },

    send:function(message, fromMember, toMember){
toMember.receive(message, fromMember);
    }
}

const chat =new Chatroom();
const bob =new Member("Bob");
const john =new Member("John");
const tim =new Member("Tim");

chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

bob.send("Hello John", john);
john.send("Whats up Bob", bob);

//another example
// The ChatRoom class – The Mediator
//Acts as the mediator for all user interactions.
class MyChatRoom{
//Takes a user and a message as parameters. Gets the current time. Gets the user’s name using user.getName().
    logMessage(user,message){
        const time =new Date();
        const sender =user.getName();
        console.log(`${time} [${sender}] ${message}`);
    }
}
// The User class – The Colleague/Participant
class User{
    //user who wants to send messages. Stores the name and a reference to the chatroom.
    constructor(name, chatroom){
        this.name =name;
        this.chatroom=chatroom;
    }
    getName(){
        return this.name;
    }
    send(message){
this.chatroom.logMessage(this, message);

    }
}

const chatroom = new MyChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
user2.send("Hey!");
 //send(message) doesn't directly message another user — it passes the message and the sender (this) 
 // to the chatroom (mediator), which handles the communication logic. 
