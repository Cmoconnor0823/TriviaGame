// Variable holding Array of questions? question objects
var quesOpt = [
  {
    question: "Which of the following is not a house at Hogwarts?",
    choices: ["Ravenclaw", "Huffelpuff", "Slythern", "Wampus"],
    answer: "Wampus",
  },
  {
    question: "What posistion does Harry play on his Quidditch team?",
    choices: ["Bludger", "Chaser", "Seeker", "Keeper"],
    answer: "Seeker",
  },
  {
    question: "Who is Fluffy?",
    choices: [
      "Hermione's Cat",
      "Harry's Owl",
      "Hagrid's Dragon",
      "A Three-Headed Dog",
    ],
    answer: "A Three Headed Dog",
  },
  {
    question:
      "Before his second year at Hogwarts, How do the Weasley's save Hary from the Dursley's house?",
    choices: [
      " A Portkey",
      "A Flying Car",
      "An Enchanted Broom",
      "Floo Powder",
    ],
    answer: "A Flying Car",
  },
];

//  Set our timer count down interval.
var secLeft = 30;
//  Variable that will hold our timeLeft ID when we execute the "run" function
var timeLeftId;
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
  if (secLeft === 0) {
      var stop = () =>clearInterval(timeLeftId);
      stop();
      alert("Time Up!");
    }
  function run() {
    clearInterval(timeLeftId);
    timeLeftId = setInterval(countDown, 1000);
  }
}

function quesPost() {
  countDown();
  // Looping through the array of questions
  for (var i = 0; i < quesOpt.length; i++) {
    var a = $("<div>");
    a.addClass("quesState");
    // Providing the question's text with a value of the questions objects  at index i
    a.text(quesOpt[i].question);
    
    $(".questions").append(a);
    // Adding the button to the HTML
    for (var j = 0; j < quesOpt[i].choices.length; j++) {
      var b = $("<button>");
      b.addClass("btn btn-outline m-2 btn-lg img-responsive buttonS button");
      //tried adding a id here so I could use that to compare the user answer button click to no avail
      b.text(quesOpt[i].choices[j]);
      $(".questions").append(b);
    }
  }
}
