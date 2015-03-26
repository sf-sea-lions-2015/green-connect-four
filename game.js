//create function for players
//create function for board (game)

//when click number (1-7), select a class ".header .column 1-7", highlight it with player color.
// when click enter, place the disc to the last child of the row that doesn't have "class filled?"
// change the background color of row x column y.
// logic for checking
// when background color is changed, give it a class called "filled?"
// if not filled, place disc in, else place the disc in the row above.

var Player = function(name){
  this.name = name;
};

// var Board = function(){

// };

var player1 = new Player('player1');
var player2 = new Player('player2');

// Player.prototype.dropDisc = function(){

// }

$('button').click(function(){
  // console.log();
  if ($('td:nth-child('+ $(this).text()+')').hasClass('filled')
  .('fi.css({backgroundColor: "yellow"});
})

