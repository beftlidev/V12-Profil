const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(message.author.id !== "753842258457002036") return message.inlineReply(":no_entry: Bu Komutu Sadece iUgur Kullanabilir.");

if(args[0] == "pre") {
db.set(`pre_${args[1]}`, "⭐")
return message.inlineReply('<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye premium verdim!')
};

if(args[0] == "bug") {
db.set(`bug_${args[1]}`, "<:bug1:850624359836286986>")
return message.inlineReply('<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye bug-hunter verdim!')
};

if(args[0] == "owner") {
db.set(`owner_${args[1]}`, "<:owner:850625005548470273>")
return message.inlineReply('<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye owner verdim!')
};

if(args[0] == "bug2") {
db.set(`bug2_${args[1]}`, "<:bug2:850624336154722354>")
return message.inlineReply('<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye bug-hunter2 verdim!')
};

if(args[0] == "destekçi") {
db.set(`destekci_${args[1]}`, "<:premium:850626381938163743>")
return message.inlineReply('<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye Destekçi verdim!')
};

if(args[0] == "yetkili") {
db.set(`yetkili_${args[1]}`, "<:destek:850625292758155264>")
return message.inlineReply('<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye yetkili verdim!')
};

if(args[0] == "dev") {
db.set(`bug_${args[1]}`, "<:developer:768822320315105322>")
return message.inlineReply('<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye developer verdim!')
};

if(args[0] == "gold") {
db.set(`bug_${args[1]}`, "<:gold:850626402893955123>")
return message.inlineReply('<:calisiyor:798582407393312808> <@${args[1]}> Adlı kişiye gold verdim!')
};

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "rozet-ver" 
} 
