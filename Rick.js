/*
    Rick Bot...
    ... By Pythonic
*/

// Initialize the Client
const Discord = require('discord.js');
const c = new Discord.Client(); // c is the name of the client

// Bot Information
const private = require('./private.json');
const version = '1.00 BETA';
const keyPhrase = 'hey rick,';

const typeMessage = (msgString, channel) => {
  msg.channel.startTyping();
  const stopTyping = setTimeout(channel.stopTyping(), msgString.length*100);
  const sendIt = setTimeout(channel.sendMessage(msgString), msgString.length*100);
}

// Bot ready
c.on('ready', () => {
  console.log(`Wubba lubba dub dub LETS GO!`);
});

// Join a guild
c.on('guildCreate', guild => {
  if(guild.available){
    console.log(`Woo hoo! I just joined ${guild.name} which has ${guild.memberCount} members!`)

  }
}

// Message
c.on('message', msg => {
  if(msg.author.bot) return; // Don't react to messages from bots.
  if(msg.channel.type == 'dm' || msg.channel.type == 'group') return; // No responding to dms
  if(!msg.content.toLowerCase().includes(keyPhrase)) return; // Must have key phrase
  if(!msg.guild.available) return;
  typeMessage('Kappa', msg.channel);

});

c.login(private.token);
