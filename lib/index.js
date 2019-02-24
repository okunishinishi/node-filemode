/**
 * Change file permissions
 * @module filemode
 * @version 3.0.0
 */

'use strict'

const filemode = require('./filemode')
const pkg = require('../package.json')

let lib = filemode.bind(this)

lib.version = pkg.version
lib.filemode = filemode

module.exports = lib
