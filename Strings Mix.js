/*
Given two strings s1 and s2, we want to visualize how different the two strings
are. We will only take into account the lowercase letters (a to z). First let
us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from
s2. In the following we will not consider letters when the maximum of their
occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string:
"1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the
maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb
because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2
appears as many times as its maximum if this maximum is strictly greater than 1;
these letters will be prefixed by the number of the string where they appear
with their maximum value and :. If the maximum is in s1 as well as in s2 the
prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it
contains the prefix) will be in decreasing order of their length and when they
have the same length sorted in ascending lexicographic order (letters and
digits - more precisely sorted by codepoint); the different groups will be
separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

function mix(s1, s2) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  function letterCount(string, letterList) { //creates a hash of lowercase letter counts
    var hashOut = {};
    for (let letter of letterList) {
      hashOut[letter] = '';
    }
    for (let char of string) {
      if (letterList.includes(char)) {
        hashOut[char] += char;
      }
    }
    return hashOut;
  }
  var dict1 = letterCount(s1, alpha);
  var dict2 = letterCount(s2, alpha);
  var substrings = [];
  for (let char of alpha) { //determine if there are enough of a letter and adds substring to output
    if (dict1[char].length > 1 || dict2[char].length > 1) {
      if (dict1[char].length > dict2[char].length) {
        substrings.push('1:' + dict1[char]);
      } else if (dict1[char].length < dict2[char].length) {
        substrings.push('2:' + dict2[char]);
      } else {
        substrings.push('=:' + dict1[char]);
      }
    }
  }
  substrings.sort((a,b) => b.length - a.length)
  var output = [];
  var temp = [substrings[0]];
  for (i = 1; i < substrings.length; i++) { //divides substrings in length-delineated blocks for sorting
    if (substrings[i-1].length == substrings[i].length) {
      temp.push(substrings[i]);
    } else {
      output.push(temp.sort());
      console.log(output);
      temp = [substrings[i]];
    }
  }
  output.push(temp.sort());
  return output.join(',').split(',').join('/');
}
