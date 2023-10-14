/**
 * Title : Uptime Monitioring Application
 * Description : A RESTFul API to monitor up or down time of user defined links
 * Author : Rezoan Ahmed Abir (Rez_Wizardry)
 * Date : 10/09/23
 */

// dependencies
const server = require('./lib/server');
const worker = require('./lib/worker');
// app object - module scaffolding
const app = {};

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
// // app configuration this is not best practice here comes environment variables concept
// app.config = {
//     PORT: 3000,
// };
// starting the  server
app.init = () => {
    server.init();
    worker.init();
};

// start the server
app.init();
// exporting the application
module.exports = app;
