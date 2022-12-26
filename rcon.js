const { Rcon } = require("rcon-client");
const Discord = require('discord.js');
const bot = new Discord.Client();

const command = "revive";

const token = "YOUR_TOKEN_HERE";

const rcon = new Rcon({
    host: "127.0.0.1",
    port: "27015",
    password: "YOUR_PASSWORD_HERE"
});

rcon.connect()
    .then(() => console.log('RCON connected'))
    .catch(err => console.log('RCON error', err));

bot.login(token);

bot.on('message', (msg) => {
  if (msg.content === '!restart') {
    if (msg.member.roles.cache.some(role => role.id === 'ROLE_ID')) {
      rcon.send(command)
        .then(response => console.log('Rcon Command Executed: ' + command))
        .catch(err => console.log('Rcon Error: ' + err));
    } else {
      msg.reply('You do not have permission to use this command.');
    }
  }
});
