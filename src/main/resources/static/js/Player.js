/**
 * Player class. Can be either human or CPU.
 * 
 * @param {number} id The player's id number. Starts from 1, ascending.
 * @param {string} tile The player's associated tile. Either 'X' or 'O'.
 */
function Player(id, tile) {
	this.id = id;
	this.tile = tile;
}

Player.prototype = {
    constructor: Player,
    /**
     * Get the Player's ID.
     * @returns {number} Player ID.
     */
	getId: function() {
		return this.id;
    },
    /**
     * Get the player's chosen tile.
     * @returns {string} Player tile, either X or O.
     */
	getTile: function() {
		return this.tile;
    },
    /**
     * Get a string representation of Player to the console.
     */
	getPlayerInfo: function() {
		console.log('Player [ID: %d, Tile: %s]', this.id, this.tile);
	}
}