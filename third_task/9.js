function countWords(paragraph) {
  return paragraph.split(/\s+/).length;
}

let paragraph = 'This is a sample paragraph to count the number of words.';
console.log('Word Count:', countWords(paragraph));

function reverseString(str) {
  return str.split('').reverse().join('');
}

let inputStr = 'Hello';
console.log('Reversed String:', reverseString(inputStr));