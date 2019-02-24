/**
 * Test case for filemode.
 * Runs with mocha.
 */
'use strict'

const filemode = require('../lib/filemode.js')
const fs = require('fs')
const mkdirp = require('mkdirp')

let tmpDir = __dirname + '/../tmp'

describe('filemode', () => {
  before(async () => {
    mkdirp.sync(tmpDir)
  })

  after(async () => {
  })

  it('Filemode', async () => {
    await filemode(__filename, '644')
    await filemode({
      '*.txt': '644'
    }, { cwd: tmpDir })
    fs.writeFileSync(tmpDir + '/foo.txt', 'foo')
    fs.writeFileSync(tmpDir + '/bar.txt', 'bar')
    await filemode({
      '*.txt': '444'
    }, { cwd: tmpDir })
  })
})

/* global describe, before, after, it */
