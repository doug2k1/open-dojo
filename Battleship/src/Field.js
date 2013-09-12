var Field = function() {

	this.field = new Array(10);
	for (var i = 0; i < 10; i++) {
		this.field[i] = [0,0,0,0,0,0,0,0,0,0];
	}
	
	// 0 - Water;
	// > 0 - Ship;
	// X - Right Shot;

	this.placeShip = function(ship, posX, posY) {
		console.log(this.field);
		var shipSize = ship.length;
		// TODO ... assumindo inicialmente que a orientação é horizontal
		if ( !(shipSize > 1 && shipSize < 6)) {
			return false;
		}

		for(var i = 0; i <= shipSize; i++){
			if(this.field[posX][posY + i] != 0){
				if(i !=0){
					for(var j = i-1; j >= 0; j--){
						this.field[posX][posY+j] = 0;
					}	
				}
				
				return false;
			} 

			this.field[posX][posY + i] = 1;
		}


		return true;
	}
}