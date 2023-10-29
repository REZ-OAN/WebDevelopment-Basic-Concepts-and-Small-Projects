// important utilities function

// dependencies
// this is used to hash the some string
const crypto = require('crypto');
const environment = require('./environments');
// module scaffloding
const utilities = {};

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
    let output;
    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }
    return output;
};
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', environment.secretKey).update(str).digest('hex');
        return hash;
    }
    return false;
};
utilities.createRandomString = (strLen) => {
    const len = typeof strLen === 'number' && strLen > 0 ? strLen : false;
    if (len) {
        const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let output = '';
        for (let i = 1; i <= len; i += 1) {
            const randomCharacter = possibleCharacters.charAt(
                Math.floor(Math.random() * possibleCharacters.length)
            );
            output += randomCharacter;
        }
        return output;
    }
    return len;
};
// export module
module.exports = utilities;
