describe("Game", function(){
    beforeEach(function(){
        game = new Game(100);
    });

    it("deve começar com 100 pontos", function(){
        expect(game.score()).toEqual(100);
    });

    it("deve dobrar os pontos quando for cara.", function(){
        spyOn(game, "play").andCallFake(function(){ return 'cara' });
        var face = game.play();
        expect(game.score(face)).toEqual(200);
    });

    it("deve perder 2/3 dos pontos quando for coroa", function(){
        spyOn(game, "play").andCallFake(function(){ return 'coroa' });
        var face = game.play();
        expect(game.score(face)).toEqual(33);
    });
});

