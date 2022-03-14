let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa Tree:* 0896380744555/089636249477
│┝‷✧ *Dana:* 089636249477
│┝‷✧ *Gopay:* 089638074455
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6281230926688?text=kak+mau+donasi+ni:)
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `Kocheng`, 'Owner', '.owner')

handler.help = ['donasi', 'donor']
handler.tags = ['info']
handler.command = /^donasi(donate)?$/i

module.exports = handler
