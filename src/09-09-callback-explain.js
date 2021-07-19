// find(callbackFn)
// find(x => x > 0)

// lính canh
// v1
function findFirstEven(numberList) {
    if (!Array.isArray(numberList)) return undefined;

    let firstEven;

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 === 0) {
            firstEven = number;
            break;
        }
    }

    return firstEven;
}
console.log(findFirstEven([1, 2, 3, 5]));

// v2
function findFirstEven(numberList) {
    if (!Array.isArray(numberList)) return undefined;

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 === 0) {
            return number;
        }
    }

    return undefined;
}

console.log(findFirstEven([1, 2, 3, 5]));

// v3
function findFirstEven(numberList, callbackFn) {
    if (!Array.isArray(numberList)) return undefined;

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (callbackFn(number, i)) {
            // callbackFn chinh la ham isEven truyen vao)
            // if true => return number; false thì thôi :v
            return number;
        }
    }

    return undefined;
}

// v3.1
function isEven(number) {
    return number % 2 === 0; // true or false
}

function lager(number) {
    return number > 3; // true or false
}

console.log(findFirstEven([1, 2, 3, 5], isEven)); // 2

// v3.2 inline function or anonymous funtion - ham ko co ten
console.log(
    findFirstEven([1, 2, 3, 5], function (number) {
        return number % 2 === 0;
    })
); // 2

// v3.3 arrow function
console.log(
    findFirstEven([1, 2, 3, 5], (number) => {
        return number % 2 === 0;
    })
);

// v3.4 arrow function shorthand
console.log(findFirstEven([1, 2, 3, 5], (number) => number % 2 === 0)); // 2
console.log(findFirstEven([1, 2, 3, 5], (number) => number > 3)); // 5
