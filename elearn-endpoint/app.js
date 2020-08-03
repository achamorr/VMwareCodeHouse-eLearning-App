const express = require('express')
const busboy = require('connect-busboy');
var path = require('path');     //used for file path
var fs = require('fs-extra');   
const app = express()
const port = 3000

// define public dir as file root, dependent on entrypoint
app.use(express.static('public'))
//to test, call browser to http://localhost:3000/images/kitten.jfif

// GET
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

// POST
app.use(busboy())
app.use(express.static('public'))

app.post('/', function (req, res, next) {

    var body = '';
    req.on('data', function(data) {
        body += data;
    });

    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename);

        filePath = __dirname + '/public/' + filename

        fs.writeFile(filePath, body, (err) => {
            if (err) throw err;
        });
        
    });

    req.on('end', function (){
        res.send("\t> success!\n")
    });
})

    /*
       


app.post('/', function (req, res) {
    res.send('Got a POST request..')

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    sampleFile = req.files.sampleFile;
    filePath = __dirname + '/public/' + req.files.sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(filePath, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('done\n');
    })
    
    // store to file
    var body = '';
    filePath = __dirname + '/public/' + sampleFile.name;
    request.on('data', function(data) {
        body += data;
    });

    request.on('end', function (){
        fs.writeFile(filePath, body, (err) => {
            if (err) throw err;
        });
        res.send('end\n')
    });
    */

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})