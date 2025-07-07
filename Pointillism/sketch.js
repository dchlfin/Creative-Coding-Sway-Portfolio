let img; 
let cg; 
let frames = 60*5; 

function setup() {
  createCanvas(400,400); 
  img = loadImage('assets/pixeldata.png')
  
  cg = createGraphics(width, height);
  
}

function draw() {
  //image(img, 0, 0);
  img.loadPixels();
  
  let x1 = random(img.width);
  let y1 = random(img.height); 
  let c = img.get(x1,y1);
  
  cg.noStroke();
  cg.fill(c);
  cg.ellipse(x1,y1,10,10); 
  image(cg,0,0,width,height);
  
}