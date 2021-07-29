//  rest vs spread giống nhau đều sử dụng ...
//  rest là gom những thứ còn lại vào 1 mảng
/*  spread là dùng để clone array | syntax:...name,
    hoặc là tách string thành các item riêng lẻ cho vào 1 mảng | syntax: ...[name],
    hoặc là biến các items của 1 mảng thành các đối số riêng lẻ
    thông qua hàm gọi để truyền vào các tham số tương ứng Function Call
    syntax: ...[a, b, c, d]
    -> function myNumber(a, b, c) {...}
    -> myNumber(...[a, b, c, d])
*/

// ? rest: gom rest items --> 1 array

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio('Oluwatobi', 'Sofela', 'CodeSweetly', 'Web Developer', 'Male');

// The invocation above will return:
['CodeSweetly', 'Web Developer', 'Male'];

/* 
    In the snippet above, we used the rest parameter to put , ,
    and into an array ....otherInfo

    "CodeSweetly" "Web Developer" "Male" 
*/

const [a, b, ...c] = [10, 20, 30, 40, 50];
console.log(c); // [30, 40, 50]

//////////////////////////////////////////////
// ? spread: 1 array --> items

// Define a function with three parameters:
function myBio(firstName, lastName, company) {
    return `${firstName} ${lastName} runs ${company}`;
}

// Use spread to expand an array’s items into individual arguments:
myBio(...['Oluwatobi', 'Sofela', 'CodeSweetly']);

// The invocation above will return:
/* 
    --> “Oluwatobi Sofela runs CodeSweetly”
*/

// TODO: Spread Example 1: How Spread Works in an Array Literal
const myName = ['Sofela', 'is', 'my'];
const aboutMe = ['Oluwatobi', ...myName, 'name.'];

console.log(aboutMe);

// The invocation above will return:
['Oluwatobi', 'Sofela', 'is', 'my', 'name.'];

// ---> The snippet above used spread () to copy the array into ....myName

// TODO: Spread Example 2: How to Use Spread to Convert a String into Individual Array Items
const myName = 'Oluwatobi Sofela';

console.log([...myName]);

// The invocation above will return:
['O', 'l', 'u', 'w', 'a', 't', 'o', 'b', 'i', ' ', 'S', 'o', 'f', 'e', 'l', 'a'];

// TODO: Spread Example 3: How the Spread Operator Works in a Function Call
const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
    return a + b + c + d;
}

console.log(addNumbers(...numbers));

// The invocation above will return:
16;

/*
    Suppose the array had more than four items. 
    In such a case, the computer will only use the first four items as argument
    and ignore the rest
*/

const myName = 'Oluwatobi Sofela';

function spellName(a, b, c) {
    return a + b + c;
}

console.log(spellName(...myName)); // returns: "Olu"

console.log(spellName(...myName[3])); // returns: "wundefinedundefined"

console.log(spellName([...myName])); // returns: "O,l,u,w,a,t,o,b,i, ,S,o,f,e,l,aundefinedundefined"

console.log(spellName({ ...myName })); // returns: "[object Object]undefinedundefined"

// TODO: Spread Example 4: How Spread Works in an Object Literal

const myNames = ['Oluwatobi', 'Sofela'];
const bio = { ...myNames, runs: 'codesweetly.com' };

console.log(bio);

// The invocation above will return:
/* { 0: "Oluwatobi", 1: "Sofela", runs: "codesweetly.com" } */

/*****************/
const myName = { firstName: 'Oluwatobi', lastName: 'Sofela' };
const bio = { ...myName, website: 'codesweetly.com' };

console.log(bio);

// The invocation above will return:
/* { firstName: "Oluwatobi", lastName: "Sofela", website: "codesweetly.com" } */
