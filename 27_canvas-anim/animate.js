// Team Just Me (Amelia Chin)
// SoftDev pd0
// K27 -- Guarding Against Burnout // canvas based JS animation
// 2021-05-11

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");
var dvdButton = document.getElementById("buttonDVD");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "#fadadd";

var requestID;

//var clear = function(e) {
var clear = (e) => {
  e.preventDefault();
  ctx.clearRect(0, 0, c.width, c.height);
};

var radius = 0;
var growing = true;

//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")

  window.cancelAnimationFrame(requestID);

  ctx.clearRect(0, 0, c.width, c.height);

  if (growing) {
    radius += 1;
  }
  else {
    radius -= 1;
  }

  if (radius == (c.width / 2))
    growing = false;
  else if (radius == 0) {
    growing = true;
  }

  //draw the dot
  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  requestID = window.requestAnimationFrame(drawDot);
};

// getting the dvd image for the logo
var logo = new Image();
logo.src = "logo_dvd.jpg";

// starting coordinates of dvd logo
var x = 250;
var y = 250;
// direction of movement
var dx = 1;
var dy = 1;

//var drawDVD = function() {
var drawDVD = () => {
  console.log("drawDVD invoked...")

  window.cancelAnimationFrame(requestID);

  ctx.clearRect(0, 0, c.width, c.height);

  ctx.drawImage(logo, x, y, 200, 100);

  // if hits the left and right walls, change to opposite dir
  // x + 200 is the xcoord + width of logo
  // left wall hit when xcoord is less than/equal to 0
  // right wall hit when xcoord + width is greater than/equal to width of canvas
  if (x <= 0 || (x + 200) >= c.width) {
    dx *= -1;
  }
  // if hits top and bottom walls, change to opposite dir
  // y + 100 is the ycoord + height of logo
  // top wall hit when ycoord is less than/equal to 0
  // bottom wall hit when ycoord + height is greater than/equal to height of canvas
  if (y <= 0 || (y + 100) >= c.height) {
    dy *= -1;
  }

  x += dx;
  y += dy;

  requestID = window.requestAnimationFrame(drawDVD);
};

//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log(requestID);
  window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
dvdButton.addEventListener("click", drawDVD);
