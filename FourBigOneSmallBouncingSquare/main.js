(function() {

let canvas  = document.getElementById('canvas')
let context = canvas.getContext('2d');
let x=480;
let y=10;
let dx=10;
let dy=10;

function go() {
  setInterval(draw,25);
}

function draw() {
  context.clearRect(0,0,1300,500);

  context.fillStyle="yellow";
  context.fillRect(x, y, 10, 10);

  context.fillStyle = "red";
  context.fillRect(300, 150, 100, 100);

  context.fillStyle = "white";
  context.fillRect(500, 150, 100, 100);

  context.fillStyle = "red";
  context.fillRect(700, 150, 100, 100);

  context.fillStyle = "white";
  context.fillRect(900, 150, 100, 100);

  // Boundary Logic
  if (x<=0 || x>=1290) {
    dx=-dx;
  }
  if (y<=0 || y>=490) {
    dy=-dy;
  }

  if (y===140 && ((x>=290 && x<=400) || (x>=490 && x<=600) || (x>=690 && x<=800) ||
    (x>=890 && x<=1000)))  {
    dy=-dy;
  }

  if (y===250 && ((x>=290 && x<=400) || (x>=490 && x<=600) || (x>=690 && x<=800) ||
    (x>=890 && x<=1000)))  {
    dy=-dy;
  }

  if (x===290 && (y>140 && y<250)) {
    dx=-dx;
  }

  if (x===400 && (y>140 && y<250)) {
    dx=-dx;
  }

  if (x===490 && (y>140 && y<250)) {
    dx=-dx;
  }

  if (x===600 && (y>140 && y<250)) {
    dx=-dx;
  }

  if (x===690 && (y>140 && y<250)) {
    dx=-dx;
  }

  if (x===800 && (y>140 && y<250)) {
    dx=-dx;
  }

  if (x===890 && (y>140 && y<250)) {
    dx=-dx;
  }

  if (x===1000 && (y>140 && y<250)) {
    dx=-dx;
  }

  if ((x===290 && y=== 140) || (x===290 && y=== 250) || (x===400 && y=== 140)
   ||(x===400 && y=== 250) || (x===490 && y=== 140) || (x===490 && y=== 250) ||
   (x===600 && y=== 140) || (x===600 && y=== 250) || (x===690 && y=== 140) ||
   (x===690 && y=== 250) || (x===800 && y=== 140) || (x===800 && y=== 250) ||
   (x===890 && y=== 140) || (x===890 && y=== 250) || (x===1000 && y=== 140) ||
   (x===1000 && y=== 250)) {
    dx=-dx;
    dy=-dy;
   }
  x+=dx;
  y+=dy;
}

go();

})();
