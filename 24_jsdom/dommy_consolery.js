// Team MAtChA 2.0 (Maddy Andersen, Amelia Chin)
// SoftDev pd1
// K24 -- Getting more comfortable with the dev console and the DOM
// 2021-04-18
// --------------------------------------------------

/*
  Notes:
    - As long as you stay in the same console, you can call previously typed functions
     / variables, even if you've typed new ones afterwards. For example, running o.argument
     returns 15, even if your last inputed function is factR.
*/

// send diagnostic output to console
// (Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO"); // prints AYO in console

// when run in console, first returns undefined
var i = "hello"; // if you call "i" --> returns "hello"
var j = 20; // if you call "j" --> returns 20


// assign an anonymous fxn to a var
var f = function(x) {
  // this local variable j is different than the global variable above
  // if you call "j", even after calling f(x), still returns 20
  var j=30;

  // returns 30 + x
  return j+x;
};

// instantiate an object
// running o returns {name: "Thluffy", age: 15, items: Array(4), morestuff: {…}, func: ƒ}
// running o.name returns "Thluffy"
// running o.'name' gives an Uncaught SyntaxError
var o = { 'name' : 'Thluffy',
          // running o.age returns 15
          age : 15,
          // running o.items returns (4) [10, 20, 30, 40] --> includes number of elements
          items : [10, 20, 30, 40],
          // morestuff is an object (can call o.morestuff.a --> returns 1)
          // running o.morestuff returns {a: 1, b: "ayo"}
          morestuff : {a : 1, b : 'ayo'},
          // running o.func returns the code for the function ƒ (x) { return x+30; }
          // running o.func(x) returns x+30
          func : function(x) {
            return x+30;
          }
        };

// returns n factorial iteratively
// (define fact (lambda (n) ...)
// running fact returns the code for the function (though the function is called f(n) instead of fact(n))
// f(n) signifies that fact(n) is a function
// running fact() returns 1 (prod?)
var fact = function(n) {
  var prod=1;
  // can leave out first part because n is already defined (as the argument)
  for ( ; n > 1 ; n--){
    prod = prod * n;
  }
  return prod;
};

// returns n factorial recursively
// (define fact (lambda (n) ...)
// running factR returns the code for the function (again, the function is called f(n))
// running factR() returns an Uncaught RangeError
var factR = function(n) {
  // base case
  if ( n<=1 ) {
    return 1;
  }
  // recursive step
  else {
    return n * factR(n-1);
  }
};

// adds list items with content text (the argument) to an existing list
// tested this function with strings, ints, and variables (o.name) as the argument --> all were successful
// adding items through the console does not change index.html permanently --> tested by opening index.html in a different tab
var addItem = function(text) {
  // refers to element named "thelist" in index.html
  var list = document.getElementById("thelist");
  // makes a new list item
  var newitem = document.createElement("li");
  // puts argument text into list item
  newitem.innerHTML = text;
  // addes new list item to exisiting list (in this case, thelist)
  list.appendChild(newitem);
};

// removes list item
// n refers to the index of the list item you want to remove
// again, these changes aren't permanent (tested again by opening index.html in a new tab)
// if you attempt to run removeItem with an argument greater than the max index, you will get an Uncaught TypeError
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

// adds 'red' to each list item's class
// when we run red(), item 0 and item 7, as well as the items we added using addItem, turned red
    // items 0 and 7 intitally were black (they have empty classes)
// items 1-6 initially stayed blue
// moving our mouse over the list of items (up and down) changes items 0-7 to the alternate color
    // items 0 and items 7 changed from red to blue
    // items 1-6 changed from blue to red
// items we added using addItem stayed red
// some items are momentarily green when you hover over them (was not impacted by red())
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};

// when we run stripe(), item 0 and the items we added with even indexes (which were red after running red()) stay red
// item 7 and the items we added with odd indexes (which were red after running red()) turn blue
// items 1-6 stay blue (they were blue after running red())
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    // if index is even
    if (i%2==0){
      items[i].classList.add('red'); // add "red" to the li element's class
    // if index if odd
    } else {
      items[i].classList.add('blue'); // add "blue" to the li element's class
    }
  }
};

// if you press the button...
  // first, "here comes e..." is printed in the console
  // then, the console returns a MouseEvent, with information about the size of the window, as well as a lt of other information about the click
  // then, "here comes 'this'..." is printed in the console
  // in this case, 'this' refers to the code for the button from index.html, which is printed on the next line

// if you instead call buttonCallback with an argument in the console...
  // first, "here comes e..." is printed in the console
  // then, whatever your argument was (can be an int, can be a string) is printed in the console
  // then, "here comes 'this'..." is printed in the console
  // finally, information about the window (?) is printed --> Window {window: Window, self: Window, document: document, name: "", location: Location, …}
var buttonCallback = function(e) {
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  console.log(this);
}

// defines a variable b that refers to the button (has the id of b)
// typing b in the console highlights the button on the page and shows the button's dimensions
// if you hit return after typing b, the console returns the code for the button from index.html
var b = document.getElementById('b');
// when you click the button, it calls buttonCallback
b.addEventListener('click', buttonCallback);

// when run in the console...
  // ---redCallback invoked--- is printed in the console
  // this is followed by information about the window (the same information as when this is called in buttonCallback)
  // we then get Uncaught TypeError: Cannot read property 'add' of undefined
var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this);
  this.classList.add('red');
}

// when you type the varaible thelist, the ordered list is highlighted, and information about the dimensions pops up
// when you press enter, you get the code for this ordered list (as seen in index.html)
var thelist = document.getElementById("thelist");

// when you call litems, you get HTMLCollection(10) [li.red.green.blue, li.red.green.blue, li.red.green.blue, li.red.green.blue, li.red.green.blue, li.red, li.red, li.red.green, li.red.green.blue, li.red.blue]
    // this includes information about the list items we added
var litems = thelist.children;

for(var i = 0; i < litems.length; i++) {
  // when you click on a list item, it calls the function redCallback
  // ---redCallback invoked---, as well as the html code for that list item, is printed in the console
  litems[i].addEventListener('click', redCallback);
  // when you move your mouse over the list items, user has moved into this:[object HTMLLIElement] is printed in the console
  // as you move over items, they change color (red, green, and blue in various orders and combinations depending on the list item's class)
  litems[i].addEventListener('mouseover', function(e){
    console.log("user has moved into this:" + this);
    this.classList.toggle('green');
  });
  // sometimes user has moved out of this:[object HTMLLIElement] is printed in the console
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this);
    this.classList.toggle('blue');
  });
}
