var path = require('path');
var express = require('express'); 
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(forceSSL());

app.get('/*', function(req, res) { 
  res.sendFile(__dirname + '/index.html')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});