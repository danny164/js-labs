// value type, the variable store the value
const name = 'Easy Frontend';
const age = 18;
const isHero = true;
const selectedStudent = null;
// |----------------------------|
// | name = 'Easy Frontend'     |
// |____________________________|

/*  reference type, the variable store the address/ref of the value
    so in this example object value { name, age, ... }
    will be store at address 123456 (somewhere in memory)

    and the student variable just hold the address 123456 
    (that's why we call reference)
*/
const student = {
    name: 'Easy Frontend',
    age: 18,
};
// |----------------------|     | ADDRESS: 123456           |
// | student = 123456     | --->| VALUE: { name, age, ... } |
// |______________________|     |___________________________|

/*------------------------------------------*/
// primitive type
const a = 5;
let b = a;
b = 10;

console.log(a); // 5

// reference type
const student1 = { name: 'Easy Frontend' };
const student2 = student1;
student2.name = 'Quynh Nguyen';

console.log(student1.name); // Quynh Nguyen ???

// Pass by value
function changePrimitive(name, age) {
    name = 'Easy Frontend';
    age = 18;
}

let name = 'Easy';
let age = 17;
changePrimitive(name, age);

console.log(name); // 'Easy'
console.log(age); // 17

// Pass by reference
function changeReference(student) {
    student.name = 'Easy Frontend';
    student.age = 18;
}

const student = {
    name: 'Easy',
    age: 17,
};
changeReference(student);

console.log(student.name); // 'Easy Frontend'
