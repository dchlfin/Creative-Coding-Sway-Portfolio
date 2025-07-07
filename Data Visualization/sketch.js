var innerCircle = 30; 
var values = []; 
var data; 

function preload() {
  data = loadTable("data/data-visualization.csv"); 
}

function setup() {
  createCanvas(600,400); 
  noStroke(); 
  background('#030B20'); 
  colorMode(HSB, 360, 100, 100); 
  for(var i = 0; i < data.getRowCount(); i++) {
    for(var j = 0; j < data.getColumnCount(); j++) {
      values.push(data.getNum(i, j)); 
    }
  }
  
  noLoop(); 
}

function draw() {
  for (var i = 0; i < values.length; i++) {
    var n = values[i]; 
    var x = width/2; 
    var y = height/2; 
    var w = 1; 
    var h = -map(n, 0, max(values), 0, height/2 - innerCircle);
    var r = map(i, 0, values.length, 0, TWO_PI); 
    var c = map(n, 0, max(values), 210, 240); 
    fill(c, 70, 90); 
    push(); 
    translate(x, y); 
    rotate(r); 
    rect(0, -innerCircle, w, h); 
    pop(); 
  }
}


