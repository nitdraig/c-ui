
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./c-ui.cjs.production.min.js')
} else {
  module.exports = require('./c-ui.cjs.development.js')
}
