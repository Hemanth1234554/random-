const { log } = require("console");
const path = require("path")

console.log(path.sep);

const filePath = path.join('/content/','subfolder','file.txt')

console.log(filePath);
console.log(path.basename(filePath));

console.log(path.resolve(__dirname,'content','subfolder','file.txt'));
