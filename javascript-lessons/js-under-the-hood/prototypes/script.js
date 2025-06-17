//constructor operator
function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");
  
  // alert(user.name); // Jack
  // alert(user.isAdmin); // false
  
  // create a function and immediately call it with new
  let user1 = new function() {
    this.name = "John";
    this.isAdmin = false;
  
    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
  };
  //This constructor can’t be called again, because it is not saved anywhere, just created and called.
  // console.log(user1)
  function User() {
    alert(new.target);
  }
  
  // without "new":
  // User(); // undefined
  
  // // with "new":
  // new User(); // function User { ... }
  
  function User(name) {
    if (!new.target) { // if you run me without new
      return new User(name); // ...I will add new for you
    }
  
    this.name = name;
    this.showName=function(){
      return `my name is ${this.name}`;
    }
  }
  
  // let john = User("John"); // redirects call to new User
  // // let amy =new User("Amy");
  // // console.log(amy);
  // // alert(john); // John
  // console.log(john);
  // console.log(john.showName());
  
  let sum = new Function('a', 'b', 'return a + b');
  
  // alert( sum(1, 2) ); // 3
  
  // let sayHi = new Function('alert("Hello")');
  
  // sayHi(); // Hello
  
  //closures
  function getFunc() {
    let value = "test";
  
    let func = new Function('alert(value)');
  
    return func;
  }
  
  // getFunc()(); // error: value is not defined
  
  function getFunc() {
    let value = "test";
  
    let func = function() { alert(value); };
  
    return func;
  }
  
  // getFunc()(); // "test", from the Lexical Environment of getFunc
  
  //prototypal inheritance
  let animal = {
    eats: true,
    walk(){
      alert("Rabbit " +this.name+" walks");
    }
  };
  let rabbit = {
    name:"rabb",
    jumps: true,
    __proto__:animal//we can also make the animal be rabbit's prototype like this
  };
  
  // rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
  console.log(Object.getPrototypeOf(rabbit)===animal);
  // we can find both properties in rabbit now:
  // alert( rabbit.eats ); // true (**)
  // alert( rabbit.jumps ); // true
  // rabbit.walk();
  
  let longEar = {
    name:"longRabb",
    earLength: 10,
    __proto__: rabbit
  };
  
  // // walk is taken from the prototype chain
  // longEar.walk(); // Animal walk
  // alert(longEar.jumps); // true (from rabbit)
  
  
  let user2 = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user2,
    isAdmin: true
  };
  
  // alert(admin.fullName); // John Smith (*)
  
  // // setter triggers!
  // admin.fullName = "Alice Cooper"; // (**)
  
  // alert(admin.fullName); // Alice Cooper, state of admin modified
  // alert(user2.fullName); // John Smith, state of user2 protected
  
  // animal has methods
  let animal1 = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit1 = {
    name: "White Rabbit",
    __proto__: animal1
  };
  
  // modifies rabbit.isSleeping
  rabbit1.sleep();
  
  // alert(rabbit1.isSleeping); // true
  // alert(animal1.isSleeping); // undefined (no such property in the prototype)
  
  //for in loops
  let animal2 = {
    eats: true
  };
  
  let rabbit2 = {
    jumps: true,
    __proto__: animal2
  };
  
  // Object.keys only returns own keys
  // alert(Object.keys(rabbit2)); // jumps
  
  // // for..in loops over both own and inherited keys
  // for(let prop in rabbit2) alert(prop); // jumps, then eats
  
  
  for(let prop in rabbit2) {
    let isOwn = rabbit2.hasOwnProperty(prop);
  
    if (isOwn) {
      alert(`Our: ${prop}`); // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
  }

  