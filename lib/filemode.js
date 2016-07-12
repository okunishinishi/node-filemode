/**
 * Change file permissions.
 * @function filemode
 * @param {string|string[]} pattern - File name pattern.
 * @param {string} mode - File permission string.
 * @param {object} options - Optional settings.
 * @param {string} [options.cwd=process.cwd()] - Working directory path.
 * @param {Promise}
 */

'use strict'

const argx = require('argx')
const co = require('co')
const path = require('path')
const _setMode = require('./_set_mode')
const aglob = require('aglob')

/** @lends filemode */
function filemode (pattern, mode, options) {
  let args = argx(arguments)
  if (args.pop('function')) {
    throw new Error('[filemode] Callback is no more supported. Use promise interface instead.')
  }
  let modes = args.shift('object') || {}
  pattern = args.shift('string')
  mode = args.shift('string|number')
  if (pattern && mode) {
    modes[ pattern ] = mode
  }
  options = args.pop('object') || {}

  let cwd = options.cwd || process.cwd()
  return co(function * () {
    let result = {}
    for (let pattern of Object.keys(modes)) {
      let mode = modes[ pattern ]
      let filenames = yield aglob(pattern, { cwd })
      for (let filename of filenames) {
        let change = yield _setMode(path.resolve(cwd, filename), mode)
        if (change.changed) {
          result[ change.filename ] = {
            from: change.from,
            to: change.to
          }
        }
      }
    }
    return result
  })
}

module.exports = filemode
