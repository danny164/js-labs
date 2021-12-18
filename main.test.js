// const sum = require('./main');
import { sum, multiply } from './main';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('multiply 2 * 5 to equal 10', () => {
    expect(multiply(2, 5)).toBe(10);
});

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

// https://jestjs.io/docs/setup-teardown
// https://jestjs.io/docs/using-matchers

