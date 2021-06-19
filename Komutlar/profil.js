const Discord = require("discord.js")

exports.run = async (client, message, args) => {

let kullanıcı = message.mentions.users.first() 

let yas = db.fetch(`yas_${message.author.id}`)
let yas2 = db.fetch(`yas_${kullanıcı.author.id}`) 
let aciklama = db.fetch(`aciklama_${message.author.id}`) 
let aciklama2 = db.fetch(`aciklama_${kullanıcı.author.id}`)
let durum = db.fetch(`durum_${message.author.id}`) 
let durum2 = db.fetch(`durum_${kullanıcı.author.id}`) 
let durume = db.fetch(`durume_${message.author.id}`) 
let durume2 = db.fetch(`durume_${kullanıcı.author.id}`) 
let banner = db.fetch(`banner_${message.author.id}`) 
let banner2 = db.fetch(`banner_${kullanıcı.author.id}`) 
let xbox = db.fetch(`xbox_${message.author.id}`) 
let xbox2 = db.fetch(`xbox_${kullanıcı.author.id}`) 
let youtube = db.fetch(`youtube_${message.author.id}`) 
let youtube2 = db.fetch(`youtube_${kullanıcı.author.id}`) 
let github = db.fetch(`github_${message.author.id}`) 
let github2 = db.fetch(`github_${kullanıcı.author.id}`) 

let xbox = new MessageButton() 
.setLabel(`${xbox || "?"}`)
.setID("xboxprofil")
.setEmoji("855659097311805460")
.setStyle("green")

let xbox2 = new MessageButton() 
.setLabel(`${xbox2 || "?"}`)
.setID("xbox2profil")
.setEmoji("855659097311805460")
.setStyle("green") 

let youtube = new MessageButton() 
.setLabel(`YouTube`)
.setURL(`${youtube || "https://youtube.com"}`)
.setStyle("url")

let youtube = new MessageButton() 
.setLabel(`YouTube`)
.setURL(`${youtube2 || "https://youtube.com"}`)
.setStyle("url")

let youtube = new MessageButton() 
.setLabel(`Github`)
.setURL(`${github || "https://github.com"}`)
.setStyle("url")

let youtube = new MessageButton() 
.setLabel(`Github`)
.setURL(`${github2 || "https://github.com"}`)
.setStyle("url")

if (kullanıcı) {
const embed = new Discord.MessageEmbed() 
.setTitle("Profil") 
.addField(`İsim:`, `${kullanıcı.author.username}`) 
.addField(`Yaş:`, `${yas2 || "Ayarlanmamış"}`) 
.addField(`Açıklama:`, `${aciklama2 || "Ben çok güzel bir kelebeğim"}`) 
.addField(`Durum:`, `${durume2 || ""} ${durum2 || "Ben çok güzel bir çiçeğim"}`) 
.setImage(`${banner2 || ""}`) 
.setColor("GREEN") 
message.channel.send({
embed: embed, 
buttons: [xbox, youtube, github]
}) 
} 

else {
const embed1 = new Discord.MessageEmbed() 
.setTitle("Profil") 
.addField(`İsim:`, message.author.username) 
.addField(`Yaş:`, `${yas || "Ayarlanmamış"}`) 
.addField(`Açıklama:`, `${aciklama || "Ben çok güzel bir kelebeğim"}`) 
.addField(`Durum:`, `${durume || ""} ${durum || "Ben çok güzel bir çiçeğim"}`)
.setImage(`${banner || ""}`)
.setColor("GREEN") 
message.channel.send({
embed: embed, 
buttons: [xbox2, youtube2, github2]
}) 
} 

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "profil" 
} 
