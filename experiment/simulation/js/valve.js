var flow = 0;
var dir = 0;
var rot = 0;
var h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11;
var ov = -1;
var overflow;
var d = [];
var temp = 0;
var finalht = 0;
var thead = [];

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
          document.getElementById("outlab").style.opacity = 1;

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
  var h = document.getElementById("fillfinal");

  document.getElementById("labFlow").innerText = "";
  h.style.top = 422;
  h.style.height = 3;
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
          "final h" + 0.01875 * flow;
        finalht = 0.01875 * flow;
      }, 30000);
      i = 30;
      var innerArrow = document.getElementById("path26");
      var inter = setInterval(function () {
        ss = 30 - i;
        switch (ss) {
          case (ss = 0):
            innerArrow.setAttribute(
              "transform",
              "rotate(-1.6535496,1496.1506,-2414.6504)"
            );
            break;
          case (ss = 5):
            innerArrow.setAttribute("transform", "rotate(30,-45,180)");
            break;
          case (ss = 10):
            innerArrow.setAttribute("transform", "rotate(60,-7,112)");
            break;
          case (ss = 15):
            innerArrow.setAttribute("transform", "rotate(90,8,87)");
            break;
          case (ss = 20):
            innerArrow.setAttribute("transform", "rotate(120,17,72)");
            break;
          case (ss = 25):
            innerArrow.setAttribute("transform", "rotate(150,23,60)");
            break;
          case (ss = 28):
            innerArrow.setAttribute("transform", "rotate(180,29,50)");
            break;
        }
        i--;

        var height = 90 - i * 3;
        h.style.top = 425 - height;
        h.style.height = height;

        if (gate == 1) {
          i = 30;
          // document.getElementById("timer").innerText = "";
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

          //document.getElementById("timer").innerText = "";

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
    var height = h8 * 3;
    h.style.top = 223 - height;
    h.style.height = height;
  }
  {
    var h = document.getElementById("fillh9");
    var height = h9 * 3;
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

  d[0] = h1;
  d[1] = h2;
  d[2] = h3;
  d[3] = h4;
  d[4] = h5;
  d[5] = h6;
  d[6] = h7;
  d[7] = h8;
  d[8] = h9;
  d[9] = h10;
  d[10] = h11;
}

//------------------------TABLES Coding starts from here--------------------------------------------------------

var r = 1;
function dataSheet() {
  document.getElementById("dt" + r + "m" + 1).innerHTML = 0;
  document.getElementById("dt" + r + "m" + 2).innerHTML = finalht.toFixed(4);
  document.getElementById("dt" + r + "m" + 3).innerHTML = 30;
  check();
}
function createRow() {
  var x;
  var y;

  var p = document.getElementById("tab");
  x = document.createElement("tr");
  p.appendChild(x);
  y = document.createElement("td");
  y.innerHTML = r;
  x.appendChild(y);
  for (var i = 0; i < 3; i++) {
    y = document.createElement("td");
    y.setAttribute("id", "dt" + r + "m" + (i + 1));
    x.appendChild(y);
  }
  y = document.createElement("td");
  y.setAttribute("id", "ds" + r);
  //===================Code to add textbox and button=======================//
  var text = document.createElement("INPUT");
  text.setAttribute("type", "text");
  text.setAttribute("id", "ds" + r + "text");
  y.appendChild(text);
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Check";
  btn.setAttribute("id", "ds" + r + "btn");
  btn.setAttribute("onclick", "check()");
  y.appendChild(btn);
  //===================Code to add textbox and button=======================//
  x.appendChild(y);
  for (var i = 0; i < 11; i++) {
    y = document.createElement("td");
    y.setAttribute("id", "p" + r + "m" + (i + 1));
    x.appendChild(y);
  }
}
var c = 1;
function tableSecond() {
  var y, v, pp, vg;
  var dis = 7.5;
  var areaArr = [14.4, 13.2, 12.0, 10.8, 9.2, 8.0, 9.2, 10.8, 12, 13.2, 14.4];
  createTable();
  for (var i = 0; i < 11; i++) {
    for (var j = 1; j <= 7; j++) {
      y = document.getElementById("c" + c + "d" + (i + 1) + "m" + j);
      if (j == 1) y.innerHTML = i + 1;
      else if (j == 2) {
        y.innerHTML = dis;
        dis += 7.5;
      } else if (j == 3) y.innerHTML = areaArr[i];
      else if (j == 4) {
        var q = document.getElementById("ds" + c).innerHTML;
        //console.log("Q = "+q);
        v = q / areaArr[i];
        y.innerHTML = v.toFixed(4);
      } else if (j == 5) {
        var ip1 = document.createElement("input");
        y.appendChild(ip1);

        //vg = (v * v) / (2 * 981);
        //y.innerHTML = vg.toFixed(4);
      } else if (j == 6) {
        var ip2 = document.createElement("input");
        y.appendChild(ip2);
        //pp = d[i];
        //y.innerHTML = pp.toFixed(4);
      } else {
        //y.innerHTML = (pp + vg).toFixed(4);
        thead[i] = pp + vg;
        var last = document.createElement("input");
        last.setAttribute("id", "c" + c + "r" + i);
        y.appendChild(last);
      }
    }
  }
  c += 1;
}
function createTable() {
  var x, y, tc, tr;
  var p = document.getElementById("tab-1");
  for (var i = 0; i < 11; i++) {
    x = document.createElement("tr");
    p.appendChild(x);
    for (var j = 1; j <= 7; j++) {
      y = document.createElement("td");
      y.setAttribute("id", "c" + c + "d" + (i + 1) + "m" + j);
      if (j == 1) y.innerHTML = c;
      x.appendChild(y);
    }
  }
  tc = document.createElement("tr");
  p.appendChild(tc);
  tr = document.createElement("td");
  tc.appendChild(tr);
  tr.innerHTML = "Next Record:";
}
//--------------------------TABLES Coding Ends here ------------------------------------------------
//============================Code for Check======================================//

function check() {
  var ele = document.getElementById("ds" + r + "text");
  var discharge_value = ele.value;
  for (var i = 0; i < 11; i++) {
    //console.log("p"+r+"m"+(i+1));
    document.getElementById("p" + r + "m" + (i + 1)).innerHTML = d[i].toFixed(
      4
    );
  }
  if (discharge_value == "") {
    ele.value = "Please Fill discharge rate";
  } else {
    var k = (1600 * finalht) / 30;
    if (discharge_value == k) {
      document.getElementById("ds" + r).innerHTML = k;

      r++;
      createRow();
      tableSecond();

      clicked(
        [7.5, 15, 22.5, 30, 37.5, 45, 52.5, 60, 67.5, 75, 82.5],
        d,
        [7.5, 15, 22.5, 30, 37.5, 45, 52.5, 60, 67.5, 75, 82.5],
        d,
        [7.5, 15, 22.5, 30, 37.5, 45, 52.5, 60, 67.5, 75, 82.5],
        d
      );
    } else {
      ele.style.background = "red";
      ele.style.value = "wrong answer";
    }
  }
}

function checktab() {
  for (i = 0; i < 11; i++) {
    var doc = document.getElementById("c" + c + "r" + i);
    console.log(c, i, doc);
    if (doc.value != thead[i]) {
      doc.style.backgroundColor = "red";
    }
  }
}
