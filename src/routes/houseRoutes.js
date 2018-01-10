var express = require('express')
var app = express();
var houseRouter = express.Router()

// Require house model in our routes module
var House = require('../models/House')

// Defined store route
houseRouter.route('/add/post').post(function (req, res) {
  var house = new House(req.body)
      house.save()
    .then(house => {
    res.status(200).json({House: 'House added successfully'})
    })
    .catch(err => {
    res.status(400).send("unable to save to database")
    })
})

// Defined get data(index or listing) route
houseRouter.route('/').get(function (req, res) {
  House.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      res.json(itms)
    }
  }) 
}) 

// Defined edit route
houseRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id 
  House.findById(id, function (err, house){
      res.json(house) 
  }) 
}) 

//  Defined update route
houseRouter.route('/update/:id').post(function (req, res) {
  House.findById(req.params.id, function(err, house) {
    if (!house)
      return next(new Error('Could not load Document')) 
    else {
      // do your updates here
      house.house = req.body.house 

      house.save().then(house => {
          res.json('Update complete') 
      })
      .catch(err => {
            res.status(400).send("unable to update the database") 
      }) 
    }
  }) 
}) 

// Defined delete | remove | destroy route
houseRouter.route('/delete/:id').get(function (req, res) {
  House.findByIdAndRemove({_id: req.params.id},
	   function(err, house){
		if(err) res.json(err) 
		else res.json('Successfully removed') 
	}) 
}) 

module.exports = houseRouter 
