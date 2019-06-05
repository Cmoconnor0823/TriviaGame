//  Set our timer count down interval.
var secLeft = 30;
//  Variable that will hold our timeLeft ID when we execute the "run" function
var timeLeftId;
    //  When the time runs out, run the gameEnd function.
        $("#done").on("click", stop);
        //  When the Start button gets clicked, execute the run countDown function.
        $("#start-button").on("click", countDown);
        //  The countDown function.
        function run() {
            clearInterval(timeLeftId);
            timeLeftId = setInterval(countDown, 1000);
        }
        
        function countDown() {
            secLeft--;
            run();
  
        //  Show the number in the #show-number tag.
        $("#time-remaining").html("<h2>" + secLeft + "</h2>");
  
        //  Once number hits zero...
        if (secLeft === 0) {
  
          //  ...run the stop function.
          stop();
  
          //  Alert the user that time is up.
          alert("Time Up!");
        }
      }

      //  The stop function
    function stop() {
        clearInterval(timeLeftId);
      }

    //  Execute the run function.