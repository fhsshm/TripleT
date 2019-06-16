/**
 * Board class.
 */
function Board() {
    this.board = [[0, 1, 2], 
                  [3, 4, 5], 
                  [6, 7, 8]];
    this.dim = 3;
    this.moveCount = 0;
}

Board.prototype = {
    constructor: Board,
    /**
     * Returns the current board state.
     * @returns {number[][]} Array of number arrays representing a board.
     */
    getBoard: function() {
        return this.board;
    },
    /**
     * Returns the Board's X and Y dimensions.
     * @returns {number} Dimension of the Board.
     */
    getDim: function() {
        return this.dim;
    },
    /**
     * Return the X coordinate of given position.
     * @param {number} position A number representing a tile's position on the board.
     * @returns {number} The X coordinate on the board.
     */
    getCoordX: function(position) {
        return Math.floor(position / this.getDim());
    },
    /**
     * Return the Y coordinate of given position.
     * @param {number} position A number representing a tile's position on the board.
     * @returns {number} The Y coordinate on the board.
     */
    getCoordY: function(position) {
        return position % this.getDim();
    },
    /**
     * Check if requested position is empty of tiles.
     * @param {number} position A number representing a tile's position on the board.
     * @returns {boolean} true iff there is no tile at given position.
     */
    isValidMove: function(position) {
        var x = this.getCoordX(position);
        var y = this.getCoordY(position);
        return this.getBoard()[x][y] === position ? true : false;
    },
    /**
     * Place a player's tile on the board in the given position.
     * @param {Player} player The current Player.
     * @param {number} position A number representing a tile's position on the board.
     */
    placeTile: function(player, position) {
        var x = this.getCoordX(position);
        var y = this.getCoordY(position);
        this.board[x][y] = player.getTile();
        this.moveCount++;
    },
    /**
     * Check if the recently placed tile created a winning game state.
     * @param {Player} player The current Player.
     * @param {number} position A number representing a tile's position on the board.
     * @returns {boolean} true iff there exists a winning game state.
     */
    isWinningState: function(player, position) {
        var x = this.getCoordX(position);
        var y = this.getCoordY(position);
        var tile = player.getTile();
        var board = this.getBoard();
        var dim = this.getDim();

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
    },
    /**
     * Check if the game is in a tie state.
     * @returns {boolean} true iff board is full and neither player has won.
     */
    isTie: function() {
        return this.moveCount === Math.pow(this.getDim(), 2) ? true : false;
    }
}