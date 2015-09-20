/**
 * @function _setMode
 * @private
 */

"use strict";

var fs = require('fs'),
    async = require('async');

/** @lends _setMode */
function _setMode(filename, mode, callback) {
    var from, to;
    async.series([
        function (callback) {
            fs.stat(filename, function (err, state) {
                from = !err && state.mode;
                callback(err);
            });
        },
        function (callback) {
            fs.chmod(filename, mode, callback);
        },
        function (callback) {
            fs.stat(filename, function (err, state) {
                to = !err && state.mode;
                callback(err);
            });
        }
    ], function (err) {
        callback(err, {
            from: from,
            to: to,
            filename: filename,
            get changed() {
                var s = this;
                return s.from !== s.to;
            }
        });
    });
}

module.exports = _setMode;
