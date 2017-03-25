{

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let v;
let timer_is_on = 0;

let rocket1 = {x:465, y:400, width:30, height:100, dy: -15, color: "red"};
let rocket2 = {x:0, y:230, width:150, height:40, dx: 16, color: "blue"};

function drawRocketUp(rocket) {
  ctx.fillStyle = rocket.color;
  ctx.fillRect(rocket.x,rocket.y,rocket.width,rocket.height);

  rocket.y += rocket.dy;
  rocket.dy += 0.29;

  if (rocket.y + rocket.height > canvas.height) {
    rocket.y = 400;
    rocket.dy = 0;

    ctx.fillStyle = rocket.color;
    ctx.fillRect(rocket.x,rocket.y,rocket.width,rocket.height);
  }
}

function drawRocketRight(rocket) {
  ctx.fillStyle = rocket.color;
  ctx.fillRect(rocket.x,rocket.y,rocket.width,rocket.height);

  rocket.x += rocket.dx;
  rocket.dx -= 0.21;

  if (rocket.x < 0) {
    rocket.x = 0;
    rocket.dx = 0;

    ctx.fillStyle = rocket.color;
    ctx.fillRect(rocket.x,rocket.y,rocket.width,rocket.height);
  }
}

function rocketsLanded() {
  if (rocket1.y === 400 && rocket2.x === 0) {
    clearInterval(v);
    timer_is_on = 0;
  }
}

function launchRockets() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  drawRocketUp(rocket1);
  drawRocketRight(rocket2);
  rocketsLanded();
}

function startRocket() {
  if (!timer_is_on) {
      timer_is_on = 1;
      rocket1 = {x:465, y:400, width:30, height:100, dy: -15, color: "red"};
      rocket2 = {x:0, y:230, width:150, height:40, dx: 15.5, color: "blue"};
      v = setInterval(launchRockets,50);
  }
}



drawRocketUp(rocket1);
drawRocketRight(rocket2);

document.getElementById('startRocket').addEventListener('click', startRocket);

}
