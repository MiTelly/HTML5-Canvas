{

  let boxes2 = [{x: 70, y: 250, color: 'lime'},
                {x: 310, y: 50, color: 'blue'},
                {x: 550, y: 350, color: 'purple'},
                {x: 790, y: 100, color: 'orange'}];

  let start = function() {
    ctx2 = canvas2.getContext('2d');
    draw();
  }

  let draw = function() {
    ctx2.clearRect(0,0,960,500);

    boxes2.forEach(function(box) {
      ctx2.fillStyle = box.color;
      ctx2.fillRect(box.x, box.y, 100, 100);
    })

  }

  start();

}
