// dependencies
const fs = require('fs');
const path = require('path');

const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

// write data to file
lib.create = (dir, file, data, callback) => {
    // open file for writting
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err1, fileDescriptor) => {
        if (!err1 && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);
            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback('');
                        } else {
                            callback(err3);
                        }
                    });
                } else {
                    callback(err2);
                }
            });
        } else {
            callback(err1);
        }
    });
};
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err1, data) => {
        callback(err1, data);
    });
};
lib.update = (dir, file, data, callback) => {
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err1, fileDescriptor) => {
        if (!err1 && fileDescriptor) {
            const stringData = JSON.stringify(data);
            fs.ftruncate(fileDescriptor, (err2) => {
                if (!err2) {
                    fs.writeFile(fileDescriptor, stringData, (err3) => {
                        if (!err3) {
                            fs.close(fileDescriptor, (err4) => {
                                if (!err4) {
                                    callback('');
                                } else {
                                    callback(err4);
                                }
                            });
                        } else {
                            callback(err3);
                        }
                    });
                } else {
                    callback(err2);
                }
            });
        } else {
            callback(err1);
        }
    });
};
lib.delete = (dir, file, callback) => {
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if (!err) {
            callback('');
        } else {
            callback(err);
        }
    });
};
// list all the data from our file system
lib.list = (dir, callback) => {
    fs.readdir(`${lib.basedir + dir}`, (err, fileNames) => {
        if (!err && fileNames.length > 0) {
            const trimmedFileNames = [];
            fileNames.forEach((fileName) => {
                trimmedFileNames.push(fileName.replace('.json', ''));
            });
            callback(false, trimmedFileNames);
        } else {
            callback(true);
        }
    });
};
module.exports = lib;
