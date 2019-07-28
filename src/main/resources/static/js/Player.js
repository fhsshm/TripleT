/**
 * Player class. Can be either human or CPU.
 */
class Player {
	constructor(id, tile, img) {
		this._id = id;
		this._tile = tile;
		this._img = img;
	}
	get id() {
		return this._id;
	}
	/**
	 * Set the player's ID.
	 * @param {number} id The player's id number. Starts from 1, ascending.
	 */
	set id(id) {
		this._id = id;
	}
    /**
     * Get the player's chosen tile.
     * @returns {string} They player's associated tile. either X or O.
     */
	get tile() {
		return this._tile;
	}
	/**
	 * Set the player's tile.
	 * @param {string} tile The player's associated tile. Either 'X' or 'O'.
	 */
	set tile(tile) {
		this._tile = tile;
	}
	/**
	 * Get the player's image href.
	 * @returns {string} img The player's associated tile image (href). Either 'CoolCat' or 'OhMyDog'.
	 */
	get img() {
		return this._img;
	}
	/**
	 * Set the player's image href.
	 * @param {string} img The player's associated tile image (href). Either 'CoolCat' or 'OhMyDog'.
	 */
	set img(img) {
		this._img = img;
	}
    /**
     * Get a string representation of Player to the console.
     */
	getPlayerInfo() {
		console.log('Player [ID: %d, Tile: %s]', this.id, this.tile);
	}
}