//Cells with non-positive or non-integer coordinates may break this module, use with caution.
var toBitmap=function(vector){
    if(vector.length===0){
	return [[]];
    }
    var xMax=vector[0][0];
    var yMax=vector[0][1];
    for(var i=0;i<vector.length;i++){
	if(vector[i][0]>xMax){
	    xMax=vector[i][0];
	}
	if(vector[i][1]>yMax){
	    yMax=vector[i][1];
	}
    }
    xMax+=3;
    yMax+=3;
    var column=[];
    for(var i=0;i<yMax;i++){
	column.push(0);
    }
    var bitmap=[];
    for(var i=0;i<xMax;i++){
	bitmap.push(column.slice());
    }
    for(var i=0;i<vector.length;i++){
	bitmap[vector[i][0]][vector[i][1]]=1;
    }
    return bitmap.slice();
};
var toBitmapCheck=function(){
    console.log("Result of calling toBitmap on the vector array [[2,1],[3,2],[1,3],[2,3],[3,3]]:");
    console.log(toBitmap([[2,1],[3,2],[1,3],[2,3],[3,3]]));
    console.log("Expected result:");
    console.log("[ [ 0, 0, 0, 0, 0, 0 ],\n  [ 0, 0, 0, 1, 0, 0 ],\n  [ 0, 1, 0, 1, 0, 0 ],\n  [ 0, 0, 1, 1, 0, 0 ],\n  [ 0, 0, 0, 0, 0, 0 ],\n  [ 0, 0, 0, 0, 0, 0 ] ]");
};
module.exports={
    toBitmap:toBitmap,
    toBitmapCheck:toBitmapCheck
};
