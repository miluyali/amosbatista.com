import chai from "chai"
let expect = chai.expect

import parseChannelToString from '../../components/sunsetClock/parseChannelToString'

describe('parseChannelToStringTest', ()=>{

  it(`receive 3 channels, must return a CSS color in RGB format`, ()=>{
    const expected1 = "rgb(1,233,12)"
    const color1 = {
      r: "1",
      g: "233",
      b: "12"
    }
    const actual = parseChannelToString(color1.r, color1.g, color1.b)
    
    expect(actual).to.be.equal(expected1)

    const expected2 = "rgb(5,112,80)"
    const color2 = {
      r: "5",
      g: "112",
      b: "80"
    }
    const actual2 = parseChannelToString(color2.r, color2.g, color2.b)
    
    expect(actual2).to.be.equal(expected2)
  })
    
});


export default {}
