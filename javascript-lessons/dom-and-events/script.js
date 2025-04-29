
const container =document.querySelector('#container');
const content =document.createElement('div');
content.classList.add('content');
content.textContent='This is the text content inside the div';
container.appendChild(content);
const para=document.createElement('p');
para.textContent="Hey, I'm red";
para.style.color="red";
container.appendChild(para);
const heading3=document.createElement("h3");
heading3.textContent="Hey, I'm a blue h3";
heading3.style.color="blue";
document.body.insertBefore(heading3,container);

const container2=document.createElement('div');
container2.setAttribute("style","background-Color:pink;border: solid 3px black;");
const h1=document.createElement("h1");
h1.textContent="I'm a div";
container2.appendChild(h1);
const p2=document.createElement("p");
p2.textContent="Me too";
container2.appendChild(p2);
container.appendChild(container2);
const header=document.querySelector("h1");
header.setAttribute("id","pageHeader");




//Adding an event to a button
// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }
//   const btn = document.querySelector("#btn");

//   btn.addEventListener("click", alertFunction);

//   btn.addEventListener("click", function (e) {
//     console.log(e.target);
//   });

//   btn.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
//   });

  //iterate through a nodeList of buttons
  // buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//     // and for each one we add a 'click' listener
//     button.addEventListener("click", () => {
//       alert(button.id);
//     });
//   });
//   console.log(buttons);

  //shopping list practice example:
  const ul=document.querySelector("ul");
  const listButton=document.querySelector("#listBtn");
  const input =document.querySelector("input")

function addItem(){
 const currentValue= input.value;
 input.value="";

 const li = document.createElement('li');
 const span = document.createElement('span');
 const deleteBtn = document.createElement('button');
 
 li.appendChild(span);
 li.appendChild(deleteBtn);
 
 span.textContent = currentValue;
 deleteBtn.textContent = 'Delete';

 ul.appendChild(li);
 
 deleteBtn.addEventListener("click",()=>{
     ul.removeChild(li);
 });
 input.focus();
}
  listButton.addEventListener("click",addItem);




