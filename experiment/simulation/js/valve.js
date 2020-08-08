var flow = 0;
var dir = 0;
var rot = 0;
var h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11;
var ov = -1;
var overflow;

function clickedValve() {
  if (ov == 0) {
    ov = 1;
    flow = 600;
    clearInterval(overflow);
    var pipe = setInterval(function () {
      if (j < 37) {
        document.getElementById("mot" + j).style.opacity = 1;
        j++;
      } else {
        document.getElementById("outlab").style.opacity = 1;
        clearInterval(pipe);
      }
    }, 100);
  }

  document.getElementById("outlab").style.opacity = 0;
  if (flow < 1700 && dir == 0) {
    flow = flow + 100;
    rot = rot + 45;
  } else if (flow > 600 && dir == 1) {
    flow = flow - 100;
    rot = rot - 45;
  } else if (dir == 1) {
    dir = 0;
    flow = flow + 100;
    rot = rot + 45;
  } else if (dir == 0) {
    dir = 1;
    flow = flow - 100;
    rot = rot - 45;
  }
  document.getElementById("gatelab").style.opacity = 1;
  document.getElementById("outlet").style.transform = "rotate(" + rot + "deg)";
}

function clickedMot() {
  document.getElementById("motlab").style.opacity = 0;
  document.getElementById("motbut").style.transform = "rotate(" + 270 + "deg)";
  document.getElementById("mot1").style.opacity = 1;
  j = 2;
  var startint = setInterval(function () {
    if (j < 15) {
      document.getElementById("mot" + j).style.opacity = 1;
      j++;
    } else {
      document.getElementById("shower").style.opacity = 1;
      var fillin = setInterval(function () {
        if (j < 30) {
          document.getElementById("mot" + j).style.opacity = 1;
          j++;
        } else {
          setInterval(calH, 1000);
          flow = 600;
          ov = 0;
          overflow = setInterval(function () {
            calH();
            if (flow > 0) flow--;
          }, 50);

          clearInterval(fillin);
        }
      }, 300);

      clearInterval(startint);
    }
  }, 100);
}

var gate = 1;
function clickedgate() {
  document.getElementById("gatelab").style.opacity = 0;
  if (gate == 1) {
    document.getElementById("gatebut").style.transform =
      "rotate(" + 270 + "deg)";
    gate = 0;

    document.getElementById("mot35").style.opacity = 0;
    document.getElementById("mot36").style.opacity = 0;

    document.getElementById("labFlow").innerText = "";
    if (ov == 1) {
      var timeo = setTimeout(function () {
        document.getElementById("labFlow").innerText =
          "final height: " + 0.01875 * flow;
      }, 30000);
      i = 30;
      var inter = setInterval(function () {
        document.getElementById("timer").innerText = "" + i;
        i--;

        var h = document.getElementById("fillfinal");
        var height = 90 - i * 3;
        h.style.top = 425 - height;
        h.style.height = height;

        if (gate == 1) {
          i = 30;
          document.getElementById("timer").innerText = "";
          var s2 = setInterval(function () {
            h.style.top = 422;
            h.style.height = 3;

            clearTimeout(timeo);
            clearInterval(s2);
            clearInterval(inter);
          }, 100);
        }
        if (i == 0) {
          i = 30;

          document.getElementById("timer").innerText = "";
          clearInterval(inter);
        }
      }, 1000);
    }
  } else {
    document.getElementById("gatebut").style.transform = "rotate(" + 0 + "deg)";
    if (ov == 1) {
      document.getElementById("mot35").style.opacity = 1;
      document.getElementById("mot36").style.opacity = 1;
    }
    gate = 1;
  }
}

function calH() {
  var h1 = 28.84 - (2.46 * flow * flow) / 1000000;
  var h2 = 28.84 - (2.93 * flow * flow) / 1000000;
  var h3 = 28.84 - (3.54 * flow * flow) / 1000000;
  var h4 = 28.84 - (4.37 * flow * flow) / 1000000;
  var h5 = 28.84 - (6.02 * flow * flow) / 1000000;
  var h6 = 28.84 - (7.96 * flow * flow) / 1000000;
  var h7 = h5;
  var h8 = h4;
  var h9 = h3;
  var h10 = h2;
  var h11 = h1;
  if (flow != 0) {
    document.getElementById("h1").innerText =
      "h1:" + h1.toString().substring(0, 6);
    document.getElementById("h2").innerText =
      "h2:" + h2.toString().substring(0, 6);
    document.getElementById("h3").innerText =
      "h3:" + h3.toString().substring(0, 6);
    document.getElementById("h4").innerText =
      "h4:" + h4.toString().substring(0, 6);
    document.getElementById("h5").innerText =
      "h5:" + h5.toString().substring(0, 6);
    document.getElementById("h6").innerText =
      "h6:" + h6.toString().substring(0, 6);
    document.getElementById("h7").innerText =
      "h7:" + h7.toString().substring(0, 6);
    document.getElementById("h8").innerText =
      "h8:" + h8.toString().substring(0, 6);
    document.getElementById("h9").innerText =
      "h9:" + h9.toString().substring(0, 6);
    document.getElementById("h10").innerText =
      "h10:" + h10.toString().substring(0, 6);
    document.getElementById("h11").innerText =
      "h11:" + h11.toString().substring(0, 6);
  } else {
    for (i = 1; i < 12; i++)
      document.getElementById("h" + i).innerText = "Overflow";
  }

  {
    var h = document.getElementById("fillh1");
    var height = h1 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh2");
    var height = h2 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh3");
    var height = h3 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh4");
    var height = h4 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh5");
    var height = h5 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh6");
    var height = h6 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh7");
    var height = h7 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh8");
    var height = h7 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh9");
    var height = h8 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh10");
    var height = h10 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh11");
    var height = h11 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
}
console.log("HEY!!");
