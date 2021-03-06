var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var port = 4200;
var cors = require('cors')

// Required application specific custom router module
var houseRouter = require('./src/routes/houseRoutes')

// Use middlewares to set view engine and post json data to the server
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/houses', houseRouter)

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://guest:password@ds239117.mlab.com:39117/five_talent')
    .then(() => { // if all is ok we will be here
      console.log('Start')
    })
    .then(()=> {
      app.listen(port, function(){  // Start the server
        console.log('Server is running on Port: ',port)
       })
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack)
        process.exit(1);
    })






