// ! Coding Exercise 8: Format số giây luôn hiển thị 2 chữ số

// using if...else
function formatSecondsV1(seconds) {
    if (seconds < 0 || seconds > 60) return '';

    if (seconds < 10) return `0${seconds}`;

    return seconds.toString();
}

// using slice()
function formatSecondsV2(seconds) {
    if (seconds < 0 || seconds > 60) return '';

    return `0${seconds}`.slice(-2);
}

console.log(formatSecondsV1(1));
console.log(formatSecondsV2(2));

/*
    Viết hàm formatSeconds(seconds) nhận vào là số giây(0 <= seconds < 60)
    và trả về chuỗi luôn có 2 chữ số của số giây.

    Bài này áp dụng trong thực tế khi muốn show đồng hồ điện tử, để cho đẹp
    mình đảm bảo luôn show 2 chữ số, dù số giờ phút giây chỉ có một chữ số.
*/
