const Discord = require('discord.js')
const database = require('croxydb');//krom code Krom#0516
const db = require('croxydb');//krom code Krom#0516

exports.run = async(client, message, args) => {
  
  let yrol = database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`codeminglog_${message.guild.id}`)//krom code Krom#0516
  
if (args[0] === "sıfırla" || args[0] === "kapat") {//krom code Krom#0516//krom code Krom#0516
  //krom code Krom#0516
if(!logkanal) return message.channel.send(new Discord.MessageEmbed()//krom code Krom#0516
                                               //krom code Krom#0516
.setDescription(`Mod-Log kanalı zaten ayarlı değil!`)
.setColor("RED"));//krom code Krom#0516
    
db.delete(`codeminglog_${message.guild.id}`)
  
message.channel.send(new Discord.MessageEmbed()
                          //krom code Krom#0516
.setDescription(`Mod-Log Kanalı başarıyla sıfırlandı.`)
.setColor("GREEN"));//krom code Krom#0516

return//krom code Krom#0516
}
  //krom code Krom#0516
if (!logk) return message.channel.send(new Discord.MessageEmbed()//krom code Krom#0516
.setDescription(`Mod-Log kanalı belirt!`)//krom code Krom#0516
.setColor("RED"));//krom code Krom#0516
 //krom code Krom#0516

db.set(`codeminglog_${message.guild.id}`, logk.id)//krom code Krom#0516

message.channel.send(new Discord.MessageEmbed()
.setDescription(`Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`)
.setColor("GREEN"));

console.log(`Mod-log komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {//krom code Krom#0516
    enabled: true,
    guildOnly: false,//krom code Krom#0516
    aliases: ['mod-log'],//krom code Krom#0516
    permLevel: 0 //krom code Krom#0516
};//krom code Krom#0516

exports.help = {//krom code Krom#0516//krom code Krom#0516
    name: 'modlog'//krom code Krom#0516
};//krom code Krom#0516//krom code Krom#0516