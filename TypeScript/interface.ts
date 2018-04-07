interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.clor) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

interface Car{
    make: string;
    model: string;
    year?: number;
};

interface Car{
    color: string;
}

let myCar: Car = {
    make: 'Mini',
    model: 'Coupe',
    color: 'grey'
}
