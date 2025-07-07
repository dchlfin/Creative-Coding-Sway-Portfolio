function preload() {
  img = loadImage('assets/pixeldata.png')
}

function setup() {
  createCanvas(400,400); 
}

function draw() {
  image(img, 0, 0);
  filter(POSTERIZE, 5, useWebGL=false);
}
