(function() {

let canvas15 = document.getElementById('myCanvas');
let ctx15 = canvas15.getContext('2d');
let timer_is_on = 0;
let b;

let boxes = [{x: 100, y: 20, width: 350, height:350, dx: 1, dy: 1, color: 'lime'},
            {x: 200, y: 200, width: 100, height:100, dx: 3, dy: 3, color: 'blue'}];

function bounceBoxes() {
  draw();
  boxCollisionInner();
  boxCollisionCanvas();
}

function draw() {
  ctx15.clearRect(0,0,960,500);

  boxes.forEach(function(box) {

    box.x += box.dx;
    box.y += box.dy;

    ctx15.fillStyle = box.color;
    ctx15.fillRect(box.x, box.y, box.width, box.height);
  });
}

function boxCollisionCanvas() {
  if (boxes[0].x + boxes[0].width >= canvas15.width) {
    boxes[0].x = canvas15.width - boxes[0].width;
    boxes[0].dx = -boxes[0].dx;
  } else if (boxes[0].x <= 0) {
    boxes[0].x = 0;
    boxes[0].dx = -boxes[0].dx;
  } else if (boxes[0].y <= 0) {
    boxes[0].y = 0;
    boxes[0].dy = -boxes[0].dy;
  } else if (boxes[0].y >= canvas15.height - boxes[0].height) {
    boxes[0].y = canvas15.height - boxes[0].height;
    boxes[0].dy = -boxes[0].dy;
  }
}

function boxCollisionInner() {
  if (boxes[1].x <= boxes[0].x) {
    boxes[1].x = boxes[0].x;
    boxes[1].dx = -boxes[1].dx;
    boxes[1].x += boxes[1].dx;
  } else if (boxes[1].x + boxes[1].width >= boxes[0].x + boxes[0].width) {
    boxes[1].x = boxes[0].x + boxes[0].width - boxes[1].width;
    boxes[1].dx = -boxes[1].dx;
    boxes[1].x += boxes[1].dx;
  } else if (boxes[1].y <= boxes[0].y) {
    boxes[1].y = boxes[0].y
    boxes[1].dy = -boxes[1].dy;
    boxes[1].y += boxes[1].dy;
  } else if (boxes[1].y + boxes[1].height >= boxes[0].y + boxes[0].height) {
    boxes[1].y = boxes[0].y + boxes[0].height - boxes[1].height;
    boxes[1].dy = -boxes[1].dy;
    boxes[1].y += boxes[1].dy;
  }
}

function stop() {
    clearInterval(b);
    timer_is_on = 0;
}

function start() {
  if (!timer_is_on) {
      timer_is_on = 1;
      b = setInterval(bounceBoxes,50);
  }
}

document.getElementById('stop').addEventListener('click', stop);
document.getElementById('start').addEventListener('click', start);

draw();

})();
