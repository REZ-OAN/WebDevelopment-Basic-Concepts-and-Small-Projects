/**
 * Title : Request and Response Handling
 * Description : same
 * Author : Rezoan Ahmed Abir (Rez_Wizardry)
 * Date : 10/09/23
 */
// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const handlers = require('../routeHandlers/handlers');
const { parseJSON } = require('./utilities');
// module Scaffolding
const handlerReqRes = {};

// handle Requests and Response
handlerReqRes.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    /** routing must be in uniform way */
    const path = parsedUrl.pathname;
    /** ignores the trailling and leading / */
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    /** header contains response meta data */
    const headersObject = req.headers;
    const reqProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const choosenhandler = routes[reqProperties.trimmedPath]
        ? routes[reqProperties.trimmedPath]
        : handlers.notFoundHandler;
    // defining decoder
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    // request data
    req.on('data', (buffer) => {
        realData = decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        reqProperties.body = parseJSON(realData);
        choosenhandler(reqProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};
            const payloadString = JSON.stringify(payload);
            // return the final response
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        });
    });
};
module.exports = handlerReqRes;
