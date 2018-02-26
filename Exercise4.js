var express = require('express')
var app = express()
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.post('/form',function(req,res){
	var reversedString = req.body.str.split('').reverse().join('')
	res.end(reversedString)
})
app.listen(process.argv[2])


