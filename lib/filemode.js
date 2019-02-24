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
const path = require('path')
const _setMode = require('./_set_mode')
const aglob = require('aglob')

/** @lends filemode */
async function filemode(pattern, mode, options) {
  const args = argx(arguments)
  if (args.pop('function')) {
    throw new Error('[filemode] Callback is no more supported. Use promise interface instead.')
  }
  const modes = args.shift('object') || {}
  pattern = args.shift('string')
  mode = args.shift('string|number')
  if (pattern && mode) {
    modes[pattern] = mode
  }
  options = args.pop('object') || {}

  const cwd = options.cwd || process.cwd()
  const result = {}
  for (let pattern of Object.keys(modes)) {
    let mode = modes[pattern]
    let filenames = await aglob(pattern, { cwd })
    for (let filename of filenames) {
      let change = await _setMode(path.resolve(cwd, filename), mode)
      if (change.changed) {
        result[change.filename] = {
          from: change.from,
          to: change.to
        }
      }
    }
  }
  return result
}

module.exports = filemode
