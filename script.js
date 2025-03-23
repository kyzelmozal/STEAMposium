window.onload = function() {
	var countDownDate = new Date("Jun 5, 2025 17:00:00").getTime();
	var x = setInterval(function() {

	  var now = new Date().getTime();
		
	  var distance = countDownDate - now;
		
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
	  document.getElementById("timerDisplayDays").innerHTML = days + " days";
	  document.getElementById("timerDisplayHours").innerHTML = hours + " hours";
	  document.getElementById("timerDisplayMinutes").innerHTML = minutes + " minutes";
	  document.getElementById("timerDisplaySeconds").innerHTML = seconds + " seconds";
		
	  if (distance < 0) {
		clearInterval(x);
		document.getElementById("timerDisplay").innerHTML = "EXPIRED";
	  }
	}, 1000);
}


