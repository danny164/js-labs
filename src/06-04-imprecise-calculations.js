console.log((0.1).toFixed(20));
console.log((0.2).toFixed(20));
console.log((0.1 + 0.2).toFixed(20));
console.log((0.3).toFixed(20));
console.log((0.45).toFixed(1));

console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2 === 0.3); // false

console.log(Number.EPSILON);
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log((0.1 + 0.2).toFixed(1) === (0.3).toFixed(1));
