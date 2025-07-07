function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
}

function draw() {
  background('#faf2d0');
  
  //body
  rect(175, 320, 50, 100);
  arc(200, 460, 200, 200, PI, radians(360));
  
  //alien head
  translate(0, -100);
  fill(200);
  bezier(200, 450, -250, 5, 650, 5, 200, 450);
  
  resetMatrix(); 
  //right eye
    //eye border
    fill(200);
    translate(280, 190);
    rotate(45);
    //ellipse(0, 0, 90, 155);
    arc(0, 0, 90, 155, radians(230), radians(30));

    //iris 
    fill('white')
    ellipse(0, 0, 70, 130);

    //pupil
    fill('black');
    circle(0,0,10);
  
  resetMatrix(); 
  
  //left eye
    //eye border
    fill(200); 
    translate(120, 190);
    rotate(-45); 
    //ellipse(0, 0, 90, 155); 
    arc(0, 0, 90, 155, radians(150), radians(320));
  
    //iris 
    fill('white')
    ellipse(0, 0, 70, 130);
  
    //pupil
      fill('black');
      circle(0,0,10);
  
    //eyelid
      fill(200);

  
  resetMatrix();
  
  //right eyelid
  beginShape();
    curveVertex(233,185);
    curveVertex(233,185);
    curveVertex(247,172);
    curveVertex(260,162);
    curveVertex(285,149);
    curveVertex(310,145);
    curveVertex(322,148);
    curveVertex(326,149);
    curveVertex(337,157);
    curveVertex(337,165);
    curveVertex(337,165);
    curveVertex(337,175);
    curveVertex(335,181);
    curveVertex(334,185);
    curveVertex(333,185);
  endShape();
  line(235,185,333,185);
  
  //left eyelid
  beginShape();
    curveVertex(67, 185);
    curveVertex(67, 185);
    curveVertex(62, 169);
    curveVertex(65, 155); 
    curveVertex(68, 154);
    curveVertex(71, 149);
    curveVertex(75, 147);
    curveVertex(83, 145);
    curveVertex(92, 145);
    curveVertex(109, 148);
    curveVertex(127, 155);
    curveVertex(127, 155);
    curveVertex(140, 162);
    curveVertex(140, 162);
    curveVertex(160, 177);
    curveVertex(160, 177);
    curveVertex(167, 185);
    curveVertex(167, 185);
  endShape();
  line(67,185,167,185);
  
  //mouth
  arc(185, 300, 100, 20, radians(180), radians(195));
  arc(190, 302, 100, 20, radians(80), radians(180));
  line(136, 302, 225, 300); 
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('Alien.png'); 
  }
}

