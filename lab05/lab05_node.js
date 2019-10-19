let http = require('http');
let fs = require('fs');
let path = require('path');
let bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname,'html','index.html'));
    
    //res.sendfile(path.join(__dirname,'html','style.css'));
    //res.sendfile(path.join(__dirname,'lab05.js'));
});  



app.listen(3000, () => console.log('Server ready'));

// function rqListner(req,res){
//     res.render
// }

// let serv = http.createServer(rqListner);
// console.log('Server Started');
// serv.listen(8080);