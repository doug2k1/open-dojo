describe("Caixa Eletronico", function() {
  beforeEach(function(){

  });

  //You must remove the x from the beginning to run the test.
  it("Valores devem ser multiplos de 10).", function() {
  		expect(function(){caixa.saque(21); }).toThrow(new Error('valor invalido'));
  		expect(function(){caixa.saque(100.75)}).toThrow(new Error('valor invalido'));
  });

  it("Valores devem ser positivos.", function(){
  	expect(function(){caixa.saque(0);}).toThrow(new Error('valor invalido'));
  	expect(function(){caixa.saque(-10);}).toThrow(new Error('valor invalido'));
  });

  it("Deve sacar o menor número de notas", function(){
    expect(caixa.saque(80)).toEqual({'50': 1, '20': 1, '10': 1});
    expect(caixa.saque(70)).toEqual({'50': 1, '20': 1});
    expect(caixa.saque(50)).toEqual({'50': 1});
  });

  it("Deve sacar o menor número de notas com notas finitas", function(){

    caixa.setQtdNotas({'100' : 1, '50' : 1, '20' : 2, '10' : 5});
    expect(caixa.saque(200)).toEqual({'100': 1, '50': 1, '20': 2, '10': 1});
  });
});