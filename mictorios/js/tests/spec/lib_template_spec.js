describe("Distribuicao de Mictorios", function() {
  beforeEach(function(){
     
  });
  
  //You must remove the x from the beginning to run the test.
  it("Deve retornar todos os mictorios livres", function() {
   var mic = new Mictorios([0,0]);
   expect(mic.livres()).toEqual(1);
   mic = new Mictorios([0,0,0]);
   expect(mic.livres()).toEqual(2);
  });

  it("Deve retornar a quantidade de posições livres usaveis", function() {
   var mic = new Mictorios([0,0,1]);
   expect(mic.livres()).toEqual(1);
  });

  it("Se um fdp ocupou a posição do meio, deve retornar 0", function() {
  	expect(new Mictorios([0,1,0]).livres()).toEqual(0);
  });

  it("Se a primeira e ultima posição de 4 mictorios estiver ocupada, deve retornar 0", function(){
  	expect(new Mictorios([1,0,0,1]).livres()).toEqual(0);
  });

  it("Com 5 posicoes e msm casal, deve retornar 0", function() {
    expect(new Mictorios([1,0,0,1,0]).livres()).toEqual(0);
  });

  it("Com 4 posicoes dois do meio ocupados, deve retornar 0", function() {
    expect(new Mictorios([0,1,1,0]).livres()).toEqual(0);
  });

  it("Com 5 posicoes dois do meio ocupados, deve retornar 1", function() {
    expect(new Mictorios([0,1,1,0,0,0]).livres()).toEqual(1);
  });

  it("Com 5 posicoes vazias", function() {
    expect(new Mictorios([0,0,0,0,0]).livres()).toEqual(2);
  });

  it("Com uma mulher", function() {
    expect(new Mictorios([2,0,0,0,0]).livres()).toEqual();
  });
});