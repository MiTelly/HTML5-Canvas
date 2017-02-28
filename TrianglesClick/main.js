(function () {

let canvas = document.getElementById("triCanvas");
let ctx = canvas.getContext("2d");

let counter = 0;
let homeX = triCanvas.width/2;
let homeY = triCanvas.height/2;

let lineCoordinates1 = {x1: 200, y1:200, x2: 300, y2: 400};

let draw = function() {
  startingTri(lineCoordinates1);
};

let startingTri = function(line) {
  ctx.beginPath();
  ctx.moveTo(homeX, homeY);
  ctx.lineTo(line.x1,line.y1);
  ctx.strokeStyle = "green";
  ctx.lineWidth = "10";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(line.x1,line.y1);
  ctx.lineTo(line.x2,line.y2);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = "10";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(line.x2,line.y2);
  ctx.lineTo(homeX, homeY);
  ctx.strokeStyle = "red";
  ctx.lineWidth = "10";
  ctx.stroke();
};

let mouseClick = function(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
};

let drawLine = function(event){

    if (counter === 0) {
      pos1 = mouseClick(canvas, event);
      posx1 = pos1.x;
      posy1 = pos1.y;

      let random1 = Math.floor((Math.random() * 155) + 100);
      let random2 = Math.floor((Math.random() * 255) + 1);
      let random3 = Math.floor((Math.random() * 255) + 1);

      let randomColor1 = 'rgb('+random1+','+random2+','+random3+')';

      ctx.beginPath();
      ctx.moveTo(homeX, homeY);
      ctx.lineTo(posx1,posy1);
      ctx.strokeStyle = randomColor1;
      ctx.lineWidth = "10";
      ctx.stroke();

      counter += 1;
    } else if (counter === 1) {
      pos2 = mouseClick(canvas, event);
      posx2 = pos2.x;
      posy2 = pos2.y;

      let random4 = Math.floor((Math.random() * 155) + 100);
      let random5 = Math.floor((Math.random() * 255) + 1);
      let random6 = Math.floor((Math.random() * 255) + 1);

      let randomColor2 = 'rgb('+random4+','+random5+','+random6+')';

      ctx.beginPath();
      ctx.moveTo(posx1, posy1);
      ctx.lineTo(posx2, posy2);
      ctx.strokeStyle = randomColor2;
      ctx.lineWidth = "10";
      ctx.stroke();

      let random7 = Math.floor((Math.random() * 155) + 100);
      let random8 = Math.floor((Math.random() * 255) + 1);
      let random9 = Math.floor((Math.random() * 255) + 1);

      let randomColor3 = 'rgb('+random7+','+random8+','+random9+')';

      ctx.beginPath();
      ctx.moveTo(posx2, posy2);
      ctx.lineTo(homeX,homeY);
      ctx.strokeStyle = randomColor3;
      ctx.lineWidth = "10";
      ctx.stroke();

      counter = 0;
    };

};

triCanvas.addEventListener('mousedown', drawLine);

draw();

})();
