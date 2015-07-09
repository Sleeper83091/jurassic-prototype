//=+=///////////########### Map Creation ###########/////////////=+=//

//========== Makes Map grid in html ===============//
function createGrid(num){
  var rowItems = num*2;
  for(var x=1; x<=num; x++){
    var row = document.createElement("div");
    row.className = "row";
    for(var y=1; y<=rowItems; y++){
      var coord = buildCoord(x, y);
      var cell = document.createElement("div");
      var xy = x + "," + y;
      cell.setAttribute("class", coord); 
      cell.setAttribute("coord", xy);
      row.appendChild(cell); 
    }
    map.appendChild(row);
  }
}

//============= Prepares cells to have region attached =============//
function  buildMap(){
  var rows = 10; //for use if called from createGrid()
  var rowItems = rows*2;
  for(var x=1; x<=rows; x++){
    for(var y=1; y<=rowItems; y++){
      var coord = buildCoord(x, y);
      var xyC = "." + coord;
      var item = map.querySelector(xyC);
      preBuiltMaps(item, coord);
    }
  }
}

function buildCoord(x, y){
  var vX = x;
  var vY = y;
  if(vX >= 10 && vY >= 10){
    return "x" + x + "y" + y;
  }else if(vX >= 10 && vY < 10){
    return "x" + x + "y0" + y;
  }else if(vX < 10 && vY >= 10){
    return "x0" + x + "y" + y;
  }else if(vX < 10 && vY < 10){
    return "x0" + x + "y0" + y;
  }else
    console.log("We have a logic error, this shouldnt happen");
}



//=+=///////////########### END OF Map Creation ###########/////////////=+=//