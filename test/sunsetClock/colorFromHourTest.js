//https://github.com/mochajs/mocha/wiki




import chai from "chai"
let expect = chai.expect

import sunsetClock from '../../components/sunsetClock/module'

describe('color from hour test', function () {

  it('should return a number between min and max channel, relative to hour at morning', function () {
    const channelFromTo = {
      from: 10,
      to: 200
    }
    const midday = 12
    const morningTest = {
      hour: 1,
      expected: '16'
    }

    expect(sunsetClock.getCrescentColorChannelFromHour(
      channelFromTo.from,
      channelFromTo.to,
      morningTest.hour,
      midday
    )).to.be.equal(morningTest.expected)

    const nextMiddayTest = {
      hour: 11,
      expected: '174'
    }

    expect(sunsetClock.getCrescentColorChannelFromHour(
      channelFromTo.from,
      channelFromTo.to,
      nextMiddayTest.hour,
      midday
    )).to.be.equal(nextMiddayTest.expected)

    const middayTest = {
      hour: 12,
      expected: '190'
    }

    expect(sunsetClock.getCrescentColorChannelFromHour(
      channelFromTo.from,
      channelFromTo.to,
      middayTest.hour,
      midday
    )).to.be.equal(middayTest.expected)
  })


});


export default {}
