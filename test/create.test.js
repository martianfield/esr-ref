'use strict'

const expect = require('chai').expect
const validate = require('./../src/index').validate
const create = require('./../src/index').create

describe('create', () => {
  it('16, not pretty', () => {
    let ref = create('123', {useShort:true})
    expect(ref).to.equal('0000000000001236')
  })

  it('16 (but not possible), not pretty', () => {
    let ref = create('12345678901234567890', {useShort:true})
    expect(ref).to.equal('000000123456789012345678907')
  })

  it('27 from short', () => {
    let ref = create('123')
    expect(ref).to.equal('000000000000000000000001236')
  })

  it('16, pretty', () => {
    let ref = create('1234', {useShort:true, prettify:true})
    expect(ref).to.equal('0 00000 00000 12347')
  })

  it('27, pretty', () => {
    let ref = create('123456789012345678', {prettify:true})
    expect(ref).to.equal('00 00000 01234 56789 01234 56785')
  })

  it('base too long', () => {
    let badCall = () => {create('123456789012345678901234567') }
    expect(badCall).to.throw()
  })

})