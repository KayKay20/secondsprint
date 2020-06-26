//function that makes the background color of the navbar changed when clicked
function changeColorOfNavBar(){
	//a tag changing the of the color
	$('a').css('background-color', 'inherit');
	//if the navbar is clicked on the background color should turn red
	$(event.target).css("background-color", "red");
}
//executing the function
$('a').on('click', changeColorOfNavBar);



document.form1.text1.focus();
function validate(text, id){
	var name = /^[A-Za-z]*/;
	if(text.value.match(name)){
		document.getElementById(id).innerHTML = "Valid";
		document.getElementById(id).style.color = "green";
		return true;
	}else{
		document.getElementById(id).innerHTML = "Invlid";
		document.getElementById(id).style.color = "red";
		return false;
	}
}

function validateEmail(email){
	var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(email.value.match(mail)){
				 document.getElementById("email").innerHTML = "Valid Email";
				 document.getElementById("email").style.color = "green";
				 return true;

			}else{
				document.getElementById("email").innerHTML = "Invalid Email";
				document.getElementById("email").style.color = "red";
				return false;
			}
}
	function validateContact(contact){
		var contactregex = /^(?:\+27|0)[0-9]{9}$/;
		if (contact.value.match(contactregex)) {
			document.getElementById("cellNo").innerHTML = "Valid contact Number";
			document.getElementById("cellNo").style.color = "green";
			return true;

		}else{
			document.getElementById("cellNo").innerHTML = "Invalid contact Number";
			document.getElementById("cellNo").style.color = "red";
			return false;
		}

	}


document.form1.onsubmit = function(e){
	const validName = validate(document.form1.text1, 'name' );
	const validSurname = validate(document.form1.text2, 'sname');
	const validEmail = validateEmail(document.form1.text3);
	const validContact = validateContact(document.form1.text4);

	if(!validName || !validSurname || !validEmail || !validContact){
		e.preventDefault();
		return false;
	}
}

//slider
let images = [
    'pics/1.jpg',
    'pics/2.jpg',
    'pics/3.jpg',
    'pics/4.jpg',
    'pics/5.jpg',
    'pics/6.jpg',
    'pics/7.jpg',
    'pics/8.jpg',
    'pics/9.jpg',
    'pics/10.jpg',
    'pics/11.jpg',
    'pics/12.jpg',
    'pics/13.jpg',
    'pics/14.jpg',
    'pics/15.jpg',
    'pics/16.jpg',
    'pics/17.jpg'
	];

let i = 0;
   function changeImage(){
        if (i < images.length) {
            document.getElementById("slider").src = images[i] 
            i += 1;
        }
        else if(i >= images.length) {
            i = 1;
        }
    }
    setInterval(function(){ changeImage(); }, 3000);


function big( value){
	 value.style.width = "800px";
	value.style.height = "400px";

}

function small(value){
	value.style.width = "400px";
	value.style.height = "200px";
}

function changeColor1(){
	var color = document.getElementById("navbar");
	color.style.backgroundColor = "Blue";
}

function changeColor2(){
	var color = document.getElementById("navbar");
	color.style.backgroundColor = "Green";
}

function changeColor3(){
	var color = document.getElementById("navbar");
	color.style.backgroundColor = "Orange";
}

function changeColor4(){
	var color = document.getElementById("navbar");
	color.style.backgroundColor = "Red";
}

function changeColor5(){
	var color = document.getElementById("navbar");
	color.style.backgroundColor = "black";
}

// Maze game
let ctx;
let canvas;
let maze;
let mazeHeight;
let mazeWidth;
let player;

class Player {

  constructor() {
    this.col = 0;
    this.row = 0;
  }

}

class MazeCell {

  constructor(col, row) {
    this.col = col;
    this.row = row;

    this.eastWall = true;
    this.northWall = true;
    this.southWall = true;
    this.westWall = true;

    this.visited = false;
  }

}

class Maze {

  constructor(cols, rows, cellSize) {

    this.backgroundColor = "#ffffff";
    this.cols = cols;
    this.endColor = "#88FF88";
    this.mazeColor = "#000000";
    this.playerColor = "#880088";
    this.rows = rows;
    this.cellSize = cellSize;

    this.cells = [];

    this.generate()

  }

  generate() {

    mazeHeight = this.rows * this.cellSize;
    mazeWidth = this.cols * this.cellSize;

    canvas.height = mazeHeight;
    canvas.width = mazeWidth;
    canvas.style.height = mazeHeight;
    canvas.style.width = mazeWidth;

    for (let col = 0; col < this.cols; col++) {
      this.cells[col] = [];
      for (let row = 0; row < this.rows; row++) {
        this.cells[col][row] = new MazeCell(col, row);
      }
    }

    let rndCol = Math.floor(Math.random() * this.cols);
    let rndRow = Math.floor(Math.random() * this.rows);

    let stack = [];
    stack.push(this.cells[rndCol][rndRow]);

    let currCell;
    let dir;
    let foundNeighbor;
    let nextCell;

    while (this.hasUnvisited(this.cells)) {
      currCell = stack[stack.length - 1];
      currCell.visited = true;
      if (this.hasUnvisitedNeighbor(currCell)) {
        nextCell = null;
        foundNeighbor = false;
        do {
          dir = Math.floor(Math.random() * 4);
          switch (dir) {
            case 0:
              if (currCell.col !== (this.cols - 1) && !this.cells[currCell.col + 1][currCell.row].visited) {
                currCell.eastWall = false;
                nextCell = this.cells[currCell.col + 1][currCell.row];
                nextCell.westWall = false;
                foundNeighbor = true;
              }
              break;
            case 1:
              if (currCell.row !== 0 && !this.cells[currCell.col][currCell.row - 1].visited) {
                currCell.northWall = false;
                nextCell = this.cells[currCell.col][currCell.row - 1];
                nextCell.southWall = false;
                foundNeighbor = true;
              }
              break;
            case 2:
              if (currCell.row !== (this.rows - 1) && !this.cells[currCell.col][currCell.row + 1].visited) {
                currCell.southWall = false;
                nextCell = this.cells[currCell.col][currCell.row + 1];
                nextCell.northWall = false;
                foundNeighbor = true;
              }
              break;
            case 3:
              if (currCell.col !== 0 && !this.cells[currCell.col - 1][currCell.row].visited) {
                currCell.westWall = false;
                nextCell = this.cells[currCell.col - 1][currCell.row];
                nextCell.eastWall = false;
                foundNeighbor = true;
              }
              break;
          }
          if (foundNeighbor) {
            stack.push(nextCell);
          }
        } while (!foundNeighbor)
      } else {
        currCell = stack.pop();
      }
    }

    this.redraw();

  }

  hasUnvisited() {
    for (let col = 0; col < this.cols; col++) {
      for (let row = 0; row < this.rows; row++) {
        if (!this.cells[col][row].visited) {
          return true;
        }
      }
    }
    return false;
  }

  hasUnvisitedNeighbor(mazeCell) {
    return ((mazeCell.col !== 0               && !this.cells[mazeCell.col - 1][mazeCell.row].visited) ||
            (mazeCell.col !== (this.cols - 1) && !this.cells[mazeCell.col + 1][mazeCell.row].visited) ||
            (mazeCell.row !== 0               && !this.cells[mazeCell.col][mazeCell.row - 1].visited) ||
            (mazeCell.row !== (this.rows - 1) && !this.cells[mazeCell.col][mazeCell.row + 1].visited));
  }

  redraw() {

    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, mazeHeight, mazeWidth);

    ctx.fillStyle = this.endColor;
    ctx.fillRect((this.cols - 1) * this.cellSize, (this.rows - 1) * this.cellSize, this.cellSize, this.cellSize);

    ctx.strokeStyle = this.mazeColor;
    ctx.strokeRect(0, 0, mazeHeight, mazeWidth);

    for (let col = 0; col < this.cols; col++) {
      for (let row = 0; row < this.rows; row++) {
        if (this.cells[col][row].eastWall) {
          ctx.beginPath();
          ctx.moveTo((col + 1) * this.cellSize, row * this.cellSize);
          ctx.lineTo((col + 1) * this.cellSize, (row + 1) * this.cellSize);
          ctx.stroke();
        }
        if (this.cells[col][row].northWall) {
          ctx.beginPath();
          ctx.moveTo(col * this.cellSize, row * this.cellSize);
          ctx.lineTo((col + 1) * this.cellSize, row * this.cellSize);
          ctx.stroke();
        }
        if (this.cells[col][row].southWall) {
          ctx.beginPath();
          ctx.moveTo(col * this.cellSize, (row + 1) * this.cellSize);
          ctx.lineTo((col + 1) * this.cellSize, (row + 1) * this.cellSize);
          ctx.stroke();
        }
        if (this.cells[col][row].westWall) {
          ctx.beginPath();
          ctx.moveTo(col * this.cellSize, row * this.cellSize);
          ctx.lineTo(col * this.cellSize, (row + 1) * this.cellSize);
          ctx.stroke();
        }
      }
    }

    ctx.fillStyle = this.playerColor;
    ctx.fillRect((player.col * this.cellSize) + 2, (player.row * this.cellSize) + 2, this.cellSize - 4, this.cellSize - 4);

  }

}

function onClick(event) {
  maze.cols = document.getElementById("cols").value;
  maze.rows = document.getElementById("rows").value;
  maze.generate();
}

function onKeyDown(event) {
  switch (event.keyCode) {
    case 37:
    case 65:
      if (!maze.cells[player.col][player.row].westWall) {
        player.col -= 1;
      }
      break;
    case 39:
    case 68:
      if (!maze.cells[player.col][player.row].eastWall) {
        player.col += 1;
      }
      break;
    case 40:
    case 83:
      if (!maze.cells[player.col][player.row].southWall) {
        player.row += 1;
      }
      break;
    case 38:
    case 87:
      if (!maze.cells[player.col][player.row].northWall) {
        player.row -= 1;
      }
      break;
    default:
      break;
  }
  maze.redraw();
}

function onLoad() {

  canvas = document.getElementById("mainForm");
  ctx = canvas.getContext("2d");

  player = new Player();
  maze = new Maze(20, 20, 25);

  document.addEventListener("keydown", onKeyDown);
  document.getElementById("generate").addEventListener("click", onClick);

}







