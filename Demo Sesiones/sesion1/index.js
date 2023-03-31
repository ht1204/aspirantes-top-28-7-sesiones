const http = require('http');
const fs = require('fs');

const HOST = 'localhost';
const PORT = 8000;


fs.readFile('./index.html', function(error, html) {
    if(error) throw error;
    http.createServer(function(request, response){
        response.writeHead(200, {
            'Content-Type': 'text/html',
        });

        fs.readFile('index.html', function (err, content) {
            response.write(content);
            response.end();
        });
    }).listen(PORT, HOST, () => {
        console.log('Hello from server!');
        console.log('Go to http://localhost:8000 in web browser');
    });

});

