// Function to complete.
function CountDownTimer(dateTime, divId) {
    var end     = new Date(dateTime);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour   = _minute * 60;
    var _day    = _hour * 24;
    var timer;

    function showRemaining() {
       // ... 
    }

    timer = setInterval(showRemaining(), 1000);
}

// Enter the date and time as a string in the following format.  Second parameter is the HTML id of element where you want
//    the countdown to appear.
CountDownTimer('02/02/2015 12:00 AM', 'countDown');
