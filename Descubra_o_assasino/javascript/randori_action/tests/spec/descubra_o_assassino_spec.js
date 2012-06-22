describe("Crime", function(){
    xit("possui uma lista de suspeitos, locais e armas.", function(){
        var crime     = new Crime();
        var suspeitos = crime.get_suspeitos();
        var locais    = crime.get_locais();
        var armas     = crime.get_armas();

        expect(suspeitos.length).toEqual(6);
        expect(locais.length).toEqual(10);
        expect(armas.length).toEqual(6);
    });
});

describe("Testemunha", function(){
    beforeEach(function(){
        crime = new Crime();
        testemunha = new Testemunha(crime);
    });

    it("deve conhecer o crime dizendo o assassino, local e arma", function(){
        crime = new Crime();
        testemunha = new Testemunha(crime);

        testemunha.reconstituir_crime();
        expect(testemunha.get_assassino()).not.toBeNull();
        expect(testemunha.get_local()).not.toBeNull();
        expect(testemunha.get_arma()).not.toBeNull();
    });

    it("não estava presente.", function(){
        expect(function(){ new Testemunha() }).toThrow(new Error("Testemunha deve conhecer o crime."));
    });

    it("apenas o assassino está inválido", function(){
        var teoria = new Array();
        teoria.push("Patrik");
        teoria.push("Cit");
        teoria.push("Mouse");

        var detetive = new Detetive(crime);
        spyOn(detetive, "elaborar_teoria").andCallFake(function(){ return teoria; });

        var pista    = detetive.elaborar_teoria();

        //var testemunha = new Testemunha(crime);
        console.log(testemunha);
        spyOn(testemunha, "get_assassino").andCallFake(function(){ return "Handrus"; });
        spyOn(testemunha, "get_local").andCallFake(function(){ return pista[1]; });
        spyOn(testemunha, "get_arma").andCallFake(function(){ return pista[2]; });

        var codigo   = testemunha.confirmar_teoria(pista);

        //expect(codigo).toBeInside(["1"]);
  });


});

describe("Detetive", function(){


    it("deve saber elaborar teoria", function() {
        var crime = new Crime();
        var detetive = new Detetive(crime);

        var teoria = detetive.elaborar_teoria();

        var suspeito = teoria[0];
        var local    = teoria[1];
        var arma     = teoria[2];

        expect(crime.get_suspeitos()).toContain(suspeito);
        expect(crime.get_locais()).toContain(local);
        expect(crime.get_armas()).toContain(arma);
    });

    it("deve solucionar o caso")
});