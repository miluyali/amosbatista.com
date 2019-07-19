export default  (hour) => {
  const cicle = 12
  const min = 0
  const max = 23

  if(hour < min || hour > max) return 0

  return hour <= cicle ? hour : Math.abs(hour - cicle)
}