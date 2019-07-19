import chai from "chai"
let expect = chai.expect

import formatHour from "../../components/sunsetClock/formatHour"

describe('formatHourTest', ()=>{

	it('must be a method than format a hour by 12h format, and return 0 if hour got beyond 23 hour', ()=>{
      expect(typeof formatHour).to.be.equal('function')
      
      const hourToTest = 10
      let expected = 10
      let actual = formatHour(hourToTest)

      expect(actual).to.be.equal(expected)

      const hourPast12 = 13
      expected = 1
      actual = formatHour(hourPast12)

      expect(actual).to.be.equal(expected)

      const hourPast12_2 = 23
      expected = 11
      actual = formatHour(hourPast12_2)

      expect(actual).to.be.equal(expected)

      const minorZeroHour = -1
      expected = 0
      actual = formatHour(minorZeroHour)

      expect(actual).to.be.equal(expected)

      const hourBeyond23 = 29
      expected = 0
      actual = formatHour(hourBeyond23)

      expect(actual).to.be.equal(expected)
    });
    
});


export default {}
