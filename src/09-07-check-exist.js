// Kiểm tra sự tồn tại của phàn tử

// check if all numbers is even
[1, 2, 4].every((x) => x % 2 === 0); // false
[2, 4, 6].every((x) => x % 2 === 0); // true

// check if exist one number is even
[1, 2, 4].some((x) => x % 2 === 0); // true
[1, 3, 5].some((x) => x % 2 === 0); // false

[1, 1, 1].indexOf(1); // 0
[1, 1, 1].lastIndexOf(1); // 2

['easy', 'frontend', 'easy'].indexOf('easy'); // 0
['easy', 'frontend', 'easy'].lastIndexOf('easy'); // 2

['easy', 'frontend', 'easy'].includes('easy'); // true
['frontend'].includes('easy'); // false

// every v1
export function checkIfAllEvenV1(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    let isValid = true;

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 !== 0) {
            isValid = false;
            break;
        }
    }

    return isValid;
}

// console.log(checkIfAllEven([2, 1, 3]));
// console.log(checkIfAllEven([2, 4, 6]));

// every v2
export function checkIfAllEvenV2(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 !== 0) return false;
    }

    return true;
}

// console.log(checkIfAllEven([2, 1, 3]));
// console.log(checkIfAllEven([2, 4, 6]));
