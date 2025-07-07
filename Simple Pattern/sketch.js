var circleSize = 100; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#3b3935')
  strokeWeight(0); 
  translate(circleSize/2, circleSize/2);
  for(var x = 0; x < width; x += circleSize) {
  for(var y = 0; y < height; y += circleSize) {
  fill('#f9f2d3'); 
    ellipse(x, y, circleSize * 1.2, circleSize * 1.2); 
  fill('#3b3935'); 
    ellipse(x, y, circleSize * 0.8, circleSize * 0.8); 
  fill('#f9f2d3'); 
    ellipse(x, y, circleSize * 0.3, circleSize * 0.3); 
    }
  }
}