//Logger
// const Logger = require('./logger');
// const logger = new Logger();
// //on register listeners
// logger.on('message', data => console.log('Called Listener', data))

// logger.log('hello world');
// logger.log('HI');
// logger.log('hello');
//End Logger


//http server
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // INEFFICIENT WAY BECAUSE WE HAVE TO ADD A IF FOR EACH FILE
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), "utf8", (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(content);
    //     })
    // }
    // //REST API
    // if(req.url === '/api/users') {
    //     const users = [
    //         {
    //             name: 'Bob Smith',
    //             age: 30
    //         },
    //         {
    //             name: 'Joe Doe',
    //             age: 40
    //         }
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(users));
    // }
    //END

    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), "utf8", (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(content);
    //     })
    // }
    // console.log(req.url)
    //http://localhost:5000/about
    // /about

    // Build file path (dynamically)
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? "index.html" : req.url
    );

    //Extension of file
    let extName = path.extname(filePath);

    //Initial content type
    let contentType = 'text/html';

    //Check ext and set cotent type
    switch (extName) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    //Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') { //“Error No such directory entry”
                //Page not found
                fs.readFile(path.join(__dirname, 'public', 'error.html'),
                    (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, "utf8");
                })
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error': ${err.code}`)

            }
        } else {
            //Success Response
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, "utf8");
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running perfectly on port ${PORT}!!!`));


//end http server