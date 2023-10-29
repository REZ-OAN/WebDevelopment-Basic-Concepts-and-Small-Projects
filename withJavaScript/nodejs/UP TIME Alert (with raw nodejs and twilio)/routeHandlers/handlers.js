/**
 * Title : Sample Handler
 * Description : Sample Handler
 * Author : Rezoan Ahmed Abir (Rez_Wizardry)
 * Date : 10/09/23
 */
// dependencies
const data = require('../lib/data');
const { hash } = require('../helpers/utilities');
const { createRandomString } = require('../helpers/utilities');
const { parseJSON } = require('../helpers/utilities');
const env = require('../helpers/environments');
// define scaffolding
const handlers = {};

// sample handler
handlers.sampleHandler = (reqProperties, callback) => {
    console.log(reqProperties);
    callback(200, { type: 'GOOD', USER: 'Cyborg_Prisoner' });
};
// not found handler
handlers.notFoundHandler = (reqProperties, callback) => {
    console.log(reqProperties);
    callback(404, { type: 'Not Found', USER: 'Cyborg_Prisoner' });
};
// user handler
// handles user related routes
handlers.userHandler = (reqProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(reqProperties.method) > -1) {
        handlers._users[reqProperties.method](reqProperties, callback);
    } else {
        // if don't want to accept other requests
        callback(405);
    }
};
handlers._users = {};
handlers._users.post = (reqProperties, callback) => {
    // used to create new user
    const firstName =
        typeof reqProperties.body.firstName === 'string' &&
        reqProperties.body.firstName.trim().length > 0
            ? reqProperties.body.firstName
            : false;
    const lastName =
        typeof reqProperties.body.lastName === 'string' &&
        reqProperties.body.lastName.trim().length > 0
            ? reqProperties.body.lastName
            : false;
    const phone =
        typeof reqProperties.body.phone === 'string' &&
        reqProperties.body.phone.trim().length === 11
            ? reqProperties.body.phone
            : false;
    // password validation regex
    // const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
    const password =
        typeof reqProperties.body.password === 'string' &&
        reqProperties.body.password.length >= 8 &&
        reqProperties.body.password.length <= 32
            ? reqProperties.body.password
            : false;
    const checks = [];
    const isCheckedTerms =
        typeof reqProperties.body.agreement === 'boolean' && reqProperties.body.agreement
            ? reqProperties.body.agreement.toString()
            : false;

    if (firstName && lastName && phone && password && isCheckedTerms) {
        // making sure that the user is already exists or not
        // phoneno is the primary key
        data.read('users', phone, (err1, user) => {
            if (err1) {
                // password must be hashed
                const hashedPassword = hash(password);
                const userObj = {
                    firstName,
                    lastName,
                    phone,
                    password: hashedPassword,
                    isCheckedTerms,
                    checks,
                };
                // store the user into filesystem
                data.create('users', phone, userObj, (err2) => {
                    if (!err2) {
                        callback(200, { message: 'user successfully created' });
                    } else {
                        callback(500, { error: 'Could Not Create User!!' });
                    }
                });
            } else {
                callback(500, {
                    error: 'There was a problem in server side!!!',
                });
            }
        });
    } else {
        // user request e problem hole 400
        callback(400, {
            error: 'There is a problem in your request',
        });
    }
};

handlers._users.get = (reqProperties, callback) => {
    // get kivabe kaj kore?
    // querystring pay sekhan theke oi onujayi kono kisu ase kina db te oita check kore
    // checking the phone no is valid or not
    const phone =
        typeof reqProperties.queryStringObject.phone === 'string' &&
        reqProperties.queryStringObject.phone.trim().length === 11
            ? reqProperties.queryStringObject.phone.trim()
            : false;
    if (phone) {
        // verify token
        const token =
            typeof reqProperties.headersObject.token === 'string'
                ? reqProperties.headersObject.token
                : false;
        handlers._token.verifyToken(token, phone, (isVerified) => {
            if (isVerified) {
                data.read('users', phone, (err, user) => {
                    const userData = { ...parseJSON(user) };
                    if (!err && userData) {
                        delete userData.password;

                        callback(200, userData);
                    } else {
                        callback(404, { error: 'no such user is there' });
                    }
                });
            } else {
                // un authenticated er jonno 403 dite hoy
                callback(403, { error: 'User Access Is Denied!! Authentication Failed' });
            }
        });
    } else {
        callback(404, { error: 'no such user is there' });
    }
};
handlers._users.put = (reqProperties, callback) => {
    const phone =
        typeof reqProperties.body.phone === 'string' &&
        reqProperties.body.phone.trim().length === 11
            ? reqProperties.body.phone.trim()
            : false;
    if (phone) {
        // verify token
        const token =
            typeof reqProperties.headersObject.token === 'string'
                ? reqProperties.headersObject.token
                : false;
        handlers._token.verifyToken(token, phone, (isVerified) => {
            if (isVerified) {
                data.read('users', phone, (err1, user) => {
                    const userData = { ...parseJSON(user) };
                    if (!err1 && userData) {
                        const firstName =
                            typeof reqProperties.body.firstName === 'string' &&
                            reqProperties.body.firstName.trim().length > 0
                                ? reqProperties.body.firstName
                                : false;
                        const lastName =
                            typeof reqProperties.body.lastName === 'string' &&
                            reqProperties.body.lastName.trim().length > 0
                                ? reqProperties.body.lastName
                                : false;
                        const password =
                            typeof reqProperties.body.password === 'string' &&
                            reqProperties.body.password.length >= 8 &&
                            reqProperties.body.password.length <= 32
                                ? reqProperties.body.password
                                : false;
                        if (firstName || lastName || password) {
                            if (firstName) {
                                userData.firstName = firstName;
                            }
                            if (lastName) {
                                userData.lastName = lastName;
                            }
                            if (password) {
                                userData.password = hash(password);
                            }
                            data.update('users', phone, userData, (err2) => {
                                if (!err2) {
                                    callback(200, { message: 'user successfully updated' });
                                } else {
                                    callback(500, {
                                        error: 'Update is not completer error at server side',
                                    });
                                }
                            });
                        }
                    } else {
                        callback(404, { error: 'no such user is there' });
                    }
                });
            } else {
                // un authenticated er jonno 403 dite hoy
                callback(403, { error: 'User Access Is Denied!! Authentication Failed' });
            }
        });
    } else {
        callback(404, { error: 'No such phone no there in file system' });
    }
};

handlers._users.delete = (reqProperties, callback) => {
    const phone =
        typeof reqProperties.queryStringObject.phone === 'string' &&
        reqProperties.queryStringObject.phone.trim().length === 11
            ? reqProperties.queryStringObject.phone.trim()
            : false;
    if (phone) {
        // verify token
        const token =
            typeof reqProperties.headersObject.token === 'string'
                ? reqProperties.headersObject.token
                : false;
        handlers._token.verifyToken(token, phone, (isVerified) => {
            if (isVerified) {
                data.read('users', phone, (err1, user) => {
                    const userData = { ...parseJSON(user) };
                    if (!err1 && userData) {
                        data.delete('users', phone, (err2) => {
                            callback(200, {
                                message: `Deleting user ${`${userData.firstName} ${userData.lastName}`} phone ${
                                    userData.phone
                                } successfully completed`,
                            });
                        });
                    } else {
                        callback(500, {
                            error: 'Deleting User is not successful server ERROR or user not found',
                        });
                    }
                });
            } else {
                // un authenticated er jonno 403 dite hoy
                callback(403, { error: 'User Access Is Denied!! Authentication Failed' });
            }
        });
    } else {
        callback(404, { error: 'no such user is there' });
    }
};

// token related routes
handlers.tokenHandler = (reqProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(reqProperties.method) > -1) {
        handlers._token[reqProperties.method](reqProperties, callback);
    } else {
        // if don't want to accept other requests
        callback(405);
    }
};
/**
 * What is token
 *  kind of one time password which is available for limited time
 */
handlers._token = {};
handlers._token.post = (reqProperties, callback) => {
    const phone =
        typeof reqProperties.body.phone === 'string' &&
        reqProperties.body.phone.trim().length === 11
            ? reqProperties.body.phone
            : false;
    // password validation regex
    // const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
    const password =
        typeof reqProperties.body.password === 'string' &&
        reqProperties.body.password.length >= 8 &&
        reqProperties.body.password.length <= 32
            ? reqProperties.body.password
            : false;
    if (phone && password) {
        data.read('users', phone, (err1, userData) => {
            /**
             * but we have hashed password in our filesystem so
             * we have to retrive the original password from the
             * encrypted one
             */
            const userDataJson = parseJSON(userData);
            const hashedPassword = hash(password);
            if (!err1 && hashedPassword === userDataJson.password) {
                // giving the length of the random string
                const tokenId = createRandomString(32);
                // expire duration of the token
                const expires = Date.now() + 2 * 60 * 1000;
                const tokenObject = {
                    phone,
                    id: tokenId,
                    expires,
                };
                data.create('tokens', tokenId, tokenObject, (err2) => {
                    if (!err2) {
                        callback(200, tokenObject);
                    } else {
                        callback(500, { error: 'Server Side Problem' });
                    }
                });
            } else {
                callback(400, { error: 'Password or Phone may not valid' });
            }
        });
    } else {
        callback(400, { error: 'Your Request Is Terminated With A Client Side Error' });
    }
};

handlers._token.get = (reqProperties, callback) => {
    // get kivabe kaj kore?
    // querystring pay sekhan theke oi onujayi kono kisu ase kina db te oita check kore
    // checking the phone no is valid or not
    const id =
        typeof reqProperties.queryStringObject.id === 'string' &&
        reqProperties.queryStringObject.id.trim().length === 32
            ? reqProperties.queryStringObject.id.trim()
            : false;
    if (id) {
        data.read('tokens', id, (err, availablToken) => {
            const tokenAvailable = { ...parseJSON(availablToken) };
            if (!err && tokenAvailable) {
                callback(200, tokenAvailable);
            } else {
                callback(404, { error: 'no such token  is there' });
            }
        });
    } else {
        callback(404, { error: 'no such token is there' });
    }
};

handlers._token.put = (reqProperties, callback) => {
    const id =
        typeof reqProperties.body.id === 'string' && reqProperties.body.id.trim().length === 32
            ? reqProperties.body.id.trim()
            : false;
    const extend = !!(
        typeof reqProperties.body.extend === 'boolean' && reqProperties.body.extend === true
    );
    if (id && extend) {
        data.read('tokens', id, (err1, availablToken) => {
            const tokenAvailable = { ...parseJSON(availablToken) };
            if (!err1 && tokenAvailable.expires > Date.now()) {
                tokenAvailable.expires = Date.now() + 60 * 1000;
                data.update('tokens', id, tokenAvailable, (err2) => {
                    if (!err2) {
                        callback(200, { message: 'Expired Time Extended about 1 min' });
                    } else {
                        callback(404, { error: 'There is a problem on server Side' });
                    }
                });
            } else {
                callback(404, { error: 'No Such Token Is There or Token May Expired' });
            }
        });
    } else {
        callback(404, { error: 'Request Failed For Extended Expired Time' });
    }
};

handlers._token.delete = (reqProperties, callback) => {
    const id =
        typeof reqProperties.queryStringObject.id === 'string' &&
        reqProperties.queryStringObject.id.trim().length === 32
            ? reqProperties.queryStringObject.id.trim()
            : false;
    if (id) {
        data.read('tokens', id, (err1, token) => {
            const tokenData = { ...parseJSON(token) };
            if (!err1 && tokenData) {
                data.delete('tokens', id, (err2) => {
                    callback(200, {
                        message: `Deleting Token ${`${id}`} phone ${
                            tokenData.phone
                        } successfully completed`,
                    });
                });
            } else {
                callback(500, {
                    error: 'Deleting Token is not successful server ERROR or user not found',
                });
            }
        });
    } else {
        callback(404, { error: 'no such Token is there' });
    }
};
handlers._token.verifyToken = (id, phone, callback) => {
    data.read('tokens', id, (err, tokenData) => {
        if (!err && tokenData) {
            const tokenDataJson = { ...parseJSON(tokenData) };
            if (phone === tokenDataJson.phone && tokenDataJson.expires > Date.now()) {
                callback(true);
            } else {
                callback(false);
            }
        } else {
            callback(false);
        }
    });
};

// check  related routes
handlers.checkHandler = (reqProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(reqProperties.method) > -1) {
        handlers._check[reqProperties.method](reqProperties, callback);
    } else {
        // if don't want to accept other requests
        callback(405);
    }
};
handlers._check = {};
handlers._check.post = (reqProperties, callback) => {
    const protocol =
        typeof reqProperties.body.protocol === 'string' &&
        ['http', 'https'].indexOf(reqProperties.body.protocol) > -1
            ? reqProperties.body.protocol
            : false;
    const url =
        typeof reqProperties.body.url === 'string' && reqProperties.body.url.trim().length > 0
            ? reqProperties.body.url
            : false;
    const method =
        typeof reqProperties.body.method === 'string' &&
        ['GET', 'POST', 'PUT', 'DELETE'].indexOf(reqProperties.body.method) > -1
            ? reqProperties.body.method
            : false;
    const successCodes =
        typeof reqProperties.body.successCodes === 'object' &&
        reqProperties.body.successCodes instanceof Array
            ? reqProperties.body.successCodes
            : false;
    const timeoutSeconds =
        typeof reqProperties.body.timeoutSeconds === 'number' &&
        reqProperties.body.timeoutSeconds % 1 === 0 &&
        reqProperties.body.timeoutSeconds >= 1 &&
        reqProperties.body.timeoutSeconds <= 5
            ? reqProperties.body.timeoutSeconds
            : false;

    if (protocol && url && method && successCodes && timeoutSeconds) {
        const token =
            typeof reqProperties.headersObject.token === 'string'
                ? reqProperties.headersObject.token
                : false;
        // lookup user phone by reading the token
        data.read('tokens', token, (err1, tokenData) => {
            if (!err1 && tokenData) {
                const tokenD = { ...parseJSON(tokenData) };
                const userPhone = tokenD.phone;
                data.read('users', userPhone, (err2, userData) => {
                    if (!err2 && userData) {
                        handlers._token.verifyToken(token, userPhone, (isValid) => {
                            if (isValid) {
                                const userD = { ...parseJSON(userData) };
                                const userChecks =
                                    typeof userD.checks === 'object' &&
                                    userD.checks instanceof Array
                                        ? userD.checks
                                        : [];
                                if (userChecks.length < env.maxChecks) {
                                    const checkId = createRandomString(20);
                                    const checkObject = {
                                        id: checkId,
                                        phone: userPhone,
                                        protocol,
                                        url,
                                        method,
                                        successCodes,
                                        timeoutSeconds,
                                    };
                                    // save the data
                                    data.create('checks', checkId, checkObject, (err3) => {
                                        if (!err3) {
                                            // now update the user checks on user file
                                            // put request
                                            userD.checks = [...userChecks];
                                            userD.checks.push(checkId);
                                            // save the new data
                                            data.update('users', userPhone, userD, (err4) => {
                                                if (!err4) {
                                                    callback(200, checkObject);
                                                } else {
                                                    callback(500, { error: 'server side problem' });
                                                }
                                            });
                                        }
                                    });
                                } else {
                                    callback(401, {
                                        error: 'User Already Reached Max Check Limit',
                                    });
                                }
                            } else {
                                callback(403, {
                                    error: 'Authentication Failed',
                                });
                            }
                        });
                    } else {
                        callback(500, {
                            error: 'server side problem',
                        });
                    }
                });
            } else {
                callback(403, { error: 'Authentication Failure' });
            }
        });
    } else {
        callback(400, 'User Request Is Failed Due To Mislead Request');
    }
};

handlers._check.get = (reqProperties, callback) => {
    const id =
        typeof reqProperties.queryStringObject.id === 'string' &&
        reqProperties.queryStringObject.id.trim().length === 20
            ? reqProperties.queryStringObject.id.trim()
            : false;
    if (id) {
        data.read('checks', id, (err, checkData) => {
            if (!err) {
                const token =
                    typeof reqProperties.headersObject.token === 'string'
                        ? reqProperties.headersObject.token
                        : false;
                const checkDataJson = { ...parseJSON(checkData) };
                handlers._token.verifyToken(token, checkDataJson.phone, (isValid) => {
                    if (isValid) {
                        callback(200, checkDataJson);
                    } else {
                        callback(403, { error: 'Authentication Error' });
                    }
                });
            } else {
                callback(500, { error: 'Error at Server Side' });
            }
        });
    } else {
        callback(404, { error: 'Requested Id Is Not Valid' });
    }
};
handlers._check.put = (reqProperties, callback) => {
    const id =
        typeof reqProperties.queryStringObject.id === 'string' &&
        reqProperties.queryStringObject.id.trim().length === 20
            ? reqProperties.queryStringObject.id.trim()
            : false;
    const protocol =
        typeof reqProperties.body.protocol === 'string' &&
        ['http', 'https'].indexOf(reqProperties.body.protocol) > -1
            ? reqProperties.body.protocol
            : false;
    const url =
        typeof reqProperties.body.url === 'string' && reqProperties.body.url.trim().length > 0
            ? reqProperties.body.url
            : false;
    const method =
        typeof reqProperties.body.method === 'string' &&
        ['GET', 'POST', 'PUT', 'DELETE'].indexOf(reqProperties.body.method) > -1
            ? reqProperties.body.method
            : false;
    const successCodes =
        typeof reqProperties.body.successCodes === 'object' &&
        reqProperties.body.successCodes instanceof Array
            ? reqProperties.body.successCodes
            : false;
    const timeoutSeconds =
        typeof reqProperties.body.timeoutSeconds === 'number' &&
        reqProperties.body.timeoutSeconds % 1 === 0 &&
        reqProperties.body.timeoutSeconds >= 1 &&
        reqProperties.body.timeoutSeconds <= 5
            ? reqProperties.body.timeoutSeconds
            : false;
    if (id) {
        if (protocol || url || successCodes || timeoutSeconds) {
            data.read('checks', id, (err1, checkData) => {
                if (!err1 && checkData) {
                    const checkDataJson = { ...parseJSON(checkData) };
                    const token =
                        typeof reqProperties.headersObject.token === 'string'
                            ? reqProperties.headersObject.token
                            : false;
                    console.log(token, checkDataJson.phone);
                    handlers._token.verifyToken(token, checkDataJson.phone, (isValid) => {
                        if (isValid) {
                            if (protocol) {
                                checkDataJson.protocol = protocol;
                            }
                            if (url) {
                                checkDataJson.url = url;
                            }
                            if (successCodes) {
                                checkDataJson.successCodes = successCodes;
                            }
                            if (timeoutSeconds) {
                                checkDataJson.timeoutSeconds = timeoutSeconds;
                            }
                            data.update('checks', id, checkDataJson, (err2) => {
                                if (!err2) {
                                    callback(200, checkDataJson);
                                } else {
                                    callback(500, { error: 'Error At Server Side' });
                                }
                            });
                        } else {
                            callback(403, { error: 'Authorization Error' });
                        }
                    });
                } else {
                    callback(500, { error: 'Problem Occured At Server Side' });
                }
            });
        } else {
            callback(500, { error: 'You Provided An Invalid CheckID' });
        }
    } else {
        callback(400, { error: 'Request Is not Valid' });
    }
};

handlers._check.delete = (reqProperties, callback) => {
    const id =
        typeof reqProperties.queryStringObject.id === 'string' &&
        reqProperties.queryStringObject.id.trim().length === 20
            ? reqProperties.queryStringObject.id.trim()
            : false;
    if (id) {
        data.read('checks', id, (err, checkData) => {
            if (!err) {
                const token =
                    typeof reqProperties.headersObject.token === 'string'
                        ? reqProperties.headersObject.token
                        : false;
                const checkDataJson = { ...parseJSON(checkData) };
                handlers._token.verifyToken(token, checkDataJson.phone, (isValid) => {
                    if (isValid) {
                        // delete the check data
                        data.delete('checks', id, (err1) => {
                            if (!err1) {
                                data.read('users', checkDataJson.phone, (err2, userData) => {
                                    if (!err2 && userData) {
                                        const userDataJson = { ...parseJSON(userData) };
                                        const userChecks = [...userDataJson.checks];
                                        const idx = userChecks.indexOf(id);
                                        if (idx > -1) {
                                            const removedCheck = userChecks.splice(idx, 1);
                                            userDataJson.checks = [...userChecks];
                                            data.update(
                                                'users',
                                                checkDataJson.phone,
                                                userDataJson,
                                                (err3) => {
                                                    if (!err3) {
                                                        callback(200, {
                                                            message: 'Checks Deleted Successfully',
                                                        });
                                                    } else {
                                                        callback(500, {
                                                            error: 'Server Side Problem',
                                                        });
                                                    }
                                                }
                                            );
                                        } else {
                                            callback(203, { message: 'Nothing To Delete' });
                                        }
                                    } else {
                                        callback(500, { error: 'Server Side Problem' });
                                    }
                                });
                            } else {
                                callback(500, { error: 'Server Side Problem' });
                            }
                        });
                    } else {
                        callback(403, { error: 'Authentication Error' });
                    }
                });
            } else {
                callback(500, { error: 'Error at Server Side' });
            }
        });
    } else {
        callback(404, { error: 'Requested Id Is Not Valid' });
    }
};
module.exports = handlers;
