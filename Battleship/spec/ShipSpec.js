// Cada jogador deve dispor de uma área de 10x10 onde ele vai posicionar 5 
// navios de tamanhos diferentes: um porta-aviões (comprimento 5), 
// um encouraçado (comprimento 4), um submarino e um destroyer (ambom de comprimento 3), 
// e barco de patrulha (comprimento 2). Um jogador nunca deve saber a posição dos navios
// do oponente. Os navios de um mesmo jogador não podem se cruzar e devem estar dentro 
// das fronteiras da sua área disponível.

describe("Um navio", function() {
	it("de patrulha deveria ter tamanho igual a 2", function(){
		var navio = Ship(ShipTypes.PATRULHA);
		expect(navio.length).toBe(2);
	});
	it("destroyer deveria ter tamanho igual a 3", function(){
		var navio = Ship(ShipTypes.DESTROYER);
		expect(navio.length).toBe(3);
	});
	it("submarino deveria ter tamanho igual a 3", function(){
		var navio = Ship(ShipTypes.SUBMARINO);
		expect(navio.length).toBe(3);
	});
	it("encouraçado deveria ter tamanho igual a 4", function(){
		var navio = Ship(ShipTypes.ENCOURACADO);
		expect(navio.length).toBe(4);
	});
	it("porta-aviões deveria ter tamanho igual a 5", function(){
		var navio = Ship(ShipTypes.PORTA_AVIOES);
		expect(navio.length).toBe(5);
	});
});