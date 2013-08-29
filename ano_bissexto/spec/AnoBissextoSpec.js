describe ("Não são anos bissextos", function(){
  it("1742 pois não é divisível por 4", function(){
    var ano = 1742;
    expect(isBissexto(ano)).toBeFalsy();
  });

  it("1700 pois é divisível por 100 e não por 400", function(){
    var ano = 1700;
    expect(isBissexto(ano)).toBeFalsy();
  })

});

describe ("São anos bissextos", function(){
  it ("2000", function() {
    expect(isBissexto(2000)).toBeTruthy();
  });

  it("2008", function() {
    expect(isBissexto(2008)).toBeTruthy();
  });

});

xdescribe("Um ano bissexto", function() {
  xit("Valido deve ser divisivel por 4", function() {
      var ano = 2000;
      expect(dividido4(ano)).toBeTruthy();
  });

  xit("Invalido não deve ser divisivel por 4", function(){
    var ano = 1742;
    expect(dividido4(ano)).toBeFalsy();
  });

  xit("Invalido deve ser divisivel por 100 e não divisível por 400", function(){
     var ano = 1700;
     expect(dividido100(ano)).toBeTruthy();
     expect(dividido400(ano)).toBeFalsy();
  });

  xit("Valido deve ser divisivel por 400", function (){
    var ano = 1600;
    expect(dividido400(ano)).toBeTruthy();
  })

  xit("Valido deve ser divisivel por 4, mas não deve ser divivel por 100, exceto se for divisivel por 400", function () {
        var ano = 2008;
        expect(isBissexto(ano)).toBeTruthy();
  })

});
