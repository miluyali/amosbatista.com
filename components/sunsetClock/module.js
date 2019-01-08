export default {
  getCrescentColorChannelFromHour: (
    minChannel,
    maxChannel,
    currentHour,
    cicleHour
  ) => {
    const gradientValue = (Math.abs(minChannel - maxChannel)) / cicleHour * currentHour;
    return gradientValue.toFixed(0);
  },
  getDecrescentColorChannelFromHour: (
    minChannel,
    maxChannel,
    currentHour,
    cicleHour
  ) => {
    const channelToDeduce = maxChannel >= minChannel ? maxChannel : minChannel
    const gradientValue = Math.abs(
      (Math.abs(minChannel - maxChannel) / cicleHour * currentHour) - channelToDeduce
    );

    return gradientValue.toFixed(0);
  }
}
