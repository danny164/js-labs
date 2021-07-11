// ! Lấy value của key
// ? Dùng dot operator để truy cập key của object
// ? Dùng square brackets để truy cập dynamic key của object, kể cả key có space.

const student = {
    id: 1,
    name: 'Van A',
    isHero: true,
    'avg mark': 9,
};

console.log(student.name);
//  console.log(student.avg mark); // Syntax Error
console.log(student['avg mark']); // 9

const key = 'avg mark';
console.log(student.key); // undefined

// ! Thêm key mới cho object
const student = {
    id: 1,
    name: 'Van A',
    isHero: true,
};

// update value of a key
student.name = 'Van B';

// TODO: simply set new key for object
student.age = 18;
student['mark'] = 10;

console.log(student.age); // 18
console.log(student.mark); // 10

// ! Xoá một key ra khỏi object hiện tại, dùng delete operator
const student = {
    id: 1,
    name: 'Van A',
    isHero: true,
};

// Remove "name" key
delete student.name;
console.log(student.name); // undefined
