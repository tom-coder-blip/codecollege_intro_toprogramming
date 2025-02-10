var leftEye = document.getElementById("lefteye");

leftEye.style.backgroundColor = "purple";

setInterval(function() {
  var currentLeft = parseInt(leftEye.style.left, 10);
  leftEye.style.left = (currentLeft + 2) + "px";
}, 100);

