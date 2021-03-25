        const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const ayarlar = require('../ayarlar.json')//krom code Krom#0516
            let prefix = await require('wio.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix//krom code Krom#0516

            let yrol = database.fetch(`yrol.${message.guild.id}`)
            if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
            if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
             return message.channel.send(new Discord.MessageEmbed()//krom code Krom#0516
                                                                                         .setDescription('Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.')
 .setColor(10038562));//krom code Krom#0516
          var member = message.mentions.members.first();
var role = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name == args.slice(1).join(' '));
if (!message.member.hasPermission('MANAGE_ROLES')) 
  return message.channel.send('Bu komutu kullanabilmek için "\`Rolleri Yönet\`" yetkisine sahip olmalısın.');//krom code Krom#0516
if (!member) return message.channel.send('Lütfen bir kullanıcıyı etiketleyin veya ismini yazın.');//krom code Krom#0516
if (!role) return message.channel.send('Rol bulunamadı.');
    if (!member.roles.cache.has(role.id)) return message.channel.send(new Discord.MessageEmbed()
                                                                      .setDescription('Kullanıcı O Yetkiye Sahip Değil.')//krom code Krom#0516
                                                                      .setColor('#D2EE07'));//krom code Krom#0516
  if (message.member.roles.highest.comparePositionTo(role) < 1) {
  return message.channel.send(`Alınacak rol sizin rolünüzün üstünde bu yüzden rolü **veremiyorum!**`);
  }
  try{//krom code Krom#0516
await (member.roles.remove(role.id))
 message.channel.send(new Discord.MessageEmbed().setDescription(`${member} isimli üyenin \`${role.name}\` isimli yetkisi başarıyla alındı!`)  
                      .setFooter('Bu komutu kullanan yetkili ' + message.author.tag, message.author.avatarURL())
                      .setColor('#D2EE07'));//krom code Krom#0516
    //krom code Krom#0516
  } catch (e) {
    console.log(e);
    message.channel.send('Hata oluştu!');
  }
  
};//krom code Krom#0516
//krom code Krom#0516
exports.conf = {//krom code Krom#0516
  enabled: true,
  guildOnly: false,
  aliases: ['rolal'],
  permLevel: 0
};

exports.help = {
  name: 'rol-al',
  description: 'Belirttiğiniz kullanıcıdan belirttiğiniz rolü alır.',
  usage: 'rol-al'
};