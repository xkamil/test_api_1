var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;  
var router = express.Router();              

app.use(express.static('public'))

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/users', function(req, res) {
    res.json({ user: {dupa: 'srupa'} });   
});

router.get('/conf', function(req, res) {
    res.status(200).json({ user: {dupa: 'sruasdfasdfpa'} });
});

router.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});


app.use('/api', router);


app.listen(port);
console.log('Server is listening on port ' + port);