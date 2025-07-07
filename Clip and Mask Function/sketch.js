let img;

function preload() {
  img = loadImage('assets/clip.png'); 
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#c5c0a5');
  
  image(img, 0, 0); 
  
  strokeWeight(1);
  let mask1 = createGraphics(400,400);
    ctx1 = mask1.canvas.getContext("2d");
      mask1.rect(123,171,156, 120);
      mask1.ellipse(201, 166, 155, 120); 
      mask1.noStroke();
      mask1.beginShape(); 
        mask1.vertex(124, 281);
        mask1.vertex(279, 280); 
        mask1.vertex(400, 378);
        mask1.vertex(400, 400);
        mask1.vertex(20, 400); 
      mask1.endShape(CLOSE); 
    ctx1.clip();
  
    mask1.image(img,0,0);
    img.mask(mask1);
}