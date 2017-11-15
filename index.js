initializePuzzle(4);
scramblePuzzle();

/**
 * Initializes the puzzle, works with any size given
 * @param {int} puzzleSize puzzle side size
 * @returns {array}
 */
function initializePuzzle(puzzleSize) {
    var puzzle = document.getElementById('puzzle');
    var tileSize = 100 / puzzleSize;
    var tileStep = 100 / (puzzleSize - 1);
    // Create the tiles elements
    for (var i = 0; i < puzzleSize * puzzleSize; i++) {
        var tile = document.createElement('div');
        tile.className = 'tile';
        // Add the listener for the click event
        tile.addEventListener('click', function () {
            moveTile(this);
        });
        puzzle.appendChild(tile);
    }
    // set size and background image positioning for the tiles
    var tiles = document.getElementsByClassName('tile');
    var columnsStepper = 0; // stepper for the columns
    var rowsStepper = 0; // stepper for the rows
    for (var i = 0; i < tiles.length; i++) {
        var xBgPosition = columnsStepper * tileStep;
        var yBgPosition = rowsStepper * tileStep;
        columnsStepper++;
        if (xBgPosition == 100) {
            // If xBgPosition equals 100 it means that we reach the las tile in
            // a row, jump to next row with the rowsStepper, and start with the
            // first column again
            columnsStepper = 0;
            rowsStepper++;
        }
        tiles[i].style.backgroundPosition = xBgPosition + '% ' + yBgPosition + '%';
        tiles[i].style.width = tileSize + '%';
        tiles[i].style.height = tileSize + '%';
    }
}

/**
 * Scrambles the puzzle
 */
function scramblePuzzle() {
    var puzzle = document.getElementById('puzzle');
    var tiles = document.getElementsByClassName('tile');
    for (var i = tiles.length; i >= 0; i--) {
        puzzle.appendChild(tiles[Math.random() * i | 0]);
    }
    // Add the empty class to the first tile
    tiles[0].className += ' empty';
}

/**
 * Moves a tile
 * @param {element} tile 
 */
function moveTile(tile) {
    var emptyTile = document.getElementsByClassName('empty')[0];
    // swap tile with the empty one
    swapTiles(tile, emptyTile);
}

/**
 * Swap two tiles
 * @param {element} tile1 
 * @param {element} tile2 
 */
function swapTiles(tile1, tile2) {
    var clonedTile1 = tile1.cloneNode(true);
    var clonedTile2 = tile2.cloneNode(true);
    // Re-attach event listeners
    clonedTile1.addEventListener('click', function () { moveTile(this); });
    clonedTile2.addEventListener('click', function () { moveTile(this); });
    tile2.parentNode.replaceChild(clonedTile1, tile2);
    tile1.parentNode.replaceChild(clonedTile2, tile1);
}

function gameOver() {

}