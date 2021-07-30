function cloneObject(obj) {
    const clone = {};

    for (let key in obj) {
        clone[key] = obj[key];
    }

    return clone;
}

const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);

console.log(studentA === studentB); // should be false
console.log(studentB);
console.log(studentB.name); // Bob
console.log(studentB.math); // 9

const language = { vi: 'Vietnamese', en: 'English' };
language.cn = 'China';

console.log(language);
