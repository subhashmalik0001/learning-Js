// let a = 5;
// let b = 2;
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);

// let age = 2;
// if(age > 18){
//     console.log("you can vote ");

// }else{
//     console.log("you can not vote ");
// }

// let mode = "dark"
// let color;

// if (mode == "dark") {
//     color = "black";
    
// }else{
//     color = "light";
// }
// console.log(color)/

// alert("hello");

// let num = prompt("Enter your number");

// if(num % 5 == 0){
//     console.log("your number is multiple of 5");
// }else{
//     console.log("your number is not multiple of 5");
// }

// for(let i=1; i<=5; i++){
//     console.log("subhash \n")
// }

// let str = "subhash";
// for (let i of str) {
//     console.log(i)
    
// }

// let student = {
//     name : "subahsh",
//     age : 20,
//     cgpa : 7.5, 
//     isPass: true
// };
// for (let key in student) {
//    console.log(key, "value=", student[key]);
// }

// let gameNum = 25;
// let userNum = prompt("guess your number :");

//  while (userNum != gameNum) {
//     userNum = prompt("you enter a wrong number, Guess again :")


    
//  }
//  console.log("congrats you enter a number ");
// let nam = "subhash";
// let newStr = nam.toUpperCase();
// console.log(newStr);

// let marks = [49, 32, 23, 23];
// console.log(marks);
// console.log(marks.length);

//  function myFunction(){
//     console.log("hello welcome to apna collge");
//     console.log("we are learning a js");
//  }

//  myFunction();
//  function myFunction(msg){
//     console.log(msg);
//  }

//  myFunction("hi how are you");

// function sum(x, y){
//     return x+y
// }





// const arrowSum = (a, b) => {
//     console.log(a + b);
// };
// const multiple = (a, b) => {
//     console.log(a * b);
// };

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
         

//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||){
//             count++;
//         }
//         console.log(count);

//     }
// }

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });  

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Subhash");
//     let a= 25;
//     a++;
//     console.log(a);
// }

// btn1.addEventListener("click",() =>{
//     console.log("button was clicked");
// } );


// btn1.addEventListener("click",() =>{
//     console.log("button was clicked");
// } );

// let modeBtn = document.querySelector("#modeBtn");

// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//    if (currMode === "light") {
//        currMode = "dark";
//        document.querySelector("body").style.backgroundColor = "black";
//    } else {
//        currMode = "light";
//        document.querySelector("body").style.backgroundColor = "white";
//    }

//    console.log(currMode);
// });
 
// let student = {
//     name : "subhash",
//     age : 21,
//     city : "chandigarh",
// };

// const obj = {
//     1: "a",
//     2: "b",
//     null: "c",
//     undefined: "d"
// };

// const student = {
//     name : "subhash",
//     age : "19",
//     city : "Chandigarh",
//     marks : "99"

// };
// const max = prompt("enter your max name");

// const randam = Math.floor(Math.random()*max)+1;
// console.log(randam);

// let guess = prompt("enter your number");

// while(true){
//     if(guess == "quit"){
//         console.log("user quit");
//         break;
//     }
//     if(guess == randam){
//         console.log("you are right", randam)
//         break;
//     }else {
//         guess = prompt("your guess is wrong");
//     }
// }

// function hello(){
//     console.log("subhash");
// }

// function print1to5(){
//     for (let i = 0; i <= 5; i++) {
//         console.log(i);
        
//     }
// }

// print1to5();


// function rollDie(){
//     let random = Math.floor(Math.random()*6)+1

//     console.log(random);
// }
// rollDie();

// function printInfo(name , age){
//     console.log(`${name} age is ${age}.`);
// }
// printInfo("subhash", 20);

// function printTable(n){
//     for (let i = n; i < n*10; i+=n) {

//         console.log(i)
        
//     }
// }

// printTable(2)

// function getSum(n){
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
        
//     }
//     return sum;
// }

// console.log(getSum(10));

// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(1,2));

// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//         return odd;
//     } else if(request == "even"){
//         let even = function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }
//     else{
//         console.log("wrong request");
//     }
// }

// let request = "odd"

// const calculator = {

//     num : 5,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }

// };

// const student = {
//     name : "subhash",
//     age : 20,
//     eng: 95,
//     math : 93,
//     phy: 97,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(avg);
//     }
// }

// try {
//     console.log(a)
// } catch {
//     console.log("variable a does not")
// }


// let num = [2, 6, 4, 7, 3, 1, 8, 9];

// let even = num.filter((el) =>{

//     return el%2==0;

// });

let num = [10, 30, 50];

// let sum = num.reduce((res, el)=>{
//     return (res+el);
// });

// let max = num.reduce((max, el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });

// console.log(max);

// let ten = num.every((el)=>{
//     return el%10==0;
// });
// console.log(ten);

let arr = [3, 8, 0, 7, 9];

let min = arr.reduce((min, el)=>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }
})







 



