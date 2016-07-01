
var x = 5;

var addX = function(value){

	return value+x;

};


// exports.addX or module.exports.addX = addX;, both are the same as initially 
// module.exports = exports is executed
// module.exports is the one which is eventually returned by require()

module.exports.addX = addX;


//this wont work as we are changing exports to a new reference, but it is module.exports which is returned
//exports = addX;



//this works as exports reference is not being changed so, module.exports still points to this same exports
//exports.addX = addX;

//this works, we need to access the function directly from what require() returns
// module.exports = addX;