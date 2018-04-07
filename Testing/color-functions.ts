//https://github.com/mike-works/typescript-fundamentals


// Takes in 3 or 6 digit hex string
// Returns an object with three properties (each an 8-bit decimal color value)
function hexToRgb(hex: string): {red: number, green: number, blue: number}{
	let rgb: object = {};
	if(hex.length === 3){
		let [hr, hg, hb] = hex.split('');
		return hexToRgb( `${hr}${hr}${hg}${hg}${hb}${hb}` );
	} 
	let [red, green, blue] = [0, 2, 4]
	.map( i => hex.substr(i, i+2))
	.map( i => parseInt(i, 16) );
	return {red, green, blue};
}

// Takes in 3 8-bit decimal color values (0-255)
// Returns equivalent hex
function rgbToHex(red: number, green: number, blue: number): string{
	return [red, green, blue]
	.map(i => Math.max(0, Math.min(255, i)).toString(16) )
	.map(i => i.length === 1 ? `0${i}` : i )
	.join('');
}


module.exports = {rgbToHex, hexToRgb};