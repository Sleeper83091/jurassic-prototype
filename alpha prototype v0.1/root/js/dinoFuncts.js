var map = document.querySelector('.nav_map'); 
var mapNum = 2;
var result = Math.floor((Math.random() * mapNum) + 1);
createGrid(10);
buildMap();
var sp = "x07y04"; //Starting Player Position
var cpp = "";	//current position
startPosition();
createCompass();

