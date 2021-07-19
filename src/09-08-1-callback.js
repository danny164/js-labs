// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.
// Tạm dịch nôm na, callback là tham số của hàm có kiểu dữ liệu là hàm

function main(callbackFn) {
    // processing ...
    // do another stuff
    callbackFn();
}

function callback() {
    console.log('call me when needed');
}

main(callback);

//

function main(onFinish) {
    let sum = 0;

    for (let i = 0; i < 10; i++) {
        sum += i;
    }

    onFinish(sum);
}

function handleOnFinish(sum) {
    console.log('Sum is:', sum);
}

main(handleOnFinish);
