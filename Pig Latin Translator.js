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
