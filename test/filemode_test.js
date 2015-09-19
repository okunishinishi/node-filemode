/**
 * Test case for filemode.
 * Runs with nodeunit.
 */

var filemode = require('../lib/filemode.js'),
    fs = require('fs'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Filemode'] = function (test) {
    filemode(__filename, '644', function (err) {
        test.ifError(err);
        filemode({
            '*.txt': '644'
        }, {cwd: tmpDir}, function (err) {
            fs.writeFileSync(tmpDir + '/foo.txt', 'foo');
            fs.writeFileSync(tmpDir + '/bar.txt', 'bar');
            test.ifError(err);
            filemode({
                '*.txt': '444'
            }, {cwd: tmpDir}, function (err) {
                test.ifError(err);
                test.done();
            });
        });
    });
};

