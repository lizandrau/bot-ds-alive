
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('message', async message => {
    let prefix = config.prefix;

    if (message.content.startsWith(prefix)) {
        message.channel.send('I Alive')
    }
});

bot.login(config.token);
bot.on('ready', () => {
    console.log(`${bot.user.username} online`);
    bot.user.setPresence ({status: 'dmd', game:{name: 'Die', type: 0}});
});