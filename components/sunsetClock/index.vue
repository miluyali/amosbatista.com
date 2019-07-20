<script>

  import defineChannelColorMethod from "./defineChannelColorMethod"
  import formatHour from "./formatHour"
  import getCrescentColorChannelFromHour from "./getCrescentColorChannelFromHour"
  import getDecrescentColorChannelFromHour from "./getDecrescentColorChannelFromHour"
  import parseChannelsToString from "./parseChannelToString"
  import moment from "moment"

  const dayColors = {
    first: [57, 214, 224],
    second: [47, 125, 237],
    third: [47, 237, 143],
    letter: [189, 150, 255]
  }

  const nightColors = {
    first: [17, 26, 105],
    second: [59, 13, 117],
    third: [13, 78, 117],
    letter: [255, 246, 87]
  }

  var setClockLetterColor = function(colors, currentHour){
    
    var letterRGBString = getColorStringFromHour(
      dayColors.letter,
      nightColors.letter,
      currentHour
    );
    
    var letterColor =  
    clockDigit.css('color', letterRGBString);
  }

  const generateBgProperty = function(layers, currentHour){
    const gradientType = 'to bottom, ';
    const firstLayer = 0,
      secondLayer = 1,
      thirdLayer = 2
    
    const gradientScript = "linear-gradient(" +
      gradientType +
      layers[firstLayer] + " 0%," + 
      layers[secondLayer] + " 50%," +
      layers[thirdLayer] + "100%)";

    return gradientScript
}

  const processColors = (colorFrom, colorTo, currentHour) => {
    const channelNumber = 2
    let color = [];

    for(let currentChannel = 0;currentChannel<=channelNumber;currentChannel++){
      color.push(
        defineChannelColorMethod(
          colorFrom[currentChannel], colorTo[currentChannel], currentHour
        ) == "crescent" ?
        getCrescentColorChannelFromHour(
          colorFrom[currentChannel], 
          colorTo[currentChannel], 
          formatHour(currentHour)) : 
        getDecrescentColorChannelFromHour(
          colorFrom[currentChannel], 
          colorTo[currentChannel], 
          formatHour(currentHour)
        )
      )
    }

    return parseChannelsToString(color)
  }
  const processTime = (self)=>{
    
    const currentHour = moment().hour()
    let colors = []

    colors.push(processColors(dayColors.first, nightColors.first, currentHour))
    colors.push(processColors(dayColors.second, nightColors.second, currentHour))
    colors.push(processColors(dayColors.third, nightColors.third, currentHour))
    self.clockBg = {
      background: generateBgProperty(colors, currentHour)
    }

    self.digitColor = {
      color: processColors(dayColors.letter, nightColors.letter, currentHour)
    }

    const currentMinute = moment().format("mm")

    self.currentTime = `${currentHour}:${currentMinute}`
  }


  export default {
    data: function () {
      return {
        clockBg: {
          background: "none"
        },
        currentTime: "00:00",
        digitColor: {
          color: "none"
        }
      }
    },
    created: function () {
      const refreshMilisec = 1000
      let self = this

      processTime(self)
      
      setInterval(()=>{
        processTime(self)
      },refreshMilisec)
    },
    head: function () {

      return {
        link: [
          { 
            rel: 'stylesheet', 
            href: 'https://fonts.googleapis.com/css?family=Medula+One' 
          }
        ]
      }
    }
  }
</script>

<template lang="pug">

  .clock.center(v-bind:style="clockBg")
    .time(v-bind:style="digitColor")
      |{{currentTime}}

</template>

<style lang="less">
    
    @font: 'Medula One', cursive;

    .clock{
      width: 100%;
      height: 100%;
      font-family: @font;

      .time{
        width: auto;
        font-size: 500%; 
        margin: auto;
      }
    }

    .center{
      display: flex;
      justify-content: center;   
      align-content: center;
    }
    
</style>
