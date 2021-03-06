// Dùng hàm reduce() khi có nhu cầu duyệt qua từng phần tử và tính toán ra một kết quả cuối cùng.

const numberList = [2, 4, 6];
let sum = 0;
for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
}
console.log(sum); // 12

// the same with above but using reduce()
numberList.reduce((sum, number) => sum + number); // 12
