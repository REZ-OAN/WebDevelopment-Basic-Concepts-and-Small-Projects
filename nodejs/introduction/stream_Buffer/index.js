const fs = require('fs');

const http = require('http');
// createServer takes two parameters request and response
const server = http.createServer((req, res) => {
    // these requests are route
    if (req.url === '/') {
        res.write(
            '<html><head><title>This Is Cyborg</title></head><body><p><form method="POST" action="/process"><input type="text" name="msg"></form></p></body></html>'
        );
        res.write('<h1>Hello Programmer</h1>');
        res.end();
    } else if (req.url === '/findme') {
        res.write('<p style="color:coral; font-size:150px">Hee Hee I\'m Caught</p>');
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        // here the data is not in form of string
        // so that we don't get the data fully at a time
        // that's why have to use to listen for a data event
        const body = [];
        req.on('data', (chunk) => {
            res.write('<p>data found</p>');
            res.write(`<p> ${chunk.toString()}</p>`);
            body.push(chunk);
            res.end();
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('Finished ');
            console.log(parsedBody);
        });
    } else if (req.url === '/pipe') {
        // understanding pipe while using server
        const rdStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8');
        rdStream.pipe(res);
        // why res is an write stream -> in request return we sent response to clients
        // that's why it's a writable string
    }
});
// when a server is listening a connection event is raised
// and we get a socket object
// server.on('connection', (socket) => {
//     console.log(socket);
// });
// server is a event emitter
server.listen(3000);
// after that server will be continously running because of the event loop
console.log('listening on port 3000');
// check your browser with localhost:3000 you will see your server is loading
// creating readStream
const rdStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const wdStream = fs.createWriteStream(`${__dirname}/output.txt`);
const wdStream1 = fs.createWriteStream(`${__dirname}/output1.txt`);
rdStream.on('data', (chunk) => {
    wdStream.write(chunk);
});

// we can easily read and write in stream using pipe concept
// doing the same task but in less no of lines.
rdStream.pipe(wdStream1);
