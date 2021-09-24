const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();



function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
	  if ((new Date().getTime() - start) > milliseconds){
		break;
	  }
	}
  }

client.on("ready",()=>{
	console.log("ArdaDemr J4J BOTU AKTİF!");
});

setInterval(function(){
		client.channels.get("KANAL ID").send("J4J varsa gelsin **(BOT DEĞİLİM!)**"); // KANAL LINKINI GIRMEYI UNUTMA
},20000);

setInterval(function(){
	client.channels.get("KANAL ID").send("Türkler J4J DM"); // KANAL LINKINI GIRMEYI UNUTMA
},60000);

client.on("message", async msg => {
	if (msg.channel.type === "dm") {
	  if (msg.author.id === client.user.id) {
	  } else {
		if (msg.author.bot) {
		} else {
		  let ardademrj4jbotu = await data.get(msg.author.id)
		  
		  if (ardademrj4jbotu === 1) {
		  } else {
			await data.set(msg.author.id, 1)
			await sleep(5000)
			await msg.channel.send("Dönmeyi unutma yoksa bbbbbbb\nhttps://discord.gg/apztxZsqFV") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
		}
		}
	  }
	}
  })

client.login("TOKEN"); // TOKEN GIRMEYI UNUTMA