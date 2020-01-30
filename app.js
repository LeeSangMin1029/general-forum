const express = require('express');
const app = express();
const db = require('./models/db');
const indexRouter = require('./routes/index');
const topicRouter = require('./routes/topic');
// 사용자가 웹페이지에서 데이터를 서버로 전송할 때 들어오는 데이터를
// 분석해서 req의 속성으로 변환시켜준다.
const bodyParser = require('body-parser');
// 웹페이지로 전송되는 정보를 gzip방식으로 데이터를 압축해주는 모듈
const compression = require('compression');
const port = 3000;

db();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use(function(req, res, next){
    res.status(404).send("Sorry");
});
app.listen(port, function(){
    console.log("Express server has started on port 3000");
});
