/**
 *  Here all about Path Module
 *  const path = require('path');

    const url = `/home/cyborg_prisoner/Documents/webDevelopment/nodejs/
    introduction/codemodules_ServerMaking/index.js`;
    console.log(path.basename(url));
    console.log(path.dirname(url));
    const pathObj = path.parse(url);
    console.log(pathObj);

 */
/**
 *  Here all about os Module
 *  const os = require('os');

    console.log(os.hostname());
    console.log(os.platform());
    console.log(os.machine());
    console.log(os.cpus());
    console.log(os.homedir());

 */
/**
 * File System Module
 *  const fs = require('fs'); // file system module

    const str = 'Hello Programmers This is cyborg_prisoner';
    fs.writeFileSync('./nodejs/introduction/codemodules_ServerMaking/myfile.txt', str);
    // the text will be replaced
    fs.writeFileSync('./nodejs/introduction/codemodules_ServerMaking/myfile.txt', 'Hello Mello');
    fs.appendFileSync('./nodejs/introduction/codemodules_ServerMaking/myfile.txt', `\n${str}`);

    const data = fs.readFileSync('./nodejs/introduction/codemodules_ServerMaking/myfile.txt');
    console.log(data);
    // data type of 'data' is buffer
    // buffer comes in bytes
    console.log(data.toString());
    // now the data will be in regular format
    // why we place sync -> to define synchronous behavior
    // same function but without sync they behave like asynchronous
    // so in asynchronous manner we have to pass a callback function
    // where we get error and data as the parameter of that callback function
    const async_data = fs.readFile(
        './nodejs/introduction/codemodules_ServerMaking/myfile.txt',
        (err, dat) => {
            console.log(dat.toString());
            console.log(err);
        }
    );

 */
/**
 *  Event Raiser and Events Module
 *  const EventEmitter = require('events');
    // this import returns a class
    const emitter = new EventEmitter();

    // we create a event raiser which is the object of events
    // listener must be declared before the event is created
    emitter.on('nameOfEvent', (param) => {
        // a callback function
        // it defines what happens if the event is occered
        console.log(`task done for ${param}`);
    });

    startEv();
    // here the function is called but the event is not raised
    // why? because the event emitter we defined in that folder and this folder
    // are notsame

    // now with the class
    const UserClass = require('./eventRaiser');

    const startEvClass = new UserClass();

    startEvClass.on('nameOfEvent', (param) => {
        // a callback function
        // it defines what happens if the event is occered
        console.log(`task done for ${param}`);
    });

    startEvClass.startEv();
    setTimeout(() => {
        // creating an event or raising an event
        emitter.emit('nameOfEvent', 'parameters_canbe_object');
    }, 2000);
 */
/**
 * Http Module
 *  const http = require('http');
    // createServer takes two parameters request and response
    const server = http.createServer((req, res) => {
        // these requests are route
        if (req.url === '/') {
            res.write('<p style="color:red; font-size:100px">Hello Programmers</p>');
            res.write('<h1>Hello Programmer</h1>');
        } else if (req.url === '/findme') {
            res.write('<p style="color:coral; font-size:150px">Hee Hee I\'m Caught</p>');
        } else {
            res.write('<p style="color:#FFEB3B; font-size:150px">Opps!! Encountered Wrong Url</p>');
        }
        res.end();
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
 */
