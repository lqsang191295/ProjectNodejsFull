const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const ejsCompiler = (view) => {
    const compiled = ejs.compile(fs.readFileSync(path.dirname(__dirname) + `/views/${view}`, 'utf8'));
    return compiled();
}

module.exports = {
    ejsCompiler
}