function b () {
	// body...
	var myVar; 

console.log(myVar);
}
function a () {
	// body...
	var myVar=2;
	
console.log(myVar);
	b(); 
}

var myVar=1;

console.log(myVar);
a();
console.log(myVar);