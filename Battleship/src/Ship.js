var Ship = function(name) {
	if(name === "barco de patrulha"){
		return [1,1];
	}
	if (name === "destroyer") {
		return [2,2,2];
	}
	if (name === "submarino") {
		return [3,3,3];
	}
	if (name === "encouraçado") {
		return [4,4,4,4];
	}
	if (name === "porta-aviões") {
		return [5,5,5,5,5];
	}
}