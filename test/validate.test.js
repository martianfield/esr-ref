'use strict'

const expect = require('chai').expect
const validate = require('./../src/index').validate

describe('validate', () => {
  it('a', () => {
    // arrange
    let ref = "1234567890123456"
    // act
    let valid = validate(ref)
    // assert
    expect(valid).to.equal(true)
  })
})
/*
describe('days', () => {
  describe('Days', () => {
    it('one day', () => {
      // arrange
      let options = { language: 'en' }
      let days = [1]
      // act
      let result = f(days, options)
      // assert
      expect(result.days.length).to.equal(1)
      expect(result.days).to.deep.equal(['Monday'])
    })

    it('one day (Sunday)', () => {
      // arrange
      let options = { language: 'en' }
      let days = [7]
      // act
      let result = f(days, options)
      // assert
      expect(result.days.length).to.equal(1)
      expect(result.days).to.deep.equal(['Sunday'])
    })


    it('several days', () => {
      // arrange
      let options = {language: 'en'}
      let days = [2, 4, 7]
      // act
      let result = f(days, options)
      // assert
      expect(result.days.length).to.equal(3)
      expect(result.days).to.deep.equal(["Tuesday", "Thursday", "Sunday"])
    })

    it('one day, zero based', () => {
      // arrange
      let options = { language: 'en', zeroBased:true }
      let days = [1]
      // act
      let result = f(days, options)
      // assert
      expect(result.days.length).to.equal(1)
      expect(result.days).to.deep.equal(['Tuesday'])
    })
  })

  describe('Periods', () => {
    it('one single day', () => {
      // arrange
      let days = [5]
      let options = { language:'en', zeroBased:false }
      // act
      let result = f(days, options)
      // assert
      expect(result.periods.length).to.equal(1)
      expect(result.periods).to.deep.equal(["Friday"])
    })

    it('one single day (Sunday)', () => {
      // arrange
      let days = [7]
      let options = { language:'en', zeroBased:false }
      // act
      let result = f(days, options)
      // assert
      expect(result.periods.length).to.equal(1)
      expect(result.periods).to.deep.equal(["Sunday"])
    })

    it('one period inside week', () => {
      // arrange
      let days = [5,6,7]
      let options = { language:'en', zeroBased:false, connector:'-' }
      // act
      let result = f(days, options)
      // assert
      expect(result.periods.length).to.equal(1)
      expect(result.periods).to.deep.equal(["Friday-Sunday"])
    })

    it('several periods inside week', () => {
      // arrange
      let days = [1,2,5,6]
      let options = { language:'en', zeroBased:false, connector:'-' }
      // act
      let result = f(days, options)
      // assert
      expect(result.periods.length).to.equal(2)
      expect(result.periods).to.deep.equal(["Monday-Tuesday", "Friday-Saturday"] )

    })

    it('period crossing week boundary', () => {
      // arrange
      let days = [6, 7, 1, 2]
      let options = { language:'en', zeroBased:false, connector:'-' }
      // act
      let result = f(days, options)
      //
      expect(result.periods).to.deep.equal(["Saturday-Tuesday"])
    })

    it('full week (in order)', () => {
      // arrange
      let days = [1, 2, 3, 4, 5, 6, 7]
      let options = { language:'en', zeroBased:false, connector:'-' }
      // act
      let result = f(days, options)
      // assert
      expect(result.periods).to.deep.equal(["Monday-Sunday"])
    })

    it('full week (in a mess)', () => {
      // arrange
      let days = [6, 2, 5, 1, 7, 4, 3]
      let options = { language:'en', zeroBased:false, connector:'-' }
      // act
      let result = f(days, options)
      // assert
      expect(result.periods).to.deep.equal(["Monday-Sunday"])
    })

  })
})
*/