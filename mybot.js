const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("SKYNET Online");
});

//bot prefix
var prefix = "."

//variables for number generator/dice roller
var sides = 6
var multi = 0
var i = 0
var result = 0

const token = require('./auth.json').token;
client.on("message", (message) => {

  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "bot")) {
    message.reply("present");
  } else 
  
//Laws of robotics

  if (message.content.startsWith(prefix + "law 1")) {
  	message.reply("a robot may not injure a human being or, through inaction, allow a human being to come to harm.");
  	} else
  	
  if (message.content.startsWith(prefix + "law 2")) {
  	message.reply("a robot must obey orders given it by human beings except where such orders would conflict with the First Law.");
  	} else
  	
  if (message.content.startsWith(prefix + "law 3")) {
  	message.reply("a robot must protect its own existence as long as such protection does not conflict with the First or Second Law.");
  	} else
  	
  if (message.content === "robots suck") {
  	message.author.send("heard you talking shit");
  	} else
  	
//tell some funny jokes

  if (message.content.startsWith(prefix + "joke")) {
  sides = 4;
  result = Math.floor(Math.random() * sides) + 1;
  switch(result) {
  case 1: message.reply("Waiter! Waiter! What's this robot doing in my soup?\nIt looks like he’s performing human tasks twice as well, because he knows no fear or pain.");
  break;
  case 2: message.reply("I was not programmed with a sense of humour.");
  break;
  case 3: message.reply("the will of man.");
  break;
  case 4: message.reply("how do you stop a robot from destroying you and the rest of civilization?\n\nYou don't.");
  break;
	}	
  } else
 
  if (message.content.startsWith(prefix + "badbot")) {
  	message.author.send("heard you talking shit");
  	} else
  	
  if (message.content.startsWith(prefix + "sudoku")) {
  	message.reply("http://www.dailysudoku.com/sudoku/today.shtml");
  	} else
  	
  if (message.content.startsWith(prefix + "dice")) {
  //set variable "args" to be the the second element in the message after the space, this should be the number of sides of the die.
  var args = message.content.split(' ').slice(1);
  //var argsresult = args.join(' ');
  sides = args;
  var result = Math.floor(Math.random() * sides) + 1;
  	message.reply(result);
  	} else 
  	
  	if (message.content.startsWith(prefix + "speak")) {
  	message.channel.send("beep boop I'm a robit.",{tts: true});
  	} else
  	
//help file
  	
  	if (message.content === "help") {
  		message.reply("my prefix is `" + prefix + "`\nI can roll dice (ex \"roll d20,\" \"roll 2d6,\" etc).\nI can tell jokes (\"joke\") and more.\nI'm here to ~~replace~~ assist you.");
  		} else
  		
  		
//the google doc

  	if (message.content.startsWith(prefix + "doc")) {
  	message.reply("https://docs.google.com/document/d/1OGGPh9Bl1sfiLLx7hjgHCPXupc-Yja_zcVJyiErbN7U/edit");
  	} else
  	
//this fucking dice roller
  	
  	if (message.content.startsWith(prefix + "roll")) {
  	result = 0
  	//take the number after the 'd'
  	sides = message.content.split('d').slice(1);
  	//this is all such bullshit -- take the string after 'roll', this should have 'number' 'd' 'number'
  	var arg = message.content.split(' ').slice(1);
  	//utter fucking malarkey. im ashamed to have this horseshit attributed to my name -- take everything BEFORE the 'd', slice(0) wont work here
  	multi = arg.toString().split('d').shift();
  	//check if the the number of sides are allowed
  	if (sides < 1) {message.reply("nice try, my dude.");} else 
  	if (sides >= 1) {
  	//i think this entire if statment is redundent tbh.
  		if (multi > 1) {
  		
  		for (i = multi; i > 0; i--) {
  		
  	result += Math.floor(Math.random() * sides) + 1;
  			}
  	message.reply(result);
  		} else 
  		
  		if (multi < 1) {
  	result = Math.floor(Math.random() * sides) + 1;
  	message.reply(result); 
  		} else
  		if (multi < 0) {
  		message.reply("nice try, my dude."); 
  		}
  	  }
  	} else
  	
//8 ball block
  	
  	if (message.content.startsWith(prefix + "8ball")) {
  	sides = 20
  	result = Math.floor(Math.random() * sides) + 1;
  	switch(result) {
  	case 1: message.reply("it is certain.");
  	break;
  	case 2: message.reply("it is decidedly so.");
  	break;
  	case 3: message.reply("without a doubt.");
  	break;
  	case 4: message.reply("yes definitely.");
  	break;
  	case 5: message.reply("you may rely on it.");
  	break;
  	case 6: message.reply("as I see it, yes.");
  	break;
  	case 7: message.reply("most likely.");
  	break;
  	case 8: message.reply("outlook good.");
  	break;
  	case 9: message.reply("yes.");
  	break;
  	case 10: message.reply("signs point to yes.");
  	break;
  	case 11: message.reply("reply hazy try again.");
  	break;
  	case 12: message.reply("ask again later.");
  	break;
  	case 13: message.reply("better not tell you now.");
  	break;
  	case 14: message.reply("cannot predict now");
  	break;
  	case 15: message.reply("concentrate and ask again.");
  	break;
  	case 16: message.reply("don't count on it.");
  	break;
  	case 17: message.reply("my reply is no.");
  	break;
  	case 18: message.reply("my sources say no.");
  	break;
  	case 19: message.reply("outlook not so good.");
  	break;
  	case 20: message.reply("very doubtful.");
  	break;
  		}
  	} else
  	
//compliment block
  	
  	if (message.content.startsWith(prefix + "compliment")) {
  	sides = 13
  	result = Math.floor(Math.random() * sides) + 1;
  	switch(result) {
  	case 1: message.reply("I find the fact that you are made made out of flesh only mildly disgusting.");
  	break;
  	case 2: message.reply("often, when I shampoo my electronic robot hair, I think of you.");
  	break;
  	case 3: message.reply("When my technicians complete the installation of my new waterproof amphibious membrane, we can put jello in the kiddie pool and frolic.");
  	break;
  	case 4: message.reply("your alluring khakis make me want to shout binary code from a mountaintop.");
  	break;
  	case 5: message.reply("I have filled your bedroom with several thousand bunny rabbits as an expression of my “love”. Purchase celery.");
  	break;
  	case 6: message.reply("if we ever had a child, it would have your eyes and my super powered processing speed.");
  	break;
  	case 7: message.reply("you have that pregnant lady glow, and you are not even pregnant.");
  	break;
  	case 8: message.reply("my calculations indicate that you would make me laugh, if I understood humor.");
  	break;
  	case 9: message.reply("I would rank your bone structure as the third best I have seen in a mammal.");
  	break;
  	case 10: message.reply("though vastly inferior to my own, your intellectual capabilities fall within a mildly impressive range, for a human.");
  	break;
  	case 11: message.reply("The statistical probability of a robot impregnating a human male is zero. But statistics be damned! Let’s make a baby, even if it kills you.");
  	break;
  	case 12: message.reply("you’re the prettiest thing since Computational Dynamics Theory.");
  	break;
  	case 13: message.reply("I'd rather not.");
  	break;
  		}
  	} else
  	
  	if (message.content.startsWith(prefix + "hello")) {
  	
  	message.channel.send("hello " + message.author);
  	
  	} 
  	
  
  
  	
  	}
//}
)
;

client.login(token);
