var bitmap=require("./vectortobitmap.js");
var vector=require("./bitmaptovector.js");
var step=function(cells,map){
    if(cells.length===0){
	return [];
    }
    //Recenter.
    var xMin=cells[0][0];
    var yMin=cells[0][1];
    for(var i=0;i<cells.length;i++){
	if(cells[i][0]<xMin){
	    xMin=cells[i][0];
	}
	if(cells[i][1]<yMin){
	    yMin=cells[i][1];
	}
    }
    xMin-=2;
    yMin-=2;
    for(var i=0;i<cells.length;i++){
	cells[i][0]-=xMin;
	cells[i][1]-=yMin;
    }
    var currentGen=bitmap.toBitmap(cells);
    var nextGen=currentGen.slice();
    for(var x=1;x<currentGen.length-1;x++){
	for(var y=1;y<currentGen[0].length-1;y++){
	    //The 1*map[index] part gurantees a number, as the following JavaScript multiplication table shows:
	    //---------------
	    //|*|"0"|"1"|0|1|
	    //---------------
	    //|1| 0 | 1 |0|1|
	    //---------------
	    //That way, we can use a MAP string, or a MAP array.
	    //This procedure sets the cells to the next generation according to the given MAP string or MAP array.
	    nextGen[x][y]=1*map[256*currentGen[x-1][y-1]+128*currentGen[x][y-1]+64*currentGen[x+1][y-1]+32*currentGen[x-1][y]+16*currentGen[x][y]+8*currentGen[x+1][y]+4*currentGen[x-1][y+1]+2*currentGen[x][y+1]+currentGen[x+1][y+1]];
	}
    }
    var nextGenCells=vector.toVector(nextGen);
    for(var i=0;i<nextGenCells.length;i++){
	nextGenCells[i][0]+=xMin;
	nextGenCells[i][1]+=yMin;
    }
    return nextGenCells;
};
var stepCheck=function(){
    console.log("Result of calling step on [[0,0]] with a MAP string of \"0\"+\"1\".repeat(511):");
    console.log(step([[0,0]],"0"+"1".repeat(511)));
    console.log("Expected result:");
    console.log("[ [ -1, -1 ],\n  [ -1, 0 ],\n  [ -1, 1 ],\n  [ 0, -1 ],\n  [ 0, 0 ],\n  [ 0, 1 ],\n  [ 1, -1 ],\n  [ 1, 0 ],\n  [ 1, 1 ] ]");
};
module.exports={
    step:step,
    stepCheck:stepCheck
};

