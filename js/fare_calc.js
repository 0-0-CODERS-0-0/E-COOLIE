function fare_calculation(D, p1, bw) {
  var totalprice = 10;
  var bgprice = 10;
  if (bw <= 10) {
    bgprice = 10;
  } else if (bw <= 20 && bw > 11) {
    bgprice = 20;
  } else {
    bgprice = 30;
  }
  if (p1 == 1 && D == 1) {
    totalprice += bgprice;
  } else if (p1 == 6 && D == 6) {
    totalprice += bgprice;
  } else {
    var diff = p1 - D;
    if (diff < 0) diff = -1 * diff;
    totalprice = 15 * diff + bgprice;
  }

  return totalprice;
}

document.getElementById("result").onclick = function () {
  var D = document.getElementById("default-select2").value;
  var p1 = document.getElementById("default-select1").value;
  var bw = document.getElementById("default-select").value;
  document.getElementById("result").innerText =
    "₹" + " " + fare_calculation(D, p1, bw);
};
var text = document.querySelector("#txt");
var text1 = document.querySelector("#txt1");
var qr = document.querySelector("#qr");
var form1 = document.querySelector("#form1");
var result = document.querySelector("#result");
var paynow = document.querySelector("#paynow");
var track = document.querySelector("#track");

text.style.display = "none";
result.style.display = "none";
qr.style.display = "none";
paynow.style.display = "none";
track.style.display = "none";
document.getElementById("BOOK").onclick = function () {
  text.style.display = "inline";
  text1.style.display = "none";
  qr.style.display = "inline";
  form1.style.display = "none";
  result.style.display = "inline";
  paynow.style.display = "inline";
};
document.getElementById("paynow").onclick = function () {
  track.style.display = "inline";
};


