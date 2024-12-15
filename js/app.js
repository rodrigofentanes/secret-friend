/* BLOCO

const fs = require('fs');  // This is the same then bellow code
import * as fs from 'fs';

console.log('Uuuuui!');

const words = ['unicorn', 'cupcake', 'rainbow'];
const output = words.join('\n');
fs.writeFile('words.txt', output, fileWritten);

function fileWritten() {
  console.log('File written!');
}

*/



