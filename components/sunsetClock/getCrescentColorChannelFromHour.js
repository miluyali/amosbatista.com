export default (
  minChannel,
  maxChannel,
  currentHour
)=>{
  const cicleHour = 24
  const gradientValue = (Math.abs(minChannel - maxChannel))/cicleHour * currentHour;

  return gradientValue.toFixed(0);
}
  