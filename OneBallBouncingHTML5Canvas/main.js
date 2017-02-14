window.onload = function () {
  start();
}

let ctx, xDist, yDist;

let ball1 = {
x: 1180,
y: 480,
dx: 10,
dy: 10,
radius: 50,
color: 'blue'
};

function start() {
  let canvas3 = document.getElementById("canvas1");
  ctx= canvas3.getContext("2d");
  setInterval(draw,20);
}

function draw() {
  ctx.clearRect(0,0,1300,650);
  updateCircle(ball1);
}

function updateCircle(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = ball.color;
  ctx.fill();

  if (ball.x > 1250 || ball.x < 50) {
    ball.dx =- ball.dx;
  }
  if (ball.y > 600 || ball.y < 50) {
    ball.dy =- ball.dy;
  }
  ball.x += ball.dx;
  ball.y += ball.dy;
}
