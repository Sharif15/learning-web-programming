var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

var port = 1111;

var app = express();

var filePath = path.join(__dirname,'assisets');

var images = path.join(__dirname,'assisets/img');

app.use(express.static(filePath));
app.use(express.static(images));

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.get('/',function(req,res){
    res.redirect('/home');
});

app.get('/home',function(req,res){
    res.render('home');
})

app.get('/gallary',function(req,res){
    res.render('gallary');
})

app.get('/about',function(req,res){
    res.render('about');
})

app.get('*',function(req,res){
    res.send('Error 404');
})

app.listen(port, function(err) {
    console.log("Listening on port", port);
    if(err) {
      console.log(err);
    }
  });