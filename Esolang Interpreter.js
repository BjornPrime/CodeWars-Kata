/*
Implement a custom interpreter which accepts the following arguments:

code - Required. The Smallfuck program to be executed, passed in as a string.
       May contain non-command characters. Your interpreter should simply
       ignore any non-command characters.
tape - Required. The initial state of the data storage (tape), passed in as a
       string. For example, if the string "00101100" is passed in then it should
       translate to something of this form within your interpreter:
       [0, 0, 1, 0, 1, 1, 0, 0]. You may assume that all input strings for tape
       will be non-empty and will only contain "0"s and "1"s.
Your interpreter should return the final state of the data storage (tape) as a
       string in the same format that it was passed in. For example, if the
       tape in your interpreter ends up being [1, 1, 1, 1, 1] then return the
       string "11111".

NOTE: The pointer of the interpreter always starts from the first (leftmost)
      cell of the tape.
*/

function interpreter(code, tape) {
  code = code.split('');
  tape = tape.split('');
  var cell = 0;

  for (i = 0; i <= code.length; i++) {
    switch (code[i]) {
      case '>':
        cell += 1;
        break;
      case '<':
        cell -= 1;
        break;
      case '*':
        console.log(1);
        if (tape[cell] == 1) {
        tape[cell] = 0;
        } else {tape[cell] = 1
        };
        break;
      case '[':
        if (tape[cell] == 0) {
          var j = 1;
          while (j > 0) {
            i += 1;
            code[i] == ']' ? j -= 1: code[i] == '[' ? j += 1: j = j; // finds matching bracket
          }
        }
        break;
      case ']':
        if (tape[cell] == 1) {
          var j = 1;
          while (j > 0) {
            i -= 1;
            code[i] == '[' ? j -= 1: code[i] == ']' ? j += 1: j=j;
          }
        break;
      }
    }

    if (cell >= tape.length || cell < 0) {
      i = code.length + 1;
    }

  }
  return tape.join('');
}
