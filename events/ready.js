const client = require("../index");
const ms = require('ms')
const fetch = require('node-fetch')
client.on("ready", () => {
    console.log(`${client.user.tag} is up and ready to go!`)

/*
 * Function to change status
 */

const updateChannel = async () => {

    // Fetch statistics from mcapi.us
    const res = await fetch(`https://mcapi.us/server/status?ip=${client.config.ipAddress}${client.config.port ? `&port=${client.config.port}` : ''}`)
    if (!res) {
        const statusChannelName = `[ 🛡 ] Status: Offline`
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
    const playersChannelName = `[ 👥 ] Players: ${players}`
    const statusChannelName = `[ 🛡 ]Status: ${status}`

    // Update channel names
    client.channels.cache.get(client.config.playersChannel).setName(playersChannelName)
    client.channels.cache.get(client.config.statusChannel).setName(statusChannelName)

    return true
}

setInterval(() => {
        updateChannel()
    }, ms(client.config.updateInterval))
  
});
