{

let start =function() {

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

    let circle1 = function drawCircle() {
      let randomX = Math.floor((Math.random() * 960) + 1);
      let randomY = Math.floor((Math.random() * 500) + 1);

      let random1 = Math.floor((Math.random() * 255) + 1);
      let random2 = Math.floor((Math.random() * 255) + 1);
      let random3 = Math.floor((Math.random() * 255) + 1);

      ctx.beginPath();
      ctx.arc(randomX, randomY, 25, 0, 2*Math.PI, true);
      ctx.closePath();
      ctx.fillStyle = 'rgb('+random1+','+random2+','+random3+')';
      ctx.fill();
    }

    let go = setInterval(circle1, 500);

    let stop = function() {
      clearInterval(go);
    }

  canvas.addEventListener('mousedown', stop);

}
start();

}
