
const Discord = require("discord.js");
const dimod = new Discord.Client();
//////// playing or dnd  streaming ////////
dimod.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `D1MOD.`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    dimod.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
dimod.on("ready", () => {
    var join = dimod.channels.get(""); /// id voice
    if (join) join.join();
  });
////////////////   TOKEN LERA DABNE 
dimod.login("");

