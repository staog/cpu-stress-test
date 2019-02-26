// Declaring all variables

var canvas = document.getElementsByTagName('canvas')[0];
var c = canvas.getContext('2d');
var cw = 0;
var ch = canvas.height / 2;
var speedX = 2;
var speedY = 2;
var gravity = 0.95;
var partNumber = 10;
var allParts = [];

// Animating function

function animate() {
  // Reseting
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < partNumber; i++) {
    allParts.push(new Part())
  }
  allParts.forEach(function (e) {
    e.draw();
  })
}

  setInterval(function () {
    animate();
  }, 30);

  function Part() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = 5;
    this.speedX = Math.random() * 10 - 5;
    this.speedY = Math.random() * 10 - 5;
  }

Part.prototype.draw = function () {
  c.fillStyle = 'cadetblue';
  c.beginPath();
  this.x += this.speedX;
  this.y += this.speedY;
  c.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
  c.fill();
};

for (var i = 0; i < partNumber; i++) {
  allParts.push(new Part());
}

// c.fillStyle = 'tomato';
// c.fillRect(0, 0, cw, ch);

// c.strokeStyle = 'black';
// c.lineWidth = 2;
// c.strokeRect(100, 100, 100, 100);
// c.strokeRect(200, 200, 200, 200);
// c.strokeRect(300, 300, 300, 300);

// c.beginPath();
// c.moveTo(200, 200);
// c.lineTo(300, 300);
// c.strokeStyle = 'black';

// c.strokeStyle = 'black';
// c.beginPath();
// c.moveTo(100, 100);
// c.lineTo(200, 200);
// c.lineTo(300, 100);
// c.lineTo(100, 100);
// c.stroke();
// c.moveTo(400, 400);

// c.beginPath();
// c.fillStyle = 'cadetblue';
// c.arc(350, 350, 60, 0, Math.PI*2, true);
// // c.stroke();
// c.fill();

// c.beginPath();
// c.fillStyle = 'cadetblue';
// c.arc(350, 350, 60, 0, deg(120), true);
// c.lineTo(350, 350);
// c.fill();

// function deg(deg) {
//   return deg / (180 / Math.PI);
// }

// c.beginPath();
// c.fillStyle = 'cadetblue';
// c.arc(150, 150, 60, 0, deg(360), true);
// // c.lineTo(150, 150);
// c.stroke();
