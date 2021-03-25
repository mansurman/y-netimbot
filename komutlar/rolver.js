const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let yrol = database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`) 
   let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply('**Kime Rol Verceğimi Yazmadın!**').catch(console.error);
  if (rol.length < 1) return message.reply('**Rol idsini belirtmedin**');
user.roles.add(rol)//krom code Krom#0516
const embed = new Discord.MessageEmbed()//krom code Krom#0516//krom code Krom#0516
        .setDescription(`${user} kullanıcısından başarıyla ${rol} rolü verildi!`)//krom code Krom#0516
        .setFooter('Krom Code <3', client.user.avatarURL())//krom code Krom#0516
        .setColor(rol.hexColor)
        .setTimestamp()//krom code Krom#0516
    message.channel.send(embed)//krom code Krom#0516

};//krom code Krom#0516

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rol-ver',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};