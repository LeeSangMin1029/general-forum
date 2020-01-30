const express = require('express');
const router = express.Router();
const model = require('../models/dbschema');

function getCurrentDate(){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date+' '+time;
};

function incrementID(sequenceOfName){
  var sequenceDoc = model.counter.findOneAndUpdate({
    query:{ _id: sequenceOfName },
    update: { $inc:{sequence_value:1}},
    new:true
 });
 return sequenceDoc.sequence_value;
};

router.get('/create', function(req, res){
  res.render('create');
});

router.post('/create_process', function(req, res){
  var body = req.body;
  const post = new model.post({
    _id: incrementID("item_id"),
    title: body.title,
    description: body.description,
    writer: body.writer,
    date: getCurrentDate(),
    views: 0,
    comments: 0
  });
  model.post.create(post, function(err, doc){
    if(err){ return console.error(err); }
  });
  res.redirect('/');
});

// router.get('/detail/:postID', function(req, res){

//   res.render();
// })

module.exports = router;
