describe("Juiz", function() {
	it("recebe Pedra e Pedra e espera Empate", function(){
		var juiz = new Juiz("Pedra","Pedra");
		expect(juiz.resultado()).toEqual("Empate");
	});

	it("recebe Pedra e Tesoura e espera Pedra", function () {
		var juiz = new Juiz("Pedra", "Tesoura");
		expect(juiz.resultado()).toEqual("Pedra");

		var juiz = new Juiz("Tesoura", "Pedra");
		expect(juiz.resultado()).toEqual('Pedra');
	});

	it("recebe Pedra e Papel e espera retorno = Papel", function () {
		var juiz = new Juiz("Pedra", "Papel");
		expect(juiz.resultado()).toEqual('Papel');

		var juiz = new Juiz("Papel", "Pedra");
		expect(juiz.resultado()).toEqual('Papel');
	});

	it("recebe Tesoura e Papel e espera retorno = Papel", function () {
		var juiz = new Juiz("Tesoura", "Papel");
		expect(juiz.resultado()).toEqual('Tesoura');

		var juiz = new Juiz("Papel", "Tesoura");
		expect(juiz.resultado()).toEqual('Tesoura');
	});

	it("recebe uma jogada inválida e retorna 'Jogada Invalida'", function() {
		expect(function() {new Juiz("Bacon", "Lasanha")}).toThrow(new Error("Jogada Invalida"));
	});


});

// describe("Jogada", function() {
//   beforeEach(function(){

//   });

//   //You must remove the x from the beginning to run the test.
//   it("Jogada um é válida?", function() {
//   	var jogador1 = new Jogador('Pedra');
//   	expect(['Pedra','Papel', 'Tesoura']).toContain(jogador1.getJogada());
//   });
// });