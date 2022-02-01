const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ip',
  aliases: ["serverip"],
  description: "get the server ip",
  run: async(client, message) => {
    let embed = new MessageEmbed()
    .setTitle("Server Ip")
    .setDescription("╰( ･ ᗜ ･ )➝ `legendaryclan.my.pebble.host`")
.setColor("BLUE")
    .setThumbnail(client.user.displayAvatarURL())

message.channel.send({
  embeds: [embed]
})
  }
}