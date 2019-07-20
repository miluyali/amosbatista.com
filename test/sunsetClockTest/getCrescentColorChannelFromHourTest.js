import chai from "chai"
let expect = chai.expect

import getCrescentColorChannelFromHour from "../../components/sunsetClock/getCrescentColorChannelFromHour"

describe('getCrescentColorChannelFromHourTest', ()=>{

    it(`must be a function that receive 3 integers, color channel from and to, 
      and current hour; must return a string representing the channel relative to hour informed`, ()=>{
      
      expect(typeof getCrescentColorChannelFromHour).to.be.equal('function')

      const testAtMorning = {
        minChannel: 1,
        maxChannel: 200,
        hour: 3
      }
      let expected = "25"
      let actual = getCrescentColorChannelFromHour(testAtMorning.minChannel, testAtMorning.maxChannel, testAtMorning.hour)

      expect(actual).to.be.equal(expected)

      const testAtAfternoon = {
        minChannel: 1,
        maxChannel: 200,
        hour: 13
      }
      expected = "108"
      actual = getCrescentColorChannelFromHour(testAtAfternoon.minChannel, testAtAfternoon.maxChannel, testAtAfternoon.hour)

      expect(actual).to.be.equal(expected)

      const testAtNight = {
        minChannel: 1,
        maxChannel: 200,
        hour: 22
      }
      expected = "182"
      actual = getCrescentColorChannelFromHour(testAtNight.minChannel, testAtNight.maxChannel, testAtNight.hour)

      expect(actual).to.be.equal(expected)
      
    })
});


export default {}
