var leftEye = document.getElementById("lefteye");

leftEye.style.backgroundColor = "red";

setInterval(function() {
  var currentLeft = parseInt(leftEye.style.left, 100);
  leftEye.style.left = (currentLeft + 1) + "px";
}, 100);
