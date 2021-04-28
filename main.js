require('dotenv/config');
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(msg.content)
  if (msg.content === 'Miguel') {
    msg.reply('É um safado');
    msg.react()
  }
});

client.on('message', message => {
  console.log(message.id)
});


client.login(process.env.BOT_APPLICATION_KEY);