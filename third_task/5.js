function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

let sentence = 'hello world';
let correctedSentence = correctfn(sentence, 'code', 'wala');
console.log('Corrected Sentence:', correctedSentence);