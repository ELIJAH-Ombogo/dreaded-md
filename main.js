 import pi from "@whiskeysockets/baileys";

const  {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = pi

import fs from "fs";
import util from "util";
import { Bard } from "googlebard"; 
import axios from "axios";
import text4 from "./lib/text4.js";
import chalk from "chalk";
import { bardAI, bardAsk } from 'g-bardai';
import speed from "performance-now";
import Genius from "genius-lyrics";
import { ssweb } from './lib/scrap.js'; // Assuming scrap is a CommonJS module
import { readFileSync } from 'fs'; // Update to use specific function from fs
const kali = readFileSync('./dreaded.jpg'); // Using readFileSync directly
import { Client } from "genius-lyrics"; // Assuming Client is a named export
import { isUrl, processTime } from "./lib/dreadfunc.js";
import { TelegraPh, UploadFileUgu } from './lib/dreadupload.js';
// import { tiny, listall } from './lib/style.js';
import { smsg, formatp, tanggal, formatDate, getTime, sleep, clockString, fetchJson, getBuffer, jsonformat, generateProfilePicture, parseMention, getRandom } from './lib/dreadfunc.js';
import { exec, spawn, execSync } from "child_process";
import Heroku from "heroku-client";

import pkgg from 'rsnchat';
const  RsnChat = pkgg;





export default async function dreaded(client, m, chatUpdate, store) {




  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
   // leave the prefix string empty if you don't want the bot to use a prefix
    const prefix = process.env.PREFIX || '';
const mycode = process.env.COUNTRY_CODE || '254';
    const cmd = body.startsWith(prefix);
const autobio = process.env.AUTOBIO || 'TRUE';
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;

    let text = args.join(" ");
let q = args.join(" ");
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = m.chat;
   const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };

const isBaileys = mek.key.id.startsWith("BAE5") && mek.key.id.length === 16;



const reactionMessage = {
    react: {
        text: "🗿", // use an empty string to remove the reaction
        key: m.key
    }
}







    const fortu = (m.quoted || m); 
         const quoted = (fortu.mtype == 'buttonsMessage') ? fortu[Object.keys(fortu)[1]] : (fortu.mtype == 'templateMessage') ? fortu.hydratedTemplate[Object.keys(fortu.hydratedTemplate)[1]] : (fortu.mtype == 'product') ? fortu[Object.keys(fortu)[0]] : m.quoted ? m.quoted : m; 

const audiovn = "./alive.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Dreaded",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "Hi human, I am Alive",
          body: "DREADED BOT",
          thumbnailUrl: "https://telegra.ph/file/a5147a64a5b91d8cf945c.jpg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };


    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
    const mime = (quoted.msg || quoted).mimetype || "";
            const qmsg = (quoted.msg || quoted);
    const author = process.env.STICKER_AUTHOR || 'fortunatus';


const sendd = (text) => {
return client.sendMessage(from, { text: text, contextInfo:{"externalAdReply": {"title": `DREADED BOT`,"body": pushname, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/c75efecf7f0aef851fc02.jpg',"thumbnail": kali,"sourceUrl": ``}}}, { quoted:m})} 

const menureply = (text) => {
return client.sendMessage(from, { text: text, contextInfo:{"externalAdReply": {"title": `DREADED BOT`,"body": `M E N U`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/c75efecf7f0aef851fc02.jpg',"thumbnail": kali,"sourceUrl": ``}}}, { quoted:m})} 


const appname = process.env.APP_NAME;
const herokuapi = process.env.HEROKU_API;
    const packname = process.env.STICKER_PACKNAME || 'dreaded';
const antibot = process.env.ANTIBOT || 'TRUE';
const dev = process.env.DEV || '254114018035, 17199664731'
 const DevDreaded = dev.split(",");
    const badwordkick = process.env.BAD_WORD_KICK || 'TRUE';
   const bad = process.env.BAD_WORD || 'fuck,mbwa,mamako,malaya,kuma,dinywa,jidinye,kumamako,kumamake,matako,mboro,coward,bastard, shenzi,idiot,cowards,nyani,jinga,ujinga,nitakudinya,dick,pussy,vagina,penis,sex,doggy,anal,blowjob,handjob,porn,porno, pornography,bdsm,cock,ngwati';
    const autoreadrecord = process.env.AUTOREAD_AND_TYPE || 'TRUE';
    const badword = bad.split(",");
    const Owner = DevDreaded.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
    // Group
                    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
const groupName = m.isGroup && groupMetadata ? await groupMetadata.subject : "";
    const participants = m.isGroup && groupMetadata ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
const admin = process.env.ADMIN_MSG || 'Are you an admin?';
    const group = process.env.GROUP_ONLY_MSG || 'Is this a group chat?';
    const botAdmin = process.env.BOT_ADMIN_MSG || 'Am I an admin?'
    const NotOwner = process.env.NOT_OWNER_MSG || 'Are you the owner?';

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hours, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minutes, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Seconds") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 




 const timestamp = speed(); 
   const dreadedspeed = speed() - timestamp 


if (budy.startsWith(',')) {
  if (!Owner) return reply("Only owner")
  try {
let evaled = await eval(budy.slice(2));

if (typeof evaled !== 'string') {
  await import('util').then(({ inspect }) => {
    evaled = inspect(evaled);
  });
}



await reply(evaled);
  } catch (err) {
await reply(String(err));
  }
}





   if (budy.startsWith(';')) { 
   if (!Owner) return reply `Only Owner allowed to evaluate part of the bot codes` 
   function Return(sul) { 
 sat = JSON.stringify(sul, null, 2) 
 bang = util.format(sat) 
   if (sat == undefined) { 
  bang = util.format(sul) 
   } 
   return reply(bang) 
   } 
   try { 
 reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`))) 
   } catch (e) { 
 reply(String(e)) 
   } 
    } 

    if (budy.startsWith('$')) {
  if (!Owner) return reply("Owner only")
  exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
  })
   }

    if (mek.key.id.startsWith("BAE5") && m.isGroup && !isAdmin && isBotAdmin && mek.key.id.length === 16) {  

 const kidts = m.sender;  
  await client.sendMessage(m.chat, { text: `Dreaded AntiBot:\n@${kidts.split("@")[0]} is bot and has been removed to prevent spam!`, contextInfo:{mentionedJid:[kidts]}}, {quoted:m});  
  await client.groupParticipantsUpdate(m.chat, [kidts], 'remove');  

  } 


if (budy.match(`@+254114018035`)) {
client.sendMessage(from, reactionMessage)
reply("");
}



    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

/*
    if (autoreadrecord === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key]); 
client.sendPresenceUpdate('unavailable', from)
        
  client.sendPresenceUpdate('composing', m.chat);
    }
*/


if (m.chat.endsWith("@s.whatsapp.net") && body && (new RegExp('\\b' + badword.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {


await m.reply("You will be blocked and reported for using vulgar words in the bots private chat.\nContact owner to be unblocked. Bye");

await client.updateBlockStatus(sender, 'block');

}






    if (m.chat.endsWith("@s.whatsapp.net") && !m.isBaileys) {

try {

if (itsMe) return;

const rsnchat = new RsnChat("chatgpt_z8DWXIDQxd6Wczj1FW7qjy");

rsnchat.gpt(text).then((response) => { sendd(response.message); });

} catch (error) {

m.reply("something has gone fatally wrong, I don't know, you try later. . . 🥲")

}

}











/*
try {
let cookies = `__Secure-1PSID=fghhiycqyQzlhpnKjcfvTxwarl4SEYcWIHTMyhegK1y_vQVKwCgGxwmIcyXahD_Ah5TPwA.`; 

let bot = new Bard(cookies, {
    inMemory: false,
    savePath: "./conversation.json", 
});

let conversationId = m.sender; 

let respond = await bot.ask(text, conversationId);  m.reply(respond)

} catch (error) {
m.reply("hey, for better responses make longer sentence, do not send short messages like hey, hi, hello")

}
}


(async()=>{




let sessionCokies = JSON.parse(fs.readFileSync('lib/bardLogin.json'))


await new bardAI(sessionCokies).login()

//After login you can use bardAsk() function





const res = await bardAsk(text)

m.reply(res);

console.log(res)
})()

} catch (error) {

m.reply("🤔 Hmmm. . . ")

}

          }

  
*/



if (badwordkick === 'TRUE' && m.isGroup && isBotAdmin && body && (new RegExp('\\b' + badword.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {

// on = m.sender;

      if (isAdmin) return m.reply("👀");      
     client.groupParticipantsUpdate(from, [sender], 'remove')


await sendd("Removed:\n\nthis is not allowed");



                                                   }


/*

if (mek.key.id.length === 16 && mek.key.id.startsWith("BAE5") && m.isGroup && !isAdmin && isBotAdmin && m.mentionedJid.length > 10) {

client.groupParticipantsUpdate(from, [sender], 'remove')
con = m.sender;
client.sendMessage(m.chat, {text:`ANTITAG:\n\nRemoved by Dreaded:\n\n@${con.split("@")[0]}, Do not tag group members using bot!`, contextInfo:{mentionedJid:[con]}}, {quoted:m}); 

}

*/
if (m.isGroup && m.mentionedJid && m.mentionedJid.length > 10) {
 if (!isBotAdmin) return m.reply("Antitag:  Bot not admin")
 if (isAdmin) return m.reply("Antitag:  User is admin")

try {

await client.groupParticipantsUpdate(from, [sender], 'remove')
cona = m.sender;
await client.sendMessage(m.chat, {text:`ANTITAG:\n\n@${cona.split("@")[0]}, Do not tag!`, contextInfo:{mentionedJid:[cona]}}, {quoted:m}); 

} catch (error) {

sendd("Do not tag!")

}

}







if (autobio === 'TRUE'){
client.updateProfileStatus(`Dreaded Bot is active!`).catch(_ => _)
        }

/* if (m.isGroup){

let dreadrecordin = ['recording','composing']

        let dreadrecordinfinal = dreadrecordin[Math.floor(Math.random() * dreadrecordin.length)]

        client.sendPresenceUpdate(dreadrecordinfinal, from)
}


*/



    if (body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 

 const kid = m.sender; 

 client.sendMessage(m.chat, { 

                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: kid 
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [kid], 'remove')); 
 client.sendMessage(m.chat, {text:`Removed\n\n@${kid.split("@")[0]} sending group links is prohibited!`, contextInfo:{mentionedJid:[kid]}}, {quoted:m}); 
       }   












    if (cmd && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ DREADED-AI ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (cmd && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }
/*

const commands = {}
const loadCommands = (category) => {
  const commandFiles = fs.readdirSync(`./commands/${category}`).filter((file) => file.endsWith(".js"));

  commandFiles.forEach((file) => {
    const command = require(`./commands/${category}/${file}`);
   
    commands[file.replace(".js", "")] = command;
  });
};
*/


const commands = {};

const loadCommands = async (category) => {
  const commandFiles = fs.readdirSync(`./commands/${category}`).filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const { default: command } = await import(`./commands/${category}/${file}`);
    commands[file.slice(0, -3)] = command;
  }
};

// Make sure to call loadCommands inside an async function or use .then() with the promise it returns.





    if (cmd) {



await loadCommands("general");
await loadCommands("group");
await loadCommands("owner");
await loadCommands("ai");
await loadCommands("coding");
await loadCommands("download");



await loadCommands("edit");
console.log("Loaded commands successfully");
      switch (command) {
// Group commands


case "close": commands[command](client, m, getGroupAdmins, admin, group, botAdmin,isAdmin, isBotAdmin);
break;
case "open":
commands[command](client, m, getGroupAdmins, admin, group, botAdmin,isAdmin, isBotAdmin);
case "link":
commands[command](client, m, group, botAdmin, isBotAdmin, groupMetadata);
break;
case "demote":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, text);
break;
case "promote":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, text);
break;
case "remove":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, text);
break;
case "disp1":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;
case "disp7":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;
case "req":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;
case "approve-all":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;

case "reject-all":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;
case "disp90":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;
case "delete":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, isBaileys);
break;
case "hidetag":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, q, participants);
break;
case "tagall":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, q, participants, groupMetadata);
break;
case "leave":
commands[command](client, m, group, admin, isAdmin, participants);
break;
case "desc":
commands[command](client, m, group, admin, isAdmin, botAdmin, isBotAdmin, text);
break;
case "subject":
commands[command](client, m, group, admin, isAdmin, botAdmin, isBotAdmin, text);
break;
case "revoke":
commands[command](client, m, group, admin, isAdmin, botAdmin, isBotAdmin, groupMetadata);
break;
case "foreigners":
commands[command](client, m, admin, isAdmin, group, botAdmin, isBotAdmin, participants);
break




        break;

// general commands
case "menu":
commands[command](client, m, menureply);
break;
case "ig":
commands[command](client, m, text, fetchJson, getBuffer);
break;
case "alive":
commands[command](client, m, dooc);
break;

case "groups":
commands[command](client, m, sendd);
break;

case "tempmail":
commands[command](client, m, text);
break;
case "tempinbox":
commands[command](client, m, text);
break;
case "script":
commands[command](client, m, sendd);
break;
case "screenshot":
commands[command](client, m, text, ssweb, sendd);
break;

case "group-vcf":
commands[command](client, m, text, participants);
break;
case "retrieve":
commands[command](client, m);
break;




// coding
case "enc":
commands[command](client, m);
break;

// ai
case "gpt":
commands[command](client, m, text);
break;
case "gemini":
commands[command](client, m, text);
break;
case "ai2":
commands[command](client, m, text, qmsg, mime, UploadFileUgu, TelegraPh);
case "hi":
commands[command](client, m, text, qmsg, mime, UploadFileUgu, TelegraPh);
break;
case "ai6":
commands[command](client, m, text);
break;
case "ai3":
commands[command](client, m, text);
break;
case "ai4":
commands[command](client, m, text, fetchJson);
break;

case "gpt4":
commands[command](client, m, text, sendd, fetchJson);
break;

case "speak":
commands[command](client, m, text);
break;
case "ai5":
commands[command](client, m, text);
break;

case "bot":
commands[command](client, m, text);
break;

case "gpt":
commands[command](client, m, text, sendd);
break;

case "boy":
commands[command](client, m, text, sendd);
break;



// download
case "play":
commands[command](client, m, text);
break;
case "lyrics":
commands[command](client, m, text, Client, Genius);
break;
case "video":
commands[command](client, m, text);
break;
case "spotify":
commands[command](client, m, q, fetchJson);
break;
case "apk":
commands[command](client, m, q, fetchJson);
break;
case "upload":
commands[command](client, m, qmsg, mime, UploadFileUgu, TelegraPh);
break;

case "app":
commands[command](client, m, q);
break;
case "whatsong":
commands[command](client, m, q, mime, qmsg);
break;





//edit
case "sticker":
commands[command](client, m, qmsg, packname, author, mime);
break;


case "toimg":
commands[command](client, m, quoted, mime, exec, getRandom);
break;



case "tweet":
commands[command](client,text, m, pushname);
break;
case "carbon":
commands[command](client, text, m);
break;
case "quotely":
commands[command](client,text, m, pushname);
break;
case "zombie":
commands[command](client, m, text, qmsg, mime, UploadFileUgu, TelegraPh);
break;

case "hacker":
commands[command](client, m, text, qmsg, mime, UploadFileUgu, TelegraPh);
break;
case "hacker2":
commands[command](client, m, text, qmsg, mime, UploadFileUgu, TelegraPh);
break;

case "mix":
commands[command](client, text, m, packname, author, fetchJson);
break;



//owner
case "botppfull":
commands[command](client, m, mime, generateProfilePicture, Owner, NotOwner, botNumber, quoted);
break;
case "join":
commands[command](client, m, mime, Owner, NotOwner, text, args);
break
case "admin":
commands[command](client, m, Owner, NotOwner, text, group, botAdmin, isBotAdmin);
break
case "kill":
commands[command](client, m, Owner, NotOwner, group, botAdmin, isBotAdmin, participants);
break
case "pair":
commands[command](client, m, Owner, NotOwner, smsg);
break

case "bug":
commands[command](client, m, Owner, NotOwner, text4, generateWAMessageFromContent);
break

case "bc":
commands[command](client, m, text, Owner, NotOwner, participants, pushname);







        default: {
          if (cmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (cmd && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Dreaded", "turquoise"));
            } else if (argsLog || (cmd && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Dreaded", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
   client.sendText('254114018035' + '@s.whatsapp.net', `ERROR LOG ⚙️\n\nSender: ${m.sender}\nUsername: ${m.pushName}\nOrigin: ${m.chat}\n\nError details: ${util.format(err)}`, m)
        console.log(util.format(err))
  }
};