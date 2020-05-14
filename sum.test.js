const sum = require('./sum');

test('adds two numbers together correctly', () => {
    expect(sum(1, 2)).toBe(3);
});