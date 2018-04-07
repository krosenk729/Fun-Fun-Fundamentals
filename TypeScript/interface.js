"use strict";
exports.__esModule = true;
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.clor) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
;
var myCar = {
    make: 'Mini',
    model: 'Coupe',
    color: 'grey'
};