/*
const fs = require('fs')
//json works with arrays and objects
const book = {
    title : 'Ego is the enemy',
    author : 'Ryan Holiday'
}
//JSON.stringify() - takes an object gives JSON string like " ": " "
const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
*/
const fs = require('fs')
const dataBuffer = fs.readFileSync('1-Json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Ashi"
data.age = 23
const JSONdata = JSON.stringify(data)
fs.writeFileSync('1-json.json',JSONdata)
console.log(JSONdata)


