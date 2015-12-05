var rg = require('./');
var Promise = require('promise');
var http = require('http');

function asyncCall() {
    return new Promise(function(resolve, reject) {
        var options = {
            hostname: 'localhost',
            port: 3001,
        };

        var req = http.request(options, function(res) {
            resolve(res);
        });

        req.end();
    });
}

function *main() {
    yield asyncCall();
    console.log('after call 1');
    yield asyncCall();
    console.log('after call 2');
}

rg(main);
