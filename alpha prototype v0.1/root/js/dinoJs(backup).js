var map = document.querySelector('.nav_mov'); 
createGrid(10);
var square = map.querySelector('.gridsquare'); 
buildMap();


//========== Makes Map grid in html ===============//
function createGrid(num){
  var rowItems = num*2;
  for(var x=1; x<=num; x++){
    var row = document.createElement("div");
    row.className = "row";
    for(var y=1; y<=rowItems; y++){
      var coord = x + "," + y;
      var cell = document.createElement("div");
      cell.className = "gridsquare"; 
      cell.setAttribute("coord", coord);
      row.appendChild(cell); 
    }
    map.appendChild(row);
  }
}

//============= =============//
function  buildMap(){
  var rows = 10; //for use if called from createGrid()
  var rowItems = rows*2;
  var coord = square.getAttribute("coord");
  for(var x=1; x<=rows; x++){
    for(var y=1; y<=rowItems; y++){
      var item = square.getAttribute("class");
      var coord = square.getAttribute("coord");
      var selector = x + "," + y;
      if(coord == selector){
        preBuiltMaps(coord);
      }
    }
  }
}

function preBuiltMaps(xy){
  var rainForrest = ["1,1", "1,2", "1,3", "1,4", "1,5", "1,6", 
                     "1,7", "1,8", "1,9", "1,10", "2,1", "2,2", 
                     "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", 
                     "2,9", "2,10", "3,1", "3,2", "3,3", "3,4",
                     "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", 
                     "4,3", "4,4", "4,5", "4,6"];
  var forrest = ["1,11", "1,12", "1,13", "1,14", "2,11", "2,12", 
                 "2,13", "2,14", "3,9", "3,10", "3,11", "3,12", 
                 "3,13", "3,14", "4,7", "4,8", "4,9", "4,10", 
                 "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7",
                 "5,8", "5,9", "5,10", "6,1", "6,2", "6,3", "6,4",
                 "6,5", "6,6", "6,7", "7,1", "7,2"];
  var river = ["1,17", "1,18", "2,17", "2,18", "3,17", "3,18",
               "4,11", "4,12", "4,13", "4,14", "4,15", "4,16",
               "4,17", "5,11", "5,12", "5,13", "5,14", "5,15",
               "5,16", "6,8", "6,9", "6,10", "6,11", "6,12", 
               "6,13", "6,14", "6,15", "7,6", "7,7", "7,8", 
               "7,9", "7,10", "8,3", "8,4", "8,5", "8,6", "9,2",
               "9,3", "9,4", "10,1", "10,2"];
  var desert = ["5,19", "5,20", "6,18", "6,19", "6,20", "7,17", 
                "7,18", "7,19", "7,20", "8,14", "8,15", "8,16",
                "8,17", "8,18", "8,19", "8,20", "9,10", "9,11",
                "9,12", "9,13", "9,14", "9,15", "9,16", "9,17",
                "9,18", "9,19", "9,20", "10,9", "10,10", "10,11",
                "10,12", "10,13", "10,14", "10,15", "10,16", "10,17",
                "10,18", "10,19", "10,20"];
  switch(xy){
    case rainForrest:
      square.className = "rainForrest";
      break;
    case forrest:
      square.className = "forrest";
      break;
    case river:
      square.className = "river";
      break;
    case desert:
      square.className = "desert";
      break;
    default:
      square.className = "plains";
  }
}