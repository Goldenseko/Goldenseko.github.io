
function draw() {
  var myCanvas = document.getElementById('canvas');
  var ctx = myCanvas.getContext('2d');


  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (10, 10, 55, 50);

  document.getElementById("canvassample");

  for (var i=0; i < 8; i++){
    for(var x=0; x<8; x++){
      drawGrid(context, x, y);
    }　
      drawGrid(context, x, y);
  }
}
