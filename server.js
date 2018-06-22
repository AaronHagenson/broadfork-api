const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

const mongoConnectionString = 'mongodb://thedestroyer9876:sjfd27@ds117111.mlab.com:17111/broadfork'

app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray(function(err, results) {
        if (err) return console.log(err);
        
        console.log(results);
        res.send(results);
    });
});

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/');
    });
});

MongoClient.connect(mongoConnectionString, (err, client) => {
    if (err) return console.log(err);
    db = client.db('broadfork');
    app.listen(3000, () => {
    console.log('broadfork-api is running on port 3000');
    });
});




