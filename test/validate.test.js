'use strict'

const expect = require('chai').expect
const validate = require('./../src/index').validate

describe('validate', () => {
  it('too long', () => {
    let valid = validate("1234567890123456789012345678")
    expect(valid).to.equal(false)
  })

  it('too short (empty string)', () => {
    let valid = validate('')
    expect(valid).to.equal(false)
  })

  it('valid short esr', () => {
    let valid = validate('12345678903')
    expect(valid).to.equal(true)
  })

  it('valid short esr+', () => {
    let valid = validate('123456789012345678907')
    expect(valid).to.equal(true)
  })

  it('valid esr', () => {
    let valid = validate("1234567890123456")
    expect(valid).to.equal(true)
  })

  it('valid esr+', () => {
    let valid = validate("123456789012345678901234567")
    expect(valid).to.equal(true)
  })

  it('invalid 16', () => {
    let valid = validate("1234567890123458")
    expect(valid).to.equal(false)
  })

  it('invalid 27', () => {
    let valid = validate("123456789012345678901234568")
    expect(valid).to.equal(false)
  })

})