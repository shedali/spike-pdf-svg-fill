const fs = require('fs');
const path = require('path');
const svg = fs.readFileSync(path.join('drawing.svg'))
const mustache = require('mustache');
require('svelte/register');
const a4 = fs.readFileSync('./drawing.svg');
fs.writeFileSync("output.svg", mustache.render(String(svg), {name: "franz",account: "447535717593"}));