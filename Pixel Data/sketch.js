let img; 

function preload() {
  img = loadImage('/assets/pixeldata.png');
}

function setup() {
  createCanvas(400,400);

  image(img, 0, 0); 
  
  let c = img.get(320,224);
  
  fill(c);
  noStroke();
  
  circle(134,201,130);
}