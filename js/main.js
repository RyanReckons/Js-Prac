/* CHEAT SHEET:
        Types of data:  
                        int = 1
                        float = 1.2
                        double = 1.1234
        Operators:      
                        * Multiplication, / Division, % Modulus, + Addition, - Subtraction
                        +=, -=, *=, /=, %=, ++ or Increment, -- or Decrement,
                        = Assignment, == Equal to, === Equal value and equal type
                        != Not equal, !== Equal value or not equal type
                        > greater than, < less than, >= greater than or equal to, <= less than or equal to
                        ? ternary operator
                        typeof - Returns the type of a variable
                        instanceof - Returns true if an object is an instance of an object type 
        Getting Started: 
                        "value" 
                        confirm(); interaction 
                        prompt(); questions the user for user input.
                        console.log(); output to the console.
        Variables:      
                        var x = 5;
                        var y = 6;
                        var z = x + y;  
*/

/* THE VERY BEGINNING OF MY MADNESS!!! */

// var sandwich = "subway";
// var taco = "tacotime";
// var pizza = "papajohns";

// var sandwich;
// var taco;
// var pizza;

// var useranswer;

/*  ASSIGNMENT FROM TYLER  there was a LOT of trial and error.  This is only showing what actually worked.  */

var shortPosAnswers = ['yes', 'sure', 'Sure', 'yep', 'yepper'];
var longPosAnswers = ['lets do it', 'im all for it', 'you betcha', 'sure thing'];
var negAnswers = ['not sure', 'not so good', 'not so', 'no thanks', 'no', 'not really'];
var answer1 = ['12am', '1am', '2am', '3am', '4am', '5am'];
var answer2 = [, '6am', '7am'];
var answer3 = ['8am', '9am', '10am','11am'];
var posGreet = ['good', 'great thank you!', 'great'];

function playBall(){
  var ball,
      typeOfBall;

  ball = prompt("Want to play ball, yes or no?");
  ball = ball.toLowerCase();
  
  if (positiveAnswers.indexOf() >= 0){
      typeOfBall = prompt("Basketball or Baseball?");
      typeOfBall = typeOfBall.toLowerCase();
      if (typeOfBall == "basketball"){
          game = prompt("One on One or Horse?")
          game = game.toLowerCase();
          if (game == "one on one"){
              confirm("Let's flip a coin to see who gets ball first!");
          } else {
              confirm("You go first!");
          }
      } else if (typeOfBall == "baseball"){
          confirm("Let's play catch!");
      }
  } else {
      confirm("Maybe next time then!");
  }
}

/*  PRAC 2  */


function movies(){
  var useranswer = prompt("Would you like to go see Star Wars tonight?");
  useranswer = useranswer.toLowerCase();
  
  if (shortPosAnswers.indexOf(useranswer) >= 0){
    confirm("Awesome, I will get the tickets if you pay for popcorn!");
  }  else if (negAnswers.indexOf(useranswer) >= 0){
    confirm("ok, maybe next time then!");
  } else if (longPosAnswers.indexOf(useranswer) >= 0){
    confirm("ok, lets set a time!");
  } else if (longPosAnswers.indexOf(useranswer) >= 0){
    confirm("right on, i will get ready to go!");
  } else if (negAnswers.indexOf(useranswer) >= 0){
    confirm("ok, well take some time to think about it and let me know.");
  } else {
    confirm("i don't understand.");
  }
}

/*  PRAC 3  */

function time(){
  var tooEarly = "That is too early, go back to bed!"
  var early = "It is waaaaay too early, go back to sleep!!!";
  var thanks = "Thank you very much!";
  var useranswer2 = prompt("What time is it?");
  useranswer2 = useranswer2.toLowerCase();

  var message = (useranswer2.indexOf(answer1)) ? tooEarly : thanks;
  confirm(message);
}


/*  PRAC 12 Nesting 2  */







function greeting(){
  var notSo,
      quiet;

  var greeting = prompt("Hello, how are you doing today, good great or not so good?");
  greeting = greeting.toLowerCase();

  if (posGreet.indexOf(greeting) >= 0){
      confirm("Good deal!");
  } else if (posGreet.indexOf(greeting) >= 0){
      confirm("Wonderful, that is great to hear!");
  } else if (negGreet.indexOf(greeting) >= 0){
      notSo = prompt("Do you want to talk about it?");
      if (negGreet.indexOf(notSo) >= 0){
          confirm("Alright, well, I hope the rest of your day turns out better!");
      } else {
          quiet = prompt("Shall we go somewhere private to talk then?");
          if (quiet == "sure" || quiet == "yes" || quiet == "yep"){
            confirm("Lead the way!");
          }
      }
  } else {
      confirm("Well keep on truckin!");
  };
}












/*  PRAC 5  */

/* SWITCH */
function number(){
  var numb = prompt("Give me a number!");
  
  switch(numb) {
    case "1":
      alert("Hey, we are thinkin along the same line!");
      break;
    case "2":
      alert("Hey that's the number I was thinking of!");
      break;
    default:
      alert("Darn, wasn't thinking of that number, you got me.");
  }
}



/*  PRAC 6  */

function candybar(){
  var candyBar = prompt("What is your favorite candy bar?")
  candyBar = candyBar.toLowerCase();

  switch(candyBar) {
    case "snickers":
      alert("Thos are good and filling!");
      break;
    case "milkyway":
      alert("Very good, but almost a little too chocolaty for me sometimes.");
      break;
    default:
      alert("Those are pretty good!");
  }
}


/*  PRAC 7  */

function firearm(){
  var firearm = prompt("What is your favorite firearm?");

  firearm = firearm.toLowerCase();

  if (firearm == "glock"){
    confirm("Those are nice to have around.");
  } else if (firearm == ".22 revolver"){
    confirm("Good for hunting rabbits!");
  } else {
    confirm("Those will certainly keep you safe.");
  }
}


/*  PRAC 8  */

function alarm(){
  var alarm = prompt("What time would you like to wake up tommorrow?");

  alarm = alarm.toLowerCase();

  if (alarm == "1am"){
    confirm("What the heck, I am just getting to sleep!  Not a chance.");
  } else if (alarm == "2am"){
    confirm("Say what??  I have kids you know!");
  } else if (alarm == "3am"){
    confirm("Oh man, that is waaaay too early! How about 7?");
  } else if (alarm == "4am"){
    confirm("What are we, in the Marines??  Go back to bed!!");
  } else if (alarm == "5am"){
    confirm("Thats a little too early for me, but I can maybe do it one time for you!  I would prefer to sleep another hour though.");
  } else if (alarm == "6am"){
    confirm("That's a bit early, but if that works for you, I will follow suit.");
  } else if (alarm == "7am"){
    confirm("Sounds like a decent time to me.  See you tomorrow!");
  } else {
    confirm("what are we, on vacation??");
  }
}

/*  PRAC 9  */

function cookies(){
  var cookies = prompt("How many cookies can you eat?");

  cookies = cookies.toLowerCase();

  if (cookies >= 10){
    confirm("You can sure eat a bunch!");
  } else {
    confirm("Not bad, not bad");
  }
}


/*  PRAC 10 */

function shoes(){
  var shoes = prompt("How many shoes do you have in your closet?");

  shoes = shoes.toLowerCase();

  if (shoes >= 10){
    confirm("You have too many shoes!");
  } else {
    confirm("Sounds like you are good to go!");
  }
}


/*  PRAC 11 Nesting 1  */

function hungry(){
  var invite,
      foodType,
      restaurant,
      typeOf,
      oliveG,
      pjs,
      place;

  confirm("I am hungry and would like to go somewhere to eat.")   
  invite = prompt("Would you like to come and eat with me?")
  invite = invite.toLowerCase();

  if (invite == "sure" || invite == "you bet" || invite == "yes" || invite == "yepper" || invite == "yep" || invite == "absolutely" || invite == "you betcha"){
      foodType = prompt("What are you in the mood for, Mexican, Italian or Chinese?");
      foodType = foodType.toLowerCase();
      if (foodType == "mexican"){
          restaurant = prompt("I like Taco Time, what you do think?");
          restaurant = restaurant.toLowerCase();
          if (restaurant == "taco time"){
            confirm("Oh that's a really good choice!");
            } else if (restaurant == "taco bell"){
                confirm("Could we maybe stick to a little bit more authentic?");
            } else if (restaurant == "taco jose"){
                confirm("I ate there once, great tasting burritos, but gave me really bad heartburn!");
            } else {
                confirm("Lets do it!");
            }
          } else if (foodType == "italian"){
            typeOf = prompt("Pizza or Pasta?");
            typeOf = typeOf.toLowerCase();
            if (typeOf == "pizza"){
              pjs = prompt("Shall we hit up Papa Johns?");
              pjs = pjs.toLowerCase();
                if (pjs == "sure" || pjs == "you bet" || pjs == "yes" || pjs == "yepper" || pjs == "yep" || pjs == "absolutely" || pjs == "you betcha"){
                    confirm("Awesome, lets go eat!");
                } else {
                    confirm("Sounds good to me!");
                }
            } else if (typeOf == "pasta"){
                oliveG = prompt("So maybe the olive garden, or is that too formal?");
                oliveG = oliveG.toLowerCase();
                if (oliveG == "that works" || oliveG == "sure" || oliveG == "you bet" || oliveG == "yes" || oliveG == "yepper" || oliveG == "yep" || oliveG == "absolutely" || oliveG == "you betcha"){
                    confirm("Awesome, lets go eat!");
                } else {
                    confirm("Sounds good to me!");
                }
            }
        } else if (foodType == "chinese"){
            place = prompt("Do you have any places in mind?");
            place = place.toLowerCase();
            if (place == "no, not really"){
            confirm("Ok then, lets go explore!");
            } else {
                confirm("Let's go explore!");
            }
        } else {
            confirm("Ah dang, I forgot, I am fasting.");
        }
    } else {
        confirm("Well, maybe some other time then!  See you after lunch!");
    };
}



/*  ROCK PAPER SCISSORS  */
function rockPaperScissors(){
var userChoice = prompt("Do you choose rock, paper or scissors?");
userChoice = userChoice.toLowerCase();

var computerChoice = Math.random();
    
if(computerChoice<=0.34) {
   computerChoice="rock";
} else if (computerChoice>=0.67) {
  computerChoice="paper";
} else {
  computerChoice="scissors";
} alert("Computer: " + computerChoice);
var choice1 = userChoice;
var choice2 = computerChoice;

var compare = function(choice1, choice2){
if(choice1 === choice2) {
    alert("The result is a tie!");
} 

else if(choice1 === "rock") {
    
    if(choice2 === "scissors") {
        alert("rock wins");
    } 
    else {
        alert("paper wins");
    }
} else if(choice1 === "paper") {
    
    if(choice2 === "rock") {
        alert("paper wins");
    } 
    else {
        alert("scissors wins");
    }
}

else if (choice1 === "scissors"){
  if (choice2 === "rock"){
    alert("rock wins");
} else {
    alert("scissors wins");
  }
}
};

compare(userChoice,computerChoice);
}


function brokeDown(){
var response = prompt("Hello, it looks like you have a flat tire.  Can I help?");
response = response.toLowerCase();

if (response.indexOf(posAnswers) >= 0){
  alert("Ok, I will grab my tire iron!");
} else {
  alert("Ok, good luck!");
}

}


/*  --INTRO TO LOOPS-- */


/*  --------WEB PAGE ROW 1 -- CAMPING SPOTS, BOOK OF MORMON, MUSIC-----------  */
/*  FOR LOOPS  */


function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++){
    if (selectObject.options[i].selected) {
      numberSelected++;
    } confirm(i);
  }
  return numberSelected;
}




/*  ----------WEB PAGE ROW 2  COUNTDOWN, PICKANUMBER, COUNTUP---------------  */
/*  DO WHILE  */

function countDown() {
    var i = 6;
    do {
        i--;
        confirm(i);
    } while (i > 1);
    alert("Blast OFF!!!");
}

/*  DO WHILE WITH IF ELSE NESTED  */

function pickAnumber(){
attempts = 0;
do { 

    if (attempts == 0) {
        promptMessage = "Pick a number between 1 and 10";   
    } else{
        promptMessage = "Try again!";
    };
     
    user = prompt(promptMessage);
    attempts++;
} while(user != 3 && attempts <= 3)

alert("Good pick!");
}

/*  WHILE  */
function countUp() {
    var i = 1;
    while(i < 11){
        confirm(i);
        i++;
    } alert("Ready or not, here I come!!!");
}



/*  WEB PAGE ROW 3  */

/*function pickColor(){
attempts = 0;

do { 

    if (attempts == 0) {
        promptMessage = "Try and guess my favorite color!"; 
    } else{
        promptMessage = "Try again!";
    };
     
    user = prompt(promptMessage);
    attempts++;
} while(user != lighblue && attempts <= 3)

alert("You got it dude!");
}*/


/*  if (useranswer2 == "1AM"){
        confirm("early");
    } else {
        confirm("thanks");
    }
}*/

/*  PRAC 4  */

/*function greeting(){
  var useranswer3 = prompt("How are you doing today?");

  useranswer3 = useranswer3.toUpperCase();

  if (useranswer3 == "GREAT THANK YOU"){
    confirm("Fabulous, that is great to hear!")
  } else {
    confirm("Keep on truckin!");
  }
}*/

/*  PRAC 13 FUNCTIONS  */


/*function playBall2(){
  var ball,
  typeOfBall;

  ball = prompt("Want to play ball, yes or no?");
  ball = ball.toLowerCase();

  if (ball == "yes"){
      typeOfBall = prompt("Basketball or Baseball?");
      typeOfBall = typeOfBall.toLowerCase();
      if (typeOfBall == "basketball"){
          game = prompt("One on One or Horse?")
          game = game.toLowerCase();
          if (game == "one on one"){
              confirm("Let's flip a coin to see who goes first!");
          } else {
              confirm("Game on!");
          }
      } else if (typeOfBall == "baseball"){
          confirm("Let's play catch!");
      }
  } else {
      confirm("Maybe next time then!");
  }
}*/


/*function isPosAnswer(answer){
  if (answer.indexOf(shortPosAnswers) >= 0){
    return true;
  } else {
    return false;
  }
}*/