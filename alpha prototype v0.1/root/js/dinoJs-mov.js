//================== Movement Handleing ======================//

//defines starting position
function startPosition(){
	var cell = map.querySelector("."+ sp);
	var ppNode = document.createElement("div");
	ppNode.setAttribute("id", "playerIcon");
	cell.appendChild(ppNode);
}

//creates compass gui
function createCompass(){
	var compass = document.querySelector(".nav_compass");
	/*north button*/
	var nButton = document.createElement("div");
	nButton.addEventListener("click", moveNorth);
	var nText = document.createTextNode("N");
	nButton.appendChild(nText);
	nButton.setAttribute("class", "nav_button1");
	compass.appendChild(nButton);
	/*north west button*/
	var nwButton = document.createElement("div");
	nwButton.addEventListener("click", moveNorthWest);
	var nwText = document.createTextNode("NW");
	nwButton.appendChild(nwText);
	nwButton.setAttribute("class", "nav_button2");
	compass.appendChild(nwButton);
	/*north east button*/
	var neButton = document.createElement("div");
	neButton.addEventListener("click", moveNorthEast);
	var neText = document.createTextNode("NE");
	neButton.appendChild(neText);
	neButton.setAttribute("class", "nav_button2");
	compass.appendChild(neButton);
	/*west button*/
	var wButton = document.createElement("div");
	wButton.addEventListener("click", moveWest);
	var wText = document.createTextNode("W");
	wButton.appendChild(wText);
	wButton.setAttribute("class", "nav_button3");
	compass.appendChild(wButton);
	/*east button*/
	var eButton = document.createElement("div");
	eButton.addEventListener("click", moveEast);
	var eText = document.createTextNode("E");
	eButton.appendChild(eText);
	eButton.setAttribute("class", "nav_button3");
	compass.appendChild(eButton);
	/*south west button*/
	var swButton = document.createElement("div");
	swButton.addEventListener("click", moveSouthWest);
	var swText = document.createTextNode("SW");
	swButton.appendChild(swText);
	swButton.setAttribute("class", "nav_button4");
	compass.appendChild(swButton);
	/*south east button*/
	var seButton = document.createElement("div");
	seButton.addEventListener("click", moveSouthEast);
	var seText = document.createTextNode("SE");
	seButton.appendChild(seText);
	seButton.setAttribute("class", "nav_button4");
	compass.appendChild(seButton);
	/*south button*/
	var sButton = document.createElement("div");
	sButton.addEventListener("click", moveSouth);
	var sText = document.createTextNode("S");
	sButton.appendChild(sText);
	sButton.setAttribute("class", "nav_button5");
	compass.appendChild(sButton);
	

}

//Finds current coord
function findMyCurrent(cpp){
	var cell = document.getElementById("playerIcon").parentNode.className;
	return cell.substr(0, 6);
	
}

//========== direction functions ==========//
function moveNorth(evt){
	console.log("yay! N");
	cpp = findMyCurrent(cpp);
	var xPos = parseInt(cpp.substr(1, 2));
	var yPos = parseInt(cpp.substr(4, 6));
	var newX = xPos - 1;
	var newY = yPos + 0;
	movementEffect(newX, newY);	
}

function moveNorthEast(evt){
	console.log("yay! NE");
	cpp = findMyCurrent(cpp);
	var xPos = parseInt(cpp.substr(1, 2));
	var yPos = parseInt(cpp.substr(4, 6));
	var newX = xPos - 1;
	var newY = yPos + 1;
	movementEffect(newX, newY);	
}

function moveEast(evt){
	console.log("yay! E");
	cpp = findMyCurrent(cpp);
	var xPos = parseInt(cpp.substr(1, 2));
	var yPos = parseInt(cpp.substr(4, 6));
	var newX = xPos + 0;
	var newY = yPos + 1;
	movementEffect(newX, newY);	
}

function moveSouthEast(evt){
	console.log("yay! SE");
	cpp = findMyCurrent(cpp);
	var xPos = parseInt(cpp.substr(1, 2));
	var yPos = parseInt(cpp.substr(4, 6));
	var newX = xPos + 1;
	var newY = yPos + 1;
	movementEffect(newX, newY);	
}

function moveSouth(evt){
	console.log("yay! S");
	cpp = findMyCurrent(cpp);
	var xPos = parseInt(cpp.substr(1, 2));
	var yPos = parseInt(cpp.substr(4, 6));
	var newX = xPos + 1;
	var newY = yPos + 0;
	movementEffect(newX, newY);	
}

function moveSouthWest(evt){
	console.log("yay! SW");
	cpp = findMyCurrent(cpp);
	var xPos = parseInt(cpp.substr(1, 2));
	var yPos = parseInt(cpp.substr(4, 6));
	var newX = xPos + 1;
	var newY = yPos - 1;
	movementEffect(newX, newY);	
}

function moveWest(evt){
	console.log("yay! W");
	cpp = findMyCurrent(cpp);
	var xPos = parseInt(cpp.substr(1, 2));
	var yPos = parseInt(cpp.substr(4, 6));
	var newX = xPos + 0;
	var newY = yPos - 1;
	movementEffect(newX, newY);	
}

function moveNorthWest(evt){
	console.log("yay! NW");	
	cpp = findMyCurrent(cpp);
	var xPos = parseInt(cpp.substr(1, 2));
	var yPos = parseInt(cpp.substr(4, 6));
	var newX = xPos - 1;
	var newY = yPos - 1;
	movementEffect(newX, newY);	
	
}

//Moves #playerIcon
function movementEffect(newX, newY){
	if(newX<1 || newX>10){
		movementError();
	}else if(newY<1 || newY>20){
		movementError();
	}else{
		var newPos = buildCoord(newX, newY);
		var bCell = document.getElementById("playerIcon").parentNode;
		var nCell = document.querySelector("." + newPos);
		var icon = document.getElementById("playerIcon");
		var nIcon = document.createElement("div");
		nIcon.setAttribute("id", "playerIcon");
		bCell.removeChild(icon);
		nCell.appendChild(nIcon);
	}
}

//for invalid movement
function movementError(){
	alert("Invalid Movement");
}
//=====================================//