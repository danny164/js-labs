// ! Property value shorthand
const name = 'Easy Frontend';
const age = 18;

const student = {
    name: name, // key and value variable have the same name
    age: age, // key and value variable have the same name
};

// shorthand (recommended)
const student = {
    name,
    age,
};

// ! Object destructuring
const student = {
    name: 'Easy Frontend',
    age: 18,
};

// old way
const name = student.name;
const age = student.age;

// new way usign object destructuring
const { name, age } = student; // recommended

// ! Checking keys in a object or not?
const student = {
    name: 'Easy Frontend',
    age: 18,
};

'name' in student ? console.log(true) : console.log(false); // true
'age' in student; // true
'isHero' in student; // false
