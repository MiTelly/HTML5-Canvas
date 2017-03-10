{

  let boxes5 = [{x: 70, y: 250, dx: 5, dy: 5, color: 'lime'},
                {x: 310, y: 50, dx: 5, dy: 5, color: 'blue'},
                {x: 550, y: 350, dx: 5, dy: 5, color: 'purple'},
                {x: 790, y: 100, dx: 5, dy: 5, color: 'orange'}];

  let start = function() {
    ctx5 = canvas5.getContext('2d');
    setInterval(draw,20);
  }

  let draw = function() {

    ctx5.clearRect(0,0,960,500);

    boxes5.forEach(function(box) {

      ctx5.fillStyle = box.color;
      ctx5.fillRect(box.x, box.y, 100, 100);

      if (box.x + 100 >= canvas4.width) {
        box.dx = -box.dx;
      }
      if (box.x <= 0) {
        box.dx = -box.dx;
      }
      if (box.y >= canvas4.height - 100) {
        box.dy = -box.dy;
      }
      if (box.y <= 0) {
        box.dy = -box.dy;
      }

      box.x += box.dx;
      box.y += box.dy;

    })
  }

  start();

}
