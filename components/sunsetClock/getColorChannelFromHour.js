import getCrescentColorChannelFromHour from './getCrescentColorChannelFromHour'
import getDecrescentColorChannelFromHour from './getDecrescentColorChannelFromHour'

export default (
  minChannel,
  maxChannel,
  currentHour
)=>{
  const cicleHour = 12;
    
  if(
    (currentHour < cicleHour && minChannel < maxChannel)  || 
    (currentHour >= cicleHour && minChannel >= maxChannel )
  ) {
    return getCrescentColorChannelFromHour(
      minChannel,
      maxChannel,
      formatHour(currentHour)
    );
  }
    
  if(
    (currentHour > cicleHour && minChannel < maxChannel) ||
    (currentHour <= cicleHour && minChannel >= maxChannel)
  ) {
    return getDecrescentColorChannelFromHour(
      minChannel,
      maxChannel,
      formatHour(currentHour)
    );
  }
}
