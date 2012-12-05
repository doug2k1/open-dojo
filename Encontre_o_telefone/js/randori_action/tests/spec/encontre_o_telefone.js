describe("Encontre o Telefone", function() {
  beforeEach(function(){

  });

  it("Validar Entrada de Dados - Tamanho", function(){
    EncontreTelefone.setString('my love qewrqerqewrqewrqwerqwerqerqwerqwerqerqwerqwerqwerqwerqwerqwerqrqwerqwerqwr');
    expect(function(){EncontreTelefone.convert()}).toThrow(new Error("Entrada invalida."));
  });

   it("Validar Entrada de Dados - Vazia", function(){
    EncontreTelefone.setString('');
    expect(function(){EncontreTelefone.convert()}).toThrow(new Error("Entrada invalida."));

  });

  it("Validar Entrada de Dados - Null", function(){
    EncontreTelefone.setString(null);
    expect(function(){EncontreTelefone.convert()}).toThrow(new Error("Entrada invalida."));
  });

  it("Validar Entrada de Dados - Valores fora do range", function(){
    EncontreTelefone.setString("####A");
    expect(function(){EncontreTelefone.convert()}).toThrow(new Error("Entrada invalida."));
  });


  xit("Deve sacar o menor número de notas com notas finitas", function(){

    caixa.setQtdNotas({'100' : 1, '50' : 1, '20' : 2, '10' : 5});
    expect(caixa.saque(200)).toEqual({'100': 1, '50': 1, '20': 2, '10': 1});
  });
});