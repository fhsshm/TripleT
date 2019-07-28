/**
 * Board class.
 */
class Board {
	constructor() {
		this._board = [[0, 1, 2], 
					[3, 4, 5], 
					[6, 7, 8]];
		this._dim = 3;
		this._moveCount = 0;
		this._validMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	}
	/**
	 * @returns {number[][]}
	 */
    get board() {
        return this._board;
	}
	/**
	 * @param {number[][]} newBoard
	 */
	set board(newBoard) {
		this._board = newBoard;
	}
	/**
	 * @returns {number}
	 */
    get dim() {
        return this._dim;
	}
	/**
	 * @param {number} dimensions
	 */
	set dim(dimensions) {
		this._dim = dimensions;
	}
	/**
	 * @returns {number}
	 */
	get moveCount() {
		return this._moveCount;
	}
	/**
	 * @param {number} count
	 */
	set moveCount(count) {
		this._moveCount = count;
	}
	/**
	 * @returns {number[]}
	 */
	get validMoves() {
		return this._validMoves;
	}
	/**
	 * @param {number[]} moves
	 */
	set validMoves(moves) {
		this._validMoves = moves;
	}
    /**
     * Return the X coordinate of given position.
     * @param {number} position A number representing a tile's position on the board.
     * @returns {number} The X coordinate on the board.
     */
    getCoordX(position) {
        return Math.floor(position / this.dim);
    }
    /**
     * Return the Y coordinate of given position.
     * @param {number} position A number representing a tile's position on the board.
     * @returns {number} The Y coordinate on the board.
     */
    getCoordY(position) {
        return position % this.dim;
    }
    /**
     * Check if requested position is empty of tiles.
     * @param {number} position A number representing a tile's position on the board.
     * @returns {boolean} true iff there is no tile at given position.
     */
    isValidMove(position) {
        return this.validMoves.indexOf(position) > -1;
    }
    /**
     * Place a player's tile on the board in the given position.
     * @param {Player} player The current Player.
     * @param {number} position A number representing a tile's position on the board.
     */
    placeTile(player, position) {
        var x = this.getCoordX(position);
        var y = this.getCoordY(position);
        this.board[x][y] = player.tile;
		this.moveCount++;
		this.validMoves = this.validMoves.filter(e => e !== position);
    }
    /**
     * Check if the recently placed tile created a winning game state.
     * @param {Player} player The current Player.
     * @param {number} position A number representing a tile's position on the board.
     * @returns {boolean} true iff there exists a winning game state.
     */
    isWinningState(player, position) {
        var x = this.getCoordX(position);
        var y = this.getCoordY(position);
        var tile = player.tile;
        var board = this.board;
        var dim = this.dim;

        // check for column win state
        for(var row = 0; row < dim; row++) {
            if (board[x][row] !== tile) {
                break;
            }
            if (row === dim - 1) {
                return true;
            }
        }
        // check for row win state
        for (var col = 0; col < dim; col++) {
            if (board[col][y] !== tile) {
                break;
            }
            if (col === dim - 1) {
                return true;
            }
        }
        // check for diagonal win state
        if (x === y) {
            for (var diag = 0; diag < dim; diag++) {
                if (board[diag][diag] !== tile) {
                    break;
                }
                if (diag === dim - 1) {
                    return true;
                }
            }
        }
        // check for anti-diagonal win state
        if (x + y === dim - 1) {
            for (var aDiag = 0; aDiag < dim; aDiag++) {
                if (board[aDiag][(dim - 1) - aDiag] !== tile) {
                    break;
                }
                if (aDiag === dim - 1) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Check if the game is in a tie state.
     * @returns {boolean} true iff board is full and neither player has won.
     */
    isTie() {
        return this.moveCount === Math.pow(this.dim, 2) ? true : false;
    }
}