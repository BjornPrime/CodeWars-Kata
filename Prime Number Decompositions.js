/*
You have to code a function getAllPrimeFactors which takes an integer as
parameter and return an array containing its prime decomposition by ascending
factors, if a factors appears multiple time in the decomposition it should
appear as many time in the array.

example: getAllPrimeFactors(100) returns [2,2,5,5] in this order.

This decomposition may not be the most practical.

You should also write getUniquePrimeFactorsWithCount, a function which will
return an array containing two arrays: one with prime numbers appearing in the
decomposition and the other containing their respective power.

exemple: getUniquePrimeFactorsWithCount(100) returns [[2,5],[2,2]]

You should also write getUniquePrimeFactorsWithProducts an array containing the
prime factors to their respective powers.

exemple: getUniquePrimeFactorsWithProducts(100) returns [4,25]

Errors, if:

n is not a number
n not an integer
n is negative or 0
The three functions should respectively return [], [[],[]] and [].

Edge cases:

if n=0, the function should respectively return [], [[],[]] and [].
if n=1, the function should respectively return [1], [[1],[1]], [1].
if n=2, the function should respectively return [2], [[2],[1]], [2].

The result for n=2 is normal. The result for n=1 is arbitrary and has been
chosen to return a usefull result. The result for n=0 is also arbitrary but can
not be chosen to be both usefull and intuitive. ([[0],[0]] would be meaningful
but won't work for general use of decomposition, [[0],[1]] would work but is
not intuitive.)
*/
function getAllPrimeFactors(n) {
  if (n <= 0 || n != Number.parseInt(n)) { //to catch non-postive integer values
    n = 0;
  }
  var i = 2;
  var factors = [];
  while (i <= Math.sqrt(n)) {
    if (n % i == 0) {
      factors.push(i);
      n /= i;
      i = 1;
    }
    i++;
  }
  if (n != 0) {
    factors.push(n);
  }
  return factors.sort((a,b) => a-b);
}

function getUniquePrimeFactorsWithCount(n) {
  var factors = getAllPrimeFactors(n);
  var factorList = [];
  var factorCount = [];
  for (var i = 0; i < factors.length; i++) {
    factorList.push(factors[i]);
    var j = factors.lastIndexOf(factors[i]);
    factorCount.push(j-i+1);
    i = j;
  }
  return [factorList, factorCount];
}

function getUniquePrimeFactorsWithProducts(n) {
  var factorCount = getUniquePrimeFactorsWithCount(n);
  var factors = factorCount[0];
  var counts = factorCount[1];
  var products = [];
  for (var i = 0; i < factors.length; i++) {
    products.push(Math.pow(factors[i],counts[i]));
  }
  return products;
}
