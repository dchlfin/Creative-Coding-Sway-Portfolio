let cols; let rows; // stores the grid dimensions
let csize = 4; // width of each rectangle 
let rsize = 5; // height of each rectangle

let img; // stores the image 
let rects = []; // define rects as empty array 

function preload() {
  img = loadImage("images/bathspa.png"); // loads the image prior to setup()
}

function setup() {
  createCanvas(800, 200);
  cols = width/csize; // caclulates number of columns
  rows = height/rsize; // calculates number of rows
  let bright; // stores the result of the conditional (brightness(c) == 0) 
  for (let i=0; i<cols; i++) { // creates columns
    rects[i] = []; // initalize a new column array
    for (let j=0; j<rows; j++) { // creates rows
      let c = img.get(i*csize, j*rsize); // gets the color value of the pixel at (x,y)
      if (brightness(c) == 0) { // check if the pixel is black
        bright = true; // stores 'true' in 'bright' indicating the rectangle is black
      } else {
        bright = false; // stores 'false' in 'bright' indicating the rectangle is white
      }
      rects[i][j] = new Rect(i*csize, j*rsize, bright); // creates a rectangle at respective coordinates with color based on 'bright'
    }
  }
}

function draw() {
  background(220);
  // image(img, 0, 0);
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      rects[i][j].display(); // draws each rectangle
    }
  }
  
}
