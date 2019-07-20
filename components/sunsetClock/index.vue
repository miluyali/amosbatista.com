<script>

  import defineChannelColorMethod from "./defineChannelColorMethod"
  import formatHour from "./formatHour"
  import getCrescentColorChannelFromHour from "./getCrescentColorChannelFromHour"
  import getDecrescentColorChannelFromHour from "./getDecrescentColorChannelFromHour"
  import parseChannelsToString from "./parseChannelToString"
  import moment from "moment"

  const dayColors = {
    first: [116, 126, 255],
    second: [125, 94, 232],
    third: [94, 137, 232],
    letter: [189, 150, 255]
  }

  const nightColors = {
    first: [255, 246, 13],
    second: [255, 194, 0],
    third: [232, 181, 13],
    letter: [255, 246, 87]
  }

  const processColors = (colorFrom, colorTo, currentHour) => {
    const channelNumber = 2
    let color = [];

    for(currentChannel == 0;currentChannel<=channelNumber;currentChannel++){
      color.push(
          dayColors.first.defineChannelColorMethod(
          dayColors.first[currentChannel], nightColors.first[currentChannel], currentHour
        ) == "crescent" ?
        getCrescentColorChannelFromHour(
          colorFrom.first[currentChannel], 
          colorTo.first[currentChannel], 
          formatHour(currentHour)) : 
        getDecrescentColorChannelFromHour(
          colorFrom.first[currentChannel], 
          colorTo.first[currentChannel], formatHour(currentHour)
        )
      )
    }

    return parseChannelsToString(color)
  }
  const processTime = ()=>{
    
    const currentHour = moment().hour()
    const color1 = processColors(dayColors.first, nightColors.first, currentHour)
    const currentMinute = moment().format("mm")

    this.clockBg = color1
    this.currentTime = `${currentHour}:${currentMinute}`
    this.clockBg = color1
  }


  export default {
    data: function () {
      return {
        clockBg: "",
        currentTime: "00:00",
        digitColor: ""
      }
    },
    created: function () {
      const refreshMilisec = 1000
      setInterval(()=>{processTime()},refreshMilisec)
    }
      
  }
</script>

<template lang="pug">
    .clock.center()
      .time()
        |{{currentTime}} - {{clockBg}} - {{digitColor}}
</template>

<style lang="less">
    @import url('https://fonts.googleapis.com/css?family=Medula+One');
    @font: 'Medula One', cursive;

    .clock{
        width: 100%;
        height: 100%;
        font-family: @font;

        .center{
            display: flex;
            justify-content: center;   
            align-content: center;
        }

        .time{
            font-size: 500%; 
            margin: auto;
        }
    }
    
</style>
