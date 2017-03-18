{

let canvas = document.getElementById("triCanvas");
let ctx = canvas.getContext('2d');

let randX1,randX2,randY1,randY2,randX3,randY3;
let t;

let dx1 = 5;
let dy1 = 5;
let dx2 = 5;
let dy2 = 5;
let dx3 = 5;
let dy3 = 5;

let timer_is_on = 0;

function makeLine(a,b,c,d,e,f) {
  ctx.beginPath();
  ctx.moveTo(a,b);
  ctx.lineTo(c,d);
  ctx.lineTo(e,f);
  ctx.lineTo(a,b);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = "5";
  ctx.stroke();
}

function randomNum() {
  randX1 = Math.floor(Math.random() * 300 + 25);
  randY1 = Math.floor(Math.random() * 150 + 25);
  randX2 = randX1 + 200;
  randY2 = randY1 + 100;
  randX3 = randX2 - 150;
  randY3 = randY2 + 200;
}

function draw() {
    ctx.clearRect(0,0,960,500);
    randX1 += dx1;
    randY1 += dy1;

    randX2 += dx2;
    randY2 += dy2;

    randX3 += dx3;
    randY3 += dy3;

    makeLine(randX1,randY1,randX2,randY2,randX3,randY3);

    if (randX1 > canvas.width) {
      randX1 = canvas.width;
      dx1 = -dx1;
    } else if (randX1 < 0) {
      randX1 = 0;
      dx1 = -dx1;
    }
    else if (randX2 > canvas.width) {
      randX2 = canvas.width;
      dx2 = -dx2;
    }
    else if (randX2 < 0) {
      randX2 = 0;
      dx2 = -dx2;
    } else if (randX3 > canvas.width) {
      randX3 = canvas.width;
      dx3 = -dx3;
    } else if (randX3 < 0) {
      randX3 = 0;
      dx3 = -dx3;
    } else if (randY1 > canvas.height) {
      randY1 = canvas.height;
      dy1 = -dy1;
    } else if (randY1 < 0) {
      randY1 = 0;
      dy1 = -dy1;
    } else if (randY2 > canvas.height) {
      randY2 = canvas.height;
      dy2 = -dy2;
    } else if (randY2 < 0) {
      randY2 = 0;
      dy2 = -dy2;
    } else if (randY3 > canvas.height) {
      randY3 = canvas.height;
      dy3 = -dy3;
    } else if (randY3 < 0) {
      randY3 = 0;
      dy3 = -dy3;
    }
}

function stop() {
    clearInterval(t);
    timer_is_on = 0;
}

function start() {
  if (!timer_is_on) {
      timer_is_on = 1;
      t = setInterval(draw,90);
  }
}

function restart() {
  randomNum();

  dx1 = 5;
  dy1 = 5;
  dx2 = 5;
  dy2 = 5;

  timer_is_on = 0;
  clearInterval(t);
  start();
}

randomNum();
draw();

document.getElementById('stop').addEventListener('click', stop);
document.getElementById('start').addEventListener('click', start);
document.getElementById('restart').addEventListener('click', restart);

}
