{

  let boxes4 = [{x: 70, y: 250, dx: 5, color: 'lime'},
                {x: 310, y: 50, dx: 5, color: 'blue'},
                {x: 550, y: 350, dx: 5, color: 'purple'},
                {x: 790, y: 100, dx: 5, color: 'orange'}];

  let start = function() {
    ctx4 = canvas4.getContext('2d');
    setInterval(draw,20);
  }

  let draw = function() {

    ctx4.clearRect(0,0,960,500);

    boxes4.forEach(function(box) {

      ctx4.fillStyle = box.color;
      ctx4.fillRect(box.x, box.y, 100, 100);

      if (box.x + 100 >= canvas4.width) {
        box.dx = -box.dx;
      }
      if (box.x <= 0) {
        box.dx = -box.dx;
      }

      box.x += box.dx;

    })

  }

  start();

}
