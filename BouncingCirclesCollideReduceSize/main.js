
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let timer_is_on;

let circle1 = {
  x: 700,
  y: 450,
  dx: 13,
  dy: 9,
  radius: 100,
  color: 'blue'
};

let circle2 = {
x: 170,
y: 170,
dx: 7,
dy: 14,
radius: 100,
color: 'lime'
};

let circle3 = {
x: 380,
y: 410,
dx: 5,
dy: 5,
radius: 100,
color: 'orange'
};

let circle4 = {
x: 650,
y: 140,
dx: 17,
dy: 3,
radius: 100,
color: 'green'
};

function canvasStart(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = ball.color;
  ctx.fill();
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  updateCircle(circle1);
  updateCircle(circle2);
  updateCircle(circle3);
  updateCircle(circle4);

  ballCollision(circle1, circle2);
  ballCollision(circle1, circle3);
  ballCollision(circle1, circle4);
  ballCollision(circle2, circle3);
  ballCollision(circle2, circle4);
  ballCollision(circle3, circle4);
}

function updateCircle(ball) {
  ball.x += ball.dx;
  ball.y += ball.dy;

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = ball.color;
  ctx.fill();

  if (ball.x >= (canvas.width-ball.radius) || ball.x <= ball.radius) {
    ball.dx =- ball.dx;
  }
  if (ball.y >= (canvas.height-ball.radius) || ball.y <= ball.radius) {
    ball.dy =- ball.dy;
  }
}

function ballDeflect(a, b) {
    // this 'if' is to avoid creating the scenario where balls deflect and get
    // stuck along the canvas border. Prevents balls from deflecting when
    // they're closer than their radius away. Do not delete.
    if (b.x >= b.radius && b.x <= (canvas.width-b.radius) && b.y >= b.radius && b.y <=
    (canvas.height-b.radius) && a.x >= a.radius && a.x <= (canvas.width-a.radius) &&
    a.y >= a.radius && a.y <= (canvas.height-a.radius) ) {

          a.dx =- a.dx;
          a.dy =- a.dy;

          b.dx =- b.dx;
          b.dy =- b.dy;

      let random1 = Math.floor((Math.random() * 155) + 100);
      let random2 = Math.floor((Math.random() * 255) + 1);
      let random3 = Math.floor((Math.random() * 255) + 1);
      let random4 = Math.floor((Math.random() * 155) + 100);
      let random5 = Math.floor((Math.random() * 255) + 1);
      let random6 = Math.floor((Math.random() * 255) + 1);

      a.color = 'rgb('+random1+','+random2+','+random3+')';
      b.color = 'rgb('+random4+','+random5+','+random6+')';
    }
}

function ballCollision(a, b){
  let xDist = (a.x - b.x) * (a.x - b.x);
  let yDist = (a.y - b.y) * (a.y - b.y);

  if ((Math.sqrt(xDist + yDist)) < (a.radius * 1.03 + b.radius * 1.03) ){
    b.radius *= 0.95;
    a.radius *= 0.95;

    ballDeflect(a, b);
  }
}

function reset() {
    clearInterval(v);
    timer_is_on = 0;
}

function startBalls() {
  if (!timer_is_on) {
      timer_is_on = 1;
      v = setInterval(draw, 70);
  }
}

function totalReset() {

  circle1 = {
    x: 700,
    y: 450,
    dx: 13,
    dy: 9,
    radius: 100,
    color: 'blue'
  };

  circle2 = {
  x: 170,
  y: 170,
  dx: 7,
  dy: 14,
  radius: 100,
  color: 'lime'
  };

  circle3 = {
  x: 380,
  y: 410,
  dx: 5,
  dy: 5,
  radius: 100,
  color: 'orange'
  };

  circle4 = {
  x: 650,
  y: 140,
  dx: 17,
  dy: 3,
  radius: 100,
  color: 'green'
  };

  timer_is_on = 0;
  clearInterval(v);
  startBalls();

}

canvasStart(circle1);
canvasStart(circle2);
canvasStart(circle3);
canvasStart(circle4);
