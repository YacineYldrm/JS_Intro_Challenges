//------------------------------------
// 
//              Intro
// 
//------------------------------------  

console.log("%c Intro-Level-1_3", "color: blue; background-color: gold");

// let i = 1;
// let lastName = "Johnson";
// let j = "2";
let status = true;
let hello = "hello";
// let helloWorld = "hello";

// console.log(typeof i);
// console.log(typeof lastName);
// console.log(typeof j);
console.log(typeof status);
console.log(typeof hello);
// console.log(typeof helloWorld);

console.log("%c Intro-Level-1_4", "color: blue; background-color: gold");

console.log(typeof "John");
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(typeof false);
console.log(typeof [1,2,3,4]);
console.log(typeof {name:'John', age:34});
console.log(typeof new Date());
console.log(typeof function () {});
console.log(typeof null);
console.log(typeof 3 + 2 == 5);
console.log(typeof 3 + "3");

//------------------------------------
// 
//              Variablen
// 
//------------------------------------

// Intro-Level-1_7

const helloWorld = "Hello World";
const pi = 3.14;
const burjDubai = 828;
let fullName = "Jan Schmidt"; 
const eifelTower = 324 ;
let camelCase = "camelCase"; 
let kursstatus = true;

console.log("%c Intro-Level-1_5", "color: blue; background-color: gold");

let carName = "BMW";
console.log(carName);
// const x = 150;
// console.log(x);
// const y = 50;
// console.log(y);
// let z = (x+y);
// console.log(z);

let firstName = "John";
let lastName = "Doe";
let age = 35;

console.log(firstName + " " + lastName + " " + age);

console.log("%c Intro-Level-1_6", "color: blue; background-color: gold");


let r = 34;
console.log(r);
r = 67;
console.log(r); 

// const r = 34;
// console.log(r);
// r = 68; 
// const lässt sich nicht überschreiben, da es sich dabei um eine konstanten Variable handelt, der im laufe des Programms nicht verändert oder überschrieben werden kann.


//------------------------------------
// 
//         Arithmetic operators
// 
//------------------------------------  

console.log("%c Intro-Level-1_8", "color: blue; background-color: gold");


let x = 20;
let y = 30;
console.log(x + y);
console.log(y - x);
console.log(y * x);
console.log(x / y);
let z = 10;
let resultOne = x * y / z;
console.log(resultOne);
let a = 15;
let b = 9;
console.log(15 % 9);
let c = 20;
let resultTwo = (a + b) * c;
console.log(resultTwo);
a ++;
console.log(a);
b --;
console.log(b);
let resultThree = a - b;
console.log(resultThree);
console.log(resultOne % resultTwo);

console.log("%c Intro-Level-1_12", "color: blue; background-color: gold");

let score = 5 + 5 * 10;
console.log('Ergebnis: ' + score);
let scoreTwo = (5 + 5) * 10;
console.log('Ergebnis: ' + scoreTwo);
let scoreThree = 0;
scoreThree = scoreThree + 10;
console.log('score: ' + scoreThree)
scoreThree += 10;
console.log('score: ' + scoreThree)

console.log("%c Intro-Level-1_13", "color: blue; background-color: gold");


// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);
 // Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);
// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);
// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);
// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);


//------------------------------------
// 
//         Strings & methods
// 
//------------------------------------  

let wordOne = "Hello";
let wordTwo = "World";
let sentenceOne = wordOne + " "+ wordTwo;
document.write(sentenceOne);
document.write("<br>");
document.write(wordOne + " " + "World");
document.write("<br>");
let meinString = "Ich bin Erste:r"
meinString = meinString + " " + " " + "-" + " " + "Ich komme auf Platz zwei.";
document.write(meinString)

//------------------------------------
// 
//         Input / Output
// 
//------------------------------------  

console.log("%c Output-Level-1_4", "color: blue; background-color: gold");

// window.alert("Hallo Welt");

// window.prompt("Bitte geben Sie Ihren Namen ein.");
// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
// window.confirm("Stimmen Sie meiner Meinung zu?");
// let alter = window.prompt("Gib mir bitte dein Alter:");
// console.log(alter);
// let b2 = 5;
// let a2 = b * 5 - 3;
// window.alert(a);
let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
window.confirm(mann + grosse);