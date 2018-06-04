/*
Pig latin is created by taking all the consonants before the first vowel of a
word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"

If the first letter of the word is a vowel, the string is left the same and the
letters "way" are appended to the end.

"algorithm" => "algorithmway"

This problem is different from other variations in that it expects casing to
remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"

Your job is to take a string and translate it to Pig Latin. The string will
never be undefined but may contain both numbers and letters. A word will never
be a combination of numbers and letters. Also, there will never be punctuation
at the beginning of a word and the only capital letter in a word will be the
first letter meaning there are zero all capitalized words.
*/
function translate(sentence) {
	const consonants = 'bcdfghjklmnpqrstvwxyz';
  const letters = consonants + 'aeiou';
  var translation = [];
  sentence = sentence.split(' ');
  for (var word of sentence) {
    if (word[0].parseInt) {
      continue;
    } //ensures that we skip numbers
    var punc = [];
    var cluster = [];
    word = word.split('');
    while (!letters.includes(word[word.length-1].toLowerCase())) {//cuts off punctuation from the end
      punc.unshift(word.pop());
    }
    while (consonants.includes(word[0].toLowerCase())) {//cuts off consonants from the beginning
      cluster.push(word.shift());
    }
    if (cluster.length > 0) {
      if (cluster[0] == cluster[0].toUpperCase()) {
        cluster[0] = cluster[0].toLowerCase();
        word[0] = word[0].toUpperCase();
      }
      Array.prototype.push.apply(word, cluster);//reattach consonants at the end
      word.push('a','y');
    } else {
      word.push('w','a','y');
    }
    Array.prototype.push.apply(word, punc);//reattach punctuation
    translation.push(word.join(''));
  }
  return translation.join(' ');
};
