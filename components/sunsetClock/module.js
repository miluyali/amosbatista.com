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
  },
  getColorChannelFromHour: (
    minChannel,
    maxChannel,
    currentHour
  ) => {
    const cicleHour = 12;

    if (
      (currentHour < cicleHour && minChannel < maxChannel) ||
      (currentHour >= cicleHour && minChannel >= maxChannel)
    ) {
      return getCrescentColorChannelFromHour(
        minChannel,
        maxChannel,
        currentHour,
        cicleHour
      );
    }

    if (
      (currentHour > cicleHour && minChannel < maxChannel) ||
      (currentHour <= cicleHour && minChannel >= maxChannel)
    ) {
      return getDecrescentColorChannelFromHour(
        minChannel,
        maxChannel,
        currentHour,
        cicleHour
      );
    }
  }
}
