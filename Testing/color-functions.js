//https://github.com/mike-works/typescript-fundamentals
// Takes in 3 or 6 digit hex string
// Returns an object with three properties (each an 8-bit decimal color value)
function hexToRgb(hex) {
    var rgb = {};
    if (hex.length === 3) {
        var _a = hex.split(''), hr = _a[0], hg = _a[1], hb = _a[2];
        return hexToRgb("" + hr + hr + hg + hg + hb + hb);
    }
    var _b = [0, 2, 4]
        .map(function (i) { return hex.substr(i, i + 2); })
        .map(function (i) { return parseInt(i, 16); }), red = _b[0], green = _b[1], blue = _b[2];
    return { red: red, green: green, blue: blue };
}
// Takes in 3 8-bit decimal color values (0-255)
// Returns equivalent hex
function rgbToHex(red, green, blue) {
    return [red, green, blue]
        .map(function (i) { return Math.max(0, Math.min(255, i)).toString(16); })
        .map(function (i) { return i.length === 1 ? "0" + i : i; })
        .join('');
}
module.exports = { rgbToHex: rgbToHex, hexToRgb: hexToRgb };
