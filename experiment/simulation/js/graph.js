var ctx = document.getElementById("myChart").getContext("2d");

let xAxis = [];
let yAxis = [];
let xAxis2 = [];
let yAxis2 = [];
let xAxis3 = [];
let yAxis3 = [];

let xAxis01 = [];
let yAxis01 = [];
let xAxis02 = [];
let yAxis02 = [];
let xAxis03 = [];
let yAxis03 = [];

var graph = new Image();
graph.src = "images/graph.jpg";
function drawLine(startX, startY, endX, endY, color) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.fillStyle = color;
}

function drawArc(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

function chart(xArray1, yArray1, xArray2, yArray2, xArray3, yArray3) {
  for (var i = 0; i < xArray1.length; i++) {
    xAxis[i] = xArray1[i];
  }
  for (var j = 0; j < xArray1.length; j++) {
    yAxis[j] = yArray1[j];
  }
  for (var i = 0; i < xArray2.length; i++) {
    xAxis2[i] = xArray2[i];
  }
  for (var j = 0; j < xArray2.length; j++) {
    yAxis2[j] = yArray2[j];
  }
  for (var i = 0; i < xArray3.length; i++) {
    xAxis3[i] = xArray3[i];
  }
  for (var j = 0; j < xArray3.length; j++) {
    yAxis3[j] = yArray3[j];
  }

  ctx.drawImage(graph, 0, 0);
  //drawGraph
  drawLine(40, 0, 40, 400, "black");
  drawLine(40, 400, 600, 400, "black");

  //labeling xAxis ..

  ctx.fillStyle = "blue";
  ctx.font = "20px Verdana";
  ctx.fillText("<------- Distance of Piezometer Tube ------>", 100, 450);

  //labelling yAxis ...

  var x, y;

  text = "<-------- Pressure Head -------->";

  x = 20;
  y = 250;
  ctx.fillStyle = "blue";
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.save();
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(text, -220, 20);
  ctx.restore();

  // labelling points ...
  let y1 = 0;
  let valueY = 30;
  for (let i = 0; i < 10; i++) {
    drawLine(35, y1, 45, y1);
    ctx.fillStyle = "red";
    ctx.font = "10px Verdana";
    ctx.fillText(valueY, 30, y1);
    valueY -= 3;
    y1 += 40;
  }

  // labelling points ...
  let x1 = 40;
  let valueX = 0;
  for (let t = 0; t < 10; t++) {
    drawLine(x1, 395, x1, 405);
    ctx.fillStyle = "red";
    ctx.font = "10px Verdana";
    ctx.fillText(valueX, x1, 415);
    valueX += 10;
    x1 += 60;
  }

  for (var i = 0; i < xAxis2.length; i++) {
    drawArc(xAxis2[i], yAxis2[i], 3, "blue");
  }

  lineAnimate2();
  for (var i = 0; i < xAxis.length; i++) {
    drawArc(xAxis3[i], yAxis3[i], 3, "green");
  }

  lineAnimate3();
  for (var i = 0; i < xAxis.length; i++) {
    drawArc(xAxis[i], yAxis[i], 3, "red");
  }

  lineAnimate1();
}
var k = 0;
function lineAnimate1() {
  drawLine(40, 400, xAxis[0], yAxis[0], "yellow");
  drawLine(xAxis[k], yAxis[k], xAxis[k + 1], yAxis[k + 1], "yellow");
  if (k < xAxis.length - 1) k++;
  setTimeout(() => {
    requestAnimationFrame(lineAnimate1);
  }, 500);
}
var k2 = 0;
function lineAnimate2() {
  drawLine(40, 400, xAxis2[0], yAxis2[0], "yellow");
  drawLine(xAxis2[k2], yAxis2[k2], xAxis2[k2 + 1], yAxis2[k2 + 1], "yellow");
  if (k2 < xAxis2.length - 1) k2++;
  setTimeout(() => {
    requestAnimationFrame(lineAnimate2);
  }, 500);
}

var k3 = 0;
function lineAnimate3() {
  drawLine(40, 400, xAxis3[0], yAxis3[0], "yellow");
  drawLine(xAxis3[k3], yAxis3[k3], xAxis3[k3 + 1], yAxis3[k3 + 1], "yellow");
  if (k3 < xAxis3.length - 1) k3++;
  setTimeout(() => {
    requestAnimationFrame(lineAnimate3);
  }, 500);
}

function clicked(xAxis, yAxis, xAxis2, yAxis2, xAxis3, yAxis3) {
  for (var i = 0; i < xAxis.length; i++) {
    xAxis01[i] = 6 * xAxis[i] + 40;
  }
  for (var i = 0; i < yAxis.length; i++) {
    yAxis01[i] = 40 * ((30 - yAxis[i]) / 3);
  }
  for (var i = 0; i < xAxis.length; i++) {
    xAxis02[i] = 6 * xAxis2[i] + 40;
  }
  for (var i = 0; i < yAxis2.length; i++) {
    yAxis02[i] = 40 * ((30 - yAxis2[i]) / 3);
  }
  for (var i = 0; i < xAxis3.length; i++) {
    xAxis03[i] = 6 * xAxis3[i] + 40;
  }
  for (var i = 0; i < yAxis3.length; i++) {
    yAxis03[i] = 40 * ((30 - yAxis3[i]) / 3);
  }

  chart(xAxis01, yAxis01, xAxis02, yAxis02, xAxis03, yAxis03);
}
