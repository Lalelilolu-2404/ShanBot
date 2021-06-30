 /*
* ShanBot es una creación de shanduy
* ShanBot no tiene ningun fin de lucro
* shanduy se reserva todos los derechos de autor
* © 2021 shanduy, INC.
*/

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
    GroupSettingChange
} = require('@adiwajshing/baileys')

/******COMIENZO DE LA ENTRADA DEL ARCHIVO******/
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
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
const { removeBackgroundFromImageFile } = require('remove.bg')
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
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const stick = JSON.parse(fs.readFileSync('./database/json/stick.json'))
const packsito = JSON.parse(fs.readFileSync('./database/json/packsito.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
/******FIN DE ENTRADA JSON******/

/******INICIO DE LA ENTRADA DEL MENÚ******/
const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { toinmenu } = require('./src/toinmenu')
const { menuadmin } = require('./src/menuadmin')
const { nsfwmenu } = require('./src/nsfwmenu')
const { desmenu } = require('./src/desmenu')
/**const { version } = require('./src/version')**/
const { shantera } = require('./src/shantera')
const { welmenu } = require('./src/welmenu')
const { otak } = require('./src/otak')
const { bana } = require('./src/bana')
const { stick1 } = require('./src/stick1')
const { stick2 } = require('./src/stick2')
const { stick3 } = require('./src/stick3')
const { packmenu } = require('./src/packmenu')
/*const { mediamenu } = require('./database/menu/mediamenu')
const { educationmenu } = require('./database/menu/educationmenu')
const { downloadermenu } = require('./database/menu/downloadermenu')
const { mememenu } = require('./database/menu/mememenu')
const { kerangmenu } = require('./database/menu/kerangmenu')
const { groupmenu } = require('./database/menu/groupmenu')
const { soundmenu } = require('./database/menu/soundmenu')
const { musicmenu } = require('./database/menu/musicmenu')
const { islammenu } = require('./database/menu/islammenu')
const { stalkmenu } = require('./database/menu/stalkmenu')
const { wibumenu } = require('./database/menu/wibumenu')
const { funmenu } = require('./database/menu/funmenu')
const { informationmenu } = require('./database/menu/informationmenu')
const { 18+menu } require('./database/menu/18+menu')
const { ownermenu } require('./database/menu/ownermenu')
const { othermenu } require('./database/menu/othermenu')*/
/******FIN DE ENTRADA DEL MENÚ******/

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:Shan\n' // Nombre
            + 'ORG:Lalelilolu;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=33749258491:+33 7 49 25 84 91\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/

prefix = '*'
blocked = []
hit_today = []
banChats = false
offline = false
fake = 'Lalelilolu ᵈᵃʳʸ⛥'

/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	author,
	pack
} = settingan

/******INICIO DE FUNCIONES ENTRADA******/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
	
const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }

function addMetadata(packname, author) {	
	if (!packname) packname = '*'; if (!author) author = '《Lalelilolu》\◔,◡◔,/ ت♡';	
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
				teks = `Mi loco @${num.split('@')[0]}\nBienvenido a :*${mdata.subject}* 👉😎👈\n\nRegístrate con el comando ${prefix}daftar ⌜*Nombre*⌟  \n\nUtiliza ${prefix}help\nOjito con el spam 🧐`
                          client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `NOOOO, se nos fué un putit@ 😎 @${num.split('@')[0]}👋\n\nNadie te extrañará 😎`
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

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
			const nomorOwner = [ownerNumber]
	                const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			
			const isStick = isGroup ? stick.includes(from) : false
			const isPacksito = isGroup ? packsito.includes(from) : false
			
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '33749258491@s.whatsapp.net'
                        /******Entrada ApiKey******/
                        const BarBarKey = 'Mn2Bf58QHQ8kABoLq80g'
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
			const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			  

	        //FUNCION DE LEVEL
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nombre*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nFelicidades weon!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
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
/////////////////////////////////////////////////////////////
	
         // Ucapan Waktu
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'wenas👋'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'wenas🌚'
        } else {
          ucapanWaktu = 'wenas🌚'
        }			
			
/////////////////////////////////			
			
        const fakethumb = (teks, yes) => {
            client.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./assets/menuimg.jpeg'),quoted:mek,caption:yes})
        }				

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
                            "jpegThumbnail": fs.readFileSync('./assets/menuimg.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
		
        const fakegroup = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Holi cosita UwU ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./assets/menuimg.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }	
	
	
const fakekontak = (teks) => {
client.sendMessage(from, teks, MessageType.text, {
quoted: {
key: {
fromMe: false,
 participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {})
 },
message: {
 'contactMessage': {
 'displayName': `Hola ${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu},;;;\nFN:${ucapanWaktu},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
 'jpegThumbnail': fs.readFileSync('./assets/menuimg.jpeg')
}
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
						"jpegThumbnail": fs.readFileSync(`./assets/menuimg.jpeg`)
					},
					"title": `Holi cosita UwU ${pushname}, ${ucapanWaktu}`,
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
			/**const none = fs.readFileSync('./assets/menuimg.jpeg');			
			client.sendMessage(from, none, image, {quoted:mek, caption : help(prefix, sender)})**/
			/**client.sendMessage(from, help(prefix), text,{sendEphemeral: true})**/
		/**	loli = fs.readFileSync(`./mp3/fernan.mp3`)		
			wew = fs.readFileSync(`./assets/menuimg.jpeg`)
                      zain = `╭──❲ INFO BOT ❳
│◨ Nombre: Lalelilolu

╰────────────────⊱` 
ShanBot.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "FX BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('assets/menuimg.jpeg')} } }, caption: zain, pushname, prefix, getLevelingXp, getLevelingLevel, sender, role })
**/

  let i = []
    let giid = []
    for (mem of totalchat){
      i.push(mem.jid)
    }
    for (id of i){
      if (id && id.includes('g.us')){
        giid.push(id)
      }
    }
    let timestampi = speed();		
    let sepid = speed() - timestampi
    var { device_manufacturer, device_model, mcc, mnc, os_build_number} = client.user.phone
    anu = process.uptime()
    runtem = `${kyun(anu)}`
//
    var menu = `
                    SATANCITO ᵈᵃʳʸ⛥
    
Blackpink  -  How you like that 
01:52 ━━━●───── 03:08
     ⇆ㅤㅤ ◁ㅤ ❚❚ㅤ ▷ㅤ ㅤ↻﻿
                  ılıılıılıılıılıılı
ᴠᴏʟᴜᴍᴇ : ▮▮▮▮▮▮▮▯▯▯ 
- *Hits de hoy : ${hit_today.length}*
- *Celular :* ${device_manufacturer}
- *Modelo :* ${device_model}
- *Grupos :* ${giid.length}
- *Chats :* ${totalchat.length - giid.length}
- *Total de chat :* ${totalchat.length}
- Prefix : 「 ${prefix} 」
Grupo oficial : https://chat.whatsapp.com/J72bXsh3gRxKufBl8iikDO
    
    `
    
        	faketokoforwaded(menu)		
					
break
                case 'otak':
		client.sendMessage(from, otak(prefix, sender), text, {quoted: mek})
		break
		case 'bana':
		client.sendMessage(from, bana(prefix, sender), text, {quoted: mek})
		break	
		case 'stick1':
		if (isOwner)			
		client.sendMessage(from, stick1(prefix, sender), text, {quoted: mek})
		break						
		case 'stick2':
		if (isOwner)
		client.sendMessage(from, stick2(prefix, sender), text, {quoted: mek})
		break
		case 'stick3':
		if (isOwner)
		client.sendMessage(from, stick3(prefix, sender), text, {quoted: mek})
		break	
		case 'idioma':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
		break
		case 'shanmenu':
		client.sendMessage(from, toinmenu(prefix, sender), text, {quoted: mek})
		break
		case 'menuadmin':
		client.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
		break
		case 'nsfwmenu':
		if (isOwner)
		client.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
		break
		case 'desmenu':
		client.sendMessage(from, desmenu(prefix, sender), text, {quoted: mek})
		break
		/**case 'versión':
		case 'version':
		client.sendMessage(from, version(prefix, sender), text, {quoted: mek})
		break**/
                case 'welmenu':
		client.sendMessage(from, welmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shantera':
		client.sendMessage(from, shantera(prefix, sender), text, {quoted: mek})
		break
					
		/*case 'virtex':
	       case 'troleo':
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break*/
                            case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('La etiqueta de destino que el administrador quiere transmitir')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Pedido recibido✅\n\nRetirando cargo como administrador :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pedido recibido✅\n\nRetirando cargo como administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
               /**  case 'promote':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('¡La etiqueta de destino que desea promocionar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido✅\n\nAgregando cargo como administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
	**/	
case 'promote':		
 	client.updatePresence(from, Presence.composing) 
	if (!isUser) return reply(mess.only.daftarB)
	if (!isGroup) return reply(mess.only.group)
	if (!isGroupAdmins) return reply(mess.only.admin)
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('¡Etiqueta quien para Admin!')
		/**mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid **/
		
			const mdata = await client.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			
			teks = `𝙉𝙐𝙀𝙑𝙊 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`Usuario :\`\`\` @${num.split('@')[0]}
\`\`\`Grupo :\`\`\` ${mdata.subject}
${promote}`
client.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			
break	
	
		
case 'spam':
                if (!isOwner) return reply('No eres mi dueño UnU')
                if (!arg) return reply(`${prefix}spam Text|#`)
                argz = arg.split("|")
                if (!argz) return reply(`${prefix}spam Text|#`)
                if (isNaN(argz[1])) return reply(`# de veces?`)
                for (let i = 0; i < argz[1]; i++){
                client.sendMessage(from, argz[0], MessageType.text, {sendEphemeral: true})
                }
break
		
case 'self':
          	if (!isOwner) return fakestatus('No eres mi dueño UnU')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *Privado UwU* 」`)
break
 //Set Owner For gc
case 'public':
          	if (!isOwner) return fakestatus('No eres mi dueño UnU')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLICO OwO* 」`)
break

case 'gay':
                client.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
              /**  teks = body.slice(5)**/
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`@${mentioned[0].split('@')[0]}`, mentioned, true)
             
	random = `${Math.floor(Math.random() * 100)}`
	gay = random
if (gay < 20 ) {ga = 'Usted es hetero 🤪🤙'} 
	else if (gay < 31 ) {ga = 'Mas o menos 🤔'}
	else if (gay < 41 ) {ga = 'Tengo mi dudas 😑'} 
	else if (gay < 51 ) {ga = 'Tengo razon? 😏'} 
	else if (gay < 75 ) {ga = 'Eres o no? 🧐'} 
	else if (gay < 88 ) {ga = 'Usted es gay 😉'}
	else {  ga = 'Paletazo 🥵'
		const none = fs.readFileSync('./anishan/Ayy.mp3');
		client.sendMessage(from, none, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})       
	     }	
					
	hasil = `➥${random}% gay \n✪\n➥${ga}`
	    /**options = {
                 text: hasil,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }	**/
               client.sendMessage(from, hasil, text)
break
					

case 'lesb':
                client.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
              /**  teks = body.slice(6)**/
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	mentions(`@${mentioned[0].split('@')[0]}`, mentioned, true)    
	random = `${Math.floor(Math.random() * 100)}`
	lesb = random
	if (lesb < 20 ) {les = 'Uy nena, eres bien mujercita 😘'} 
	else if (lesb < 41 ) {les = 'Hombres, los amo 😍'} 
	else if (lesb < 61 ) {les = 'Uhm, no sé que quiero 🤔'}  
	else if (lesb < 88 ) {les = 'Sale un tijerazo 🥵'} 
	else {les = 'Solo conchitas thanks 🥵'	
		const none = fs.readFileSync('./anishan/Concha.mp3');
		client.sendMessage(from, none, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})   
	     }
	hasil = `➥${random}% lesb \n✪\n➥${les}`
	    /**options = {
                 text: hasil,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }	**/
              /** client.sendMessage(from, options, text)**/
	       client.sendMessage(from, hasil, text)
break
					
case 'lolicon':
                client.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
		/**teks = body.slice(9)**/
	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid	
/**mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)**/
	mentions(`@${mentioned[0].split('@')[0]}`, mentioned, true)

	random = `${Math.floor(Math.random() * 100)}`
	lolicon = random
	if (lolicon < 20 ) {lol = 'Mi loco usted va para el cielo 👏'} 
		else if (lolicon < 31 ) {lol = 'Te salvaste mijo 😎'}  
		else if (lolicon < 41 ) {lol = 'Ey!, que hace viendo lolis 🤔'} 
		else if (lolicon < 51 ) {lol = 'Mmm sospechoso mijo 🧐'}  
		else if (lolicon < 88) {lol = 'Bros un autentico FAN DE LOLIS está en el grupo 😎'}
		else {lol = 'Te cayó la ley perro 😎'
		     
		const none = fs.readFileSync('./src/stickers/FBI.webp');
		client.sendMessage(from, none, sticker)         
		}	
					
		hasil = `➥${random}% fan de lolis\n✪\n➥${lol}`
                client.sendMessage(from, hasil, text)
break
			
				
case 'wa.me':
case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
break
	if (data.error) return reply(data.error)
		reply(data.result)
break
	/*case 'tneon':
                data = await await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=tshanduyx&text=${body.slice(8)}`)
                if (!isUser) return reply(mess.only.daftarB)
                client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(8)})
                break*/
	/**case 'creador':
	    case 'owner':
                case 'creator':
                client.sendMessage(from, {displayname: "Shan", vcard: vcard}, MessageType.contact, { quoted: mek})
		client.sendMessage(from, 'Arriba está el número del creador del bot <ShanBot>\n\nNO SOY UN BOT LPM 🥸\n\nAhi puedes resolver tus preguntas y errores :)\n\nEste no es el numero del propietario del bot que estas usando, si no del creador de la base de datos del bot❗\n\nby shanduy',MessageType.text, { quoted: mek} )
                const none = fs.readFileSync('./mp3/shan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break**/

  case 'hidetag':
                client.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
					
				case 'ytmp3':
					if (args.length < 1) return reply('Donde esta la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.only.mpa)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*DESCARGA EXITOSA ✅*\n◉ *Título* : ${anu.title}\n\nDALE NEFASTO NO SPAMES TE ESTOY ENVIANDO EL AUDIO ESPERAME 😡`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytmp4':
					if (args.length < 1) return reply('Donde esta la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.only.mpv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*DESCARGA EXITOSA ✅*\n◉ *Título* : ${anu.title}\n\n*EL VIDEO SE ESTÁ ENVIANDO, NO SPAM PEDAZO DE DOWN*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
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
                                case 'listadmins':
				case 'adminlist':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista De Nefastos Del Grupo*${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
					break
			case 'todos':
			case 'tagall':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  \n╠➥Total : ${groupMembers.length}\n`
					/**teks += `  Total : ${groupMembers.length}\n`**/
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 JUTSU EDO TENSEI 😎 〙✪══\n╠➥'+teks+'╚═〘 By Lalelilolu 〙', members_id, true)
					break

            		case 'tagall2':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 Mencionar A Todos 〙✪══\n╠➥'+teks+'╚═〘 By Lalelilolu 〙', text, {quoted: mek})
			break
               		case 'tagall3':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 Mencionar A Todos 〙✪══\n╠➥'+teks+'╚═〘 By Lalelilolu 〙', text, {detectLinks: false, quoted: mek})
			break
                        case 'tagall4':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪〘 Mencionar A Todos 〙✪══\n╠➥'+teks+'╚═〘 By Lalelilolu 〙', text, {quoted: mek})
			break
                	case 'tagall5':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('╔══✪〘 Mencionando A Todos 〙✪══\n╠➥'+teks+'╚═〘 By Lalelilolu 〙')
			break
			case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
			break
			
			case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Sube fotos con subtítulos ${prefix}Ok`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil')
			break
					
				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 《Lalelilolu》\◔,◡◔,/ ت♡ 」*\n\n${body.slice(4)}`)
						}
						reply('Transmisión exitosa')
					}
				break
					
				case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 GRUPO : ${groupName} 」*\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							/**sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)**/
							
							sendMess(_.jid, `*「 GROUP : ${groupName} 」*\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmisión exitoso')
					}
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
       /*case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `El NEFASTO de este grupo es :@${from.split("-")[0]}`, 
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break*/
                                      case 'kick':
					case 'pafuera':
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
					
                 case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    client.updatePresence(from, Presence.composing) 
				    if (!isGroup) return reply(mess.only.group)
                                     if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await client.groupInviteCode (from)
					yeh = `Aqui esta el link del grupo 🤑\n\nhttps://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName}*`
					client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
		break
					
                case 'qrcode':
                	buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
		break
		          		
		case 'closegc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					/**var nomor = mek.participant**/
					/**const close = {
					text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}\nAhora *solo administradores* puede enviar mensajes`,
					contextInfo: { mentionedJid: [nomor] }
					}**/
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					/**reply(close)**/
		break
					
                case 'opengc':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					/**open = {
					text: `Grupo abierto por administrador @${sender.split("@")[0]}\nAhora *todos los participantes* pueden enviar mensajes`,
					contextInfo: { mentionedJid: [sender] }
					}**/
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					/**client.sendMessage(from, open, text, {quoted: mek})**/
		break
					
		/**case 'pesoff':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		
					client.groupSettingChange (from, GroupSettingChange.ephemeralMessage, false)
				
		break
					
                case 'peson':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					client.groupSettingChange (from, GroupSettingChange.ephemeralMessage, true)
					
		break**/
					
				case  'peson':
					  client.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
				break
				
				case 'pesoff':
					    client.toggleDisappearingMessages(from, 0)
				break
		
		case 'attp':
						if (!isUser) return reply(mess.only.daftarB)
					        if (args.length < 1) return reply(`¿Dónde está el texto?\n*Ejemplo:* ${prefix}attp Lalelilolu`)
						reply(mess.only.attp)
					        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						client.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
		break
					
		case 'emoji':
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   			})
          	 .catch((err) => {
         	   reply('Ahhh pwrdon T-T no pude'); 
          	  })
    		break
					
				case 's':
				case 'tucson':
				case 'cuties':
				case 'nefasto':
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
			        /**if (!isUser) return reply(mess.only.daftarB)**/
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
                                    if (!isUser) return reply(mess.only.daftarB)
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
					
                        case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('❌ Solo videos')
					reply(mess.only.mpcancion)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el video a mp3')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
			break
                
		case 'play':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?')
		if (!isUser) return reply(mess.only.daftarB)
                reply(mess.only.musica)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=shanduy25`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*⌈ Canción Encontrada ✅ ⌉*\n◉ *Título* : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                               
				case 'daftar':
					client.updatePresence(from, Presence.composing)
					if (isUser) return reply('Ya estas registrado 🧐')
					if (args.length < 1) return reply(`Incorrecto \nComando : ${prefix}daftar Nombre\nComando : ${prefix}daftar Lalelilolu`)
					var reg = body.slice(8)
					var nombre = reg.split("|")[0];
                                                user.push(sender)
						fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
						/**client.sendMessage(from, `\`\`\`REGISTRADO ✅\`\`\`\n\n\`\`\`Hora EC: ${time}\`\`\`\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`Para usar el bot, enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: mek})**/
						client.sendMessage(from, `\`\`\`REGISTRADO ✅\`\`\`\n\n\`\`\`Hora EC: ${time}\`\`\`\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`Para usar el bot, enviar ${prefix}help\`\`\``, text, {quoted: mek})			
				break
					
                                case 'welcome':
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
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
					
                              /** case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('❌ *NSFW NO ESTA ATIVADO* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'mesum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
				break**/

                              	case 'nsfw':
					if (!isOwner) return reply(mess.only.ownerB)
					/**if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)**/
					if (args.length < 1) return reply('Digita 1 para activar los NSFW')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Recursos Activados ✅')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta habilitado en este grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta deshabilitado en este grupo')
					} else {
						reply('Digite 1 para activarlo, 0 para desactivarlo')
					}
					break	
					
				/**case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
				break**/
					
				/**case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
				break	**/				

                        case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
		                        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
					
            case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `◪ *LEVEL*\n  ├─ ❏ *Nombre* : ${sem}\n  ├─ ❏ *XP* : ${userXp}\n  └─ ❏ *Level* : ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digita 1 para ativar el recurso')
                if (args[0] === 1) {
                    if (isLevelingOn) return reply('*La función de nivel ya estaba activa*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === 0) {
                    _leveling.splice(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(` *Digita el comando 1 para activar, 0 para desactivar *\n * Ejemplo: ${prefix}leveling 1*`)
                }
            break
					
			case 'wallpaper':
				try {
					res = await fetchJson(`https://nekos.life/api/v2/img/wallpaper`, {method: 'get'})
					buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌')
						}
			break
			
			/**case 'avatar':
				try {
					res = await fetchJson(`https://nekos.life/api/v2/img/avatar`, {method: 'get'})
					buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌')
						}
			break**/
			
			case 'avatar':
				anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				client.sendMessage(from, avatars, image, {quoted: mek})
			break
					
			/**case 'waifu':
				try {
					res = await fetchJson(`https://nekos.life/api/v2/img/waifu`, {method: 'get'})
					buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌')
						}
			break**/
					
			case 'waifu':
			waifud = await axios.get('https://nekos.life/api/v2/img/waifu')
			nyed = await getBuffer(waifud.data.url)
			client.sendMessage(from, nyed, image, { caption: 'Gatau caption nya apa', quoted: mek })
			.catch(err => {
				return('Pwrdon... T_T')
			})
			break
			
case 'image':
            if (args.length < 1) return reply('Ingrese texto!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            client.sendMessage(from,{url:images},image,{quoted:mek})
            });
break
									
 /**   case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            client.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break**/
					
			case 'loli':
				try {
					res = await fetchJson(`https://nekos.life/api/v2/img/ero`, {method: 'get'})
					buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌')
						}
			break	
					
case 'pussy':
if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				client.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
break
					
case 'boobs':
if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')				
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				client.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
break
					
case 'anal':
if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')					
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				client.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
break

case 'cumimg':
if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
			cumjpg = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
			bupjpg = await getBuffer(cumjpg.data.url)
			client.sendMessage(from, bupjpg, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
break
		
case 'oppai':
if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			client.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
break
                                /*case 'nsfwtrap':
                                        try{
                                                if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
                                                res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=APIKEYLU`, {method: 'get'})
                                                buffer = await getBuffer(res.result)
                                                client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Estas enfermo flaco NEFASTOOOOO'})
                                        } catch (e) {
                                                console.log(`*Error* :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
										break*/				
				
					case 'nsfwloli':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/lolis`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Alto pedofilo socio'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwbobs': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Quiero ver tetas'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwblowjob':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://nekos.life/api/v2/img/blowjob`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'No antojen'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwneko':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://nekos.life/api/v2/img/neko`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					/*case 'nsfwyuri':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/yuri`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'NEFASTOOOOOOO'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					break*/
					/**case 'nsfwpussy':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://nekos.life/api/v2/img/pussy`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image.gif, {quoted: mek})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwass':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://nekos.life/api/v2/img/anal`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image.gif, {quoted: mek, caption: 'Ese es el culo que querías?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break**/
					case 'nsfwsidebobs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'La vieja de gabo, tremenda puta'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					    break
					case 'nsfwahegao':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Joder, quisiera follarmela'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'hentai':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'pussyimg':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://nekos.life/api/v2/img/pussy_jpg`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					/**case 'nsfwthighs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Por que muslos?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break**/
					case 'nsfwfeets':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'MMMMM PATAS'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌') 
						}
						break
					case 'nsfwarmpits':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animearmpits`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'A?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					/**case 'nsfwtoin':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/nsfwtrap?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Bro....'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break**/
					case 'futanari':	
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://nekos.life//api/v2/img/futanari`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Bro....'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
			
					case 'femdom':	
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://nekos.life/api/v2/img/femdom`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Uff....🥵'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
	
                                case 'ping':    
			   	        if (!isUser) return reply(mess.only.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Second_*\nDevice: *Alcatel Pixi 4*\nRAM: *6Mb*\nData: *10GB*\nJaringan: *2G*\nStatus: *Bateria Baja*`, text, { quoted: mek})
                                        break
                                case 'attp':
					if (args.length < 1) return reply('Y el texto flaco?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
		
/*** Stickers***/	
                         case 'stick':
					/**if (!isGroupAdmins) return reply(mess.only.admin)**/
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Digita 1 para activar los STICK')
					if (Number(args[0]) === 1) {
						if (isStick) return reply('Activado ✅')
						stick.push(from)
						fs.writeFileSync('./database/json/stick.json', JSON.stringify(stick))
						/**reply('❬ ✅ ❭ La funcion Stick esta habilitado')**/
					} else if (Number(args[0]) === 0) {
						stick.splice(from, 1)
						fs.writeFileSync('./database/json/stick.json', JSON.stringify(stick))
						/**reply('❬ ✅ ❭ La funcion Stick esta deshabilitado')**/
					} else {
						/**reply('Digite 1 para activarlo, 0 para desactivarlo')**/
					}
			break	
					
                         case 'packsito':
					/**if (!isGroupAdmins) return reply(mess.only.admin)**/
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Digita 1 para activar los PACKSITOS')
					if (Number(args[0]) === 1) {
						if (isPacksito) return reply('Activado ✅')
						packsito.push(from)
						fs.writeFileSync('./database/json/packsito.json', JSON.stringify(packsito))
						/**reply('❬ ✅ ❭ La funcion Packsito esta habilitado')**/
					} else if (Number(args[0]) === 0) {
						packsito.splice(from, 1)
						fs.writeFileSync('./database/json/packsito.json', JSON.stringify(packsito))
						/**reply('❬ ✅ ❭ La funcion Packsito esta deshabilitado')**/
					} else {
						/**reply('Digite 1 para activarlo, 0 para desactivarlo')**/
					}
			break	
					
				
					case 'dolf':
						if (!isUser) return reply(mess.only.daftarB)
						if (!isPacksito) return reply('❌ Dolf Desactivado* ❌')
							random2 = `${Math.floor(Math.random() * 8)+1}`
							Texte = `Image${random2}`
							/**reply(Texte)**/
							const none2 = fs.readFileSync(`./src/dolf/${Texte}.jpeg`);
							client.sendMessage(from, none2, image, {quoted: mek, caption: 'UFFF ZIII!!!'})
					break	
				
				
					
/***Stickers..............***/
default:
					
if (isOwner){				
	if (isStick == 1) 
	{								
        if (budy.startsWith(`69`)) {
		if (budy.endsWith(`69`)){
        	const none = fs.readFileSync('./src/stickers/69.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Aa`)) {
		if (budy.endsWith(`Aa`)){
        	const none = fs.readFileSync('./src/stickers/A2.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Abrazo`)) {
		if (budy.endsWith(`Abrazo`)){
        	const none = fs.readFileSync('./src/stickers/Abrazo.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Ahh :'c`)) {
		if (budy.endsWith(`Ahh :'c`)){
        	const none = fs.readFileSync('./src/stickers/Ahh.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
	else if (budy.startsWith(`Ah ok`)) {
		if (budy.endsWith(`Ah ok`)){
        	const none = fs.readFileSync('./src/stickers/Ah ok.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
	else if (budy.startsWith(`Alto`)) {
		if (budy.endsWith(`Alto`)){
        	const none = fs.readFileSync('./src/stickers/Onichan.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
	else if (budy.startsWith(`A mira nomás`)) {
		if (budy.endsWith(`A mira nomás`)){
        	const none = fs.readFileSync('./src/stickers/A mira nomás.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}		
        else if (budy.startsWith(`Amistad`)) {
		if (budy.endsWith(`Amistad`)){
        	const none = fs.readFileSync('./src/stickers/Amistad.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Ann`)) {
		if (budy.endsWith(`Ann`)){
        	const none = fs.readFileSync('./src/stickers/Anna.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}	
        else if (budy.startsWith(`Anni`)) {
		if (budy.endsWith(`Anni`)){
        	const none = fs.readFileSync('./src/stickers/Anni.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Así me gusta`)) {
		if (budy.endsWith(`Así me gusta`)){
        	const none = fs.readFileSync('./src/stickers/Así me gusta.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Asustado`)) {
		if (budy.endsWith(`Asustado`)){
        	const none = fs.readFileSync('./src/stickers/Asustado.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Ay caramba`)) {
		if (budy.endsWith(`Ay caramba`)){
        	const none = fs.readFileSync('./src/stickers/Ay caramba.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Ay me asusté`)) {
		if (budy.endsWith(`Ay me asusté`)){
        	const none = fs.readFileSync('./src/stickers/Ay me asusté.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Ban`)) {
		if (budy.endsWith(`Ban`)){
        	const none = fs.readFileSync('./src/stickers/Ban.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Besos`)) {
		if (budy.endsWith(`Besos`)){
        	const none = fs.readFileSync('./src/stickers/Besito.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Bien`)) {
		if (budy.endsWith(`Bien`)){
        	const none = fs.readFileSync('./src/stickers/Bien.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Bragas`)) {
		if (budy.endsWith(`Bragas`)){
        	const none = fs.readFileSync('./src/stickers/Bragas.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Buena noche`)) {
		if (budy.endsWith(`Buena noche`)){
        	const none = fs.readFileSync('./src/stickers/Buenas noches.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Buen día`)) {
		if (budy.endsWith(`Buen día`)){
        	const none = fs.readFileSync('./src/stickers/Buen culo.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
	else if (budy.includes(`Segura?`)) {
		if (budy.endsWith(`Segura?`)){
        	const none = fs.readFileSync('./src/stickers/Byebye.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Cállate`)) {
		if (budy.endsWith(`Cállate`)){
        	const none = fs.readFileSync('./src/stickers/Calla put@.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Cc`)) {
		if (budy.endsWith(`Cc`)){
        	const none = fs.readFileSync('./src/stickers/Cc.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Chelitas`)) {
		if (budy.endsWith(`Chelitas`)){
        	const none = fs.readFileSync('./src/stickers/Chelitas.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Chongo`)) {
		if (budy.endsWith(`Chongo`)){
        	const none = fs.readFileSync('./src/stickers/Chongo.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Colita`)) {
		if (budy.endsWith(`Colita`)){
        	const none = fs.readFileSync('./src/stickers/Colita.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Contesta`)) {
		if (budy.endsWith(`Contesta`)){
        	const none = fs.readFileSync('./src/stickers/Contesta.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Contra el muro`)) {
		if (budy.endsWith(`Contra el muro`)){
        	const none = fs.readFileSync('./src/stickers/Contra el muro.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Ctm`)) {
		if (budy.endsWith(`Ctm`)){
        	const none = fs.readFileSync('./src/stickers/Ctm.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Cunni`)) {
		if (budy.endsWith(`Cunni`)){
        	const none = fs.readFileSync('./src/stickers/Cunni.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Dame`)) {
		if (budy.endsWith(`Dame`)){
        	const none = fs.readFileSync('./src/stickers/Dame.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Delito`)) {
		if (budy.endsWith(`Delito`)){
        	const none = fs.readFileSync('./src/stickers/Delito.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Doncon`)) {
		if (budy.endsWith(`Doncon`)){
        	const none = fs.readFileSync('./src/stickers/Doncon.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
	else if (budy.startsWith(`Duren`)) {
		if (budy.endsWith(`Duren`)){
        	const none = fs.readFileSync('./src/stickers/Duren.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Encuerate`)) {
		if (budy.endsWith(`Encuerate`)){
        	const none = fs.readFileSync('./src/stickers/Encuerate.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`En fin`)) {
		if (budy.endsWith(`En fin`)){
        	const none = fs.readFileSync('./src/stickers/En fin.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Eres bonita`)) {
		if (budy.endsWith(`Eres bonita`)){
        	const none = fs.readFileSync('./src/stickers/Eres bonita.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`F en el chat`)) {
		if (budy.endsWith(`F en el chat`)){
        	const none = fs.readFileSync('./src/stickers/F en el chat.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
	else if (budy.includes(`F el grupo`)) {
		if (budy.endsWith(`F el grupo`)){
        	const none = fs.readFileSync('./src/stickers/F el grupo.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Facha`)) {
		if (budy.endsWith(`Facha`)){
        	const none = fs.readFileSync('./src/stickers/Facha.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Fallesí`)) {
		if (budy.endsWith(`Fallesí`)){
        	const none = fs.readFileSync('./src/stickers/Fallesí.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}							
        else if (budy.startsWith(`FBI`)) {
		if (budy.endsWith(`FBI`)){
        	const none = fs.readFileSync('./src/stickers/FBI.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Flap`)) {
		if (budy.endsWith(`Flap`)){
        	const none = fs.readFileSync('./src/stickers/Flap.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Funao`)) {
		if (budy.endsWith(`Funao`)){
        	const none = fs.readFileSync('./src/stickers/Funao.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Gansito`)) {
		if (budy.endsWith(`Gansito`)){
        	const none = fs.readFileSync('./src/stickers/Gansito.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Gomitas`)) {
		if (budy.endsWith(`Gomitas`)){
        	const none = fs.readFileSync('./src/stickers/Gomitas.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Hahaha`)) {
		if (budy.endsWith(`Hahaha`)){
        	const none = fs.readFileSync('./src/stickers/Hahaha.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Helado?`)) {
		if (budy.endsWith(`Helado?`)){
        	const none = fs.readFileSync('./src/stickers/Helado.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
	else if (budy.includes(`Hentai`)) {
		if (budy.endsWith(`Hentai`)){
        	const none = fs.readFileSync('./src/stickers/Hentai.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Inflingir`)) {
		if (budy.endsWith(`Inflingir`)){
        	const none = fs.readFileSync('./src/stickers/Inflingir.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Jiji`)) {
		if (budy.endsWith(`Jiji`)){
        	const none = fs.readFileSync('./src/stickers/Jiji.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Kuaker`)) {
		if (budy.endsWith(`Kuaker`)){
        	const none = fs.readFileSync('./src/stickers/Kuaker.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`La ahorca`)) {
		if (budy.endsWith(`La ahorca`)){
        	const none = fs.readFileSync('./src/stickers/La ahorca.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`La ata`)) {
		if (budy.endsWith(`La ata`)){
        	const none = fs.readFileSync('./src/stickers/La ata.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Las bragitas`)) {
		if (budy.endsWith(`Las bragitas`)){
        	const none = fs.readFileSync('./src/stickers/Las bragitas.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Lit`)) {
		if (budy.endsWith(`Lit`)){
        	const none = fs.readFileSync('./src/stickers/Lit.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Love`)) {
		if (budy.endsWith(`Love`)){
        	const none = fs.readFileSync('./src/stickers/Love.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Ly`)) {
		if (budy.endsWith(`Ly`)){
        	const none = fs.readFileSync('./src/stickers/Ly.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Llegó papi`)) {
		if (budy.endsWith(`Llegó papi`)){
        	const none = fs.readFileSync('./src/stickers/Llegó papi.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Me dormí`)) {
		if (budy.endsWith(`Me dormí`)){
        	const none = fs.readFileSync('./src/stickers/Me dormí.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Me encanta`)) {
		if (budy.endsWith(`Me encanta`)){
        	const none = fs.readFileSync('./src/stickers/Me encanta.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Me morí`)) {
		if (budy.endsWith(`Me morí`)){
        	const none = fs.readFileSync('./src/stickers/Im dead.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Me prometiste`)) {
		if (budy.endsWith(`Me prometiste`)){
        	const none = fs.readFileSync('./src/stickers/Me prometiste.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Meyou`)) {
		if (budy.endsWith(`Meyou`)){
        	const none = fs.readFileSync('./src/stickers/Meyou.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Me vengo`)) {
		if (budy.endsWith(`Me vengo`)){
        	const none = fs.readFileSync('./src/stickers/Me vengo.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Me voy`)) {
		if (budy.endsWith(`Me voy`)){
        	const none = fs.readFileSync('./src/stickers/Bye.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Mimitos`)) {
		if (budy.endsWith(`Mimitos`)){
        	const none = fs.readFileSync('./src/stickers/Mimitos.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Muy bien`)) {
		if (budy.endsWith(`Muy bien`)){
        	const none = fs.readFileSync('./src/stickers/Muy bien.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Nel`)) {
		if (budy.endsWith(`Nel`)){
        	const none = fs.readFileSync('./src/stickers/Nel.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`No antojes`)) {
		if (budy.endsWith(`No antojes`)){
        	const none = fs.readFileSync('./src/stickers/No antojes.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`No me interesa`)) {
		if (budy.endsWith(`No me interesa`)){
        	const none = fs.readFileSync('./src/stickers/No me interesa.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`No puede ser`)) {
		if (budy.endsWith(`No puede ser`)){
        	const none = fs.readFileSync('./src/stickers/No puede ser.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
	else if (budy.includes(`No sé`)) {
		if (budy.endsWith(`No sé`)){
        	const none = fs.readFileSync('./src/stickers/No sé.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
	else if (budy.includes(`No te excites`)) {
		if (budy.endsWith(`No te excites`)){
        	const none = fs.readFileSync('./src/stickers/No te excites.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Ouioui`)) {
		if (budy.endsWith(`Ouioui`)){
        	const none = fs.readFileSync('./src/stickers/Ouioui.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Pack`)) {
		if (budy.endsWith(`Pack`)){
        	const none = fs.readFileSync('./src/stickers/Pack.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}							
        else if (budy.startsWith(`Packsito pls`)) {
		if (budy.endsWith(`Packsito pls`)){
        	const none = fs.readFileSync('./src/stickers/Packsito pls.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}						
        else if (budy.startsWith(`Paja`)) {
		if (budy.endsWith(`Paja`)){
        	const none = fs.readFileSync('./src/stickers/Paja.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Pansito?`)) {
		if (budy.endsWith(`Pansito?`)){
        	const none = fs.readFileSync('./src/stickers/Pansito.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Pantsu`)) {
		if (budy.endsWith(`Pantsu`)){
        	const none = fs.readFileSync('./src/stickers/Pantsu.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Pérame`)) {
		if (budy.endsWith(`Pérame`)){
        	const none = fs.readFileSync('./src/stickers/Pérame.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
	else if (budy.includes(`Pero`)) {
		if (budy.endsWith(`Pero`)){
        	const none = fs.readFileSync('./src/stickers/Pero.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Preséntate`)) {
		if (budy.endsWith(`Preséntate`)){
        	const none = fs.readFileSync('./src/stickers/Preséntate.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Procede`)) {
		if (budy.endsWith(`Procede`)){
        	const none = fs.readFileSync('./src/stickers/Procede.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}	
        else if (budy.startsWith(`Purga`)) {
		if (budy.endsWith(`Purga`)){
        	const none = fs.readFileSync('./src/stickers/Purga.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Que weba`)) {
		if (budy.endsWith(`Que weba`)){
        	const none = fs.readFileSync('./src/stickers/Que weba.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}						
        else if (budy.startsWith(`Rico`)) {
		if (budy.endsWith(`Rico`)){
        	const none = fs.readFileSync('./src/stickers/Rico.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Rip`)) {
		if (budy.endsWith(`Rip`)){
        	const none = fs.readFileSync('./src/stickers/Rip.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Sad`)) {
		if (budy.endsWith(`Sad`)){
        	const none = fs.readFileSync('./src/stickers/Sad.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Santas escrituras`)) {
		if (budy.endsWith(`Santas escrituras`)){
        	const none = fs.readFileSync('./src/stickers/Santas escrituras.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Sapee`)) {
		if (budy.endsWith(`Sapee`)){
        	const none = fs.readFileSync('./src/stickers/Sapee.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
	else if (budy.includes(`Se encuera`)) {
		if (budy.endsWith(`Se encuera`)){
        	const none = fs.readFileSync('./src/stickers/Se encuera.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Se ofendió`)) {
		if (budy.endsWith(`Se ofendió`)){
        	const none = fs.readFileSync('./src/stickers/Se ofendió.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Se va xd`)) {
		if (budy.endsWith(`Se va xd`)){
        	const none = fs.readFileSync('./src/stickers/Se va xd.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Sex`)) {
		if (budy.endsWith(`Sex`)){
        	const none = fs.readFileSync('./src/stickers/Sex.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}						
        else if (budy.startsWith(`Shh`)) {
		if (budy.endsWith(`Shh`)){
        	const none = fs.readFileSync('./src/stickers/Shh.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Si mi amor`)) {
		if (budy.endsWith(`Si mi amor`)){
        	const none = fs.readFileSync('./src/stickers/Si mi amor.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
	else if (budy.startsWith(`Sit on me pls`)) {
		if (budy.endsWith(`Sit on me pls`)){
        	const none = fs.readFileSync('./src/stickers/Sit on my face.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Slap`)) {
		if (budy.endsWith(`Slap`)){
        	const none = fs.readFileSync('./src/stickers/Slap.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Ta fuerte`)) {
		if (budy.endsWith(`Ta fuerte`)){
        	const none = fs.readFileSync('./src/stickers/Ta fuerte.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Te me calmas`)) {
		if (budy.endsWith(`Te me calmas`)){
        	const none = fs.readFileSync('./src/stickers/Te me calmas.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Toma tu galleta`)) {
		if (budy.endsWith(`Toma tu galleta`)){
        	const none = fs.readFileSync('./src/stickers/Toma tu galleta.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Triste`)) {
		if (budy.endsWith(`Triste`)){
        	const none = fs.readFileSync('./src/stickers/Triste.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}						
        else if (budy.startsWith(`Tu culito`)) {
		if (budy.endsWith(`Tu culito`)){
        	const none = fs.readFileSync('./src/stickers/Tu culito.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Turbio`)) {
		if (budy.endsWith(`Turbio`)){
        	const none = fs.readFileSync('./src/stickers/Turbio.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Tuyyo`)) {
		if (budy.endsWith(`Tuyyo`)){
        	const none = fs.readFileSync('./src/stickers/Tuyyo.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
	else if (budy.startsWith(`Ufff`)) {
		if (budy.endsWith(`Ufff`)){
        	const none = fs.readFileSync('./src/stickers/Uff.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Uhm 🥵`)) {
		if (budy.endsWith(`Uhm 🥵`)){
        	const none = fs.readFileSync('./src/stickers/Uhm.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}	
        else if (budy.startsWith(`Umm`)) {
		if (budy.endsWith(`Umm`)){
        	const none = fs.readFileSync('./src/stickers/Umm.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Uwu`)) {
		if (budy.endsWith(`Uwu`)){
        	const none = fs.readFileSync('./src/stickers/Uwu.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Vas a llorar?`)) {
		if (budy.endsWith(`Vas a llorar?`)){
        	const none = fs.readFileSync('./src/stickers/Vas a llorar.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Volví`)) {
		if (budy.endsWith(`Volví`)){
        	const none = fs.readFileSync('./src/stickers/Volví.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Wow`)) {
		if (budy.endsWith(`Wow`)){
        	const none = fs.readFileSync('./src/stickers/Wow.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Xdxd`)) {
		if (budy.endsWith(`Xdxd`)){
        	const none = fs.readFileSync('./src/stickers/Xd.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}							
        else if (budy.startsWith(`Ya es hora?`)) {
		if (budy.endsWith(`Ya es hora?`)){
        	const none = fs.readFileSync('./src/stickers/Ya es hora.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}						
	else if (budy.startsWith(`Ya se enojó`)) {
		if (budy.endsWith(`Ya se enojó`)){
        	const none = fs.readFileSync('./src/stickers/Se enojó.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}					
	else if (budy.startsWith(`Ya sabes`)) {
		if (budy.endsWith(`Ya sabes`)){
        	const none = fs.readFileSync('./src/stickers/Ya sabes.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }	
		}
        else if (budy.startsWith(`Y mis nudes`)) {
		if (budy.endsWith(`Y mis nudes`)){
        	const none = fs.readFileSync('./src/stickers/Y mis nudes.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Ya antojaron`)) {
		if (budy.endsWith(`Ya antojaron`)){
        	const none = fs.readFileSync('./src/stickers/Ya antojaron.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Ya se durmieron`)) {
		if (budy.endsWith(`Ya se durmieron`)){
        	const none = fs.readFileSync('./src/stickers/Ya se durmieron.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
        else if (budy.startsWith(`Yop`)) {
		if (budy.endsWith(`Yop`)){
        	const none = fs.readFileSync('./src/stickers/Yop.webp');
		client.sendMessage(from, none, sticker)	
		/**client.sendMessage(from, none, sticker, {quoted: mek})**/
                  }
		}
        else if (budy.startsWith(`Youme`)) {
		if (budy.endsWith(`Youme`)){
        	const none = fs.readFileSync('./src/stickers/Youme.webp');
		client.sendMessage(from, none, sticker, {quoted: mek})
                  }
		}
		
	}			
}					
/******Otak and shnatera************************************/					
				
		if (budy.includes(`Todo bien`)) {
                  reply(`Si amig@ todo bien 🙄`)
                  }

		if (budy.includes(`Buenos días`)) {
                  reply(`Buenos Dias trolos de mierda`)
                  }

		if (budy.includes(`Buenas noches`)) {
                  reply(`Te violaré mientras duermas 🥵`)
                  }
		if (budy.includes(`Bye`)) {
                  reply(`Bye bye beautiful 😉`)
                  }
		if (budy.includes(`Bot gay`)) {
                  reply(`Miren a este boludito`)
                  }

		if (budy.includes(`Gracias`)) {
                  reply(`De nada putit@ 🤭`)
                  }
		if (budy.includes(`gracias`)) {
                  reply(`De nada putit@ 🤭`)
                  }			

      		if (budy.startsWith(`Hola`)) {
			if (budy.endsWith(`Hola`)){
        		reply(`Hola putit@ 🤭`)}
		  }					
     		if (budy.startsWith(`Ola`)) {
			if (budy.endsWith(`Ola`)){
        		reply(`Hola putit@ 🤭`)}
		  }	
      		if (budy.startsWith(`Hola botsito`)) {
			if (budy.endsWith(`Hola botsito`)){
        		reply(`Hola putit@ 🤭`)}
		  }					
     		if (budy.startsWith(`Ola botsito`)) {
			if (budy.endsWith(`Ola botsito`)){
        		reply(`Hola putit@ 🤭`)}
		  }
      		if (budy.startsWith(`Hola grupo`)) {
			if (budy.endsWith(`Hola grupo`)){
        		reply(`Hola putit@ 🤭`)}
		  }					
     		if (budy.startsWith(`Ola grupo`)) {
			if (budy.endsWith(`Ola grupo`)){
        		reply(`Hola putit@ 🤭`)}
		  }	
      		if (budy.startsWith(`Holii`)) {
			if (budy.endsWith(`Holii`)){
        		reply(`Hola putit@ 🤭`)}
		  }					
     		if (budy.startsWith(`Holli`)) {
			if (budy.endsWith(`Holi`)){
        		reply(`Hola putit@ 🤭`)}
		  }	
                if (budy.includes(`Put@`)) {
                  reply(`Relaja la raja nena 😎`)
                  }
                if (budy.includes(`Puta`)) {
                  reply(`Relaja la raja nena 😎`)
                  }
                if (budy.includes(`Putit@`)) {
                  reply(`Relaja la raja nena 😎`)
                  }
                if (budy.includes(`put@`)) {
                  reply(`Relaja la raja nena 😎`)
                  }
                if (budy.includes(`putit@`)) {
                  reply(`Relaja la raja nena 😎`)
                  }
     		if (budy.startsWith(`Uff`)) {
			if (budy.endsWith(`Uff`)){
                  reply(`Uhm zi, ufff 🥵!`)
                  }
		}	
/*** Audios ****/
	
if (isPacksito == 1) {
	if (isOwner){
        	if (budy.startsWith(`Detente perro`)) {
			if (budy.endsWith(`Detente perro`)){
				const none = fs.readFileSync('./anishan/videos/Detente.mp4');
				/**client.sendMessage(from, none, video, {mimetype: 'video/mp4', filename:'', caption : 'Detente perro !!! ... FBI 😎'})
				client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})**/
		  		client.sendMessage(from, none, video, {mimetype: 'video/mp4', filename : `Detente perro !!! ... FBI 😎.mp4`, quoted: mek})
			}
		}				
	}	

	if (isOwner){
        	if (budy.startsWith(`Ultra pack`)) {
			if (budy.endsWith(`Ultra pack`)){
				const none = fs.readFileSync('./anishan/videos/Ultrapack.mp4');
				/**client.sendMessage(from, none, video, {mimetype: 'video/mp4', filename:'', caption : 'Megapack 🥵'})**/
				client.sendMessage(from, none, video, {mimetype: 'video/mp4', filename : `Ultrapack.mp4`, quoted: mek})
			}
		}				
	}
}
	
        if (budy.startsWith(`A`)) {
		if (budy.endsWith(`A`)){
        	const none = fs.readFileSync('./anishan/A.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		}
        if (budy.startsWith(`a`)) {
		if (budy.endsWith(`a`)){
        	const none = fs.readFileSync('./anishan/A.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }	
		}
	if (budy.includes(`Admin`)) {
        	const none = fs.readFileSync('./anishan/Admin.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }	
 	if (budy.includes(`A mimir`)) {
		if (budy.endsWith(`A mimir`)){
        	const none = fs.readFileSync('./anishan/A mimir.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		}
 	if (budy.includes(`Banx`)) {
		if (budy.endsWith(`Banx`)){
        	const none = fs.readFileSync('./anishan/Banx.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		}
	if (budy.startsWith(`Dime onichan`)) {
		if(budy.endsWith(`Dime onichan`)){
        	const none = fs.readFileSync('./anishan/anime1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		}
        if (budy.startsWith(`Feliz jueves`)) {
        	const none = fs.readFileSync('./anishan/Feliz jueves.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Gambare`)) {
        	const none = fs.readFileSync('./anishan/Gambare.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
        if (budy.startsWith(`Help`)) {
        	const none = fs.readFileSync('./anishan/Help.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
        if (budy.startsWith(`Hentai`)) {
		if (budy.endsWith(`Hentai`)){
        	const none = fs.readFileSync('./anishan/Hentai.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }	
		}			
        if (budy.startsWith(`Iluminati`)) {
        	const none = fs.readFileSync('./anishan/Iluminati.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }						
        if (budy.startsWith(`La toca :3`)) {
        	const none = fs.readFileSync('./anishan/anime5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me gimes?`)) {
        	const none = fs.readFileSync('./anishan/anime3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
	if (budy.includes(`Me vengo`)) {
        	const none = fs.readFileSync('./anishan/Me vengo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
        if (budy.startsWith(`Mi reina`)) {
        	const none = fs.readFileSync('./anishan/Mi reina.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
	if (budy.includes(`Mujer`)) {
        	const none = fs.readFileSync('./anishan/Mujer.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }				
        if (budy.startsWith(`Nya`)) {
        	const none = fs.readFileSync('./anishan/Nya.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }	
        if (budy.startsWith(`Onichan`)) {
		if (budy.endsWith(`Onichan`)){
        	const none = fs.readFileSync('./anishan/Onichan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
		}
        if (budy.startsWith(`Pasa pack`)) {
        	const none = fs.readFileSync('./anishan/Pasa pack.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }	
	if (budy.startsWith(`Pack`)) {
		if (budy.endsWith(`Pack`)){
        	const none = fs.readFileSync('./anishan/Pack.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }	
		}									
	if (budy.startsWith(`Quien es tu sempai`)) {
        	const none = fs.readFileSync('./anishan/anime4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
	if (budy.includes(`Setso`)) {
        	const none = fs.readFileSync('./anishan/Setso.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Sexual`)) {
		if (budy.endsWith(`Sexual`)){
        	const none = fs.readFileSync('./anishan/Sexual.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
		}
 	if (budy.includes(`Sparta`)) {
        	const none = fs.readFileSync('./anishan/Sparta.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }		
	if (budy.startsWith(`Te amo botsito`)) {
        	const none = fs.readFileSync('./anishan/anime2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
        if (budy.startsWith(`Yamete`)) {
		if (budy.endsWith(`Yamete`)){
        	const none = fs.readFileSync('./anishan/Yamete.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }	
		}					
        if (budy.startsWith(`Yamete kudasai`)) {
		if (budy.endsWith(`Yamete kudasai`)){
        	const none = fs.readFileSync('./anishan/Yamete kudasai.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
		}	
			
/***Bananeraudios***/					
				
        if (budy.startsWith(`Acm1pt`)) {
        	const none = fs.readFileSync('./anishan/Acm1pt.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }						
        if (budy.startsWith(`Ahhh`)) {
        	const none = fs.readFileSync('./anishan/Ahhh.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }						
        if (budy.startsWith(`Arrecha`)) {
        	const none = fs.readFileSync('./anishan/Arrecha.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }						
	if (budy.startsWith(`Ayy`)) {
		if(budy.endsWith(`Ayy`)){
        	const none = fs.readFileSync('./anishan/Ayy.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		}
        if (budy.startsWith(`Bésame`)) {
        	const none = fs.readFileSync('./anishan/Bésame.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }						
        if (budy.startsWith(`Besito`)) {
        	const none = fs.readFileSync('./anishan/Besito.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }								
        if (budy.startsWith(`Brr`)) {
		if (budy.endsWith(`Brr`)){
        	const none = fs.readFileSync('./anishan/Brr.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }										
		}					
        if (budy.startsWith(`Brr2`)) {
        	const none = fs.readFileSync('./anishan/Brr2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }	
        if (budy.startsWith(`Concha`)) {
        	const none = fs.readFileSync('./anishan/Concha.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Ctm`)) {
		if (budy.endsWith(`Ctm`)){
        	const none = fs.readFileSync('./anishan/Ctm.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }										
		}	
        if (budy.startsWith(`Japi`)) {
        	const none = fs.readFileSync('./anishan/Japi.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Las pelotas`)) {
        	const none = fs.readFileSync('./anishan/Las pelotas.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }					
	if (budy.includes(`Lokita`)) {
        	const none = fs.readFileSync('./anishan/Lokita.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }		
	if (budy.includes(`Orto`)) {
        	const none = fs.readFileSync('./anishan/Orto.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }	
        if (budy.startsWith(`Pero en fin`)) {
		if (budy.endsWith(`Pero en fin`)){
        	const none = fs.readFileSync('./anishan/Pero en fin.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }										
		}					
        if (budy.startsWith(`Petardo`)) {
        	const none = fs.readFileSync('./anishan/Petardo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Pete`)) {
        	const none = fs.readFileSync('./anishan/Pete.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }

        if (budy.startsWith(`Profe`)) {
        	const none = fs.readFileSync('./anishan/Profe.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Sapee`)) {
        	const none = fs.readFileSync('./anishan/Sapee.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
/******/				

	if (budy.startsWith(`Pasen sexo`)) {
        	const none = fs.readFileSync('./mp3/fernan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Paraguayo`)) {
        	const none = fs.readFileSync('./mp3/gaspi11.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Venezolano`)) {
       		const none = fs.readFileSync('./mp3/gaspi10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi corte`)) {
        	const none = fs.readFileSync('./mp3/gaspi12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi buenos días`)) {
        	const none = fs.readFileSync('./mp3/gaspi13.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Ya me voy a dormir`)) {
        	const none = fs.readFileSync('./mp3/sombare12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Calefon`)) {
        	const none = fs.readFileSync('./mp3/sombare11.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Bot de mierda`)) {
        	const none = fs.readFileSync('./mp3/sombare10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Apurate bot`)) {
        	const none = fs.readFileSync('./mp3/sombare9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Un chino`)) {
        	const none = fs.readFileSync('./mp3/sombare7.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }				
        if (budy.startsWith(`No funciona`)) {
        	const none = fs.readFileSync('./mp3/sombare8.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Boliviano`)) {
        	const none = fs.readFileSync('./mp3/gaspi3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Corte`)) {
        	const none = fs.readFileSync('./mp3/gaspi2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi me saludas`)) {
        	const none = fs.readFileSync('./mp3/gaspi4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi y las minitas`)) {
        	const none = fs.readFileSync('./mp3/gaspi6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi todo bien`)) {
        	const none = fs.readFileSync('./mp3/gaspi7.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me quiero suicidar`)) {
        	const none = fs.readFileSync('./mp3/gaspi81.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi ya no aguanto`)) {
        	const none = fs.readFileSync('./mp3/gaspi9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Contate algo bot`)) {
        	const none = fs.readFileSync('./mp3/gaspi5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Sexo`)) { 
		if (budy.endsWith(`Sexo`)){
        	const none = fs.readFileSync('./mp3/sexo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	}
        if (budy.startsWith(`Momento epico`)) {
        	const none = fs.readFileSync('./mp3/sombare1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`El bot del orto no funciona`)) {
        	const none = fs.readFileSync('./mp3/sombare2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Epicardo`)) {
        	const none = fs.readFileSync('./mp3/sombare3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Insta de la minita`)) {
        	const none = fs.readFileSync('./mp3/sombare4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Una mierda de bot`)) {
        	const none = fs.readFileSync('./mp3/sombare5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Ultimo momento`)) {
        	const none = fs.readFileSync('./mp3/sombare6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }			
	if (budy.startsWith(`Nefasto`)) {
        	const none = fs.readFileSync('./mp3/gaspi1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
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
