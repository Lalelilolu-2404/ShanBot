const {
    WAConnection,
    MessageType,
    MessageOptions,
    WA_MESSAGE_STUB_TYPES,
    WA_DEFAULT_EPHEMERAL,
    ReconnectMode,
    Presence,
    Mimetype,
    rugaapi,
    waChatKey,
    GroupSettingChange,
    ChatModification,	
    mentionedJid,
} = require('@adiwajshing/baileys')

/******COMIENZO DE LA ENTRADA DEL ARCHIVO******/
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, spinner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
/******FIN DE ENTRADA DE ARCHIVO******/

/******COMIENZO DE LA ENTRADA DEL PAQUETE NPM******/
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
/*const tiktod = require('tiktok-scraper')*/
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const {removeBackgroundFromImageFile} = require('remove.bg');
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()

const speed = require('performance-now')
const axios = require("axios")
const gis = require('g-i-s');
const imageToBase64 = require('image-to-base64');
/******FIN DE ENTRADA DEL PAQUETE NPM******/

/******COMIENZO DE LA ENTRADA JSON******/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const image = JSON.parse(fs.readFileSync('./database/img.json'))
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))
const up = JSON.parse(fs.readFileSync('./database/setting.json'));
/******FIN DE ENTRADA JSON******/

/******INICIO DE LA ENTRADA DEL MENÚ******/
const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { desmenu } = require('./src/desmenu')
/******FIN DE ENTRADA DEL MENÚ******/

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:Shan\n' // Nombre
            + 'ORG:Lalelilolu;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=33749258491:+33 7 49 25 84 91\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/

prefix = '.'
blocked = []
hit_today = []
banChats = false
offline = false
fake = 'Lalelilolu ᵈᵃʳʸ⛥'
numbernye = '0'
promote = setting.promote
demote = setting.demote
public = false

/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	author,
	pack
} = settingan
///
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
/******INICIO DE FUNCIONES ENTRADA******/

function addMetadata(packname, author) {	
	if (!packname) packname = 'Anna se la come :v'; if (!author) author = '⛧⸸⁶Death⁹†حب♡ت';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
	
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.version = [2, 2119, 6]
        client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el codigo QR es temporal no te tardes Rapido!!!  '))
	})

	fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	client.on('connecting', () => {
		start('2', 'Desconectado. Utiliza npm start Para conectarte')
	})
	client.on('open', () => {
		success('2', 'Conectado by Shanduy')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `Mi loco @${num.split('@')[0]}\nBienvenido a :*${mdata.subject}*😎\n\nRegístrate con el comando ${prefix}daftar ⌜Nombre⌟\n\nUtiliza ${prefix}help para ver los comandos\nOjito con el spam 🧐`
                          client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `NOOOO, se nos fué @${num.split('@')[0]}👋\n\nNadie te extrañará 😎`
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			} 
		}catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

//Chat update
	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Guayaquil').format('HH:mm:ss')
			const date = moment.tz('America/Guayaquil').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)
			const q = args.join(' ')
			const arg = budy.slice(command.length + 1, budy.length)

			mess = {
				wait: 'Relaja la raja😎\n\n❗Loading...❗\n\nby lalelilolu',
				success: '✔️ Listo ✔️',
                                levelon: '❬ ✅ ❭ *Level activado*',
				leveloff: ' ❬ ✅ ❭  *Level desactivado*',
				levelnoton: '❬ ❎ ❭ *Level no esta activado*',
				levelnol: '*Nivel* 0 ',
				error: {
					stick: '[❎] Falló, se produjo un error al convertir la imagen en una pegatina',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '[❗] Este comando es solo para grupos!',
					ownerG: '[❗] Este comando solo puede ser utilizado por un admin del grupo!',
					ownerB: '[❗] Este comando solo lo usa Lalelilolu :v!',
					admin: '[❗] Este comando solo puede ser utilizado por administradores del grupo!',
					Badmin: '[❗] Este comando solo se puede usar cuando el bot se convierte en administrador!',
                                        pegatina: 'Relaja la raja, loading... 👏\n\n*Stickersgif son de 6 segundos ❗*',
					attp: 'Calma crack estoy haciendo tu texto a sticker 👏\n\n*Loading...*',
					imgs: 'Euu flaco 🥴\n\n*Convirtiendo tu Sticker a Imagen 🔄*',
					mpcancion: 'Calmaoooo estoy procesando 😎\n\n*Convirtiendo de MP4 a MP3 🔄*\n\nby Lalelilolu',
					mpa: 'Euu flaco 🥴\n\n*Estoy decargando tu cancion 🔄*\n\nAguarde un momento, por favor\n\nby Lalelilolu',
                                        mpv: 'Calmao pa 😎\n\n*Estoy descargando tu video 🔄*\n\nAguarde un momento, por favor\n\nby Lalelilolu',
					/**musica: 'Calmao pa estoy bucando tu canción 😎\n\n*Recuerda colocar bien el nombre de la cancion o el link del video de youtube ❗*\n\nby shanduy',**/
					daftarB: `「PERO PAAAAA!!!...」\n\nNo estas registrado en mi base de datos 😳 \nComando : ${prefix}daftar Nombre\nEjemplo : ${prefix}daftar Putit@`,
				}
			}
    			const apakah = ['Si','No']
                        const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
			const botNumber = client.user.jid
			const ownerNumber = ["33749258491@s.whatsapp.net"] // replace this with your number
			const loliNumber = ["14388351141@s.whatsapp.net"]

			const nomorOwner = [ownerNumber]
	                const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			
			const isAntiLink = isGroup ? antilink.includes(from) : false
			
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			
			const isStick = isGroup ? stick.includes(from) : false
			const isPacksito = isGroup ? packsito.includes(from) : false
			const isInteract = isGroup ? interact.includes(from) : false
			
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isMe = meNumber.includes(sender) 
			const isLoli = loliNumber.includes(sender) 
			
                        const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '33749258491@s.whatsapp.net'
                        /******Entrada ApiKey******/
                        const BarBarKey = '8'
			
			//BarBarKey = up.BarBarKey;
			vKey = up.Vhtearkey;
			viKey = 'LEUJU9ybLwAHbLqnGShv'
			meKey = up.Itsmeikyapi
			lolKey = up.LolHumanKey
			
                        /******Fin de la entrada de ApiKey******/

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text, {sendEphemeral: true})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
			const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			//let pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify: undefined
			let pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
		
	if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE WHATSAPP DETECTADO 📢* ${sender.split("@")[0]} Usted será expulsado del grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios mi loco")
		}, 0)
	}  

	        //FUNCION DE LEVEL

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 
       /******ENTRADA FIN DE FUNCIONES******/
			function addMetadata(packname, author) {	
				if (!packname) packname = 'ShanBot'; if (!author) author = 'Lalelilolu';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
/////////////////////////////////			
			
	const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Holi cosita ^-^${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./assets/menuimg.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }

const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./assets/menuimg.jpg`)
					},
					"title": `UwU : ${pushname}`,
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	client.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}

switch(command) {

case 'menu':
case 'help':
    var menu = `${help(prefix)}
    `
    faketokoforwaded(menu)							
break	
		
case 'swt':
	client.updatePresence(from, Presence.composing)
	if (!isOwner || !isLoli || !isGroupAdmins) return reply('Haha no')
	if (!arg) return reply(`${prefix}spam @ #|Text`)
       		argz = arg.split("|")
        	if (!argz) return reply(`${prefix}spam @ #|Text`)
        	if (isNaN(argz[1])) return reply(`# de veces?`)
	var mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	let target = argz[0]
	if (mentioned.length = 1) {
		if (argz[1] > 50) {
			spst = "Haha no"
			Noperro = fs.readFileSync(`./src/stickers2/${spst}.webp`)
			client.sendMessage(from, Noperro, MessageType.sticker, {quoted: mek})
			argz[1] = 10}
		for (let i = 0; i < argz[1]; i++){
		sendMess(mentioned[0], ` *${argz[2].trim()}* `)
		}
	} else if (mentioned.length < 1) {
		Newtarget = argz[0].trim()
		targetspam = Newtarget+"@s.whatsapp.net"
		client.sendMessage(from, Newtarget, MessageType.text, {sendEphemeral: true})
		client.sendMessage(from, targetspam, MessageType.text, {sendEphemeral: true})
		for (let i = 0; i < argz[1]; i++){
		sendMess(targetspam, ` *${argz[2]}* `)
		}
	  }
break			
		
case 'self':
          	if (!isOwner) return fakestatus('No eres mi dueño UnU')
          	if (banChats === true) return
          	uptime = process.uptime()
         	banChats = true
          	fakestatus(`「 *Privado UwU* 」`)
break
 //Set Owner For gc
case 'public':
          	if (!isOwner) return fakestatus('No eres mi dueño UnU')
          	if (banChats === false) return
          	banChats = false
          	fakestatus(`「 *PUBLICO OwO* 」`)
break
			
case 'ytmp4':
		if (args.length < 1) return reply('Donde esta la url del video?\n\nEjemplo: *ytmp4 www.youtube.com/xxxxxxxxx')
		if (!isUser) return reply(mess.only.daftarB)
		reply(mess.only.mpv)
		if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
		anu = await fetchJson(`https://api.zeks.me/api/ytmp4?apikey=${apikey}&url=${args[0]}`, {method: 'get'})
		if (anu.error) return reply(anu.error.yt)
		teks = `*⌜Video Encontrado ✅⌟*\n◉ *Título:* ${anu.result.title} \n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP4 ⚠*\n\n_*Servicio proveido por shanduy*_`
		lagu = await getBuffer(anu.result.thumbnail)
                client.sendMessage(from, lagu, image, {quoted: mek, caption: teks})
		buffer = await getBuffer(anu.result.url_video)
		client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
		break
			
                                 case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Cual es el código de idioma?\n\nPara saber el codigo de idioma coloque el comando ${prefix}idioma', text, {quoted: mek})
                                   /**if (!isUser) return reply(mess.only.daftarB)**/
				   if (!isGroup) return reply(mess.only.group)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Y el texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Texto muy largo weon')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break

			case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
					break

              case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Chao Pa👋', text) // ur cods
					}, 0)
              break

                                      case 'kick':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca al que vamos a funar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, chao nefastooo 👋 :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedido recibido, chao putit@ 👋 : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, 'Chao put@ gord@', text)
					}
					break
/**		
        case 'kickall':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
	    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	    if (!isOwner) return reply(mess.only.ownerB)
            const allMeq = await tobz.getGroupMembers(groupId)
            for (let i = 0; i < allMeq.length; i++) {
                if ((botNumber, ownerNumber, groupAdmins).includes(allMeq[i].id)) {
                    console.log('Upss :')
                } else {
                    await client.removeParticipant(groupId, allMeq[i].id)
                }
            }
    		fakestatus(`「 *Brutality!!!* 」`)
            break
**/		
		case 'exe':
	              client.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return client.sendMessage(from, "Adios", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                break
		     				
				case 's':
				case 'sticker':
		if (!isGroup) return reply(mess.only.group)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									 if (error) {
											 reply(ind.stikga())
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.only.pegatina)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`[❗] Fallo, al momento de convertir ${tipe} al sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) {
											 reply(ind.stikga())
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Envíe una imagen con el comando ${prefix}s o etiqueta a una imagen que ya se haya enviado`)
					}
					break
					
			            case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                 
					if (!isQuotedSticker) return reply('❌ Solo stickers')
					reply(mess.only.imgs)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el sticker en imágenes')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*⌈ Imagen convertida ✅ ⌉*\n\nby lalelilolu'})
						fs.unlinkSync(ran)
					})
					break                	
///////////
		
case 'play':
 // if (!isUser) return reply(mess.only.daftarB)
  if (!isGroup) return reply(mess.only.group)
  if (args.length < 1) return reply('Escribe el nombre')
  reply(mess.wait)
  play = body.slice(6)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=hamilton50`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Audio*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_El audio se esta mandando, si no llega descargue por el link_\n‣ *Link* : ${anu.result.url_audio}
  `
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  client.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  client.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })

  } catch {
    reply(mess.ferr)
  }
  break			
//////////		

		case 'play2':   
		if (!isGroup) return reply(mess.only.group)
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?')
		//if (!isUser) return reply(mess.only.daftarB)
                reply(mess.only.musica2)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=shanduy50`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*⌈ Canción Encontrada ✅ ⌉*\n◉ *Título* : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break

					
                                case 'welcome':
					if (!isGroup) return reply(mess.only.group)
                                        //if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Para activar está funcion coloca *welcome 1')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya esta activada!!!')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('❬ ✅ ❭ La funcion de bienvenida esta habilitada en este grupo')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('❬ ✅ ❭ La funcion de bienvenida esta deshabilitada en este grupo')
					} else {
						reply('Escribe el comando 1 para activarlo y 0 para desactivarlo Ejemplo: *welcome 1')
					}
					break

                        case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
		                        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break	
			
case 'imagen':
            if (args.length < 1) return reply('Ingrese texto!')
            const gimg = args.join('');
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            client.sendMessage(from,{url:images},image,{quoted:mek})
            });
break
		
case 'pinterest':
	tels = body.slice(11)
	if (!isUser) return reply(mess.only.daftarB)
	if (args.length < 1) return reply('Ingresa lo que quieres buscar')
	client.updatePresence(from, Presence.composing)
	try {
	data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {
	method: 'get'
	})
	reply(mess.wait)
	n = JSON.parse(JSON.stringify(data));
	nimek = n[Math.floor(Math.random() * n.length)];
	pok = await getBuffer(nimek)
	client.sendMessage(from, pok, image, {quoted: mek, caption: `Resultado : *${tels}*`})

} catch {
  reply(mess.ferr)
}
break		

/***Stickers..............***/
default:
		
///Loli audios////
		
	if (isOwner){	
        if (budy.startsWith(`Jaa`)) {
		if (budy.endsWith(`Jaa`)){
        	const none = fs.readFileSync('./anishan/Jaa.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		}
	}					

        if (budy.startsWith(`Concha`)) {
		if(budy.endsWith(`Concha`)){
        	const none = fs.readFileSync('./anishan/Concha.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		}
        if (budy.startsWith(`Japi`)) {
		if(budy.endsWith(`Japi`)){
        	const none = fs.readFileSync('./anishan/Japi.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		}
        if (budy.startsWith(`Las pelotas`)) {
        	const none = fs.readFileSync('./anishan/Las pelotas.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }							
	if (budy.startsWith(`Orto`)) {
		if(budy.endsWith(`Orto`)){
        	const none = fs.readFileSync('./anishan/Orto.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }	
		}
/***Shantera***/	
		
				if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
