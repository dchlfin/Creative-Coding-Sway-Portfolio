var music, waves, fftM, fftW;

function preload() {
  music = loadSound("assets/amore mio aiutami.mp3");
  waves = loadSound("assets/waves.mp3");
  img = loadImage("assets/av-bg.png");
}

function setup() {
  createCanvas(600, 400);
  background(0);
  fftM = new p5.FFT();
  fftM.setInput(music);

  fftW = new p5.FFT();
  fftW.setInput(waves);

  music.setVolume(1);
  music.play();
  waves.setVolume(0.2);
  waves.play();
}

function draw() {
  background(img);

  var spectrumW = fftW.analyze();
  noStroke();
  fill("#1c2833");
  for (var j = 0; j < spectrumW.length; j++) {
    var x1 = map(j, 0, spectrumW.length, 0, width);
    var h1 = map(spectrumW[j], 0, 400, 0, height);
    rect(x1, height - h1, width / spectrumW.length, h1);
  }

  var spectrumM = fftM.analyze();
  noStroke();
  fill("#3e576e");
  for (var i = 0; i < spectrumM.length; i++) {
    var x = map(i, 0, spectrumM.length, 0, width);
    var h = map(spectrumM[i], 0, 255, 0, height);
    rect(x, height - h, width / spectrumM.length, h);
  }

  fill("#f9f4de");
  stroke("#f9f4de");
  textFont("Pinyon Script");
  textSize(42);
  text("Amore Mio Aiutami", 248, 312);

  textFont("Poppins");
  textSize(15);
  text("PIERO PICCIONI", 449, 340);

  line(248, 339, 440, 339);
  
  let stopSound = !music.isPlaying();

  if (stopSound) {
    waves.stop();
  }
}