/**
 * @function _setMode
 * @private
 */

'use strict'

const fs = require('fs')

const statAsync = (filename) => new Promise((resolve, reject) =>
  fs.stat(filename, (err, state) => err ? reject(err) : resolve(state))
)

/** @lends _setMode */
async function _setMode(filename, mode) {
  let from, to
  const fromState = await statAsync(filename)
  from = fromState.mode
  await new Promise((resolve, reject) =>
    fs.chmod(filename, mode, (err) => err ? reject(err) : resolve())
  )
  const toState = await statAsync(filename)
  to = toState.mode
  return {
    from, to, filename,
    get changed() {
      return this.from !== this.to
    }
  }
}

module.exports = _setMode
