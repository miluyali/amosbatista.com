import chai from "chai"
let expect = chai.expect

import getColorChanelFromHour from "../../components/sunsetClock/getColorChanelFromHour"

describe('getColorChanelFromHourTest', ()=>{

    it(`must be a function that receive 3 integers, color channel from and to, 
      and current hour; must return a string representing a channel corresponding to the hour, following this rule
      (from 0 to 12: the channel value must grow
      from 12 to 24: the channel value must shrink)`, ()=>{
      
      expect(typeof getColorChanelFromHour).to.be.equal('function')

      const channel = {
        min: 1,
        max: 255
      }

      const morningHour = 2
      const afternoonHour = 13
      const nightHour = 22

      

    })
	
});


export default {}
