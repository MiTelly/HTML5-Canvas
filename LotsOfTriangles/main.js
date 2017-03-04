{

  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');

  function drawTri() {
    ctx.clearRect(0,0,960,500);

    for (let i=0; i<7; i++) {
        let coordinateX1 = Math.random() * 960;
        let coordinateY1 = Math.random() * 500;
        let coordinateX2 = Math.random() * 960;
        let coordinateY2 = Math.random() * 500;
        let coordinateX3 = Math.random() * 960;
        let coordinateY3 = Math.random() * 500;

        let random1 = Math.floor((Math.random() * 155) + 100);
        let random2 = Math.floor((Math.random() * 255) + 1);
        let random3 = Math.floor((Math.random() * 255) + 1);

        let triColor = 'rgb('+random1+','+random2+','+random3+')';

        ctx.beginPath();
        ctx.moveTo(coordinateX1, coordinateY1);
        ctx.lineTo(coordinateX2, coordinateY2);
        ctx.lineTo(coordinateX3, coordinateY3);
        ctx.lineTo(coordinateX1, coordinateY1);
        ctx.fillStyle = triColor;
        ctx.fill();
    }
  };

  drawTri();

};
