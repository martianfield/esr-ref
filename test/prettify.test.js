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

  if('16 with spaces', () => {
    let ref = prettify('1 23456 78901 23456')
    expect(ref).to.equal('1 23456 78901 23456')
  })

  it('27 with spaces', () => {
    let ref = prettify('00 00000 00000 00000 00000 00000')
    expect(ref).to.equal('00 00000 00000 00000 00000 00000')
  })

  it('invalid length', () => {
    let badCall = () => {prettify('12345')}
    expect(badCall).to.throw()
  })

})