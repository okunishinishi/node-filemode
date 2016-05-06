/**
 * Test case for filemode.
 * Runs with mocha.
 */
'use strict'

const filemode = require('../lib/filemode.js')
const fs = require('fs')
const mkdirp = require('mkdirp')
const co = require('co')

let tmpDir = __dirname + '/../tmp'

describe('filemode', () => {
  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  after(() => co(function * () {
  }))

  it('Filemode', () => co(function * () {
    yield filemode(__filename, '644')
    yield filemode({
      '*.txt': '644'
    }, { cwd: tmpDir })
    fs.writeFileSync(tmpDir + '/foo.txt', 'foo');
    fs.writeFileSync(tmpDir + '/bar.txt', 'bar');
    yield filemode({
      '*.txt': '444'
    }, { cwd: tmpDir })
  }))
})

/* global describe, before, after, it */
