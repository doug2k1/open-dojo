// xdescribe("Player", function() {

//   var player;
//   var field;
//   var ships;
  
//   beforeEach(function () {
//     player = new Player();
// 	field = new Field(10, 10);
// 	ships = [];
//   });
  
//   xit("should be able to set ship position", function () {
  
//   });
  
//   xit("should have five ships ", function() {
// 	expect(player).toHaveFiveShips();
//   });
  
//   xit("should be able to place a small ship in the first positions", function(){
// 	ships = [2];
// 	player.placeShip(ships[0], [0,1], "-");
// 	expect(player.field).toHave(ship);
//   });

// });


// xdescribe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrow("song is already playing");
//     });
//   });
// });