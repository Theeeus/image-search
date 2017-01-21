var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var path = require('path');
var moment = require('moment');
var mongojs = require('mongojs');
var db = mongojs('mongodb://theus:js4dwin@ds117849.mlab.com:17849/estudos-fcc',['imagesearch']);
var ImagesClient = require('google-images');
var client = new ImagesClient('003941463411315590469:bi9zbhkriww', 'AIzaSyCyaknrynHLJPm179djgd5iq-zi-4xNylI');


app.get('/', function(req,res){
    var fileName = path.join(__dirname, 'views/index.html');
    res.sendFile(fileName);
});

app.get('/search/:query', function(req,res){
    var query = req.params.query;
    var pagination = req.query.offset || 1;
    client.search(query, {
        page: pagination
    })
    .then(function (images) {
        var array = [];
        images.forEach(function(image){
            var img = image.url;
            var alt = image.snippet;
            var page = image.contextLink;
            var obj = {"url":img,"description":alt,"page link":page};
            array.push(obj);      
        });
        var date = moment(Date.now()).format("MMMM Do, YYYY HH:mm");
        db.imagesearch.insert({"query":query,"when":date});  
        res.json(array);
    });
});


app.get('/latest/imagesearch', function(req,res){
    db.imagesearch.find({},{_id:0}).sort({when:-1}).toArray(function(err,docs){
        if(err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    });
});

app.listen(port, function() {
    console.log('Image search app listening on port: ' + port);
});