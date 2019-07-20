import chai from "chai"
let expect = chai.expect

import getColorChanelFromHour from "../../components/sunsetClock/defineChannelColorMethod"

describe('getColorChanelFromHourTest', ()=>{

    const crescentChannel = {
      min: 1,
      max: 255
    }

    const decrescentChannel = {
      min: 255,
      max: 1
    }

    const morningHour = 2
    const nextAfternoonHour = 11
    const afternoonHour = 13
    const nightHour = 22

    const crescentReturn = "crescent"
    const decrescentReturn = "decrescent"


    it(`receives a crescent channel color and return 'crescent' to hour
    before 12h and 'decrescent' to hour after 12`, ()=>{
      
      const expectedBefore12 = crescentReturn
      const actualBefore12 = getColorChanelFromHour(
        crescentChannel.min,
        crescentChannel.max,
        morningHour
      )

      expect(actualBefore12).to.be.equal(expectedBefore12)

      const expectedRightBefore12 = crescentReturn
      const actualRightBefore12 = getColorChanelFromHour(
        crescentChannel.min,
        crescentChannel.max,
        nextAfternoonHour
      )

      expect(actualRightBefore12).to.be.equal(expectedRightBefore12)

      const expectedRightAfter12 = decrescentReturn
      const actualRightAfter12 = getColorChanelFromHour(
        crescentChannel.min,
        crescentChannel.max,
        afternoonHour
      )

      expect(actualRightAfter12).to.be.equal(expectedRightAfter12)

      const expectedAfter12 = decrescentReturn
      const actualAfter12 = getColorChanelFromHour(
        crescentChannel.min,
        crescentChannel.max,
        nightHour
      )

      expect(actualAfter12).to.be.equal(expectedAfter12)

    })


    it(`receives a descrescent channel color and return 'decrescent' to hour
    before 12h and 'crescent' to hour after 12`, ()=>{
      
      const expectedBefore12 = decrescentReturn
      const actualBefore12 = getColorChanelFromHour(
        decrescentChannel.min,
        decrescentChannel.max,
        morningHour
      )

      expect(actualBefore12).to.be.equal(expectedBefore12)

      const expectedRightBefore12 = decrescentReturn
      const actualRightBefore12 = getColorChanelFromHour(
        decrescentChannel.min,
        decrescentChannel.max,
        nextAfternoonHour
      )

      expect(actualRightBefore12).to.be.equal(expectedRightBefore12)

      const expectedRightAfter12 = crescentReturn
      const actualRightAfter12 = getColorChanelFromHour(
        decrescentChannel.min,
        decrescentChannel.max,
        afternoonHour
      )

      expect(actualRightAfter12).to.be.equal(expectedRightAfter12)

      const expectedAfter12 = crescentReturn
      const actualAfter12 = getColorChanelFromHour(
        decrescentChannel.min,
        decrescentChannel.max,
        nightHour
      )

      expect(actualAfter12).to.be.equal(expectedAfter12)

    })
	
});


export default {}
