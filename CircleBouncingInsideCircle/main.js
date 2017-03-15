{

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let timer_is_on = 0;
let y;

let circle1 = {x: 480, y: 350, dx: 0, dy: 0, radius: 300, color: 'blue'};
let circle2 = {x: 380, y: 250, dx: 5, dy: 5, radius: 50, color: 'red'};

let draw = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawBigCircle();
  updateSmallCircle();
  circleDeflect();
}

let drawBigCircle = function() {
  ctx.beginPath();
  ctx.arc(circle1.x, circle1.y, circle1.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = circle1.color;
  ctx.fill();
}

let updateSmallCircle = function() {
  circle2.x += circle2.dx;
  circle2.y += circle2.dy;

  ctx.beginPath();
  ctx.arc(circle2.x, circle2.y, circle2.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = circle2.color;
  ctx.fill();
}

let circleDeflect = function() {
  let xDist = (circle2.x-circle1.x) * (circle2.x-circle1.x);
  let yDist = (circle2.y-circle1.y) * (circle2.y-circle1.y);

  if ( (Math.sqrt(xDist + yDist) + circle2.radius) > (circle1.radius) ){
    circle2.dx = -circle2.dx;
    circle2.dy = -circle2.dy;
  }
}

let reset = function() {
    clearInterval(y);
    timer_is_on = 0;
}

let startCircles = function() {
  if (!timer_is_on) {
      timer_is_on = 1;
      y = setInterval(draw,30);
  }
}

document.getElementById("start").addEventListener("click", startCircles);
document.getElementById("reset").addEventListener("click", reset);

drawBigCircle();
updateSmallCircle();

}
