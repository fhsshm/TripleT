// Class instances.
var player1, player2, board, current;

/**
 * Adds event listeners for modal buttons.
 */
function initModalButtons() {
    document.getElementById('selectX').onclick = function() {
        player1 = new Player(1, 'X', 'images/CoolCat.png');
		player2 = new Player(2, 'O', 'images/OhMyDog.png');
		current = player1;
		board = new Board();
        document.getElementById('choosePieceModal').style.display = 'none';
    	start();
    }
    document.getElementById('selectO').onclick = function() {
        player1 = new Player(1, 'O', 'images/OhMyDog.png');
		player2 = new Player(2, 'X', 'images/CoolCat.png');
		current = player2;
        board = new Board();
        document.getElementById('choosePieceModal').style.display = 'none';
    	start();
	}
	document.getElementById('playAgain').onclick = function() {
		var boxes = document.getElementsByClassName('box');
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].getElementsByClassName('tile-image')[0].src = '';
		}
		current = (player1.getTile() === 'X') ? player1 : player2;
		board = new Board();
		document.getElementById('gameOverModal').style.display = 'none';
		start();
	}
	document.getElementById('choosePiece').onclick = function() {
		var boxes = document.getElementsByClassName('box');
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].getElementsByClassName('tile-image')[0].src = '';
		}
		document.getElementById('gameOverModal').style.display = 'none';
		document.getElementById('choosePieceModal').style.display = 'block';
	}
}

/**
 * Click event listener for tiles.
 */
function tileClick() {
	var position = parseInt(this.getAttribute('position'));
	if (board.isValidMove(position)) {
		board.placeTile(current, position);
		this.getElementsByClassName('tile-image')[0].src = current.getImg();
		if (board.isWinningState(current, position)) {
			end(current);
		} else {
			if (board.isTie()) {
				end(current, true);
			} else {
				switchCurrentPlayer();
			}
		}
	}
} 

/**
 * Change the current player.
 */
function switchCurrentPlayer() {
	current = (current.getId() === 1) ? player2 : player1;
}

/**
 * Starts a tic-tac-toe game.
 */
function start() {
	// add on-click listeners to tiles
	var tiles = document.getElementsByClassName('box');
	Array.from(tiles).forEach(function(tile) {
		tile.addEventListener('click', tileClick);
	});
}

/**
 * Ends the current tic-tac-toe game.
 * @param {Player} player The current player.
 * @param {boolean} isTie True iff there are no empty tiles on the board an no player has won.
 */
function end(player, isTie) {
	var tiles = document.getElementsByClassName('box');
	Array.from(tiles).forEach(function(tile) {
		tile.removeEventListener('click', tileClick);
	});
	var gameState = isTie ? 'Tie game.' : 'Player ' + player.getId() + ' wins!';
	document.getElementById('winnerText').innerHTML = gameState;
	document.getElementById('gameOverModal').style.display = 'block';
}

/*
 * Main function.
 */
document.addEventListener('DOMContentLoaded', function() {
	initModalButtons();
    document.getElementById('choosePieceModal').style.display = 'block';
});