const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'store',
  aliases: ["serverstore"],
  description: "get the server store",
  run: async (client, message, args) => {
    let method = args[0];

    if (!method) {
      let embed = new MessageEmbed()
        .setTitle("Server store")
        .setDescription("╰( ･ ᗜ ･ )➝ [click me](https://legendaryclan.tebex.io/)")
        .addField("URL", "https://legendaryclan.tebex.io/", true)
        .setColor("BLUE")

        .setThumbnail(client.user.displayAvatarURL())

      message.channel.send({
        embeds: [embed]
      })


      //search stuff
    } else if (method == "search") {
      let stuff = [
        "ranks",
        "gkits",
        "crate-keys",
        "money",
        "mcmmo credits",
        "claim blocks",
        "commands"
      ];
      let stuffToSearch = args.slice(1).join(" ");
      if (!stuff.includes(stuffToSearch.toLowerCase())) {
        let errEmbed = new MessageEmbed()
          .setTitle("WRONG!")
          .setDescription("That category doesn't exists in store! :x:\nNOTE: MAKE SURE CATEGORY MUST BE IN ' lowercase ' NOT CAPITAL LETTERS!")
          .addField("Category Available:", `Ranks, gkits, crate-keys, money, mcmmo credits, claim-blocks, commands`)
          .setColor("RED")
          .setThumbnail(client.user.displayAvatarURL())
        message.channel.send({
          embeds: [errEmbed]
        })
      } else {
        if (stuffToSearch == "ranks") {
          let rankEmbed = new MessageEmbed()
            .setTitle("RANKS").setColor("2F3136")
            .setImage("https://cdn.discordapp.com/attachments/897039959201034240/937988109709221948/Screenshot_2022-02-01-13-58-07-78_40deb401b9ffe8e1df2f1cc5ba480b12.jpg")
            .setDescription("command underdevelopment")
            .addField("Items in this category:", ">>> • [Master Rank](https://legendaryclan.tebex.io/package/4898784) - \n  • Price: 4.00 USD\n  •Info: `!!rank info master`\n• [Executive Rank](https://legendaryclan.tebex.io/package/4898797) - \n  • Price: 8.00 USD\n  •Info: `!!rank info executive`\n • [President Rank](https://legendaryclan.tebex.io/package/4898798) - \n  • Price: 16.00 USD\n  •Info: `!!rank info president`")
            .setFooter("Underdevlopment cmd!")
          message.reply({
            embeds: [rankEmbed]
          })
        } else if (stuffToSearch == "gkits") {
          let gKitsEmbed = new MessageEmbed()
            .setTitle("G-KITS")
            .setDescription("command underdevelopment")
            .addField("Items In This Category:", ">>> • [Wizard's Cloak](https://legendaryclan.tebex.io/package/4914023) - \n  • Price: 12.00 USD\n  •Info: `!!gkit info wizard-cloak`\n• [The Enchanter](https://legendaryclan.tebex.io/package/4914054) - \n  • Price: 3.50 USD\n  •Info: `!!gkit info the-enchanter`\n• [Armor Of Justice](https://legendaryclan.tebex.io/package/4914056) - \n  • Price: 10.00 USD\n  •Info: `!!gkit info armor-of-justice`\n• [King Of Darkness](https://legendaryclan.tebex.io/package/4914077) - \n  • Price: 9.00 USD\n  •Info: `!!gkit info king-darkness`\n• [Holy Chalice](https://legendaryclan.tebex.io/package/4914079) - \n  • Price: 10.00 USD\n  •Info: `!!gkit info holy-chalice`\n• [Wizard's Tool](https://legendaryclan.tebex.io/package/4914082) - \n  • Price: 7.50 USD\n  •Info: `!!gkit info wizard-tool`\n• [Dark Of Death](https://legendaryclan.tebex.io/package/4914088) - \n  • Price: 12.50 USD\n  •Info: `!!gkit info cod`\n• [Bow Of Light](https://legendaryclan.tebex.io/package/4914092) - \n  • Price: 7.50 USD\n  •Info: `!!gkit info bol`")
          .setColor("2F3136"    )
            .setFooter("Underdevlopment cmd!" )           
                    .setImage("https://media.discordapp.net/attachments/936177250582269972/938015815498879016/Screenshot_20220201_154925.JPG")
                    
message.reply({
            embeds: [gKitsEmbed]
          })
          
          }
      }


    }

        }
}