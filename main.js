let xBola = 300;
let yBola = 200;
let dBola = 20;

let velXBola = 1;
let velYBola = 1;

function setup() {
  createCanvas(600, 400);
}
  
function draw() {
  background(30);
  circle(xBola, yBola, dBola);
  xBola += velXBola;
  yBola += velYBola;
  
  if (xBola >= width-10 || xBola <= 10) {  
    velXBola *= -1;
  }
  
  if (yBola >= height-10 || yBola <= 10) {  
    velYBola *= -1;
  }
}
