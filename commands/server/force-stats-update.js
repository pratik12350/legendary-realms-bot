const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const fetch = require('node-fetch');

module.exports = {
  name: 'force-stats-update',
  description: 'forcefully update server stats',
  usages: '!!force-stats-update',
  aliases: ["force-update"],
  run: async(client, message, args) => {

if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply("You're Missing Permissions! MANAGE SERVER is required!")  
    
/*
* Update Function
*/
const updateChannel = async () => {

    // Fetch statistics from mcapi.us
    const res = await fetch(`https://mcapi.us/server/status?ip=${client.config.ipAddress}${client.config.port ? `&port=${client.config.port}` : ''}`)
    if (!res) {
        const statusChannelName = `【🛡】Status: Offline`
        client.channels.cache.get(client.config.statusChannel).setName(statusChannelName)
        return false
    }
    // Parse the mcapi.us response
    const body = await res.json()

    // Get the current player count, or set it to 0
    const players = body.players.now

    // Get the server status
    const status = (body.online ? "Online" : "Offline")

    // Generate channel names
    const playersChannelName = `【👥】Players: ${players}`
    const statusChannelName = `【🛡】Status: ${status}`

    // Update channel names
    client.channels.cache.get(client.config.playersChannel).setName(playersChannelName)
    client.channels.cache.get(client.config.statusChannel).setName(statusChannelName)

    return true
}

 const updatingStatsEmbed = new MessageEmbed()
    .setTitle('Updating...')
    .setDescription('Updating Stats Pleass Wait.')
    .setColor("2F3136")

const msg = await message.channel.send({ embeds: [updatingStatsEmbed] })
    
  await updateChannel();
    
  const doneEmbed = new MessageEmbed()
    .setTitle("Done!")
    .setDescription("Successfully Updated Channels! if it doesn't update then please report to my developer `Pratik.JS#1746`")
    .setColor("2F3136")
    .setThumbnail(message.guild.iconURL())

    msg.edit({ embeds: [doneEmbed] })
}
}