const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['p'],
  usages: "!!ping",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
     //   message.channel.send(`${client.ws.ping} ws ping`);
 const msg = await message.channel.send({content: `Pinging...`})

setTimeout(() => {
  msg.edit(`🏓 Pong! ${~~(msg.createdTimestamp - message.createdTimestamp)}ms`)
}, 1000)
      
   },
};
