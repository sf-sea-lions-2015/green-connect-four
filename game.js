//create function for players
//create function for board (game)

//when click number (1-7), select a class ".header .column 1-7", highlight it with player color.
// when click enter, place the disc to the last child of the row that doesn't have "class filled?"
// change the background color of row x column y.
// logic for checking
// when background color is changed, give it a class called "filled?"
// if not filled, place disc in, else place the disc in the row above.

var Player = function(name, color){
  this.name = name;
  this.color = color
};
row_count = [1,1,1,1,1,1,1];

var switch_turns = function() {
  if (player === player1) {
    player = player2;
  } else {
    player = player1;
  };
};

var reset_board = function() {
  row_count = [1,1,1,1,1,1,1];
  $('tr td svg circle').attr('fill',"white");
  switch_turns();
};

var horizontal_win = function(row_no) {
  var count = 0;
  for(var i = 1; i <=7; i++) {
    var color = $('tr.row' + row_no + ' td.col' + i + " svg circle").attr('fill');
    if (color === player.color) {
      count ++;
      if (count === 4) {
        return true;
      };
    } else {
      count = 0;
    }
  };
  return false;
};

var vertical_win = function(col_no) {
  var count = 0;
  for(var i = 1; i <=6; i++) {
    var color = $('tr.row' + i + ' td.col' + col_no + " svg circle").attr('fill');
    if (color === player.color) {
      count ++;
      if (count === 4) {
        return true;
      };
    } else {
      count = 0;
    }
  };
  return false;
};

var player1 = new Player('player 1', 'red');
var player2 = new Player('player 2', 'black');
player = player1;

$('button').click(function(){
  var col_no = parseInt($(this).text());
  var row_no = row_count[col_no -1];
  if (row_no > 6) {
    alert("filled already")
  } else {
    $('tr.row' + row_no + " td.col" + col_no + " svg circle").attr('fill', player.color);
    row_count[col_no-1]++;
    if (horizontal_win(row_no) || vertical_win(col_no)) {
      alert(player.name + " wins!");
      var choice = confirm("New game?")
      if (choice === true) {
        reset_board();
      };
    };
    switch_turns();
  };
});

