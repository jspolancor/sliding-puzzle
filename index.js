initializePuzzle(4);

/**
 * Initializes the puzzle, works with any size given
 * @param {int} puzzleSize puzzle side size
 * @returns {array}
 */
function initializePuzzle(puzzleSize){
    var puzzle = document.getElementById('puzzle');
    var tileSize = 100 / puzzleSize;
    var tileStep = 100 / (puzzleSize - 1);
    // Create the tiles elements
    for(var i = 0; i < puzzleSize * puzzleSize; i++){
        var tile = document.createElement('div');
        tile.className = 'tile';
        puzzle.appendChild(tile);
    }
    // set size and background image positioning for the tiles
    var tiles = document.getElementsByClassName('tile');
    var columnsStepper = 0; // stepper for the columns
    var rowsStepper = 0; // stepper for the rows
    for(var i = 0; i < tiles.length; i++){
        var xBgPosition = columnsStepper * tileStep;
        var yBgPosition = rowsStepper * tileStep;
        columnsStepper++;
        if(xBgPosition == 100 ){
            // If xBgPosition equals 100 it means that we reach the las tile in
            // a row, jump to next row with the rowsStepper, and start with the
            // first column again
            columnsStepper = 0;
            rowsStepper++;
        } 
        tiles[i].style.backgroundPosition = xBgPosition + '% ' + yBgPosition +'%';
        tiles[i].style.width = tileSize + '%';
        tiles[i].style.height = tileSize + '%';
    }
}

function scramblePuzzle(){

}

function moveTile(){

}

function gameOver(){

}