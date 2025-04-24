

//Functions using all array methods
//Functions using Higher Order Functions (HOF)-(map, filter, reduce) with arrow declaration
//Functions using all types of loops

//doubling array numbers
const  numbers=[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(number =>console.log(number));

let doubledNumbers = (arr)=>{
   let output =arr.map((num)=>num*2);
   console.log(arr);
   console.log(output);
   return output;
}
console.log(doubledNumbers([1,2,3,4,5]));
//standard way
function doubleArray (arr){
   let newArr = [];
   for(let i = 0; i < arr.length; i++){
       newArr.push(arr[i] * 2);
   }
   console.log(arr);
   console.log(newArr);
   return newArr;
}
console.log(doubleArray([1,2,3,4,5]));
//square the values of the array
let squaredArray=(arr)=>{
let output = arr.map(num=> Math.pow(num,2));
return output;
}
console.log(squaredArray([1,2,3,4,5]));

//Capitalize each string in new array
let capitalizeString = (arr)=>{
   let result =  arr.map((str)=>{
      let newStr = str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
      return newStr;
   })
   console.log(arr);
   console.log(result);
   
   return result;
};
console.log(capitalizeString(["heLLo","cAR","wOrKOUT"]));

//filter only even numbers from array
let evenNumbers = (arr)=>{
   let result = arr.filter((value)=>value%2===0)
   console.log(arr);
   console.log(result);
   return result;
};
console.log(evenNumbers([1,2,3,4,5,6,7,8,9]));

//sum all numbers in array using reduce
let summAll=(arr)=>{
   let sum = arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
   return sum;
}
console.log(summAll([1,2,3,4,5]));
//find the max value in an array
let maxValue =(arr)=>{
   const numbers = arr.reduce((max,curr)=>{
      if(curr>max){
         max=curr;
      }
      return max;
   })
   return numbers;
}
console.log(maxValue([1,20,21,34,78]))
//or
let nums = [5, 20, 100, 60, 1];
const maxV = nums.reduce((max, curr) => {
    if(curr > max) max = curr;
    return max;
});
console.log(maxV); // 100

let arr =["pepe","paco","seba"];
let addStudent=(studentName)=>{
return arr.push(studentName);
};
// console.log(addStudent("berna"))
//It adds an element to the end of the array.
//But it returns the new length of the array — not the updated array itself.

let addStudents = (studentName) => {
   arr.push(studentName); // still modifies the array
   return arr;             // but now we return the array itself
 };
 
 console.log(addStudents("berna"));

//pop
let popItem =(arr)=>{
   // console.log(arr);
   let valueRemoved = arr.pop();//removes the last item and stores it in newArr
   return valueRemoved;// returns the popped value (NOT the array!)
}
console.log(popItem([1,2,3,4]))
//[1, 2, 3, 4]   ← from the console.log inside the function
//4    ← this is what gets returned: the popped value

//removes first value of array
let shiftValue =(arr)=>{
   arr.shift();
return arr;
};
console.log(shiftValue(["a","b","c"]))
//adds first value to array
let myArr=["nami","zoro"];
let unshiftValue =(arr, value)=>{
   console.log(myArr);
   arr.unshift(value);
   
return arr;
};
console.log(unshiftValue(myArr,"Luffy"));


//Using some and every (HOF)
//using some to check if the array has any users under 18 years old
const users=[{name:"Anna", lastName:"Doe", age:22},
             {name:"Leo", lastName:"Rose", age:15},
             {name:"Mira", lastName:"Brown", age: 19}
            ];
let hasMinor =()=>{
   const result=users.some((user)=>user.age<18)
   return result;

}
console.log(hasMinor());

let checkAdults = function(){
   const result = users.every((user)=>user>18)
   return result;
};
console.log(checkAdults());
//use map to extract only first and last name
let user = users.map((user)=>user.name+' '+user.lastName);
console.log(user);


//Loops exercises

const cars =["BMW","Volvo","Mini"]
let text ="";
console.log(text);
for(let x of cars){
   text+=x
};
console.log(text);

//reverse an array with a for loop
let reverseArray =(arr)=>{
for(let i=0;i<Math.floor(arr.length/2);i++){
   let temp=arr[i];
   arr[i]=arr[arr.length-1-i];
   arr[arr.length-1-i]=temp;
}
return arr;
};
console.log(reverseArray([1,2,3,4,5]));

//check for palindrome using whiile loop
let palindrome =(str)=>{
let newStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
let strArray = newStr.split('');
let strArrayDup = strArray.slice();//this is the dup version
let strReverse = strArray.reverse();//we duplicate the arr because .reverse() changes (mutates) the original array.
let i = 0;

while (i < strArray.length) { 
   if (strArrayDup[i] !== strReverse[i]) {
     return false;
   }
   i++;
 }
 return true;
}
console.log(palindrome("rotator"));

//sum of all positive numbers using a do while loop

let sumAll =(arr)=>{
let i=0;
let sum=0;
do{
sum+= arr[i];
i++;
}while(i<arr.length);
return sum;

};
console.log(sumAll([1,2,3,4,5]))

//capitalize first letter of each word

let capitalizeStr=(str)=>{
const words =str.split(" ");
  let result = [];

  for (let word of words) {
    let capitalized = word[0].toUpperCase() + word.slice(1);
    result.push(capitalized);
  }

  return result.join(" ");
};
console.log(capitalizeStr("hello this is a test"));

//count the vowels in a string using a for loop
let vowelCounter =(str)=>{
const vowels=["a","e","i","o","u"];
let count=0;
for(char of str.toLowerCase()){
   if(vowels.includes(char)){
      count++
   }
}
return count;

};
console.log(vowelCounter("hello this function will count how many vowels this string has"));

//find the longest word in a sentence
let findLargest=(str)=>{
let splitStr=str.split(" ");
let largestWord="";
for(let i=0;i<splitStr.length;i++){
   // If the i'th item is greater than largest string
   // then overwrite the largest string with the i'th value
   if (splitStr[i].length > largestWord.length) {
   largestWord = splitStr[i];
}
};
return largestWord;
}
console.log(findLargest("i want to go to the gym for a shoulder workout"));






