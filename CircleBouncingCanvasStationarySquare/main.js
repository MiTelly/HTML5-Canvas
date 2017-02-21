
let x=100;
let y=90;
let dx=10;
let dy=5;
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

function init() {
  setInterval(draw,20);
}

function draw(){
  context.clearRect(0,0,900,700);
  context.beginPath();
  context.fillStyle="lime";
  // Draws a circle of radius 40 at the coordinates 100,90 on the canvas
  context.arc(x,y,40,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  context.fillStyle = "white"; // white rectangle in the middle to bounce ball off of
  context.fillRect(200, 200, 500, 200); // fill the rectangle
  // Boundary Logic
    if((x<=30 || x>=870) || (x === 170 && (y>=170 && y<=430 )) || (x === 730 && (y>=170 && y<=430 )) ) {
      dx=-dx;
    } else if(( y<=30 || y>=670) || (y===170 && (x>=170 && x<=730)) || (y===430 && (x>=170 && x<=730))){
      dy=-dy;
    } else if ((x<=30 && y>=670) || (x<=30 && y<=30) || (x>=870 && y<=30) || (x>=870 && y >=670)){
      dx=-dx;
    }

  x+=dx;
  y+=dy;
};

init();
