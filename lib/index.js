/**
 * Change file permissions
 * @module filemode
 * @version 2.0.3
 */

'use strict'

const filemode = require('./filemode')
const pkg = require('../package.json')

let lib = filemode.bind(this)

lib.version = pkg.version
lib.filemode = filemode

module.exports = lib
