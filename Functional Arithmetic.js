/*
This time we want to write calculations using functions and get the results.

Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations:
plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function
represents the right operand
*/

function zero(operation) {
  const number = 0;
  if (operation === undefined) {
    return number;
  } else {
  switch (operation[0]) {
    case '+':
    return number + operation[1];
    case '-':
    return number - operation[1];
    case '*':
    return number * operation[1];
    case '/':
    return number / operation[1];
    }
  }
}
function one(operation) {
  const number = 1;
  if (operation === undefined) {
    return number;
  } else {
  switch (operation[0]) {
    case '+':
    return number + operation[1];
    case '-':
    return number - operation[1];
    case '*':
    return number * operation[1];
    case '/':
    return number / operation[1];
    }
  }
}
function two(operation) {
  const number = 2;
  if (operation === undefined) {
    return number;
  } else {
  switch (operation[0]) {
    case '+':
    return number + operation[1];
    case '-':
    return number - operation[1];
    case '*':
    return number * operation[1];
    case '/':
    return number / operation[1];
    }
  }
}
function three(operation) {
  const number = 3;
  if (operation === undefined) {
    return number;
  } else {
  switch (operation[0]) {
    case '+':
    return number + operation[1];
    case '-':
    return number - operation[1];
    case '*':
    return number * operation[1];
    case '/':
    return number / operation[1];
    }
  }
}
function four(operation) {
  const number = 4;
  if (operation === undefined) {
    return number;
  } else {
  switch (operation[0]) {
    case '+':
    return number + operation[1];
    case '-':
    return number - operation[1];
    case '*':
    return number * operation[1];
    case '/':
    return number / operation[1];
    }
  }
}
function five(operation) {
  const number = 5;
  if (operation === undefined) {
    return number;
  } else {
  switch (operation[0]) {
    case '+':
    return number + operation[1];
    case '-':
    return number - operation[1];
    case '*':
    return number * operation[1];
    case '/':
    return number / operation[1];
    }
  }
}
function six(operation) {
  const number = 6;
  if (operation === undefined) {
    return number;
  } else {
  switch (operation[0]) {
    case '+':
    return number + operation[1];
    case '-':
    return number - operation[1];
    case '*':
    return number * operation[1];
    case '/':
    return number / operation[1];
    }
  }
}
function seven(operation) {
  const number = 7;
  if (operation === undefined) {
    return number;
  } else {
  switch (operation[0]) {
    case '+':
    return number + operation[1];
    case '-':
    return number - operation[1];
    case '*':
    return number * operation[1];
    case '/':
    return number / operation[1];
    }
  }
}
function eight(operation) {
  const number = 8;
  if (operation === undefined) {
    return number;
  } else {
  switch (operation[0]) {
    case '+':
    return number + operation[1];
    case '-':
    return number - operation[1];
    case '*':
    return number * operation[1];
    case '/':
    return number / operation[1];
    }
  }
}
function nine(operation) {
  const number = 9;
  if (operation === undefined) {
    return number;
  } else {
  switch (operation[0]) {
    case '+':
    return number + operation[1];
    case '-':
    return number - operation[1];
    case '*':
    return number * operation[1];
    case '/':
    return number / operation[1];
    }
  }
}

function plus(operand) {
  return ['+', operand];
}
function minus(operand) {
  return ['-', operand];
}
function times(operand) {
  return ['*', operand];
}
function dividedBy(operand) {
  return ['/', operand];
}
