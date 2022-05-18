var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Started...')
    const message = 'Started: ' + new Date().getTime() + '\n';
    fs.appendFile(path.join(__dirname, 'public', 'log.txt'), message, (err) => {
        if(err){
            console.error('Error writing to file')
        }
    })
})