import chai from "chai"
let expect = chai.expect

import getDecrescentColorChannelFromHour from "../../components/sunsetClock/getDecrescentColorChannelFromHour"

describe('getDecrescentColorChannelFromHourTest', ()=>{

    it(`must be a function that receive 3 integers, color channel to and from (inversed), 
      and current hour; must return a string representing the channel inversely relative to hour informed`, ()=>{
      
      expect(typeof getDecrescentColorChannelFromHour).to.be.equal('function')

      const testAtMorning = {
        minChannel: 200,
        maxChannel: 1,
        hour: 3
      }
      let expected = "24"
      let actual = getDecrescentColorChannelFromHour(testAtMorning.minChannel, testAtMorning.maxChannel, testAtMorning.hour)

      expect(actual).to.be.equal(expected)

      const testAtAfternoon = {
        minChannel: 1,
        maxChannel: 200,
        hour: 13
      }
      expected = "107"
      actual = getDecrescentColorChannelFromHour(testAtAfternoon.minChannel, testAtAfternoon.maxChannel, testAtAfternoon.hour)

      expect(actual).to.be.equal(expected)

      const testAtNight = {
        minChannel: 1,
        maxChannel: 200,
        hour: 22
      }
      expected = "181"
      actual = getDecrescentColorChannelFromHour(testAtNight.minChannel, testAtNight.maxChannel, testAtNight.hour)

      expect(actual).to.be.equal(expected)
      
    })

	
});


export default {}
