function SumOfDigits(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
  }
  return num;
}
console.log('Repeated Sum of Digits:', SumOfDigits(456));