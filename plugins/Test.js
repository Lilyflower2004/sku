const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require("@adiwajshing/baileys");
const con = require('../config');
const id = '51912545279@s.whatsapp.net' // the WhatsApp ID 

// send a buttons message!
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Hola, esto es una prueba",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

if (con.WORKTYPE == 'private') {
  
  Asena.addCommand({pattern: 'test', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      await conn.sendMessage(id, buttonMessage, MessageType.text)

        }));
}

else if (con.WORKTYPE == 'public') {
  
  Asena.addCommand({pattern: 'test', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      await conn.sendMessage(id, buttonMessage, MessageType.text)

        }));
}
