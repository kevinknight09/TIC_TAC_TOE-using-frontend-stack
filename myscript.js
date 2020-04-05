console.log("connected");

//$('#table_header td').eq(2).html('new content');

var player1 =prompt("Enter your name , you will play with X");
var sign1= 'X';

var player2=prompt("Enter your name , you will play with 0");
var sign2= 'O';

var game_on = true;
var table = $('table tr');


function reportwin(rownum,colnum) {
  console.log("YOU WON BRUH");
  console.log(rownum);
  console.log(colnum);
}

function changesign(rowindex,colindex,sign) {
  return table.eq(rowindex).find('td').eq(colindex).text(sign);
}

function reportsign(rowindex,colindex){
  return table.eq(rowindex).find('td').eq(colindex).text();
}


function textmatch(one,two,three)
{
  return (one===two && one===three && one !==" " && one !== undefined);
}

// horizontal wincheck
function horizontalwincheck() {
  for (var row = 0; row <3; row++) {
    for(var col=0; col<3;col++)
    {
        if(textmatch(reportsign(row,col),reportsign(row,col+1),reportsign(row,col+2)))
        {
          console.log("Horizontal");
          reportwin(row,col);
          return true;
        }
        else {
          continue;
        }
    }

  }
}
// vertical wincheck

function verticalwincheck()
{
  for(var row=0;row<3;row++)
  {
    for(var col=0;col<3;col++)
    {
      if(textmatch(reportsign(row,col),reportsign(row+1,col),reportsign(row+2,col)))
      {
        console.log("Vertical");
        reportwin(row,col);
        return true;
      }
      else {
        continue;
      }
    }
  }
}

// diagonal wincheck
function diagonalwincheck()
{
  for(col=0;col<3;col++)
  {
    for(row=0;row<3;row++)
    {
      if(textmatch(reportsign(row,col),reportsign(row+1,col+1),reportsign(row+2,col+2)))
      {
        console.log("Diagdown");
        reportwin(row,col);
        return true;
      }
      else if (textmatch(reportsign(row,col),reportsign(row-1,col+1),reportsign(row-2,col+2))) {
        console.log("DiagUP");
        reportwin(row,col);
        return true;
      }
      else {
        continue;
      }
    }
  }
}

function gameEnd() {
  $('p').fadeOut('slow');
}

var currentPlayer = 1;
var currentName = player1;
var currentsign = sign1;


$('.board td').on('click',function()
{
  var col = $(this).closest('td').index()
  var row = $(this).closest('tr').index()
  changesign(row,col,currentsign);
  if(horizontalwincheck() || verticalwincheck() || diagonalwincheck())
  {
    $('h1').text(currentName +" Congratulations You have won");
    console.log(currentName+" has won");
    gameEnd();
  }

  currentPlayer =currentPlayer* -1;
  if(currentPlayer===1)
  {
    currentName=player1;
    $('p').text(currentName+" It is your turn");
    currentsign=sign1;
  }
  else {
    currentName=player2;
    $('p').text(currentName+" It is your turn");
    currentsign=sign2;
  }
})
$(document).ready(function () {
            $("button").click(function () {
                location.reload(true);
                alert('Reloading Page');
            });
        }); 
