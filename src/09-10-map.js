const numberList = [1, 3, 5, 7];
numberList.map((x) => x + 1); // [2, 4, 6, 8]
numberList.map((x) => x * 2); // [ 2, 6, 10, 14]

const wordList = ['easy', 'frontend'];
wordList.map((x) => x.length); // [4, 8]
wordList.map((x) => `super-${x}`); // ['super-easy', 'super-frontend']

// map in manual/nature

function map(arr, mappingFn) {
    // arr should be an array,
    // mappingFn should be a Function
    if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        const newElement = mappingFn(element, i);
        newArray.push(newElement);
    }

    return newArray;
}

console.log(map([1, 2, 3], (x) => x + 1));
console.log(map([1, 2, 3], (x) => x * 1));

// even index: inscrement by 1
// odd index: muliply with 2
console.log(map([1, 2, 3, 4, 5], (x, idx) => (idx % 2 === 0 ? x + 1 : x * 2)));

console.log(map(['reactjs', 'javascript'], (x) => x.length)); // [7, 10]
console.log(['reactjs', 'javascript'].map((x) => x.length)); // [7, 10]
