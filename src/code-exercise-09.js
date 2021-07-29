// ! Coding Exercise 9: Convert số giây sang chuỗi hh:mm:ss

const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function leadingZero(time) {
    if (time <= 9) {
        time = `0${time}`;
    }
    return time;
}

function formatTime(seconds) {
    if (seconds < 0 || seconds > 86400) return '';

    const hours = leadingZero(Math.floor(seconds / SECONDS_PER_HOUR));

    const mins = leadingZero(Math.floor((seconds - hours * SECONDS_PER_HOUR) / SECONDS_PER_MIN));

    const secs = leadingZero(
        Math.floor(seconds - hours * SECONDS_PER_HOUR - mins * SECONDS_PER_MIN)
    );

    return `${hours}:${mins}:${secs}`;
}

console.log(formatTime(83660));

// 83660 / 3600 = 23 giờ

// (83660 - 23 * 3600) / 60 = 14 phút

// 83660 - 23 * 3600 - 14 * 60 = 20 giây

// 23*3600 + 14*60 + 20

// 83660 = `23:14:20`

/*
    Viết hàm formatTime (seconds) nhận vào là số giây seconds với (0 <= seconds <= 86400)
    
    Trả về là một chuỗi với định dạng hh:mm:ss trong đó:
    - hh là số giờ
    - mm là số phút
    - ss là số giây

    hh, mm, ss luôn luôn hiển thị 2 chữ số kể cả nhỏ hơn 10.
*/
