//* General

/*
? console.log("Welcome to Javascript"); //display message into the console of the browser
? console.log(3+5); // will display 8
? console.error("This is error");
? console.warn("This is warning");
? console.clear();
? console.log("after the clear");

? confirm("Do you want to continue?"); //will ask you if you want to continue;
? console.log(confirm("Do you want to continue"));

? prompt("What is your name>","Name: ");

? console.warn(console.log("Welcome to Javascript"));
? console.error(console.log("Welcome to Javascript"));
? console.clear();
? console.log(prompt("what is your name?","NAme: "));
*/

console.clear();                                   //* clears log
let num1=20;                                       //* declared variable with a number -- returns a number typeof
let subject='Javascript';                          //* declared varibale with a string -- returns a stting typeof
console.log(typeof subject);                       //* logs what type of variable your variable is

//! Boolean data type
//true / false                                     //* can only be true or false

let bachelor=true;
console.log(typeof bachelor);
console.log(subject=='Javascript');
console.log(10==20);

//! undefined
// a variable which is not defined

let x;
console.log(typeof x);                             //* will return undefined as variable x has not been declared, only initialised

//! Null

let y=null;
console.log(typeof y);

//! Bigint

let z=234567890987654n;
console.log(typeof z);

console.clear();

//! Task

let married=false;
console.log(married==true);                         //* will return false

console.log(10==20);                                //* will return false

let subjects='Art';
console.log(typeof subjects);
console.log(subject=='Maths');                      //* will return false

let a;
console.log(typeof a);


//* Type Conversion

//When we convert the data value from one type to another

console.clear();

// let value=prompt('Enter input');
// console.log(typeof value);

  //! To string

//String(value);
let value1=20;
console.log(typeof String(value1));//'20'

console.log(typeof String(30));//string --'30'
console.log(typeof true);
console.log(typeof String(true));//'true'
console.log(String('20'));//20

  //! To Number

//Syntax: Number(valueToConvert);

let num2='20';
console.log(typeof num2);
console.log(typeof Number(num2));


//true=1  false=0

let data=true;
console.log(Number(data));

  //! Boolean

//Syntax: Boolean(valueToConvert);
console.clear();

let j=Boolean(1);
console.log(j);                                   //* true
console.log(Boolean(0));                          //* false
console.log(Boolean(20));                         //* true
console.log(Boolean('Hello'));                    //* true
console.log(Boolean(''));                         //* false
console.log(Boolean(' '));                        //* true

console.log(Boolean(Number(Boolean('false'))));   //* true
console.log(Boolean(String(Number(false))));      //* true

console.clear();

console.log('12' / 2);
console.log(2 * '2');
console.log('10' / 2);
console.log('10' % 2);
console.log(false * 7);
console.log('2'+2);                               //* + is concatenating

console.log(2+2+'1' + 2);                         //* 412 ---anything before the 'string' will be added together, anything after the string is converted to a string regardless of ''
console.log('1' + 2 + true);                      //* 12true
console.log('12' + undefined);                    //* 12undefined
console.log('12' + null);                         //* 12null
console.log(2 + '1');                             //* 21
console.log(2 + true);


//* Operators in JS

/*

+   addition
-   substraction
/   devision
\*   multiply
%   modulus
++  increment
--  decrement
  ! Assignment Operators
=   assignment
+=
-=
  ! Comparison Operators
==  equal too -> check values are equal
=== datatype and value to be equal
\ != the value to be not equal
\ !== Neither the value or the data type to be equal
>   greater
<   less than
>=  greater or equal
<=less than or equal

*/

console.clear();
console.log(10 !==10);
//Logical Operators
// && AND
// || OR


let ac=10;
let bc=30
// console.log(ac++);
// console.log(ac);
//ac +=ac; //ac=ac+ac
ac +=bc; //ac=ac+bc;
console.log(ac);

//!  Function
/*
? block of code which is used to perform a specific task
? anywhere when we want to perform that operation we just call the function
? to eliminate writing the code multiple times
*/
//*  Syntax
//? function nameOfFunction()
/* 
{
    statement to be executed when we invoke the function
}
*/
//? We invoke the function by its name

function greetingMessage () // this creates the function and defines it
{
    console.log("Hellooooo");
}

greetingMessage(); // this executes the function.
greetingMessage();
greetingMessage();


let statuss = true;

function checkStatus()
{
    if(statuss== true)
    {
        console.log('The user is online');

    }
    else {
        console.log('The user is offline');
    }
}
checkStatus();

// Parameter and Arguement
// Parameter is the value you pass when creating the function
// Arguement is the value we are passing each time we run the function

function sum(num1, num2) //(num1, num2) are the parameters
{
    console.log(num1 + num2);

}

sum(10, 20); //(10, 20) is the arguement
sum(20, 20);


function equation(num3, num4)
{
    console.log(num3 / num4 )
}

equation(10, 2);
equation(20, 3);


function equation2(num5, num6, operators) {
    switch(operators){
        case '+': return(num5 + num6);
        break;
        case '-': return(num5 - num6);
        break;
        case '*': return(num5 * num6);
        break;
        case '/': return(num5 / num6);
    }

}

console.log(equation2(20, 2, '*'));


// Anonymous function
let result=function(num8, num9){
    return num8*num9;
}
console.log(result(10,20));

// function can call another function as well

function total(number){
    return number*2;
}
console.log(total(10));

function callAnother(number1)
{
    return total(number1);
}
console.log(callAnother(30));


// Arrow function
// short way for writing function

function multiplication(x,y)
{
    return x*y;
}
console.log(multiplication(10, 5));//50
//imit function keyword
//if we have one arguement we can imit the brackets
//arrow function has explicit return

let mulitply=(x,y)=>x*y;
console.log(mulitply(2,3));//6

//* String - '', "", ``
// we can write string in three ways in JS
let firstSubject='JavaScript';
let secondSubject="Database";
let thirdSubject=`HTML`;
console.log('This is ' , firstSubject, 'Next text');
console.log(`This is ${secondSubject} subject`);


//! Objects
// Entity which contains property
// Property: data thats contained in object


let alarm={
    weekendAlarm:`Enjoy the sleep`,
    weekDayAlarm:`Get up at 6:00am`,
    checkAlarm: function(day){
        if(day=='Saturday')
        {
            return alarm.weekendAlarm;
        }
        else{
            return alarm.weekDayAlarm;
        }
    }
}
console.log(alarm.checkAlarm('Monday'));



//* Template literals

//? Syntax

`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`

//* Parameters

  //! string text
/*
? The string text that will become part of the template literal. Almost all characters are allowed literally, 
? including line breaks and other whitespace characters. However, invalid escape sequences will cause a syntax error, 
? unless a tag function is used.
*/

  //! expression
/*
? An expression to be inserted in the current position, whose value is converted to a string or passed to tagFunction.
*/

  //! tagFunction
/*
? If specified, it will be called with the template strings array and substitution expressions, and the return 
? value becomes the value of the template literal. 
/*

/*
      * Along with having normal strings, template literals can also contain other parts called placeholders, which 
      * are embedded expressions delimited by a dollar sign and curly braces: ${expression}. The strings and placeholders 
      * get passed to a function.
      * The default function (when you don't supply your own) just performs string interpolation to do substitution of 
      * the placeholders and then concatenate the parts into a single string.
*/

      //! using normal strings you would have to use the following in order to break line

console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"

      //! with template literals you can do the following
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"


//* String interpolation
/*
? Without template literals, when you want to combine output from expressions with strings, 
? you'd concatenate them using the addition operator +:
*/

const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."

/*
? With template literals, you can avoid the concatenation operator — and improve the readability of 
? your code — by using placeholders of the form ${expression} to perform substitutions for embedded expressions:
*/

const a1 = 5;
const b1 = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

/*
      ! Note that there's a mild difference between the two syntaxes. Template literals coerce their expressions 
      ! directly to strings, while addition coerces its operands to primitives first.
*/

//* Nesting Templates
/*
      ! For example, without template literals, if you wanted to return a certain value based on a particular condition, 
      ! you could do something like the following:
*/

let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
  ? " icon-expander"
  : " icon-collapser";

      //! With a template literal but without nesting, you could do this:

const classes1 = `header ${
    isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
  }`;
  
      //! With nesting of template literals, you can do this:

const classes2 = `header ${
    isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
  }`;
  

//* Tagged Templates
/*
? a more advanced form of template literals are tagged templates

? Tags allow you to parse template literals with a function. The first arguement of a tag function contains an array of string values
? The remaining arguments are related to the expressions.

? The tag function can perform whatever operations on these arguements you wish, and return the manipulated string
? Alternatively, it can return somethign completely different.
*/

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.

/*
? The tag does not have to be a plain identifier. You can use any expression with precendence greater than 16, 
? which includes property access, fucntion call, new expression, or even another tagged template literal
*/

console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }

function recursive(strings, ...values) {
  console.log(strings, values);
  return recursive;
}
recursive`Hello``World`;
// [ 'Hello' ] []
// [ 'World' ] []

//? Tag functions don't even need to return a string

function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);
t1Closure("Y", "A"); // "YAY!"

const t2Closure = template`${0} ${"foo"}!`;
// const t2Closure = template([""," ","!"],0,"foo");
t2Closure("Hello", { foo: "World" }); // "Hello World!"

const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure("foo", { name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
t3Closure({ name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."

/*
? The first arguement recieved by the tag function is an array of strings. For any template literal,
? it's length is equal to the number of substitutions (occurences of ${} plus one, and is therefore always non-empty)

? For any particular tagged template literal expression, the tag function will always be called with the exact same literal array,
? no matter how many times the literal is evaluated.
*/

const callHistory = [];

function tag(strings, ...values) {
  callHistory.push(strings);
  // Return a freshly made object
  return {};
}

function evaluateLiteral() {
  return tag`Hello, ${"world"}!`;
}

console.log(evaluateLiteral() === evaluateLiteral()); // false; each time `tag` is called, it returns a new object
console.log(callHistory[0] === callHistory[1]); // true; all evaluations of the same tagged literal would pass in the same strings array

//* Raw strings

/*
? The special raw proeprty, available on the first argument to the tag function, allows you to access
? the raw strings as they were entered, without processing escape sequences.
*/

function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'

//? in addtion, the string.raw() method exists to create raw strings just like the default template function and string concatenation would create.

const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,n,5,!"

/*
? String.raw functions like an "identity" tag if the literal doesn't contain any escape sequences.
? In case you want an actual identity tag that always works as if the literal is tagged, you can make a custom
? function that passes the "cooked" (i.e escape sequences are processed) literal array to String.raw,
? pretending they are raw strings.
*/

const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!

//? This is usrful for many tools which give special treatment to literals tagged by a particular name.

const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<!doctype html>
  <html lang="en-US">
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
  </html>`;



//! String methods

let string='This is single quotation';      //!  \\ double backslash will skip a quotation mark so we can write things like it's
let string1="This is double quotation";
let string2=`This is backticks`;
let date=new Date();
console.log('single quotation ${string}')   //! this will just return single quotation ${string}

let newString='this is text ' +string;
console.log(newString);

console.log(`This is text ${string} hgjf `);

console.log(`Hello ${date.getDate()} how are you?`);    //* you can input any named variable inside the ${} backticks

console.log(string1.trim());

//! String methods
/*
* .slice() -- to extract a text from a string -- string.slice(2) or string.slice(2, 4) -- slice(startIndex, endIndex);

* .substr() -- string.substr(3,6) -- (startIndex, numberOfCharacters);

* .substring() -- cannot use negative value -- substring(startIndex, endIndex);

* .replace('i', 'H'); -- replaces the first match; --- replace(target character, replacement character);

* .replaceAll('i', 'H') -- replaces all matches;


* .length or .length -1 --- returns the number of characters in a string -- -1 returns the last character of the string
*/

//! Math Method
/*
?     .min()      used tofind the lowest value in list of arguements e.g (0, 150, 200, 34, 55) -- would return 0
?     .max()      used to find the highest value in list of arguements e.g (0, 150, 456, 45) -- would return 456
?     .round()    returns the value of (x) where x is a number rounded to the nearest integer (whole number) -- e.g 10.1 would give 10, 10.9 would give 11
?     .sqrt()     used to return the square root of a number (x) rounded to the nearest integer (whole number)
?     .pow()      takes (x,y), returns value of x to the power of y -- e.g (.pow(3,4)=3 * 3 * 3 * 3 = 81
?     .floor()    takes (x), rounds value of x down to nearest integer -- e.g 4.7 gives 4 or 8.6 gives 8
?     .random()   returns random number between 0-1
?     .cos()      takes x, returns the cosine of an angle in radians**, value between -1 and 1
?     .sin()      takes x, returns the sine of an angle in radians**, value between -1 and 1
?     .ceil()     takes x, returns value of x rounded to the nearest integer upward -- e.g 10.1 would give 11
*/

let num = console.log(Math.round(Math.random()*5));     //? returns a random number between 1 and 5


//! If - Else if 

/*
* if(condition){statement}
* if(condition){statement}
* if(condition){statement}
* if(condition){statement}
* if(condition){statement}

* if(condition){statement}
* else if(condition){statement}
* else if(condition){statement}
* else if(condition){statement}
* else if(condition){statement}
*/
//! ex1

let weather='Foggy';

if(weather=='Sunny')
{
    console.log('The weather is warm you do not need umbrella');
}
else if(weather=='Raining')
{
    console.log('It\'s raining so you need an umbrella');
}
else
{
    console.log('The weather might be cloudy or foggy so wear something warm');
}

//! ex2

let num2=Number(prompt('enter number:'));

if (num2 % 2==0)
    {
        console.log('Even');
    }
else 
    {
        console.log('Odd');
    }


//! ex3

let age=Number(prompt('What is your age?', 'Age:'));

if(age<18 || age>65)
    {
        console.log('Sorry you cannot work');
    }
    else if(age>=18 && age<=65)
        {
            console.log('Great! You can work!');
        }


//! switch in JS
/*
* Syntax:
* switch(expression)
* {
*     case condition: statement;
*     break;
*     case condition: statement;
*     case condition: statement;
*     default: statement;
* }
*/

//! ex 1
let num1=20;
let num2=30;
let parameter='-';
switch(parameter)
{
    case '+':
            console.log(num1+num2);
    break; //break terminates the execution. if break is not used, all cases will be checked
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        console.log(num1/num2);
    break;
    default: console.log('Please enter correct parameter');

}

//! ex 2

let age=Number(prompt('Type number'));
switch(true)
{
    
        case age<18:
            console.log('Sorry you cannot work! you are too young');
        break;
        case age>65:
            console.log('Sorry you cannot work! you are too old');
        break;
        case (age>18 && age<65):
            console.log('Yay you can work')
        break; 
        default: console.log("invalid")
    
}


//* Arrays

let myList=["clare", "Database" , 20, true];
console.log(myList);
console.log(myList[2]);
myList.push('Java'); // adds an item at the end of the array list
console.log(myList);
myList.pop(); // removes the last item froma rray list
console.log(myList);
myList.unshift(); // add item to the beginning of array list
console.log(myList);
myList.shift //removes the first item from array list
console.log(myList);

myList[1]='HTML'; // replaces an item at that index
console.log(myList);

// add array element at a specific index

// splice(start,deleteCount,item1,item2,....)
myList.splice(2,0,"CSS");
console.log(myList);

console.clear();

let palette=['pink', 'red', 'orange', 'green'];
console.log(palette);
palette.pop();
console.log(palette);
palette.unshift('yellow');
console.log(palette);
palette.shift();
console.log(palette);
palette.push('yellow');
console.log(palette);
palette.splice(3,0,'blue');
console.log(palette);

console.clear();


//* Loops

// for, while, do-while

//! For loop 
//used to repeat a block of code a specific/set number of times
/* 
for loop has 3 main parts
initialization, condition, final expression
syntax:
for(initialization; condition; final_expression)
{
    statements
}
*/



for(let i=0;i<=5;i++) //?i=0 (index);i<=5(index is less than 5;i++ increment increa otherswise loop runs forever)
{
    console.log('Welcome to JavaScript')
}

//! While loop
// used to repeat when we are unclear how many times the loop needs to repeat
/*
while(condition)
{
    block of code   
}
*/

let count=0;
while(count<5) //? run whislt this condition is true - check that count is less than 5 - will not run if the condition is not true
{
console.log('Hello, how are you?');
count++; //? increment so loop doesn't run forever
}

//! Do-while

let i=0; //? will execute once then check the condition
do{
    console.log('Hello, whats up?');
    i++;
}
while(i<5);

console.clear();

//? display numbers 1 through 10
for (let i=1; i<=10; i++) {
    console.log(i);
  }
  
//? display even numbers 1 through 10
for (let i=1; i<=10; i++) {
    if (i%2===0) {
    console.log(i);
  }
}
//? display results of multiply by 2, through to 10
for (let i=0; i<=10; i++) {
    console.log(i*2);
}

//? display 2*1=2, 2*2=4, 2*3=6 and so forth
for (let i=1; i<=10; i++) {
    const result=2*i;
    console.log(`2 * ${i} = ${result}`);
}


//! for in
//! for of

let palettes=['pink', 'red', 'orange', 'green'];
for(const color of palettes)
{
    console.log(color);
}

let vehicle= {
    model: '2022',
    plate: 'EJKL',
    price: 14000,
    colour: 'Black',
    insured: true
}

//? for in
for(let key in vehicle)
{
    console.log(`${key}: ${vehicle[key]}`);
}

//? Document Object Model

// The DOM is a data structure that gets created when the page loads
// The type of data structure created is known as a node tree.
// Every part of the HTML (document, elements, text, comments) are called nodes.
// These nodes can be navigated using JavaScript (and CSS).
// You can create, delete and modify all nodes.
// Nodes have relationships that are in a parent-child-sibling hierarchy.

//? Parent (<html> document)    ---> First child (<head> element)   
//?                             ---> Last child (<body> element)


//* get by ID
// document.getElementById('p1').innerHTML='first paragraph is changed'

let p1=document.getElementById('p1');           // accessing html element using id
p1.innerHTML='first paragraph is changed';

//* get by Class name
// document.getElementsByClassName('p2').innerHTML='Text is changed'

// let p2=document.getElementsByClassName('p2');   // accessing HTML element using class
// p2[0].innerHTML='Text is changed'; // you must use index number to tagert the element when multiple elements have same class name

/*
let p2=document.getElementsByClassName('p2');      // use loops to affect multiples with same class name
for(let i=0; i<p2.length; i++)
{
    p2[i].innerHTML='Changes'
}
*/

let div=document.getElementsByTagName('div')[1];      // can select them by tag name. index numbers can be used
console.log(div);

// document.querySelector('.div1').innerHTML='Query Selector'; // query selector will only select the first match

// document.querySelectorAll('.div1, p2, #p1').innerHTML='HI'; // can pass multiple selections

//? innerHTML - property allows 

//* p1.innerHTML=`<h1 style='color:red;'> This is changed</h1>`;    // this will add html content
//* p1.textContent=`<h1 style='color:red;'> This is changed</h1>`;  // this will not add html content


// document.getElementById('div1').style.backgroundColor='red';        // this changes CSS properties

let div1=document.getElementById('div1')
// div1.style.backgroundColor='red';
// div1.style.height='200px';
div1.style.cssText='background-color: blue; height: 200px; color:white' // neater way of editing mulitple properties

console.clear();


//!Task


let btn1=document.getElementById('btn1');
btn1.style.cssText='background-color: #fcba03; height: 100px; color: white';
btn1.style.display= 'block';

let btn2=document.getElementById('btn2');
btn2.style.cssText='background-color: #ff4d00; height: 100px; color: white';
btn2.style.display= 'none';

btn1.addEventListener('click', function() {
    btn2.style.display= 'block';
    btn1.style.display= 'none';
} );




let hvrdiv=document.getElementById('hvrdiv');
hvrdiv.style.cssText='background-color: #7ff5f1; height: 200px ';

hvrdiv.addEventListener('mouseover', function () {
    hvrdiv.innerHTML='Go AWAY'
    hvrdiv.style.cssText='background-color:#f05e56; font-size: 100px';
});

//! Teacher example

let button1=document.getElementById('btna');
let button2=document.getElementById('btnb');
let body=document.getElementById('body');
button2.style.display='none';

button1.addEventListener('click', function show(){
button1.style.display='none';
button2.style.display='inline';
body.style.backgroundColor='pink';
})

button2.addEventListener('click', function show(){
    button2.style.display='none';
    button1.style.display='inline';
    body.style.backgroundColor='white';
    });



let divh=document.getElementById('div123');

divh.addEventListener('mouseover', changeDivh)

function changeDivh(){
    divh.innerHTML='Go away!';
    divh.style.backgroundColor='red';
}


document.getElementById('p10').classList.add('newStyle'); //* adds a class to an id that doesnt previously exist in the HTML

let newDiv=document.createElement('div'); //used to create an element from JavaScript
body.appendChild(newDiv);
div1.appendChild(newDiv);

let text=document.createTextNode('This text is created in JS');
let paragraph=document.createElement('p');
paragraph.appendChild(text);
div1.appendChild(paragraph);

//*inputs data into a box and then display that as an alert when button is clicked

let textbox=document.getElementById('txtname');
document.getElementById('data').addEventListener('click', function takeData(){
    alert(textbox.value)
});

// let box=document.getElementsByTagName('div');

// div1.setAttribute('background', 'input')


// Get references to the elements
const divElement = document.getElementById('myDiv');
const fileInput = document.getElementById('fileInput');
const changePictureBtn = document.getElementById('changePictureBtn');

// Add an event listener to the button
changePictureBtn.addEventListener('click', function () {
  // Check if a file has been selected
  if (fileInput.files.length > 0) {
    // Get the selected file
    const selectedFile = fileInput.files[0];

    // Create a URL for the selected file
    const fileURL = URL.createObjectURL(selectedFile);

    // Set the background image using the style property
    divElement.style.backgroundImage = `url(${fileURL})`;
  }
});


document.getElementById('swappics').addEventListener('click', function swappics() {
    let pic1=document.getElementById('pic1').src;
    let pic2=document.getElementById('pic2').src;
    document.getElementById('pic1').src=pic2;
    document.getElementById('pic2').src=pic1;
})


// localStorage.setItem('userName', 'Clare');
// localStorage.setItem('userLastName', 'Hedges');

console.log(localStorage.getItem('userName'));

localStorage.removeItem('userName');

let text=document.getElementById('text');
let date=new Date();
Document.getElementById('save').addEventListener('click', function saveData() {
    localStorage.setItem(`text${date}`, text.value);
    document.getElementById('paragraph').innerHTML=localStorage.getItem('text');
})
document.getElementById('paragraph').innerHTML=localStorage.getItem('text');

// localStorage.clear();

let date=new Date ();

console.log(date);

let date1 = new Date('2023,8,10');
console.log(date1);

console.log(date.getFullYear()); //* 2023
console.log(date.getMonth()); //* will return month in number
console.log(date.getDate()); //* will return day of the month
console.log(date.getDay()); //* day of the week
console.log(date.getHours()); //* return hour from date
console.log(date.getMinutes()); //* returns minutes
console.log(date.getSeconds());
console.log(date.getTime());


//! toLocalDateString

let dayOfWeek=date.toLocaleDateString('en-uk',{weekday: 'short'}) //! can put 'long'
console.log(dayOfWeek);


// let day = date.toLocaleDateString('en-uk', {weekday: 'long'});
// let date2 = date.toLocaleString(date.getDate);
// let month = date.toLocaleDateString('en-uk', {month: 'long'});
// let year = date.toLocaleDateString(date.getFullYear());

// let calendar = (` "The date is" ${day} "the" ${date2} "th");

// // console.log(calendar);

let dayOfWeekTask = 
date.toLocaleDateString ("en-uk", { 
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric", 
});
console.log("Today is " + dayOfWeekTask);

console.log(`Today is: ${date.toLocaleDateString('en-uk', {weekday: 'long'})}, ${date.toLocaleString('en-uk',{day:'2-digit'})}th of ${date.toLocaleDateString('en-uk',{month:'long'})} ${date.getFullYear()}`)

//* Set timeout, set interval...

//? The setTimeout(); call a function after a certain period of time. Time is given in milliseconds
//? clearTimeout();  you must store setTimeout into a variable in order to us clearTimeout
function message(name) {
    console.log('Hello, how are you?', name)
}

// let delay=setTimeout(message,3000,'john')
// clearTimeout(delay);

//? The setInterval(); call a function repeatedly at a specific interval

// setInterval(message,3000,'Mark');

// function currentTime(){
//     let date= new Date();
//     let p1=document.getElementById('p1');
//     p1.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
//     // console.log(p1.innerHTML)
// }
// setInterval(currentTime,1000);
let count = 1;
function message() {
    console.log('Smile');
    if(count==10)
    {
        clearInterval(interval);
    }
    count++
}
let interval=setInterval(message, 0);