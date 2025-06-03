function outer(name){
    function greet(){
        console.log("Hello, "+name);
    }
    return greet;
}
const greeting = outer("seba");
greeting();
