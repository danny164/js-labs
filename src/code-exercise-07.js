// ! Coding Exercise 7: Tìm và xoá các nguyên âm trong câu văn

function removeVowel(str) {
    if (str === '') return '';

    let finalStr = '';

    if (str.includes('u')) finalStr = str.replace('u', '');
    if (str.includes('e')) finalStr = finalStr.replace('e', '');
    if (str.includes('o')) finalStr = finalStr.replace('o', '');
    if (str.includes('a')) finalStr = finalStr.replace('a', '');
    if (str.includes('i')) finalStr = finalStr.replace('i', '');

    return finalStr.trim();
}

console.log(removeVowel('hello'));

/*
    Viết hàm function removeVowel(str) để tìm và remove tất cả nguyên âm
    có trong câu văn đầu vào.

    Nguyên âm là các ký tự: u, e, o, a, i (uể oải :P)

    - Giả định là mỗi nguyên âm trong str chỉ xuất hiện một lần.
    - Trường hợp chuỗi sau khi bỏ các nguyên âm có dư khoảng trắng ở đầu
    hoặc cuối chuỗi, thì hãy bỏ luôn các khoảng trắng thừa này nhé.

    Lưu ý: không được sử dụng for, chỉ được dùng hàm replace()
*/
