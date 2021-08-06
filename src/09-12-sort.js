const numberList = [2, 5, 3, 1];

numberList.sort(); // [1, 2, 3, 5]
[null, 2, 1, 5, 3, undefined, null].sort(); // [1, 2, 3, 5, null, null, undefined]

// https://visualgo.net/vi/sorting

// v1
function compareFn(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    return -1;
}
console.log([2, 1, 3].sort(compareFn)); // 1, 2, 3

// v2
function compareFn(a, b) {
    return a - b;
}
console.log([2, 1, 3].sort(compareFn)); // 1, 2, 3

// v3
console.log([2, 1, 3].sort((a, b) => a - b)); // 1, 2, 3

// Hàm sort() sẽ trả về mảng sau khi sort (nhưng đây là mảng hiện tại, không phải mảng mới)
// có nghĩa là nó sort thẳng trực tiếp lên mảng cũ
let abc = [2, 1, 3];
abc.sort((a, b) => a - b); // [1, 2, 3]
console.log(abc); // [1, 2, 3]

// ! Trong Javascript, có hỗ trợ sẵn hàm sort(compareFn) để sắp xếp mảng theo điều kiện mong muốn.
// ? Nếu là null / undefined thì auto được cho xuống cuối mảng, null đứng trước, tới undefined.
// ? Nếu hàm compareFn không được cung cấp, các phần tử sẽ được chuyển về strings để thực hiện so sánh.
// ? Nếu compareFn(a, b) được cung cấp thì dựa vào kết quả của hàm để xác định:
// *** KQ trả về < 0, a sẽ đứng trước b
// *** KQ trả về = 0, a và b như nhau
// *** KQ trả về > 0, a sẽ đứng sau b
