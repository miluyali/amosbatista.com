export default (
    minChannel,
    maxChannel,
    currentHour
)=>{
	const cicleHour = 24
	const channelToDeduce = maxChannel <= minChannel ? maxChannel : minChannel
	const gradientValue = Math.abs(
		(
			Math.abs(minChannel - maxChannel)/cicleHour * currentHour
		) - channelToDeduce
	);
		
	return gradientValue.toFixed(0);
}
  