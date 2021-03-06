(function() {

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');

let circles = [{x: 100, y: 125, dx: 3, dy: 4, radius: 50, color: 'blue'},
             {x: 600, y: 525, dx: -5, dy: -5, radius: 30, color: 'red'},
            {x: 700, y: 225, dx: -2, dy: -6, radius: 70, color: 'green'}];


function start() {
  setInterval(draw,50)
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  updateCircle();
  ballsCollisionDeflect();
}

function updateCircle() {

  for (n=0; n < circles.length; n++) {
    ctx.beginPath();
    ctx.arc(circles[n].x, circles[n].y, circles[n].radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = circles[n].color;
    ctx.fill();

// to avoid the ball getting stuck/off the canvas wall
    if (circles[n].x > canvas.width - circles[n].radius) {
      circles[n].x = canvas.width - circles[n].radius;
      circles[n].dx =- circles[n].dx;
    } else if (circles[n].x < circles[n].radius) {
      circles[n].x = circles[n].radius;
      circles[n].dx =- circles[n].dx;
    } else if (circles[n].y > canvas.height - circles[n].radius) {
      circles[n].y = canvas.height - circles[n].radius;
      circles[n].dy =- circles[n].dy;
    } else if (circles[n].y < circles[n].radius) {
      circles[n].y = circles[n].radius;
      circles[n].dy =- circles[n].dy;
    }

    circles[n].x += circles[n].dx;
    circles[n].y += circles[n].dy;
  }
}

function ballsCollisionDeflect() {

  for (let j=0; j<circles.length; j++) {
    let Ball1 = circles[j];

    for (let n=j+1; n<circles.length; n++) {
      let Ball2 = circles[n];
      let xDist = (Ball1.x - Ball2.x) * (Ball1.x - Ball2.x);
      let yDist = (Ball1.y - Ball2.y) * (Ball1.y - Ball2.y);

      if ((Math.sqrt(xDist + yDist)) < (Ball1.radius + Ball2.radius) ){
//elastic collision
        let newVelBall1X =  (Ball1.dx * (Ball1.radius - Ball2.radius) + (2 * Ball2.radius * Ball2.dx)) /
                            (Ball1.radius + Ball2.radius);
        let newVelBall1Y =  (Ball1.dy * (Ball1.radius - Ball2.radius) + (2 * Ball2.radius * Ball2.dy)) /
                            (Ball1.radius + Ball2.radius);

        let newVelBall2X =  (Ball2.dx * (Ball2.radius - Ball1.radius) + (2 * Ball1.radius * Ball1.dx)) /
                            (Ball1.radius + Ball2.radius);
        let newVelBall2Y =  (Ball2.dy * (Ball2.radius - Ball1.radius) + (2 * Ball1.radius * Ball1.dy)) /
                            (Ball1.radius + Ball2.radius);

// so as to reposition (x,y) coordinates after collision to escape the overlap
        Ball1.x = Ball1.x + newVelBall1X;
        Ball1.y = Ball1.y + newVelBall1Y;

        Ball2.x = Ball2.x + newVelBall2X;
        Ball2.y = Ball2.y + newVelBall2Y;

// new Ball velocities
        Ball1.dx = newVelBall1X;
        Ball2.dx = newVelBall2X;

        Ball1.dy = newVelBall1Y;
        Ball2.dy = newVelBall2Y;
      }
    }
  }
}

start();


})();
