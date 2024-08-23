let string = 'INDIA';
let arr = string.split('');
arr.splice(0, 5, 'I', 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A');
let newString = arr.join('');
console.log('Replaced String:', newString);