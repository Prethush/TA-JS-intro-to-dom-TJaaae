/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(label, type = "text") {
  let label1 = document.createElement("label");
  let input = document.createElement("input");
  input.type = type;
  label1.append(label, input);
  return label1;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

function createList(arr) {
  let ul = document.createElement("ul");
  let li = [];
  for(let i = 0; i < arr.length; i++) {
     li[i] = document.createElement("li");
    li[i].append(arr[i]);
  }
  li.forEach((el) => ul.append(el));
  return ul;
}
// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);


// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

function createTodoList(arr) {
  let ul =[], p = [], li = [], input = [], span = [];
  for(let i = 0; i < arr.length; i++) {
    ul[i] = document.createElement("ul");
    li[i] = document.createElement("li");
    p[i] = document.createElement("p");
    input[i] = document.createElement("input");
    span[i] = document.createElement("span");
    p[i].innerText = arr[i].name;
    span[i].innerText = "X";
    input[i].type = "checkbox";
    input[i].name = "";
    input[i].id = "";
    input[i].checked = arr[i].isDone;
    li[i].append(p[i], input[i], span[i]);
    ul[i].append(li[i]);
  } 
 
 for(let i = 0;  i < ul.length; i++) {
   console.log(ul[i]);
 }
}
// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
