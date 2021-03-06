const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const con = require('../config');

const ZAR = "Tira los dados al azar."
const SEN = "π ```Β‘Los dados estΓ‘n girando!``` π²"
const SON = "```Resultado:``` "

if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'dado', fromMe: true, desc: ZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, SEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "π² *1* π²";
            r_text[1] = "π² *2* π²";
            r_text[2] = "π² *3* π²";
            r_text[3] = "π² *4* π²";
            r_text[4] = "π² *5* π²";
            r_text[5] = "π² *6* π²";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, SON + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'dado', fromMe: false, desc: ZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, SEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "π² *1* π²";
            r_text[1] = "π² *2* π²";
            r_text[2] = "π² *3* π²";
            r_text[3] = "π² *4* π²";
            r_text[4] = "π² *5* π²";
            r_text[5] = "π² *6* π²";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, SON + `${r_text[i]}`, MessageType.text);

        }));
    }
