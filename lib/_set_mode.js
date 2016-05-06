/**
 * @function _setMode
 * @private
 */

'use strict'

const fs = require('fs')
const co = require('co')

let statAsync = (filename) => new Promise((resolve, reject) =>
  fs.stat(filename, (err, state) => err ? reject(err) : resolve(state))
)

/** @lends _setMode */
function _setMode (filename, mode) {
  let from, to
  return co(function * () {
    let fromState = yield statAsync(filename)
    from = fromState.mode
    yield new Promise((resolve, reject) =>
      fs.chmod(filename, mode, (err) => err ? reject(err) : resolve())
    )
    let toState = yield statAsync(filename)
    to = toState.mode
    return {
      from, to, filename,
      get changed () {
        const s = this
        return s.from !== s.to
      }
    }
  })
}

module.exports = _setMode
