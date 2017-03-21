{

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');

function makeCircle(x,y) {
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = "blue";
  ctx.fill();
}

function makeLine(a,b,c,d) {

  let ranColor1 = Math.floor((Math.random() * 155) + 100);
  let ranColor2 = Math.floor((Math.random() * 255) + 1);
  let ranColor3 = Math.floor((Math.random() * 255) + 1);

  let lineColor = 'rgb('+ranColor1+','+ranColor2+','+ranColor3+')';

  ctx.beginPath();
  ctx.moveTo(a,b);
  ctx.lineTo(c,d);
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = "6";
  ctx.stroke();
}

function draw() {

  for(let i=0; i<20; i++) {
    let randomX1 = Math.random() * 960;
    let randomX2 = Math.random() * 960;
    let randomY1 = Math.random() * 500;
    let randomY2 = Math.random() * 500;

    makeCircle(randomX1, randomY1);
    makeCircle(randomX2, randomY2);
    makeLine(randomX1,randomY1,randomX2,randomY2);
  }
}

function redraw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  draw();
}

document.getElementById('redraw').addEventListener('click', redraw);

draw();

}
