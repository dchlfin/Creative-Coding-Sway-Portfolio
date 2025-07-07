let cols;
let rows;
let size = 50;
let board = [];
let food;
let head;
let dir;
let length = 1;
let gameOver = false;

function setup() {
  createCanvas(400, 400);
  frameRate(5);

  cols = width / size;
  rows = height / size;

  for (let i = 0; i < cols; i++) {
    board[i] = [];
    for (let j = 0; j < rows; j++) {
      board[i][j] = 0;
    }
  }

  food = createVector(int(random(0, cols)), int(random(0, rows)));
  head = createVector(int(random(0, cols)), int(random(0, rows)));
  dir = createVector(0, 0);
}

function draw() {
  background(220);
  update();
  displayBoard();
  board[food.x][food.y] = -1;

  if (gameOver == true) {
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(50);
    text("GAME OVER", width / 2, height / 2);
  }
}

function displayBoard() {
  colorMode(HSB, 360, 100, 100); 
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (board[i][j] == 0) {
        fill(0,0, 100);
      } else if (board[i][j] == -1) {
        fill(0, 100, 100);
      } else {
        fill(60, 100, 100);
      }
      rect(i * size, j * size, size, size);
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    dir = createVector(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    dir = createVector(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    dir = createVector(0, 1);
  } else if (keyCode === UP_ARROW) {
    dir = createVector(0, -1);
  }
}

function update() {
  head.add(dir);

  if (dist(head.x, head.y, food.x, food.y) == 0) {
    length += 1;
    generateFood();
  }

  if (head.x < 0 || head.x > cols - 1 || head.y < 0 || head.y > rows - 1) {
    console.log("Game Over: Run Into Border");
    gameOver = true;
  } else if (board[head.x][head.y] > 1) {
    console.log("Game Over: Run Into Self");
    gameOver = true;
    dir.set(0, 0);
  } else {
    board[head.x][head.y] = 1 + length;
    removeTail();
  }
}

function generateFood() {
  while (true) {
    food = createVector(int(random(0, cols - 1)), int(random(0, rows - 1)));
    if (board[food.x][food.y] == 0) {
      break;
    }
  }
}

function removeTail() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (board[i][j] > 0) {
        board[i][j] -= 1;
      }
    }
  }
}

function displayText(x, y) {
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(10);
  text(board[x][y], x * size + size / 2, y * size + size / 2);
}


