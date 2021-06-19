const Discord = require("discord.js")

exports.run = async (client, message, args) => {

let kullanıcı = message.mentions.users.first() 
let yas = db.fetch(`yas_${message.author.id}`)
let yas2 = db.fetch(`yas_${kullanıcı.author.id}`) 

if (kullanıcı) {
const embed = new Discord.MessageEmbed() 
.setTitle("Profil") 
.setDescription(`İsim: ${kullanıcı.author.username} 
Yaş: ${yas2 || "Ayarlanmamış"} 

`) 
.setColor("GREEN") 
} 
//YAPILIYOR
else {
const embed1 = new Discord.MessageEmbed() 
.setTitle("Profil") 
.setDescription(`İsim: ${message.author.username} 
Yaş: ${yas || "Ayarlanmamış"} 
`) 
} 
//YAPILIYOR
} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "profil" 
} 
