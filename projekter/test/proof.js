function preload() {
  lokke = loadSound('olsen.mp3');

}

function setup() {
  createCanvas(300, 450);
}

function draw() {
  background(0, 0, 255);

  textSize(30);
  text('KLIK MIG', 150, 225);

  press();

}

function press() {
  if (mouseIsPressed) {
    lokke.play();
  }
}
