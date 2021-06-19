const Discord = require("discord.js")

exports.run = async (client, message, args) => {

let kullanıcı = message.mentions.users.first() 

let yas = db.fetch(`yas_${message.author.id}`)
let aciklama = db.fetch(`aciklama_${message.author.id}`) 
let durum = db.fetch(`durum_${message.author.id}`) 
let durume = db.fetch(`durume_${message.author.id}`) 
let banner = db.fetch(`banner_${message.author.id}`) 
let xbox = db.fetch(`xbox_${message.author.id}`) 
let youtube = db.fetch(`youtube_${message.author.id}`) 
let github = db.fetch(`github_${message.author.id}`) 

let xboxb = new MessageButton() 
.setLabel(`${xbox || "?"}`)
.setID("xboxprofil")
.setEmoji("855659097311805460")
.setStyle("green")

let youtubeb = new MessageButton() 
.setLabel(`YouTube`)
.setURL(`${youtube || "https://youtube.com"}`)
.setStyle("url")

let githubb = new MessageButton() 
.setLabel(`Github`)
.setURL(`${github || "https://github.com"}`)
.setStyle("url")

const embed1 = new Discord.MessageEmbed() 
.setTitle("Profil") 
.addField(`İsim`, message.author.username) 
.addField(`Yaş`, `${yas || "Ayarlanmamış"}`) 
.addField(`Açıklama`, `${aciklama || "Ben çok güzel bir kelebeğim"}`) 
.addField(`Durum`, `${durume || ""} ${durum || "Ben çok güzel bir çiçeğim"}`)
.setImage(`${banner || ""}`)
.setColor("GREEN") 
.setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 })) 
message.channel.send({
embed: embed1, 
buttons: [xboxb, youtubeb, githubb]
}) 

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "profil" 
} 
