var mod = {
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
  formatHour: (hour, cicle) => {
    return hour <= cicle ? hour : Math.abs(hour - cicle)
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
      return mod.getCrescentColorChannelFromHour(
        minChannel,
        maxChannel,
        mod.formatHour(currentHour, cicleHour),
        cicleHour
      );
    }

    if (
      (currentHour > cicleHour && minChannel < maxChannel) ||
      (currentHour <= cicleHour && minChannel >= maxChannel)
    ) {
      return mod.getDecrescentColorChannelFromHour(
        minChannel,
        maxChannel,
        mod.formatHour(currentHour, cicleHour),
        cicleHour
      );
    }
  }
}

export default mod
