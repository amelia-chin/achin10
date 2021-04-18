// Team MAtChA 2.0 (Maddy Andersen, Amelia Chin)
// SoftDev pd1
// K23 -- Basic functions in JavaScript
// 2021-04-18
// --------------------------------------------------

// from Amelia's team
// factI(n) returns factorial of n, computed iteratively.
var factI = function(n) {
	var ans = n;
	for(var i = 1; i < n; i++) {
		ans *= i;
	}
	return ans;
}

// from Maddy's team
// factR(n) returns factorial of n, computed recursively.
var factR = (n) => {
  if (n == 0){
    return 1;
  }
  return n * factR(n-1);
};

// from Maddy's team
// fibI(n) returns the nth Fibonacci number, computed iteratively.
var fibI = (n) => {
  var last = 1;
  var now = 1;
  for (i = 3; i <= n; i++){
    var temp = now;
    now = now + last;
    last = temp;
  }
  return now;
};

// from Amelia's team
// fibR(n) returns the nth Fibonacci number, computed recursively.
var fibR = function(n) {
  if(n <= 1)
    return n;
  else
    return fibR(n - 1) + fibR(n - 2)
}


//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.
var gcd = (a, b) => {
  if(a > b) // assigning num to the smaller argument
    var num = b;
  else {
    num = a;
  }

  for(i = num; i >= 1; i--){
    if((a % i == 0) && (b % i == 0)) // checking if both are divisible by i
      return i;
  }
}

console.log(gcd(2, 4) + " (sb 2)")
console.log(gcd(45, 36) + " (sb 9)")
console.log(gcd(13, 14) + " (sb 1)")

//Develop, then implement randomStudent(), which returns a randomly selected name from a list.
//You may want to create helper functions or external list variables here.
var students = new Array("Maddy", "Amelia", "Mr. Mykolyk", "Hanabi", "Bob");
var randomStudent = () => {
  var num = Math.floor((Math.random() * students.length)); // random int bw 0-4
  return students[num];
}

// sb either "Maddy", "Amelia", "Mr. Mykolyk", "Hanabi", or "Bob"
console.log(randomStudent())
console.log(randomStudent())
console.log(randomStudent())
console.log(randomStudent())
