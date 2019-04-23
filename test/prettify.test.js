'use strict'

const expect = require('chai').expect
const prettify = require('./../src/index').prettify

describe('prettify', () => {
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


  it('too short (16)', () => {
    let ref = prettify('1234567890')
    expect(ref).to.equal('0 00000 12345 67890')
  })

  it('too short (16), enforceLong', () => {
    let ref = prettify('1234567890', {enforceLong:true})
    expect(ref).to.equal('00 00000 00000 00000 12345 67890')
  })

  it('too short (27)', () => {
    let ref = prettify('12345678901234567890')
    expect(ref).to.equal('00 00000 12345 67890 12345 67890')
  })

  it('too long (more than 27)', () => {
    let badCall = () => {prettify('1234567890123456789012345678')}
    expect(badCall).to.throw()
  })

})