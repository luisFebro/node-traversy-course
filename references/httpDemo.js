const http = require('http');

//Create a server obj
http.createServer((req, res) => {
    //Write response
    res.write('Hello World!');
    res.end();
}).listen(5000, () => console.log('server is running!!!'));
