const findVowels = require('./index');

test('Vowels is a function', () => {
  expect(typeof findVowels).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(findVowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(findVowels('AEIOU')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(findVowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(findVowels('bcdfghjkl')).toEqual(0);
});