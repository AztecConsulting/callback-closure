const fs = require('fs');

const data = fs.readFileSync('text.txt');

fs.readFile('ithinkwehaveabug.txt', function(err, data) {
    if (err) {return console.log(err);}
    console.log(data.toString());
})

console.log('End of Program');
