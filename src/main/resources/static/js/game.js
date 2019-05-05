/**
 * Player class. Can be either human or CPU.
 * 
 * @param id The player's id number. Starts from 1, ascending.
 * @param tile The player's associated tile. Either 'X' or 'O'.
 */
function Player(id, tile) {
	this.id = id;
	this.tile = tile;
}

Player.prototype = {
	constructor: Player,
	getId: function() {
		return this.id;
	},
	getTile: function() {
		return this.tile;
	},
	getPlayerInfo: function() {
		console.log('Player [ID: %d, Tile: %s]', this.id, this.tile);
	}
}

/**
 * Main function.
 * 
 * @param event A case-sensitive string representing the event type to listen for.
 */
document.addEventListener("DOMContentLoaded", function(event) {
	var player1, player2;
    document.getElementById('modal').style.display = 'block';
    document.getElementById('selectX').onclick = function() {
    	player1 = new Player(1, 'X');
    	player2 = new Player(2, 'O');
    	player1.getPlayerInfo();
    	player2.getPlayerInfo();
    	document.getElementById('modal').style.display = 'none';
    }
    document.getElementById('selectO').onclick = function() {
    	player1 = new Player(1, 'O');
    	player2 = new Player(2, 'X');
    	player1.getPlayerInfo();
    	player2.getPlayerInfo();
    	document.getElementById('modal').style.display = 'none';
    }
});