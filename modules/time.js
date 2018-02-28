function time(data) {
	var second = (Number(data)%60).toFixed(0);
	var minutes = Number(data)/60.toFixed(0);
	var hours = (minutes/60).toFixed(0);
	var time = hours+"h "+minutes+"min "+seconds+"sec ";
	return time
}