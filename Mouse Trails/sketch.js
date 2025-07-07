let trails = []; 
let size = 60; 
let img; 
let twinkleMask 

function preload() {
  img = loadImage('assets/twinkle-mask-bg.png');
}

function setup() {
  createCanvas(400,400); 
  noStroke(); 
  twinkleMask = createGraphics(400,400); 
}

function draw() {
  
  trails.push(createVector(mouseX,mouseY)); 
  
  if (trails.length > 30) {
    trails.shift(); 
  }
  
  for (let i = 0; i < trails.length; i++) {
    let pos = trails[i]; 
    
    twinkle(pos.x, pos.y, 1/2); 
  }
  
  img.mask(twinkleMask); 
  image(img, 0, 0); 
}

function twinkle(x,y) {
  twinkleMask.beginShape(); 
    twinkleMask.vertex(x + size * 0.7, y); 
    twinkleMask.quadraticVertex(x, y, x, y - size * 0.7); 
    twinkleMask.quadraticVertex(x, y, x - size * 0.7, y); 
    twinkleMask.quadraticVertex(x, y, x, y + size * 0.7); 
    twinkleMask.quadraticVertex(x, y, x + size * 0.7, y); 
  twinkleMask.endShape(); 
}
