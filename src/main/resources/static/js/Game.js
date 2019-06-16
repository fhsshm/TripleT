// Class instances.
var player1, player2, board, current;

/*
 * Main function.
 */
document.addEventListener('DOMContentLoaded', function(event) {
    /**
     * Click event listener for tiles.
     */
    function tileClick() {
        var position = parseInt(this.getAttribute('position'));
        if (board.isValidMove(position)) {
            board.placeTile(current, position);
            this.innerHTML = current.getTile();
            if (board.isWinningState(current, position)) {
                end(current);
            } else {
				switchCurrentPlayer();
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
	 */
    function end(player) {
        var message = 'Player ' + player.getId() + 'wins!';
        console.log(message);
        var tiles = document.getElementsByClassName('box');
        Array.from(tiles).forEach(function(tile) {
            tile.removeEventListener('click', tileClick);
        });
    }

    document.getElementById('modal').style.display = 'block';
    document.getElementById('selectX').onclick = function() {
        player1 = new Player(1, 'X');
		player2 = new Player(2, 'O');
		current = player1;
		board = new Board();
        document.getElementById('modal').style.display = 'none';
    	start();
    }
    document.getElementById('selectO').onclick = function() {
        player1 = new Player(1, 'O');
		player2 = new Player(2, 'X');
		current = player2;
        board = new Board();
        document.getElementById('modal').style.display = 'none';
    	start();
    }
});