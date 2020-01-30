const express = require('express');
const router = express.Router();
const model = require('../models/dbschema');

router.get('/', function(req, res){
  model.post.find(function(err, doc){
    if(err){
      return console.error(err);
    }
    res.render('../views/main', {
      title: '게시판',
      data: doc
    });
  });
});

module.exports = router;
