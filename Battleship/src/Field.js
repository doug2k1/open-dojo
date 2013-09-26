var Field = function() {

	this.field = new Array(10);
	for (var i = 0; i < 10; i++) {
		this.field[i] = [0,0,0,0,0,0,0,0,0,0];
	}
	
	// 0 - Water;
	// > 0 - Ship;
	// X - Right Shot;

	this.validShip = function(ship) {
		if ( !(ship.length > 1 && ship.length < 6)) {
			return false;
		}
		return true;
	}

	this.validPlace = function(ship, posX, posY){

		// ############################
		// TODO ... terminar a validação - paramos AQUI !!!!!
		// NÃO ESTÁ PRONTO
		// ############################

		for(var i = posY; i < shipSize; i++){
			if(this.field[posX][posY + i] != 0){
				return false;
			} 
		}
		return true;
	}

	this.placeShip = function(ship, posX, posY) {

		var shipSize = ship.length;
		// TODO ... assumindo inicialmente que a orientação é horizontal
		
		if (this.validShip(ship) && this.validPlace(ship, posX, posY)) {
			for(var i = 0; i < shipSize; i++){
				this.field[posX][posY + i] = 1;
			}

			return true;			
		}
		return false;
	}

	this.toString = function() {
		for(var i = 0; i < 10; i++){
			for (var j = 0; j < 10; j++) {
				document.write(this.field[i][j] + " ");
			}
			document.write("<br />");
		}
		document.write("<br /><br />");
	}
}