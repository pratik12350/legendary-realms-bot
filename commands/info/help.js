const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Stop it, get some help.",
  usages: "!!help {command}",
  run: async (client, message, args) => {


    const command = args.join(" ")

    if (!command) {
      let embed = new MessageEmbed()
        .setTitle("Stop It, get some help.")
        .setDescription("Prefix: `!!`\nUse `!!help <command>` for more info about a command")
        .setColor("2F3136")
        .addField("INFO [2]", "`ping`, `help`")
        .addField("SERVER [2]", "`force-stats-update`, `server-stats`, `ip`, `store`")
        .addField("MODERATION [3]", "`kick`, `ban`, `unban`")
        .setFooter("Made By Pratik")
        .setThumbnail(message.guild.iconURL())

      message.channel.send({
        embeds: [embed]
      })
    } else {
      let cmd = client.commands.get(command.toLowerCase())
      if (!cmd) return message.reply("sus, command named " + command + " not found!")

      let embed = new MessageEmbed()
        .addField("Name:", `${cmd.name}`, true)
        .addField("Description:", `${cmd.description || "Not specified"}`, true).addField("Aliases:", `${cmd.aliases || "none"}`, true)
        .addField("Usages:", `${cmd.usages || "Not specified"}`)
        .setDescription("```\nParameters:\n<> - Required\n{} - Optional\n```")
        .setColor("2F3136")

      message.channel.send({ embeds: [embed] })
    }


  }
}  