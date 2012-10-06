function NumeroPrimo(numero) {

	this.fatores = function(){
		if(!this.isPrimo(numero)) {
			return this.retornaFator(numero);
		}
		return numero;
	}

	this.isPrimo = function(numero){
		var primos = [2, 3, 5, 7, 11];
		return primos.indexOf(numero) != -1;
	}

	this.retornaFator = function(numero){
		var fatores = [];
		var quociente = numero;
		for(i=2; i < numero / 2 + 1; i++){
			if(this.isPrimo(i) && quociente % i == 0){
				quociente /= i;
				fatores.push(i);
				i--;
			}
		}

		return fatores;
	}
}