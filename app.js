const express = require('express');
const { engine } =  require('express-handlebars');
const routes = require('./routes/index')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(__dirname + '/public', options));

app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));

var options = {
    dotfiles: 'ignore',
    etag: true,
    lastModified: true,
    maxAge: '1d',
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now());
      res.header('Cache-Control', 'public, max-age=1d');
    }
  };
  
app.set('view engine', '.hbs');
app.set('views', './views');
app.use('/', routes)

module.exports = app;