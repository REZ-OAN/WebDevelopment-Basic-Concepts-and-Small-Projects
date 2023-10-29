// dependencies
const https = require('https');
const qs = require('querystring');
const { twilio } = require('./environments');
// module scaffolding
const notifications = {};

// send sms to user using twiling api
notifications.sendTwilioSms = (phone, msg, callback) => {
    // input validation
    const userPhone =
        typeof phone === 'string' && phone.trim().length === 11 ? phone.trim() : false;
    const userMsg =
        typeof msg === 'string' && msg.trim().length > 0 && msg.trim().length <= 1600
            ? msg.trim()
            : false;
    if (userPhone && userMsg) {
        // configure request payload
        const payload = {
            From: twilio.fromPhone,
            To: `+88${userPhone}`,
            Body: userMsg,
        };
        const payloadStr = qs.stringify(payload);
        // configure the request details
        const reqDetails = {
            hostname: 'api.twilio.com',
            method: 'GET',
            path: `/2010-04-01/Accounts/${twilio.AccountSID}/Messages.json`,
            auth: `${twilio.AccountSID}:${twilio.Auth}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        // creating request
        const req = https.request(reqDetails, (res) => {
            // get the status of the sent request
            const status = res.statusCode;
            if (status === 200 || status === 201) {
                callback(false);
            } else {
                callback(`Status code returned was ${status}`);
            }
        });
        req.on('error', (e) => {
            callback(e);
        });
        req.write(payloadStr);
        req.end();
    } else {
        callback({ error: 'Request Not Valid' });
    }
};
module.exports = notifications;
