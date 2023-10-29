/**
 * Title : Worker For the Uptime monitoring application
 * Description : worker object
 * Author : Rezoan Ahmed Abir (Rez_Wizardry)
 * Date : 10/09/23
 */

// dependencies
const http = require('http');
const https = require('https');
const { stat } = require('fs');
const url = require('url');
const { handleReqRes } = require('../helpers/handlereqres');
const environment = require('../helpers/environments');
const data = require('./data');
const { parseJSON } = require('../helpers/utilities');
const { check } = require('../routes');
const { sendTwilioSms } = require('../helpers/notifications');
// worker object - module scaffolding
const worker = {};
worker.processCheckOutcome = (checkData, checkOutCome) => {
    // check if check outcome is up or down
    const state =
        !checkOutCome.error &&
        checkOutCome.responseCode &&
        checkData.successCodes.indexOf(checkOutCome.responseCode) > -1
            ? 'up'
            : 'down';
    // check if check outcome is toggled or not
    const alertWanted = !!(checkData.lastChecked && checkData.state === state);
    // update the check data
    const newCheckData = checkData;
    newCheckData.state = state;
    newCheckData.lastChecked = Date.now();
    // update the check to disk
    data.update('checks', newCheckData.id, newCheckData, (err) => {
        if (!err) {
            if (alertWanted) {
                // send the check data to next process
                worker.alertUserToStatusChange(newCheckData);
            } else {
                console.log('Alert not needed');
            }
        } else {
            console.log('Error Trying To Save Check Data Of One Of The Checks');
        }
    });
};
worker.alertUserToStatusChange = (checkData) => {
    const msg = `Alert : Your Check for ${checkData.method.toUpperCase()} ${checkData.protocol}://${
        checkData.url
    } is currently ${checkData.state}`;
    sendTwilioSms(checkData.phone, msg, (err) => {
        if (!err) {
            console.log(`Successfull sent sms ${msg}`);
        } else {
            console.log(`sms sent was unsuccessful error code ${err}`);
        }
    });
};
// perform check
worker.performCheck = (checkData) => {
    // prepare the initial check outcome
    let checkOutCome = {
        error: false,
        responseCode: false,
    };
    // mark the outcome has not been sent yet
    let outcomeSent = false;
    // parse the hostname
    const parsedUrl = url.parse(`${checkData.protocol}://${checkData.url}`, true);
    const { hostname } = parsedUrl;
    const { path } = parsedUrl;
    // construct the request
    const reqDetails = {
        protocol: `${checkData.protocol}:`,
        hostname,
        method: checkData.method.toUpperCase(),
        path,
        timeout: checkData.timeoutSeconds * 1000,
    };
    const protocolToUse = checkData.protocol === 'http' ? http : https;
    const req = protocolToUse.request(reqDetails, (res) => {
        const status = res.statusCode;
        checkOutCome.responseCode = status;
        // update the outcome and pass to the next process
        if (!outcomeSent) {
            worker.processCheckOutcome(checkData, checkOutCome);
            outcomeSent = true;
        }
    });
    req.on('error', (e) => {
        checkOutCome = {
            error: true,
            value: e,
        };
        if (!outcomeSent) {
            worker.processCheckOutcome(checkData, checkOutCome);
            outcomeSent = true;
        }
    });
    req.on('timeout', (e) => {
        checkOutCome = {
            error: true,
            value: e,
        };
        if (!outcomeSent) {
            worker.processCheckOutcome(checkData, checkOutCome);
            outcomeSent = true;
        }
    });
    req.end();
};
// validate check data
worker.validateCheckData = (checkData) => {
    if (checkData && checkData.id) {
        const stateV =
            typeof checkData.state === 'string' && ['up', 'down'].indexOf(checkData.state) > -1
                ? checkData.state
                : 'down';
        const lastCheckedV =
            typeof checkData.lastChecked === 'number' && checkData.lastChecked > 0
                ? checkData.lastChecked
                : false;
        checkData.lastChecked = lastCheckedV;
        checkData.state = stateV;
        worker.performCheck(checkData);
    } else {
        console.log('Error : check file is not properly formatted');
    }
};
// gatherAll checks
worker.gatherAllChecks = () => {
    // get all the checks
    data.list('checks', (err1, checks) => {
        if (!err1 && checks.length > 0) {
            checks.forEach((checkId) => {
                // read the checkdata
                data.read('checks', checkId, (err2, checkData) => {
                    if (!err2 && checkData) {
                        const checkDataJson = { ...parseJSON(checkData) };
                        // pass the data for next process
                        worker.validateCheckData(checkDataJson);
                    } else {
                        console.log('Error At the server side');
                    }
                });
            });
        } else {
            console.log(err1);
        }
    });
};
// worker loop
worker.loop = () => {
    setInterval(() => {
        worker.gatherAllChecks();
    }, 10000);
};
worker.init = () => {
    // execute all the checks
    worker.gatherAllChecks();

    // call the loop so that the checks continue
    worker.loop();
};
// exporting the worker
module.exports = worker;
