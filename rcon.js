const Discord = require('discord.js');
const Rcon = require('rcon');

const bot = new Discord.Client();

const config = {
  host: '127.0.0.1',
  port: 30120,
  password: 'rcon_password_here'
}

const rcon = new Rcon(config.host, config.port, config.password);

const prefix = '!';

bot.on('ready', () => {
  console.log('Ready!');
});

bot.on('message', message => {
  if (!message.content.startsWith(prefix)) return;

  const command = message.content.slice(prefix.length);

  rcon.send(command)
    .then(response => {
      message.channel.send(response);
    })
    .catch(err => {
      message.channel.send(err);
    });
});

bot.login('discord_bot_token_here');
