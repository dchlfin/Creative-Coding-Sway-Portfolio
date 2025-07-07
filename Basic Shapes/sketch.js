function setup() {
  createCanvas(400, 400);
}
  function draw() {
  background('white');
  
  beginShape(TRIANGLES);
    
    stroke(160,82,45);
    fill(210,180,140);
    vertex(115,225);
    vertex(200,380);
    vertex(275,225);

    
  endShape();
    
    fill(160,82,45);
    ellipse(195,225,160,40);
    
    fill(107,57,20);
    ellipse(195,225,155,35);
    
    fill(113,54,0);
    ellipse(195,135,100,100);
    
    fill("beige");
    ellipse(150,190,100,100);
    
    fill("pink");
    ellipse(240,190,100,100);
}


