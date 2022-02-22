let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.isGroup) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(`https://apikey-bear3.herokuapp.com/api/maker/skatch?apikey=APIKEY&url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmrYfgiRt1lLwNgRMgMbID62qH3EQ2T1c6RUJEQMcoCWKqVVxAg7R_LfM&s=10`)
        if (!res.ok) return m.reply(eror)
        let json = await res.json()
        if (json.result == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('siminya blom diajarin, ajarin di https://simsimi.com/teach')
        else await m.reply(`*Simi:* ${json.result}`)
        return !0
    }
    return true
}
module.exports = handler
