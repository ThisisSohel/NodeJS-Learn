//JSON Learning start from here
const fs = require('fs');

const book = {
    tittle: 'My book',
    author: 'Me'
}

const university = {
    uniName: 'East West University',
    uniId : '12345678',
    uniLocation: 'Aftabnagar, Dhaka'
}

const uniJSON = JSON.stringify(university);
console.log(uniJSON);
fs.writeFileSync('1-JSON.json', uniJSON);
uniParseData = JSON.parse(uniJSON);
console.log(`The university name is ${uniParseData.uniName} and the university ID is ${uniParseData.uniId}.`);

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const paresData = JSON.parse(bookJSON);
console.log(paresData.author);
