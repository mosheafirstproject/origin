const { static } = require('express')
const express = require('express')
const app = express()
const port = 3000
var mongodb=require('mongodb')
var bodyParser = require('body-parser');
const con = require('./controllers/adminController');
const ejsLint = require('ejs-lint');


app.use(express.static('images'))
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
}

app.get('/', function(req, res) {
    res.render('pages/home.ejs');
    console.log('got to home page')
});
app.get('/about', function(req, res) {
    res.render('pages/about.html');
    console.log('got to about page')
});
app.get('/admin', (req, res) => {
    res.render('pages/admin.ejs');
    console.log('got to admin page')
  })
app.get('/todaview',(req,res)=>{
  res.render('pages/todaview.ejs');
  console.log(`you got a new order at: '${requestTime()}'`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})