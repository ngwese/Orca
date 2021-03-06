'use strict'

const Operator = require('../operator')

function OperatorM (orca, x, y, passive) {
  Operator.call(this, orca, x, y, 'm', passive)

  this.name = 'modulo'
  this.info = 'Outputs the modulo of input.'

  this.ports.haste.val = { x: -1, y: 0 }
  this.ports.input.mod = { x: 1, y: 0 }
  this.ports.output = { x: 0, y: 1 }

  this.run = function () {
    const val = this.listen(this.ports.haste.val, true)
    const mod = this.listen(this.ports.input.mod, true, 1, 36)
    const res = orca.keyOf(val % mod)
    this.output(`${res}`, false, true)
  }
}

module.exports = OperatorM
