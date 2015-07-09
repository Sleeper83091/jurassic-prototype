function preBuiltMaps(item, xy){	
	switch(result){
		case 1:
			testMap(item, xy);
			break;
		case 2:
			balancedMap1(item, xy);
			break;
		default:
			alert("an error occured: location preBuiltMaps");
	}
} 
//============= Preset map 1 (Test Map) ==============//
function testMap(item, xy){
  //coordinates x,y presented in x##y## format
  var rainForrest = ["x01y01", "x01y02", "x01y03", "x01y04", "x01y05", "x01y06", 
                     "x01y07", "x01y08", "x01y09", "x01y10", "x02y01", "x02y02", 
                     "x02y03", "x02y04", "x02y05", "x02y06", "x02y07", "x02y08", 
                     "x02y09", "x02y10", "x03y01", "x03y02", "x03y03", "x03y04",
                     "x03y05", "x03y06", "x03y07", "x03y08", "x04y01", "x04y02", 
                     "x04y03", "x04y04", "x04y05", "x04y06"];
  var forrest = ["x01y11", "x01y12", "x01y13", "x01y14", "x02y11", "x02y12", 
                 "x02y13", "x02y14", "x03y09", "x03y10", "x03y11", "x03y12", 
                 "x03y13", "x03y14", "x04y07", "x04y08", "x04y09", "x04y10", 
                 "x05y01", "x05y02", "x05y03", "x05y04", "x05y05", "x05y06", "x05y07",
                 "x05y08", "x05y09", "x05y10", "x06y01", "x06y02", "x06y03", "x06y04",
                 "x06y05", "x06y06", "x06y07", "x07y01", "x07y02"];
  var river = ["x01y17", "x01y18", "x02y17", "x02y18", "x03y17", "x03y18",
               "x04y11", "x04y12", "x04y13", "x04y14", "x04y15", "x04y16",
               "x04y17", "x05y11", "x05y12", "x05y13", "x05y14", "x05y15",
               "x05y16", "x06y8", "x06y9", "x06y10", "x06y11", "x06y12", 
               "x06y13", "x06y14", "x06y15", "x07y06", "x07y07", "x07y08", 
               "x07y09", "x07y10", "x08y03", "x08y04", "x08y05", "x08y06", "x09y02",
               "x09y03", "x09y04", "x10y01", "x10y02"];
  var desert = ["x05y19", "x05y20", "x06y18", "x06y19", "x06y20", "x07y17", 
                "x07y18", "x07y19", "x07y20", "x08y14", "x08y15", "x08y16",
                "x08y17", "x08y18", "x08y19", "x08y20", "x09y10", "x09y11",
                "x09y12", "x09y13", "x09y14", "x09y15", "x09y16", "x09y17",
                "x09y18", "x09y19", "x09y20", "x10y09", "x10y10", "x10y11",
                "x10y12", "x10y13", "x10y14", "x10y15", "x10y16", "x10y17",
                "x10y18", "x10y19", "x10y20"];
  var xyValue1 = (rainForrest.indexOf(xy))/1>=0;
  var xyValue2 = (forrest.indexOf(xy))/1>=0;
  var xyValue3 = (river.indexOf(xy))/1>=0;
  var xyValue4 = (desert.indexOf(xy))/1>=0;
  var resultRF = xy + " rainForrest";
  var resultLF = xy + " forrest";
  var resultRv = xy + " river";
  var resultDs = xy + " desert";
  var resultPl = xy + " plains";
  if (xyValue1){
    item.className = resultRF;
  }else if(xyValue2){
    item.className = resultLF;
  }else if(xyValue3){
    item.className = resultRv;
  }else if(xyValue4){
    item.className = resultDs;
  }else{
    item.className = resultPl;
  }
}

//============= Preset map 1 (Test Map) ==============//
function balancedMap1(item, xy){
  //coordinates x,y presented in x##y## format
  var rainForrest = ["x01y01", "x01y02", "x01y03", "x01y04", "x01y05", "x01y06", 
  					 "x02y01", "x02y02", "x02y03", "x02y04", "x02y05", "x03y01", 
  					 "x03y02", "x03y03", "x03y04", "x03y05", "x04y01", "x04y02", 
  					 "x04y03", "x04y04", "x04y05", "x05y01", "x05y02", "x05y03", 
  					 "x05y04", "x06y01", "x06y02", "x06y03", "x06y04", "x07y01", 
  					 "x07y02", "x07y03", "x08y01", "x08y02", "x08y03", "x09y01", 
  					 "x09y02", "x10y01"];
  var forrest = ["x01y07", "x01y08", "x02y06", "x02y07", "x02y08", "x03y06", "x03y07", 
  				 "x04y06", "x04y07", "x05y05", "x05y06", "x05y07", "x06y05", "x06y06", 
  				 "x06y07", "x07y04", "x07y05", "x07y06", "x08y04", "x08y05", "x09y03", 
  				 "x09y04", "x10y02", "x10y03", "x10y04"]
  var river = ["x01y14", "x01y15", "x02y12", "x02y12", "x02y13", "x02y14", "x02y15", 
  			   "x03y12", "x03y13", "x04y12", "x04y13", "x05y12", "x05y13", "x06y13", 
  			   "x07y13", "x08y13", "x08y14", "x09y13", "x09y14", "x10y13", "x10y14",];
  var desert = ["x01y18", "x01y19", "x01y20", "x02y18", "x02y19", "x02y20", "x03y18", 
  				"x03y19", "x03y20", "x04y17", "x04y18", "x04y19", "x04y20", "x05y16", 
  				"x05y17", "x05y18", "x05y19", "x05y20", "x06y16", "x06y17", "x06y18", 
  				"x06y19", "x06y20", "x07y15", "x07y16", "x07y17", "x07y18", "x07y19", 
  				"x07y20", "x08y15", "x08y16", "x08y17", "x08y18", "x08y19", "x08y20", 
  				"x09y15", "x09y16", "x09y17", "x09y18", "x09y19", "x09y20", "x10y15", 
  				"x10y16", "x10y17", "x10y18", "x10y19", "x10y20",];
  var xyValue1 = (rainForrest.indexOf(xy))/1>=0;
  var xyValue2 = (forrest.indexOf(xy))/1>=0;
  var xyValue3 = (river.indexOf(xy))/1>=0;
  var xyValue4 = (desert.indexOf(xy))/1>=0;
  var resultRF = xy + " rainForrest";
  var resultLF = xy + " forrest";
  var resultRv = xy + " river";
  var resultDs = xy + " desert";
  var resultPl = xy + " plains";
  if (xyValue1){
    item.className = resultRF;
  }else if(xyValue2){
    item.className = resultLF;
  }else if(xyValue3){
    item.className = resultRv;
  }else if(xyValue4){
    item.className = resultDs;
  }else{
    item.className = resultPl;
  }
}

//<============= map template ==============>\\
/*
function //map name here(item, xy){
  //coordinates x,y presented in x##y## format
  var rainForrest = [//enter coordinates];
  var forrest = [//enter coordinates;
  var river = [//enter coordinates];
  var desert = [//enter coordinates];
  var xyValue1 = (rainForrest.indexOf(xy))/1>=0;
  var xyValue2 = (forrest.indexOf(xy))/1>=0;
  var xyValue3 = (river.indexOf(xy))/1>=0;
  var xyValue4 = (desert.indexOf(xy))/1>=0;
  var resultRF = xy + " rainForrest";
  var resultLF = xy + " forrest";
  var resultRv = xy + " river";
  var resultDs = xy + " desert";
  var resultPl = xy + " plains";
  if (xyValue1){
    item.className = resultRF;
  }else if(xyValue2){
    item.className = resultLF;
  }else if(xyValue3){
    item.className = resultRv;
  }else if(xyValue4){
    item.className = resultDs;
  }else{
    item.className = resultPl;
  }
}
*/