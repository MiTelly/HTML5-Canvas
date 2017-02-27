(function () {

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let timer_is_on = 0;
let b;

let boxes =  [{x: 70, y: 250, dx: 5, dy: 5, color: 'lime'},
              {x: 310, y: 50, dx: 5, dy: 5, color: 'blue'},
              {x: 550, y: 350, dx: 5, dy: 5, color: 'purple'},
              {x: 790, y: 100, dx: 5, dy: 5, color: 'orange'}];

// draws the boxes initially(static)
function start() {
  boxes.forEach(function(box) {
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, 100, 100);
  });
};

function draw() {
  ctx.clearRect(0,0,960,500);

  boxes.forEach(function(box) {
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, 100, 100);

    if (box.x + 100 >= canvas.width || box.x <= 0) {
      box.dx = -box.dx;
    }
    if (box.y >= canvas.height - 100 || box.y <= 0) {
      box.dy = -box.dy;
    }

    box.x += box.dx;
    box.y += box.dy;
  });
}

function reset() {
    clearInterval(b);
    timer_is_on = 0;
}

function startSquare() {
  if (!timer_is_on) {
      timer_is_on = 1;
      b = setInterval(draw,50);
  }
}

document.getElementById("startButton").addEventListener("click", startSquare);
document.getElementById("resetButton").addEventListener("click", reset);

start();

})();
