// Team Canvas Pigeons (Amelia Chin, Victoria Gao)
// SoftDev pd0
// K26 -- They lock us in the tower whenever we get caught // canvas based JS animation
// 2021-05-05


// model for HTML5 canvas-based animation

// SKEELTON


//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "#87ceeb";

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, 500, 500);
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")
  /*
    ...to
    Wipe the canvas,
    Repaint the circle,

    ...and somewhere (where/when is the right time?)
    Update requestID to propagate the animation.
    You will need
    window.cancelAnimationFrame()
    window.requestAnimationFrame()

   */
  ctx.clearRect(0, 0, 500, 500);
  if(radius < 250 && growing == true) {
    ctx.beginPath();
    // ctx.arc(x-coord of center, y-coord of center, radius, start angle, end angle)
    ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    ctx.fill();
    radius += 5;
  }
  if(radius == 250) {
    growing = false;
    window.cancelAnimationFrame(requestID);
  }
  if(radius > 0 && growing == false) {
    ctx.beginPath();
    // ctx.arc(x-coord of center, y-coord of center, radius, start angle, end angle)
    ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    ctx.fill();
    radius -= 5;
  }
  if(radius == 0) {
    growing = true;
    window.cancelAnimationFrame(requestID);
  }
  requestID = window.requestAnimationFrame(drawDot);
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  /*
    ...to
    Stop the animation

    You will need
    window.cancelAnimationFrame()
  */
  window.cancelAnimationFrame(requestID);
};


dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
