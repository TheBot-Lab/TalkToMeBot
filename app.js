var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.send(index.html);
});

app.listen(port, function(err){
    if(err) {
      console.err(err);
    }
    console.log("server in port " + port);
});
