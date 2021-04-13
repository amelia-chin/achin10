/*
Team Eggs and Bagels (Amelia Chin, Ari Schechter)
SoftDev
K21 -- Get Scripty (exploration into JavaScript)
2021-04-05

Notes:
use console.log() to see the results of multiple function calls
*/

// factI(n) returns factorial of n, computed iteratively.
var factI = function(n) {
	var sum = n;
	for(var i = 1; i < n; i++) {
		sum *= i;
	}
	return sum;
}

console.log(factI(1) + " sb 1")
console.log(factI(2) + " sb 2")
console.log(factI(3) + " sb 6")
console.log(factI(4) + " sb 24")
console.log(factI(5) + " sb 120")

// factR(n) returns factorial of n, computed recursively.
var factR = function(n) {
  if(n <= 1)
    return 1;
  else
    return n * factR(n-1);
}

console.log(factR(1) + " sb 1")
console.log(factR(2) + " sb 2")
console.log(factR(3) + " sb 6")
console.log(factR(4) + " sb 24")
console.log(factR(5) + " sb 120")

// fibI(n) returns the nth Fibonacci number, computed iteratively.
var fibI = function(n) {
  // rep last two elements of current Fib seq
  var a = 0;
  var b = 0;
  var last = 1; // next num in seq
  if (n == 0)
    return n;
  for(i = 1; i <= n; i++) {
    a = b;
    b = last;
    last = a + b;
  }
  return b;
}

console.log(fibI(0) + " sb 0")
console.log(fibI(1) + " sb 1")
console.log(fibI(2) + " sb 1")
console.log(fibI(3) + " sb 2")
console.log(fibI(4) + " sb 3")

// fibR(n) returns the nth Fibonacci number, computed recursively.
var fibR = function(n) {
  if(n <= 1)
    return n;
  else
    return fibR(n - 1) + fibR(n - 2)
}

console.log(fibR(0) + " sb 0")
console.log(fibR(1) + " sb 1")
console.log(fibR(2) + " sb 1")
console.log(fibR(3) + " sb 2")
console.log(fibR(4) + " sb 3")
