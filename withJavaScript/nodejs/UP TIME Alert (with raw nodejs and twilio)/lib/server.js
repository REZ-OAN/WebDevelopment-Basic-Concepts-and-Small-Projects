/**
 * Title : Server For the Uptime monitoring application
 * Description : A RESTFul API to monitor up or down time of user defined links
 * Author : Rezoan Ahmed Abir (Rez_Wizardry)
 * Date : 10/09/23
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('../helpers/handlereqres');
const environment = require('../helpers/environments');
// const data = require('./data');
// server object - module scaffolding
const server = {};

// testign file system
// data.create('test', 'newFile', { name: 'BanglaDesh', id: 1904117 }, (err) => {
//     console.log(err);
// });
// data.read('test', 'newFile', (err, dat) => {
//     console.log(`Erro Found ${err}`);
//     console.log(`data ${dat}`);
// });
// data.update('test', 'newFile', { name: 'Abir', id: 1904117 }, (err) => {
//     console.log(err);
// });
// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });
// // server configuration this is not best practice here comes environment variables concept
// server.config = {
//     PORT: 3000,
// };

// handling request and response
server.handleReqRes = handleReqRes;

// creating a server
server.createServer = () => {
    const createServer = http.createServer(server.handleReqRes);
    createServer.listen(environment.PORT, () => {
        console.log(`listening to port ${environment.PORT}`);
    });
};
server.init = () => {
    server.createServer();
};
// exporting the server
module.exports = server;
