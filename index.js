var io = require('indian-ocean')

var display = require('./nodebooks.js')
var data = io.readDataSync('data/test.csv')

var numbs = [1,2,3]

display(data)
display(numbs)
