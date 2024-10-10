//task1

const checkLength = (text, maxLength) => {
  return text.length <= maxLength;
}
console.log(checkLength('abcdefjh', 20))

//task 1.1
const checkLength = (text, maxLength) => text.length <= maxLength;

//task2

function palindrome(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  return string === [...string].reverse().join('');
}

console.log( palindrome('') );
