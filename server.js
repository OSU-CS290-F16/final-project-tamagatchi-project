var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// Serve static files from public/.

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', function(req, res){
  res.status(400).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function() {
  console.log("== Listening on port", port);
});
