const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
  name: 'ban',
  description: 'Ban an user',
 // aliases: [],
  usages: "!!ban <user> {reason}",

  /**
   * 
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  
  run: async(client, message, args) => {
  if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply({content: 'You do not have permissions to use that! Required perms:\`BAN_MEMBERS\`', allowedMentions: {repliedUser: false}})
  if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply({content: 'I do not have the required permissions, please give me the required permissions! Required perms:\`BAN_MEMBERS\`', allowedMentions: {repliedUser: false}})
  const target = message.mentions.members.first() ||message.guild.members.cache.get(args[0]) 
  const reason = args.slice(1).join(" ") || 'No reason was specified'
  
  if(!target) return message.reply({content: 'Please specify a user to be banned!', allowedMentions: {repliedUser: false}})

  if(target.id === message.author.id) return message.reply({content: 'You cannot ban yourself smh!', allowedMentions: {repliedUser: false}})
  if(target.id === message.guild.ownerId) return message.reply({content: 'You cannot ban the server owner! *Imagine trying to ban the owner Lmaoo*', allowedMentions: {repliedUser: false}})
  if(target.id === client.user.id) return message.reply({content: 'Please don\'t ban me D:', allowedMentions: {repliedUser: false}})
  if(target.roles.highest.position >= message.member.roles.highest.position) return message.reply({content: 'You cannot ban that user due to their role being higher than you!', allowedMentions: {repliedUser: false}})

  if(!target.bannable) return message.reply({content: 'I cannot ban that user due to role hierarchy! Please check my role position!', allowedMentions: {repliedUser: false}})
  
  try{
  target.send(`You have been banned from **${message.guild.name}**\nReason: ${reason}`).catch((e) => {message.reply({content: 'Cannot send a dm to that person!', allowedMentions: {repliedUser: false}})})

  target.ban({ reason });
  
  message.reply({content: `Successfully banned **${target.user.tag}**`, allowedMentions: {repliedUser: false}})
  } catch(e) {
    return message.reply({content: `Something went wrong! If you think this is a bug please report it to my devs \nError msg:\n${e}`})
  }
  }
}