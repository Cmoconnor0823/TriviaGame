//  Set our timer count down interval.
var secLeft = 30;
//  Variable that will hold our timeLeft ID when we execute the "run" function
var timeLeftId;

// Variable holding Array of questions?
var quesOpt = ["First year Hogwarts students begin school at age 5.",
    "There are 4 different Houses at Hogwarts."]

//  When the time runs out, run the gameEnd function.
$("#done").on("click", stop);

//  When the Start button gets clicked, execute the run countDown function.
// ** Also write questions and option buttons to page 


$("#start-button").on("click", quesPost);
//  The countDown function.

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
        // display questions correct and questions incorrect
    }
    //  The stop function
    function stop() {
        clearInterval(timeLeftId);
    }
    
    //  Execute the run function.
        function run() {
            clearInterval(timeLeftId);
            timeLeftId = setInterval(countDown, 1000);
        }
}
            function quesPost() {
                //Start the countdown timer
                countDown();
                // Looping through the array of questions
            
                for (var i = 0; i < quesOpt.length; i++) {
            
                    // Then dynamicaly generating HTML for each question in the array.
                    // This code $("<div>") is to create the start and end tag. (<div></div>)
                    var a = $("<div>");
                    // Adding a class
                    a.addClass("quesState");
                    // Adding a data-attribute with a value of the movie at index i
                    a.attr("data-name", quesOpt[i]);
                    // Providing the button's text with a value of the movie at index i
                    a.text(quesOpt[i]);
                    // Adding the button to the HTML
                    $(".questions").append(a);
                }
            }
