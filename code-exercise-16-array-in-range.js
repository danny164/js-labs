/**
 * Liệt kê các số trong khoảng [a, b]
 * Viết hàm createArrayInRange(a, b) để tạo ra mảng gồm các số nằm trong khoảng
 * [a, b] (có bao gồm a và b)
 * Với a, b là các số thoả điều kiện sau:-100 < a < b < 100
 * Trả về là một array chứa các số trong khoảng từ a tới b.
 *
 * VD:  createArrayInRange(1, 5) --> [1, 2, 3, 4, 5]
 *      createArrayInRange(-2, 1) --> [-2, -1, 0, 1]
 *
 * Hãy viết bài này bằng 2 cách:
 * 1. Dùng for...i           createArrayInRangeV1(a, b)
 * 2. Dùng Array.from()      createArrayInRangeV2(a, b)
 *
 */

// using for...i
function createArrayInRangeV1(a, b) {
    // your code here
    if (-100 >= a || a >= b || b >= 100) return undefined;

    let arr = [];

    for (let i = a; i <= b; i++) {
        arr.push(i);
    }

    return arr;
}

// using Array.from()
function createArrayInRangeV2(a, b) {
    // your code here
    if (-100 >= a || a >= b || b >= 100) return undefined;

    const range = (start, stop, step) =>
        Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    return range(a, b, 1);
}
