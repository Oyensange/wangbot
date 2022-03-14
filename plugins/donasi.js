let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Beli Bot')).buffer(), `╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _Seikhlasnya_  Permanen                                                         
╰═ ┅ ═══════
╭═══ *〘 PAYMENT 〙*
║ ┅ ๑————————————๑
║┊ ⌲ _Gopay (089638074455)_
║┊ ⌲ _Dana (089636249477)_
║┊ ⌲  _Pulsa Tree (0896380744555/089636249477)_
╰═ ┅ ═══════

༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*[❗] Jika Group Sepi 2 minggu, bot akan leave*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/Fh0eaf7IuuG3i67wXRC1O8_

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `Kocheng`, 'Donasi', '#donasi', 'Owner', '#owner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler
