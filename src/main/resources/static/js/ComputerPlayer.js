/**
 * Computer Player class. Subclass of Player.
 */
class ComputerPlayer extends Player {
	constructor(id, title, img, difficulty) {
		super(id, title, img);
		this._difficulty = difficulty;
	}
	/**
	 * Get the player's difficulty level.
	 * @returns {string}
	 */
	get difficulty(){
		return this._difficulty;
	}
	/**
	 * Set the player's difficulty level.
	 * @param {string} difficulty The player's difficulty level. Either 'random' or 'minimax'.
	 */
	set difficulty(difficulty) {
		this._difficulty = difficulty;
	}
	/**
     * Get a string representation of ComputerPlayer to the console.
	 * @override
     */
	getPlayerInfo() {
		console.log('ComputerPlayer [ID: %d, Tile: %s, Difficulty: %s]', this.id, this.tile, this.difficulty);
	}
	/**
	 * Choose an avaiable tile based on computer's difficulty level.
	 * @param {Board} board The current tic-tac-toe board.
	 * @returns {number} Valid chosen position on the board.
	 */
	selectTile(board) {
		var position;
		if (this.difficulty === 'random') {
			var randomIndex = Math.floor(Math.random() * board.validMoves.length);
			position = board.validMoves[randomIndex];
		}
		return position;
	}
}