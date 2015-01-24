function CountDownTimer( dateTime, divId) {
	
           //var end     = new Date(dateTime);
		    var _second = 1000;
			var _minute = _second * 60;
			var _hour   = _minute * 60;
			var _day    = _hour * 24;
			var timer;
		
		setInterval(function () {

		    timer = new Date(dateTime).getTime() - new Date().getTime(); 
								 
			_days = parseInt(timer / _day);
			timer = timer % _day;
			 			 
			_hours = parseInt(timer / _hour);
			timer = timer % _hour;			
			 
			_minutes = parseInt(timer / _minute);
			timer = timer % _minute;
			
			_seconds = parseInt(timer / _second);
			 
			document.getElementById(divId).innerHTML = "GroundHog's Day will be in: <br>"+_days + "d, " + _hours + "h, " + _minutes + "m, " + _seconds + "s"; 
		
		},1000);
		
		/*function showRemaining() {	

		    timer = new Date(dateTime).getTime() - new Date().getTime(); 
								 
			_days = parseInt(timer / _day);
			timer = timer % _day;
			 			 
			_hours = parseInt(timer / _hour);
			timer = timer % _hour;			
			 
			_minutes = parseInt(timer / _minute);
			timer = timer % _minute;
			
			_seconds = parseInt(timer / _second);
			 
			document.getElementById(divId).innerHTML = "GroundHog's Day will be in: <br>"+_days + "d, " + _hours + "h, " + _minutes + "m, " + _seconds + "s"; 
		}		
		setInterval(showRemaining() , 1000);*/	
	}
	
CountDownTimer('02/02/2015 12:00 AM', 'countDown');	