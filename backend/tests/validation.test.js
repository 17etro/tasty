const validate = require('../utils/validation/validation');

test('check whether should email have @ sign', () => {
    const email = 'artem.gmail.com';
    const condition = validate(email, {"isEmail":"required"});
    expect(condition).not.toBe(true);
});

test('check whether can email contain emojis', () => {
    const email = 'artem😆.gmail.com';
    const condition = validate(email, {"isEmail":"required"});
    expect(condition).not.toBe(true);
});

test('check whether can email contain Cyrillic symbols', () => {
    const email = 'Артемон@gmail.com';
    const condition = validate(email, {"isEmail":"required"});
    expect(condition).not.toBe(true);
});