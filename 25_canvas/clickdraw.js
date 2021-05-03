// Team Canvas Pigeons (Amelia Chin, Victoria Gao)
// SoftDev pd0
// K25 -- I See a Red Door... // canvas based JS drawing
// 2021-05-03

/*
e.preventDefault(); - ensures that it will only run draw(e) if the user clicks within the canvas
ctx.beginPath(); - sets pen down to start drawing a new path
e.offsetX - x-coord of mouse location (since there's no padding around canvas)
e.offsetY - y-coord of mouse location
*/

//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init global state var
var mode = "rect";


//var toggleMode = function(e) {
var toggleMode = () => {
  console.log("toggling...");

  if(mode == "rect") {
    mode = "dot";
    document.getElementById("toggle").textContent = "Rectangle";
    console.log("changed to dot")
  } else {
    mode = "rect";
    document.getElementById("toggle").textContent = "Dot";
    console.log("changed to rectangle")
  }
}


//var drawRect = function(e) {
var drawRect = (e) => {
  console.log("drawing rectangle...");
  // to capture coords of mouseclick
  var x = e.offsetX;
  var y = e.offsetY;
  console.log("mouse xy:");
  console.log("(" + x + ", " + y + ")");
  // and draw a rectangle there
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x+5, y);
  ctx.lineTo(x+5, y-10);
  ctx.lineTo(x, y-10);
  ctx.lineTo(x, y);
  ctx.fill();
}


//var drawCircle = function(e) {
var drawCircle = (e) => {
  console.log("drawing circle...");
  // to capture coords of mouseclick
  var x = e.offsetX;
  var y = e.offsetY;
  console.log("mouse xy:");
  console.log("(" + x + ", " + y + ")");
  // and draw a circle there
  ctx.beginPath();
  // ctx.arc(x-coord of center, y-coord of center, radius, start angle, end angle)
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fill();
}


//var draw = function(e) {
var draw = (e) => {
  console.log("draw")
  // ... to condtionally draw rect or circle
  ctx.beginPath();
  if(mode == "rect") {
    drawRect(e);
  } else {
    drawCircle(e);
  }
}


//var wipeCanvas = function() {
var wipeCanvas = () => {
  console.log("wiping canvas...")
  ctx.clearRect(0, 0, 600, 600);
  console.log("ET VIOLA.  eh?")
}


// ...to add an event listener to the canvas, and call the appropriate fxn
//event = new MouseEvent("onclick");
c.addEventListener("click",function(){
  draw(event);
  event.preventDefault();
});

// ...to add an event listener to the toggle button, and call the appropriate fxn
var toggleBtn = document.getElementById("toggle");
toggleBtn.addEventListener("click", function(){toggleMode()});

// ...to add an event listener to the clear button, and call the appropriate fxn
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function(){wipeCanvas()});
