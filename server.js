var express = require('express');
var Server = express();

Server.set('port', (process.env.PORT || 5000))

Server.get('/',function(request,response){
  response.sendFile('/public/index.html', { root: __dirname });
});

Server.use('/assets/js' ,express.static(__dirname + '/public/js'));
Server.use('/assets/css',express.static(__dirname + '/public/css'));
Server.use('/assets/img',express.static(__dirname + '/public/img'));


Server.get('*',function(request,response){
  response.redirect('/');
});

Server.listen(Server.get('port'));