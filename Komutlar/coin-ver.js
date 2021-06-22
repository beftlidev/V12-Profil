const Discord = require("discord.js")
const db = require("discord.js") 

exports.run = async (client, message, args) => {

db.add(`coin_${args[0]`, +args[1])
message.inlineReply(`<:tik:804253394326913085> <@${args$[0]>n Adlı kişiye ${args[1]} coin verildi!`) 

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "coin-ver" 
} 
