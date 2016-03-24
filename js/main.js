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

function playBall2(){
	var ball,
		typeOfBall;

	ball = prompt("Whant to play ball, yes or no?");
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
}

/*  PRAC 2  */

function movies(){
	var useranswer1 = prompt("Would you like to go see the movie Star Wars tonight?");

	useranswer1 = useranswer1.toUpperCase();

	if (useranswer1 == "YES"){
		console.log("Awesome, I will get the tickets if you pay for popcorn!");
	} else if (useranswer1 == "SURE"){
		console.log("Awesome, I will get the tickets if you pay for popcorn!");
	} else if (useranswer1 == "YEPPER"){
		console.log("Awesome, I will get the tickets if you pay for popcorn!");
	} else if (useranswer1 == "LET'S DO IT"){
		console.log("Awesome, I will get the tickets if you pay for popcorn!");
	} else if (useranswer1 == "I'M ALL FOR IT"){
		console.log("Awesome, I will get the tickets if you pay for popcorn!");
	} else if (useranswer1 == "NO"){
		console.log("Ok, maybe next time then!");
	} else if (useranswer1 == "YOU BETCHA"){
		console.log("Ok, lets set a time!");
	} else if (useranswer1 == "SURE THING"){
		console.log("Right on, I will get ready to go!");
	} else {
		console.log("I don't understand.")
	}
}

/*  PRAC 3  */

function time(){
	var useranswer2 = prompt("What time is it?");

	useranswer2 = useranswer2.toUpperCase();

	if (useranswer2 == "1AM"){
		console.log("It is waaaaay too early, go back to sleep!!!");
	}
}

/*  PRAC 4  */

function greeting2(){
	var useranswer3 = prompt("How are you doing today?");

	useranswer3 = useranswer3.toUpperCase();

	if (useranswer3 == "GREAT THANK YOU"){
		console.log("Fabulous, that is great to hear!")
	} else {
		console.log("Keep on truckin!");
	}
}


/*  PRAC 5  */

function number(){
	var numb = prompt("Give me a number!");
	if (numb == 1){
		console.log("Hey, we are thinkin along the same line!");
	} else if (numb == 2){
		console.log("Hey that's the number I was thinking of!");
	} else {
		console.log("Darn, wasn't thinking of that number, you got me.");
	}
}


/*  PRAC 6  */

function candybar(){
	var candyBar = prompt("What is your favorite candy bar?")

	candyBar = candyBar.toUpperCase();

	if (candyBar == "SNICKERS"){
		console.log("Those sure fill me up!");
	} else if (candyBar == "MILKYWAY"){
		console.log("Those are pretty good!");
	} else {
		console.log('Oh those are really yummy!');
	}
}


/*  PRAC 7  */

function firearm(){
	var firearm = prompt("What is your favorite firearm?");

	firearm = firearm.toLowerCase();

	if (firearm == "glock"){
		console.log("Those are nice to have around.");
	} else if (firearm == ".22 revolver"){
		console.log("Good for hunting rabbits!");
	} else {
		console.log("Those will certainly keep you safe.");
	}
}


/*  PRAC 8  */

function alarm(){
	var alarm = prompt("What time would you like to wake up tommorrow?");

	alarm = alarm.toLowerCase();

	if (alarm == "1am"){
		console.log("What the heck, I am just getting to sleep!  Not a chance.");
	} else if (alarm == "2am"){
		console.log("Say what??  I have kids you know!");
	} else if (alarm == "3am"){
		console.log("Oh man, that is waaaay too early! How about 7?");
	} else if (alarm == "4am"){
		console.log("What are we, in the Marines??  Go back to bed!!");
	} else if (alarm == "5am"){
		console.log("Thats a little too early for me, but I can maybe do it one time for you!  I would prefer to sleep another hour though.");
	} else if (alarm == "6am"){
		console.log("That's a bit early, but if that works for you, I will follow suit.");
	} else if (alarm == "7am"){
		console.log("Sounds like a decent time to me.  See you tomorrow!");
	} else {
		console.log("what are we, on vacation??");
	}
}

/*  PRAC 9  */

function cookies(){
	var cookies = prompt("How many cookies can you eat?");

	cookies = cookies.toLowerCase();

	if (cookies >= 10){
		console.log("You can sure eat a bunch!");
	} else {
		console.log("Not bad, not bad");
	}
}


/*  PRAC 10 */

function shoes(){
	var shoes = prompt("How many shoes do you have in your closet?");

	shoes = shoes.toLowerCase();

	if (shoes >= 10){
		console.log("You have too many shoes!");
	} else {
		console.log("Sounds like you are good to go!");
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



/*  PRAC 12 Nesting 2  */

function greeting(){
	var notSo,
		quiet;

	var greeting = prompt("Hello, how are you doing today, good great or not so good?");
	greeting = greeting.toLowerCase();

	if (greeting == "good"){
		confirm("Good deal!");
	} else if (greeting == "great"){
		confirm("Wonderful!");
	} else if (greeting == "not so good" || greeting == "not so"){
		notSo = prompt("Do you want to talk about it?");
		if (notSo == "no thanks" || notSo == "no" || notSo == "not really"){
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
/*  PRAC 13 FUNCTIONS  */


function playBall(){
	var ball,
	typeOfBall;

	ball = prompt("Whant to play ball, yes or no?");
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
}

