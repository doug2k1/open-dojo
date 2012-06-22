describe("ContadorNumeros", function() {
  beforeEach(function(){

  });

  //You must remove the x from the beginning to run the test.
  it("retorne o numero por extenso", function() {
    var contador = ContadorNumeros;

    contador.setNumero(1);
    expect(contador.extenso()).toEqual("um");
    contador.setNumero(2);
    expect(contador.extenso()).toEqual("dois");
    contador.setNumero(3);
    expect(contador.extenso()).toEqual("três");
    contador.setNumero(100);
    expect(contador.extenso()).toEqual("cem");
  });
});