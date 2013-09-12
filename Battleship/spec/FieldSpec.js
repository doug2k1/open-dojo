//Map 1 x 1
//method show map
//method hit 
//method show log

describe("Campo", function() {
	var field;

	beforeEach(function() {
		field = new Field();
	});

	xit("should be able to have one ship", function() {
		var ship = new Ship(2);
		field.place(ship);
	});

	it("instanciado deveria ter 10x10.", function() {
		// var expectedField = [[0,0,0,0,0,0,0,0,0,0],
		// 					 [0,0,0,0,0,0,0,0,0,0],
		// 					 [0,0,0,0,0,0,0,0,0,0],
		// 					 [0,0,0,0,0,0,0,0,0,0],
		// 					 [0,0,0,0,0,0,0,0,0,0],
		// 					 [0,0,0,0,0,0,0,0,0,0],
		// 					 [0,0,0,0,0,0,0,0,0,0],
		// 					 [0,0,0,0,0,0,0,0,0,0],
		// 					 [0,0,0,0,0,0,0,0,0,0],
		// 					 [0,0,0,0,0,0,0,0,0,0]];

		expect(field.field.length).toBe(10);

		for(var i = 0; i< field.length; i++){
			expect(field.field[i].length).toBe(10);
		}
	});

	xit("instanciado está vazio.", function() {

	});

	it("instanciado, deve ser possivel posicionar um navio", function() {
		var ship = Ship("barco de patrulha");

		expect(field.placeShip(ship, 0, 0)).toBeTruthy();

	});

	it("deve ser possivel inserir barco de patrulha na posição 0x0", function() {
		var ship = Ship("barco de patrulha");
        // Deve verificar se a posição 0x0 possui um barco de patrulha333
		expect(field.placeShip(ship, 0, 0)).toBeTruthy;

		expect(field.field[0][0]).toBe(1);
		expect(field.field[0][1]).toBe(1);

		// it("a posição 0x0 e a posição 0x1 devem estar ocupadas", function() {
		// 	expect(field.field[0][0]).toBe("1");
		// 	expect(field.field[0][1]).toBe("1");
		// });
	});

	it("Deve retornar false para barcos invalidos", function(){
		expect(field.placeShip([1], 0, 0)).toBeFalsy();
	});

	it("com seu range ocupado deve retornar falso", function() {
		var ship1 = Ship("barco de patrulha");
		field.placeShip(ship1, 0, 1);
		expect(field.placeShip(ship1, 0, 0)).toBeFalsy();
	});

	it("com seu range ocupado nao deve ocupar nenhuma posição", function() {
		var ship1 = Ship("barco de patrulha");
		field.placeShip(ship1, 0, 1);
		field.placeShip(ship1, 0, 0);

		expect(field.field[0][0]).toBe(0);
	});

	// verifica se a posicao escolhida do barco é menor que o total de espaço disponível
	it("", function(){

	});
});