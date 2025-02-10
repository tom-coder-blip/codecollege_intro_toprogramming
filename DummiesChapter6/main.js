var leftEye = document.getElementById("lefteye");

leftEye.style.backgroundColor = "purple";

setInterval(function() {
  var currentLeft = parseInt(leftEye.style.left, 10);
  leftEye.style.left = (currentLeft + 1) + "px";
}, 100);
