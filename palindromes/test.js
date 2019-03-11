const isPalindrome = require('./index');

test('palindrome function is defined', () => {
  expect(typeof isPalindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(isPalindrome('aba')).toBeTruthy();
});

test('"greetings" is not a palindrome', () => {
  expect(isPalindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(isPalindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(isPalindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(isPalindrome('pennep')).toBeTruthy();
});

test('"anita lava la tina" a palindrome', () => {
   expect(isPalindrome('anita lava la tina')).toBeTruthy();
 });
