const Canvas = require("canvas");
const { MessageAttachment}   = require("discord.js")
class sakura_canvas {
     constructor() {
 }
 async rank(args,message)  {
 if(!args.level||isNaN(args.level)) throw new Error("Не указан аргумент level");
 if(!args.xp || isNaN(args.xp)) throw new Error("Не указан аргумент xp");
  if(!args.usertag) throw new Error("Не указан аргумент usertag");
 if(!args.avatar || !/\.png($|\?.+)/.test(args.avatar)) throw new Error("Не указана аватарка либо  она  не формата png")
if(!args.bg || !/\.png($|\?.+)/.test(args.avatar)) throw new Error("Не указан фон либо фон  он не формата png")
if(!message) throw new Error("Не указан аргумент message")
const Canvas = require("canvas")
const canvas = Canvas.createCanvas(1000 , 282);
const ctx = canvas.getContext('2d');
 Canvas.registerFont(`./fonts/myriadpro-bold.ttf`, { family: "myriadpro-bold" })
Canvas.registerFont(`./fonts/Agency_FB.ttf`, { family: "Agency_FB" })
  const background = await Canvas.loadImage(args.bg+ '?size=1024');
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
ctx.font = '45pt myriadpro-bold' 
ctx.fillStyle = '#DCDCDC';
ctx.fillText(`• Уровень: ${args.level}`, canvas.width /  3.9 , canvas.height / 1.2);
ctx.font = '70pt Agency_FB';
ctx.fillStyle = '#DCDCDC';
ctx.fillText(args.usertag, canvas.width / 3.6, canvas.height / 3.0);
ctx.font = '45pt myriadpro-bold';
ctx.fillStyle = '#DCDCDC';
ctx.fillText(`• Опыта: ${args.xp}/${parseInt(args.level) + (parseInt(1)) * 100}`, canvas.width /  3.9, canvas.height / 1.6);
  ctx.beginPath();
ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();
const avatar = await Canvas.loadImage(args.avatar);
ctx.drawImage(avatar,25, 25, 200, 200)
return  message.channel.send(new MessageAttachment(canvas.toBuffer(), 'profile.png'))
 }
}
module.exports = sakura_canvas;
 
