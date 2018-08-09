//The resulting vector will only have cells with positive integer coordinates.
var toVector=function(bitmap){
    if(bitmap.length===1){
	//We need nested if loops, because if bitmap.length is 0, then bitmap[0] will crash the program.
	if(bitmap[0].length===0){
	    return [];
	}
    }
    var vector=[];
    for(var x=0;x<bitmap.length;x++){
	for(var y=0;y<bitmap[0].length;y++){
	    if(bitmap[x][y]){
		vector.push([x,y]);
	    }
	}
    }
    return vector;
};
var toVectorCheck=function(){
    console.log("Result of calling toVector on the bitmap [[0,0,0,0,0],[0,0,0,1,0],[0,1,0,1,0],[0,0,1,1,0],[0,0,0,0,0]]:");
    console.log(toVector([[0,0,0,0,0],[0,0,0,1,0],[0,1,0,1,0],[0,0,1,1,0],[0,0,0,0,0]]));
    console.log("Expected result:");
    console.log("[ [ 1, 3 ], [ 2, 1 ], [ 2, 3 ], [ 3, 2 ], [ 3, 3 ] ]");
};
module.exports={
    toVector:toVector,
    toVectorCheck:toVectorCheck
};
