let span = document.querySelectorAll('span span');
let diamonds = [];

for (let i = 0; i <= span.length; i++) {
    if (i % 2 === 0) continue;

    return diamonds.push(document.querySelectorAll('span span')[i].innerText);
}
//
let diamonds = [
    '1,551',
    '0',
    '0',
    '6',
    '0',
    '24.9K',
    '27',
    '480',
    '98',
    '0',
    '0',
    '416',
    '0',
    '16',
    '0',
    '0',
    '0',
    '4,136',
    '2,306',
    '641',
    '28',
    '0',
    '2',
    '401',
    '1,138',
    '0',
    '8',
    '1',
    '2,029',
    '1,576',
    '301',
    '77',
    '1,833',
    '131',
    '334',
    '0',
    '0',
    '305',
    '18',
    '3',
    '217',
    '32',
    '5',
    '0',
    '3',
    '1,098',
    '0',
    '2,697',
    '36',
    '2,344',
    '909',
    '1,488',
    '0',
    '7',
    '86',
    '15.4K',
    '0',
    '0',
    '32',
    '7',
    '0',
    '4,807',
    '0',
    '114',
    '12.7K',
    '603',
    '1,497',
    '0',
    '0',
    '6',
    '239',
    '36.4K',
    '3,292',
    '218',
    '1,935',
    '109',
    '0',
    '0',
    '0',
    '1',
    '101',
    '0',
    '3',
    '93',
    '1',
    '0',
    '5,533',
    '0',
    '1,633',
    '0',
    '0',
    '613',
    '0',
    '11',
    '39',
    '260',
    '1',
    '6',
    '862',
    '0',
    '100',
    '36',
    '656',
    '8,708',
    '1,004',
    '54',
    '178',
    '4,476',
    '183',
    '1',
    '2,196',
    '9,945',
    '0',
    '183',
    '18',
    '0',
    '103',
    '0',
    '11.1K',
    '1,010',
    '17',
    '210',
    '2',
    '1',
    '20.3K',
    '22.5K',
    '14.0K',
    '21.6K',
    '427',
    '0',
    '12.3K',
    '45.7K',
    '1',
    '0',
    '9,101',
    '8,476',
    '0',
    '6',
    '7,831',
    '0',
    '25.2K',
    '38.5K',
    '67',
    '43',
    '1,634',
    '839',
    '0',
    '11.1K',
    '1',
    '2,808',
    '225',
    '2,177',
    '0',
    '507',
    '3,430',
    '862',
    '203',
    '2,374',
    '114',
    '0',
    '0',
    '0',
    '7,432',
    '50',
    '2,084',
    '217',
    '221',
    '137',
    '3,902',
    '7,864',
    '0',
    '0',
    '0',
    '0',
    '281',
    '7',
    '375',
    '0',
    '471',
    '257',
    '2,490',
    '3,324',
    '184',
    '2,385',
    '412',
    '2,578',
    '1,063',
    '0',
    '1,282',
    '3,074',
    '7',
    '6',
    '3,396',
    '46',
    '0',
    '1,550',
    '11.0K',
    '644',
    '286',
    '2,145',
    '7,146',
    '2',
    '2,155',
    '1,942',
    '4,364',
    '2,762',
    '830',
    '2,361',
    '0',
    '1',
    '16.3K',
    '0',
    '4',
    '0',
    '0',
    '0',
    '0',
    '1',
    '11',
    '174',
    '107',
    '287',
    '0',
    '2',
    '347',
    '973',
    '1,710',
    '1,782',
    '424',
    '0',
    '140',
    '657',
    '1,378',
    '862',
    '2,769',
    '179',
    '104',
    '2,011',
    '0',
    '1,028',
    '23',
    '515',
    '13',
    '18',
    '16',
    '1',
    '11',
    '0',
    '101',
    '80',
    '873',
    '9',
    '0',
    '0',
    '257',
    '0',
    '0',
    '487',
    '6',
    '185',
    '0',
    '1,565',
    '225',
    '316',
    '968',
    '766',
    '0',
    '221',
    '2,116',
    '0',
    '432',
    '509',
    '1,996',
    '0',
    '0',
    '1,806',
    '5',
    '0',
    '0',
    '26',
    '0',
    '9',
    '2',
    '15',
    '203',
    '211',
    '234',
    '35',
    '210',
    '2,064',
    '26',
    '0',
    '0',
    '0',
    '1,890',
    '0',
    '212',
    '434',
    '1',
    '5,465',
    '203',
    '1,020',
    '44',
    '0',
    '0',
    '75',
];
let kc = [];
let total = 0;
for (let diamond of diamonds) {
    diamond = diamond.replace(/[,K]/i, '');

    if (diamond.match(/\./i)) {
        diamond *= 1000;
    }

    kc.push(diamond);
    total += Number(diamond);
}

console.log(total);
