function vowelandconst(str) {
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0;
  let consonantCount = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantCount++;
    }
  }
  return { vowels: vowelCount, consonants: consonantCount };
}
let exampleStr = 'This is a sample Example for check the code';
console.log('Vowel and Consonant Count:', vowelandconst(exampleStr));