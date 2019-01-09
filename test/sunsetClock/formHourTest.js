import chai from "chai"
let expect = chai.expect

import sunsetClock from '../../components/sunsetClock/module'

describe('hour format test', () => {

  it('should return the hour, if minor cicleHour.', () => {
    const hour = 3
    const circle = 12

    expect(sunsetClock.formatHour(hour, circle))
    .to.be.equal(3)
  })

  it('should return formated hour, if major cicleHour.', () => {
    const hour = 15
    const circle = 12

    expect(sunsetClock.formatHour(hour, circle))
      .to.be.equal(3)
  })
})


export default {}
