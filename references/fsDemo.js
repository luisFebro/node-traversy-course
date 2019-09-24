const path = require('path');
const fs = require('fs');

//Create a folder (Asyncronously)
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...');
// });

//Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "I love nodeJS", err => {
//     if(err) throw err;
//     console.log('file written to...');
// });

//Create and OVERWRITE to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello world! ", err => {
//     if(err) throw err;
//     console.log('file overwritten to...');

//     //File append
//     fs.appendFile(
//         path.join(__dirname, '/test', 'hello.txt'), " and I love nodeJS", err => {
//         if(err) throw err;
//         console.log('file appended...');
//     });
// });

//Read File
// fs.readFile(
//     path.join(__dirname, '/test', 'hello.txt'), "utf8", (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// Rename File
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    (err) => {
        if(err) throw err;
        console.log("File renamed...");
});



