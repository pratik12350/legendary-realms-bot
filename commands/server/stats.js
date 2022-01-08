const { MessageEmbed, MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'server-stats',
  description: "server statistics",
  usages: '!!server-stats',
  run: async(client, message, args) => {

                 const sentMessage = await message.channel.send("Fetching statistics, please wait...")

 
        const res = await fetch(`https://mcapi.us/server/status?ip=${client.config.ipAddress}${client.config.port ? `&port=${client.config.port}` : ''}`)
        if (!res) return message.channel.send(`Looks like your server is not online or blocking API Access`)
 
        const body = await res.json()

     //   const attachment = new MessageAttachment(Buffer.from(body.favicon.substr('data:image/png;base64,'.length), 'base64'), "icon.png")

        const embed = new MessageEmbed()
 
// .setImage(attachment)
            .setThumbnail(message.guild.iconURL())
            .addField("Version", body.server.name)
            .addField("Connected", `${body.players.now} players`)
            .addField("Maximum", `${body.players.max} players`)
            .addField("Status", (body.online ? "Online" : "Offline"))
            .setColor("2F3136")

    sentMessage.edit({
      content: "Fetched!",
      embeds: [embed]
    })
}
}