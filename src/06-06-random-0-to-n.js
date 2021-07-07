// 1. Random một số ngẫu nhiên trong khoảng [0, n]
// Math.random() -> [0, 1)

function randomNumber(n) {
    if (n <= 0) return -1;

    const random = Math.random() * n;

    return Math.round(random);
}

console.log(randomNumber(3));
console.log(randomNumber(-1));
console.log(randomNumber(100));
