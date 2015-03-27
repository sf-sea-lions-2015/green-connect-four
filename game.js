//create function for players
//create function for board (game)

//when click number (1-7), select a class ".header .column 1-7", highlight it with player color.
// when click enter, place the disc to the last child of the row that doesn't have "class filled?"
// change the background color of row x column y.
// logic for checking
// when background color is changed, give it a class called "filled?"
// if not filled, place disc in, else place the disc in the row above.
row_count = [1,1,1,1,1,1,1];

var Player = function(name, color){
  this.name = name;
  this.color = color
};

var player1 = new Player('player1', 'red');
var player2 = new Player('player2', 'black');
player = player1
// Player.prototype.dropDisc = function(){

// }

$('button').click(function(){
  // // console.log("hey");
  // if ($('td:nth-child('+ $(this).text()+') circle')){
  //   // console.log("hey")
  //   // console.log($('td.col1'))
  //   var index = parseInt($(this).text()) + 1
  //   // console.log($('td.col' + index))
  //   $('td.col' + index).css({backgroundColor: "yellow"})
  col_no = parseInt($(this).text());
  row_no = row_count[col_no -1];
  if (row_no > 6) {
    alert("filled already")
  } else {
    $('tr.row' + row_no + " td.col" + col_no + " svg circle").attr('fill', player.color);
    row_count[col_no-1]++;
    if (player === player1) {
      player = player2;
    } else {
      player = player1;
    };
  }

});

