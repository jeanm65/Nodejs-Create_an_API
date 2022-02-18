const express = require('express')
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const{PostsModel} = require('../models/postsModel')

// request data with GET
router.get('/', (req, res) => {
  PostsModel.find((err, docs) => {
    if(!err) res.send(docs);
    else  (console.log('error to get data:' + err))
  })
}) 

// send data with POST
router.post('/', (req, res) => {
//console.log(req);find all about the req parameter
  const newRecord = new PostsModel({
      author: req.body.author, // req.body only work with body-parser
      message: req.body.message
  });

  newRecord.save((err, docs) => {
    if(!err) res.send(docs);
    else console.log('error creating new data : ' + err)
  })
})

// update with PUT
router.put('/:id', (req, res) => {
    // if the id is unknown, should be protected from that: 
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('ID unknown:' + req.params.id)

  const updateRecord = {
      author: req.body.author,
      message: req.body.message
  };

  PostsModel.findByIdAndUpdate(
      req.params.id,
      {$set:updateRecord},
      {new:true},
      (err, docs) => {
        if(!err) res.send(docs);
        else console.log('update error: ' + err)
      }
  )
})

//remove (delete) data with DELETE
router.delete('/:id', (req, res) => {
 
if(!ObjectId.isValid(req.params.id))
  return res.status(400).send('ID unknown:' + req.params.id)

  PostsModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if(!err) res.send(docs);
      else console.log('delete error:' + err)
    }
  )
})
 
module.exports = router