var http = require('http');
var fs = require('fs');
var items = require('./items');
const MAX_ID = 732;


http.createServer(function (req, res) {
    let randomid = Math.floor(Math.random() * (MAX_ID - 1) + 1);
    let item = items.getItemStuff(randomid)
    console.log(randomid)

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("title: " + item.title + "<br>pickup: "+ item.pickup+ "<br>quality: "+ item.quality + "<br>type: "+ item.type + "<br>pool: "+ item.pool );

    res.end();
}).listen(8080); 