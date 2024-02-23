const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function(req, res) {
  res.send('Hello World');
});

// Exemple de route pour une API REST
app.get('/api/data', (req, res) => {
  // renvoie un objet JSON qui est champions.json dans
  res.json(require('./champions.json'));

});


var server = app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000 ..');
    });