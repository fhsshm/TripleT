/**
 * Player class. Can be either human or CPU.
 * 
 * @param {number} id The player's id number. Starts from 1, ascending.
 * @param {string} tile The player's associated tile. Either 'X' or 'O'.
 * @param {string} img The player's associated tile image (href). Either 'CoolCat' or 'OhMyDog'.
 */
function Player(id, tile, img) {
	this.id = id;
	this.tile = tile;
	this.img = img;
}

Player.prototype = {
    constructor: Player,
    /**
     * Get the player's ID.
     * @returns {number} The player's id number. Starts from 1, ascending.
     */
	getId: function() {
		return this.id;
	},
	/**
	 * Set the player's ID.
	 * @param {number} id The player's id number. Starts from 1, ascending.
	 */
	setId: function(id) {
		this.id = id;
	},
    /**
     * Get the player's chosen tile.
     * @returns {string} They player's associated tile. either X or O.
     */
	getTile: function() {
		return this.tile;
	},
	/**
	 * Set the player's tile.
	 * @param {string} tile The player's associated tile. Either 'X' or 'O'.
	 */
	setTile: function() {
		this.tile = tile;
	},
	/**
	 * Get the player's image href.
	 * @returns {string} img The player's associated tile image (href). Either 'CoolCat' or 'OhMyDog'.
	 */
	getImg: function() {
		return this.img;
	},
	/**
	 * Set the player's image href.
	 * @param {string} img The player's associated tile image (href). Either 'CoolCat' or 'OhMyDog'.
	 */
	setImg: function(img) {
		this.img = img;
	},
    /**
     * Get a string representation of Player to the console.
     */
	getPlayerInfo: function() {
		console.log('Player [ID: %d, Tile: %s]', this.id, this.tile);
	}
}