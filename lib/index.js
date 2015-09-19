/**
 * Change file permissions
 * @module filemode
 * @version 1.0.0
 */

"use strict";

var filemode = require('./filemode'),
    pkg = require('../package.json');

var lib = filemode.bind(this);
lib.version = pkg.version;
lib.filemode = filemode;

module.exports = lib;