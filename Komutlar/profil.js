const Discord = require("discord.js")
const { MessageButton } = require("discord-buttons") 
const db = require("croxydb") 

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

let coin = db.fetch(`coin_${message.author.id}`) 

let owner = db.fetch(`owner_${message.author.id}`) 
let yetkili = db.fetch(`yetkili_${message.author.id}`) 
let mod = db.fetch(`mod_${message.author.id}`)
let dev = db.fetch(`dev_${message.author.id}`) 
let early = db.fetch(`early_${message.author.id}`)
let pre = db.fetch(`pre_${message.author.id}`) 
let gold = db.fetch(`gold_${message.author.id}`) 
let destekci = db.fetch(`destekci_${message.author.id}`) 
let bug = db.fetch(`bug_${message.author.id}`) 
let bug2 = db.fetch(`bug2_${message.author.id}`) 
let onayli = db.fetch(`onayli_${message.author.id}`) 

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
.addField(`<:member:856408299229151242> İsim`, message.author.username) 
.addField(`<:member:856408299229151242> Yaş`, `${yas || "Ayarlanmamış"}`) 
.addField(`<:backpack:856408019289767937> Rozetlerin`, `${owner || ""} ${yetkili || ""} ${mod || ""} ${dev || ""} ${early || ""} ${pre || "<:codesty_member:844468558523924542>"} ${gold || ""} ${destekci || ""} ${bug || ""} ${bug2 || ""} ${onayli || ""}`)
.addField(`<:coin:856798514540445706> Coinlerin`, `${coin || "0"}`) 
.addField(`<:pusula:856408214315597834> Açıklama`, `${aciklama || "Ben çok güzel bir kelebeğim"}`) 
.addField(`<:pusula:856408214315597834> Durum`, `${durume || ""} ${durum || "Ben çok güzel bir çiçeğim"}`)
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
