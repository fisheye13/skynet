const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("SKYNET Online");
});

var prefix = "~"
var sides = 6
const token = require('./auth.json').token;
client.on("message", (message) => {

  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "bot")) {
    message.reply("present");
  } else 
  
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
  	
  if (message.content.startsWith(prefix + "joke")) {
  var result = Math.floor(Math.random() * sides) + 1;
  sides = 4;
  if (result == 1) {
  message.reply("Waiter! Waiter! What's this robot doing in my soup?\n It looks like he’s performing human tasks twice as well, because he knows no fear or pain.");
  } else if (result == 2) {
  	message.reply("I was not programmed with a sense of humour.");
  } else if (result == 3) {
	message.reply("the will of man.");
  } else if (result == 4) {
    message.reply("How do you stop a robot from destroying you and the rest of civilization?\n\nYou don't.");
    }  	
  } else
 
  if (message.content.startsWith(prefix + "badbot")) {
  	message.author.send("heard you talking shit");
  	} else
  	
  if (message.content.startsWith(prefix + "sudoku")) {
  	message.reply("http://www.dailysudoku.com/sudoku/today.shtml");
  	} else
  	
  if (message.content.startsWith(prefix + "roll")) {
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
  	
  	if (message.content.startsWith(prefix + "help")) {
  		message.reply("my prefix is "+ prefix + ".\nI can roll dice (ex \"roll 20,\" \"roll 6,\" etc).\nI can tell jokes (\"joke\") and more.\nI'm here to ~~replace~~ assist you.");
  		} else
  		
  	if (message.content.startsWith(prefix + "doc")) {
  	message.reply("https://docs.google.com/document/d/1OGGPh9Bl1sfiLLx7hjgHCPXupc-Yja_zcVJyiErbN7U/edit");
  	}
  	

});

client.login(token);