import chai from "chai"
let expect = chai.expect

import sunsetClock from '../components/sunsetClock/module'

describe('sunsetClockTest', function () {

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

  it('should return a number between min and max channel, relative to hour at afternoon', function () {
    const channelFromTo = {
      from: 10,
      to: 200
    }
    const midday = 12
    const afternoonTest = {
      hour: 1,
      expected: '184'
    }

    expect(sunsetClock.getDecrescentColorChannelFromHour(
      channelFromTo.from,
      channelFromTo.to,
      afternoonTest.hour,
      midday
    )).to.be.equal(afternoonTest.expected)

    const nextMidNightTest = {
      hour: 11,
      expected: '26'
    }

    expect(sunsetClock.getDecrescentColorChannelFromHour(
      channelFromTo.from,
      channelFromTo.to,
      nextMidNightTest.hour,
      midday
    )).to.be.equal(nextMidNightTest.expected)

    const afterMidDayTest = {
      hour: 12,
      expected: '10'
    }

    expect(sunsetClock.getDecrescentColorChannelFromHour(
      channelFromTo.from,
      channelFromTo.to,
      afterMidDayTest.hour,
      midday
    )).to.be.equal(afterMidDayTest.expected)
  })

  it('should return a number between reversed min and max channel, relative to hour at morning', function () {
    const channelFromTo = {
      from: 200,
      to: 10
    }
    const midday = 12
    const morningTest = {
      hour: 1,
      expected: '184'
    }

    expect(sunsetClock.getDecrescentColorChannelFromHour(
      channelFromTo.from,
      channelFromTo.to,
      morningTest.hour,
      midday
    )).to.be.equal(morningTest.expected)

    const nextMiddayTest = {
      hour: 11,
      expected: '26'
    }

    expect(sunsetClock.getDecrescentColorChannelFromHour(
      channelFromTo.from,
      channelFromTo.to,
      nextMiddayTest.hour,
      midday
    )).to.be.equal(nextMiddayTest.expected)

    const middayTest = {
      hour: 12,
      expected: '10'
    }

    expect(sunsetClock.getDecrescentColorChannelFromHour(
      channelFromTo.from,
      channelFromTo.to,
      middayTest.hour,
      midday
    )).to.be.equal(middayTest.expected)
  })

  it('should return a number between reversed min and max channel, relative to hour at afternoon', function () {
    const channelFromTo = {
      from: 200,
      to: 10
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
