class Rect {
  constructor(x, y, isBlack) {
    this.x = x; // stores the x-coord of this rectangle
    this.y = y; // stores the y-coord of this rectangle
    this.isBlack = isBlack; //stores whether this rectangle should be black  
    this.c = 0; // sets the initial color value to 0 for this rectangle
  }
  
  display() {
    strokeWeight(0.5);
    if (this.isBlack == true) { // checks if the rectangle is black
      this.c = 0;
    } 
    this.mouseHover(); // checks if the mouse is near this rectangle and updates it color
    fill(this.c); // sets fill color for this rectangle
    rect(this.x, this.y, csize, rsize); // create rectange at (x,y) with specified width and height
  }
  
  mouseHover() {
    let distance = dist(this.x, this.y, mouseX, mouseY); // calculates the distance between the mouse location and top left (x,y) of each rectangle
    if (distance < 50) {
      if (this.isBlack == true) {
        this.c = 255; // temporarily reveals hidden text by setting this rectangle to white
      }
    }
    
    if (this.c > 0) { // if color is not black (0), fade it back toward black
      this.c -= 10;  
    }
  }
}  