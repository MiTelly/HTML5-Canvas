{

  let boxes = [{x: 0, y: 250, color: 'lime'},{x: 240, y: 50, color: 'blue'},
              {x: 480, y: 350, color: 'purple'},{x: 720, y: 100, color: 'orange'}];

  let start = function() {
    ctx = canvas1.getContext('2d');
    setInterval(draw,20);
  }

  let draw = function() {

    ctx.clearRect(0,0,960,500);

    boxes.forEach(function(box) {
      ctx.fillStyle = box.color;
      ctx.fillRect(box.x, box.y, 100, 100);
      box.x += 5;
    })

    if (boxes[0].x === canvas1.width) {
      boxes = [{x: 0, y: 250, color: 'lime'},{x: 240, y: 50, color: 'blue'},
                  {x: 480, y: 350, color: 'purple'},{x: 720, y: 100, color: 'orange'}];
    }

  }

  start();

}
