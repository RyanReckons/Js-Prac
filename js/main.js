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

var useranswer = prompt("What would you like to eat?");

// var lunch = function(useranswer){
if (useranswer == "sandwich"){
	console.log("Sounds goood to me, let's eat!");
} else if (useranswer == "taco"){
	console.log("You bet!");
} else if (useranswer == "pizza"){
	console.log("It's not that I don't like pizza, but I'm in the mood for either a taco, or a sandwich.");
} else {
	console.log("I'm not sure what you mean.");
}
// };

// lunch(useranswer);

/*  PRAC 2  */

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

/*  PRAC 3  */

var useranswer2 = prompt("What time is it?");

useranswer2 = useranswer2.toUpperCase();

if (useranswer2 == "1AM"){
	console.log("It is waaaaay too early, go back to sleep!!!");
}

/*  PRAC 4  */

var useranswer3 = prompt("How are you doing today?");

useranswer3 = useranswer3.toUpperCase();

if (useranswer3 == "GREAT THANK YOU"){
	console.log("Fabulous, that is great to hear!")
} else {
	console.log("Keep on truckin!");
}

/*  PRAC 5  */

var number = prompt("Give me a number!");
if (number == 1){
	console.log("Hey, we are thinkin along the same line!");
} else if (number == 2){
	console.log("Hey that's the number I was thinking of!");
} else {
	console.log("Darn, wasn't thinking of that number, you got me.");
}

/*  PRAC 6  */

var candyBar = prompt("What is your favorite candy bar?")

candyBar = candyBar.toUpperCase();

if (candyBar == "SNICKERS"){
	console.log("Those sure fill me up!");
} else if (candyBar == "MILKYWAY"){
	console.log("Those are pretty good!");
} else {
	console.log('Oh those are really yummy!');
}

/*  PRAC 7  */

var firearm = prompt("What is your favorite firearm?");

firearm = firearm.toLowerCase();

if (firearm == "glock"){
	console.log("Those are nice to have around.");
} else if (firearm == ".22 revolver"){
	console.log("Good for hunting rabbits!");
} else {
	console.log("Those will certainly keep you safe.");
}

/*  PRAC 8  */

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

/*  PRAC 9  */

var cookies = prompt("How many cookies can you eat?");

cookies = cookies.toLowerCase();

if (cookies >= 10){
	console.log("You can sure eat a bunch!");
} else {
	console.log("Not bad, not bad");
}

/*  PRAC 10 */

var shoes = prompt("How many shoes do you have in your closet?");

shoes = shoes.toLowerCase();

if (shoes >= 10){
	console.log("You have too many shoes!");
} else {
	console.log("Sounds like you are good to go!");
}