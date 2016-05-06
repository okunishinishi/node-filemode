'use strict'

const filemode = require('filemode')

filemode('ci/*.sh', '755').then(() => {
  /* ... */
})
