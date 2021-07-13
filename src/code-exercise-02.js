// Coding Exercise 2:
// ? Say hello bằng nhiều ngôn ngữ
/*
    Viết hàmsayHello(languageCode)nhận vào languageCode và trả về câu xin chào của ngôn ngữ tương ứng.

    languageCode = 'en' --> Hello
    languageCode = 'vi' --> Xin chào
    languageCode = 'fr' --> Bonjour
    languageCode = 'cn' --> Nǐn hǎo
    languageCode = 'ja' --> Konnichiwa
    languageCode = 'ko' --> Anyoung haseyo

    Trường hợpkhông truyền languageCode hoặc languageCode không hợp lệ thì trả về mặc định "Hello"
*/

function sayHello(languageCode) {
    const lngCode = {
        en: 'Hello',
        vi: 'Xin chào',
        fr: 'Bonjour',
        cn: 'Nǐn hǎo',
        ja: 'Konnichiwa',
        kp: 'Anyoung haseyo',
    };

    return lngCode[languageCode] || 'Hello';
}

console.log(sayHello('vi'));
