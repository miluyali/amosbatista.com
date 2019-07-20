
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
    return "crescent"
  }
    
  if(
    (currentHour > cicleHour && minChannel < maxChannel) ||
    (currentHour <= cicleHour && minChannel >= maxChannel)
  ) {
    return "decrescent"
  }
}
