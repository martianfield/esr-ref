'use strict'

const expect = require('chai').expect
const prettify = require('./../src/index').prettify

describe('create', () => {
  it('16', () => {
    let ref = prettify('0000000000000000')
    expect(ref).to.equal('0 00000 00000 00000')
  })

  it('27', () => {
    let ref = prettify('000000000000000000000000000')
    expect(ref).to.equal('00 00000 00000 00000 00000 00000')
  })

  it('invalid length', () => {
    let badCall = () => {prettify('12345')}
    expect(badCall).to.throw()
  })

})