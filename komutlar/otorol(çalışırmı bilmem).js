const Discord = require('discord.js')

const client = new Discord.Client()

const db = require('croxydb')

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Hop hemşerim nereye yetkin yok kullanamazsın.')
    if(!args[0]) return message.channel.send("Doğru kullanım ``!otorol ayarla @rol #kanal`` veya `!otorol sıfırla`")
    if(args[0] === "ayarla"){
      var rol = message.mentions.roles.first()
      var kanal = message.mentions.channels.first()
      if(!rol) return message.channel.send("Bİr rol etiketlemelisin!!!")
      if(!kanal) return message.channel.send("Bir kanal etiketlemelisin!!")
      db.set(`otorol_${message.guild.id}`, rol.id)//krom code Krom#0516
      db.set(`logkanal_${message.guild.id}`, kanal.id)
      message.channel.send("Başarıyla ayarlandı")//krom code Krom#0516
  if(args[0] === "sıfırla"){//krom code Krom#0516
      db.delete(`otorol_${message.guild.id}`)
      db.delete(`logkanal_${message.guild.id}`)//krom code Krom#0516
      message.channel.send("Başarıyla sıfırlandı")
    //krom code Krom#0516//krom code Krom#0516
  }//krom code Krom#0516
    }//krom code Krom#0516//krom code Krom#0516

   
}

exports.conf = {
  enabled: true,
  aliases: ['oto-rol'],
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'Otorol sistemi',
  usage: 'bla bla bla bla'
};