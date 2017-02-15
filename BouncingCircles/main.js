window.onload = function() {
  start();
}

function start() {
  let circleX = 285;
  let circleY = 25;
  let cx = 5;
  let cy = 5;
  let blueX = 1185;
  let blueY = 425;
  let bx = 5;
  let by = 5;

  let canvas1 = document.getElementById("canvas");
  let ctx = canvas1.getContext("2d");

  setInterval(draw,12);

    function draw() {
      ctx.clearRect(0,0,1300,650);

      function redCircle() {
        ctx.beginPath();
        ctx.arc(circleX, circleY, 20, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.fill();

        if (circleX > 1280 || circleX < 20) {
          cx =- cx;
        }
        if (circleY > 630 || circleY < 20) {
          cy =- cy;
        }
        circleX += cx;
        circleY += cy;
      }

      function blueCircle() {
        ctx.beginPath();
        ctx.arc(blueX, blueY, 20, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = "blue";
        ctx.fill();

        if (blueX > 1280 || blueX < 20) {
          bx =- bx;
        }
        if (blueY > 630 || blueY < 20) {
          by =- by;
        }
        blueX += bx;
        blueY += by;
      }

    redCircle();
    blueCircle();
    }
}
