{

  let boxLime = {x: 70, y: 250, dx: 5, color: 'lime'};

  let start = function() {
    ctx3 = canvas3.getContext('2d');
    setInterval(draw,20);
  }

  let draw = function() {

    ctx3.clearRect(0,0,960,500);

    ctx3.fillStyle = boxLime.color;
    ctx3.fillRect(boxLime.x, boxLime.y, 100, 100);

    if (boxLime.x + 100 >= canvas3.width) {
      boxLime.dx = -boxLime.dx;
    }
    if (boxLime.x <= 0) {
      boxLime.dx = -boxLime.dx;
    }

    boxLime.x += boxLime.dx;

  }

  start();

}
