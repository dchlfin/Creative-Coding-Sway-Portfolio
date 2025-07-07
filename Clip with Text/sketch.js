let img;

function preload() {
  img = loadImage('assets/text-mask-bg.png'); 
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(img);
  mask3 = createGraphics(width,height);
  mask3.fill('#21324e'); 
  mask3.rect(0,0,400); 
  mask3.erase(); 
  mask3.textSize(40);
  mask3.textFont("Pinyon Script");
  mask3.text('Bath Spa University',50,200);
  
  mask3.textSize(16);
  mask3.textStyle(BOLD);
  mask3.textFont("Alegreya");
  mask3.text('Creative Computing',125,230); 
    mask3.noErase();
  image(mask3,0,0); 
}