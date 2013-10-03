//Map 1 x 1
//method show map
//method hit 
//method show log

describe("Campo", function() {
	var field;

	beforeEach(function() {
		field = new Field();
		//field.toString();
	});

	xit("should be able to have one ship", function() {
		console.log("01");
		var ship = new Ship(2);
		field.place(ship);
	});

	it("instanciado deveria ter 10x10.", function() {
		console.log("02");
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
		console.log("04");
		var ship = Ship("barco de patrulha");

		expect(field.placeShip(ship, 0, 0)).toBeTruthy();
	});

	it("deve ser possivel inserir barco de patrulha na posição 0x0", function() {
		console.log("05");

		var ship = Ship(ShipTypes.PATRULHA);
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
		console.log("06");
		expect(field.placeShip([1], 0, 0)).toBeFalsy();
		expect(field.field[0][0]).toBe(0);
		console.log(field.field);
	});

	it("com seu range ocupado deve retornar falso", function() {
		console.log("07");
		console.log(field.field);
		var ship1 = Ship(ShipTypes.PATRULHA);
		field.placeShip(ship1, 0, 1);
		console.log(field.field);
		//expect(field.placeShip(ship1, 0, 0)).toBeFalsy();
	});

	it("com seu range ocupado nao deve ocupar nenhuma posição", function() {
		console.log("08");
		
		var ship1 = Ship(ShipTypes.PATRULHA);
		field.placeShip(ship1, 0, 1);
		field.placeShip(ship1, 0, 0);

		expect(field.field[0][0]).toBe(0);
		expect(field.field[0][1]).toBe(1);
		expect(field.field[0][2]).toBe(1);
		expect(field.field[0][3]).toBe(0);
	});

	it("deve haver espaço para insercao do barco", function(){
		console.log("09");
		var ship1 = Ship(ShipTypes.PATRULHA);
		expect(field.placeShip(ship1, 0, 9)).toBeFalsy();        
		expect(field.field[0][9]).toBe(0);
		expect(field.field[0][10]).toBeUndefined();
		expect(field.placeShip(ship1, 0, 0)).toBeTruthy();
		expect(field.field[0][2]).toBe(0);
		expect(field.field[0][0]).toBe(1);
		expect(field.field[0][1]).toBe(1);
	});

	it("não deve conseguir posicionar um navio num range fora do campo", function(){
		console.log("10");
		var ship1 = Ship(ShipTypes.PATRULHA);
		expect(field.placeShip(ship1,0,10)).toBeFalsy();
		expect(field.placeShip(ship1,10,0)).toBeFalsy();
		expect(field.placeShip(ship1,10,10)).toBeFalsy();
		expect(field.placeShip(ship1,15,12)).toBeFalsy();
		
	});
	// TDD com design patterns
	it("deve verificar posição antes do barco", function(){
		console.log("11");
		var ship1 = "";
		var ship2 = Ship(ShipTypes.PATRULHA);
		expect(field.placeShip(ship1, 10,10)).toBeFalsy();
		var excBlaBla = function()
		{
			field.placeShip(ship1,0,0);
		}
		expect(excBlaBla).toThrow();
		// TODO -> Refatorar a placeShip para lançar uma exception

		expect(field.placeShip(ship2,-20,-1)).toBeFalsy();
		expect(field.placeShip(ship2,0,0)).toBeFalsy();

	});
});