let players = ['x', 'o'];
let activePlayer = 0;

let gameBoard = null;

function createGameBoard() {
	return [
		['', '', ''],
		['', '', ''],
		['', '', '']
	];
}

function WinningLogic(row0, row1, rowi, colum0, colum1, columi) { 
	let firstPlayerSymbol = null;

for (let row = row0, colum = colum0; Math.abs(row1-row) > 0 && Math.abs(colum1-colum) > 0; row += rowi, colum += columi) {
	const symbol = gameBoard[row][colum];

	if (symbol === '') {
		return false;
	}

	if (!firstPlayerSymbol) {
		firstPlayerSymbol = symbol;
		continue;
	}
	
if (firstPlayerSymbol !== symbol) {
	return false;
	}		
}
return true;
}

function WinningSituation () {
	const A = gameBoard.length;
for (let i = 0; i < A; ++i) {
	if (
		WinningLogic(i, i+1, 0, 0, A, 1) ||
		WinningLogic(0, A, 1, i, i+1, 0)
	 ) {
		return true;
	}
}
if (
	WinningLogic(0, A, 1, 0, A, 1) ||
	WinningLogic(A-1, -1, -1, 0, A, 1)
	) {
		return true;
	}
	return false;
}

	function startGame() {
		gameBoard = createGameBoard();
		activePlayer = 0;
    	renderBoard(gameBoard);
	}

function click(row, column) {
	const firstPlayerSymbol = players[activePlayer];
	gameBoard[row][column] = firstPlayerSymbol;
  	renderBoard(gameBoard);

if (WinningSituation()) {
	showWinner(activePlayer);
	}
	activePlayer = (activePlayer + 1) % players.length;
	}