const numberList = [1, 3, 5, 2, 7];
numberList.filter((x) => x % 2 === 0); // [2]
numberList.filter((x) => x > 2); // [3, 5, 7]
numberList.filter((x) => x <= 10 || x % 5 === 0); // [5]

const wordList = ['easy', 'frontend', 'easier'];
wordList.filter((x) => x.length < 5); // ['easy']
wordList.filter((x) => x.startsWith('ea')); // ['easy', 'easier']

/**
 * setting filter in manual/nature
 */

// TODO: filter(arr, callbackFn)
// TODO: callbackFn return true/false

function filter(arr, filterFn) {
    // checking input
    if (!Array.isArray(arr) || typeof filterFn !== 'function') return undefined;

    const newArray = [];

    // filtering ...
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (filterFn(element, i)) {
            newArray.push(element);
        }
    }

    return newArray;
}

console.log(filter([2, 3, 5, 7, 9], (x) => x > 5)); // [7, 9]
