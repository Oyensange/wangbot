let handler = m => m

let linkRegex = /(a(su|nj(([ie])ng|([ie])r)?)|me?me?k|anj(k|g)|ajn?(g|k)|a?njin(g|k)|ko?nto?l|ba?bi|fu?ck|ta(e|i)k|bangsat|bgst|bngsat|bgsat|pantek|pntk|pntek|ptk|g([iueo])bl([iueo])(k|g)|g ([iueo]) b l ([iueo]) (k|g)|a (n j (i n g|i r)?)s u|col(i|ay)|an?jg|b([ia])ngs([ia])?t|t([iuo])l([iuo])l)/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  if (/masuk|lanjutkan|banjir|(per)?panjang/g.exec(m.text)) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupToxic = linkRegex.exec(m.text)

  if (chat.antiToxic && isGroupToxic) {
    m.reply('Jangan Toxic ya!!\n' + readMore + '\nMau Matikan? ketik *.off antitoxic*\nketik *#astagfirullah* atau *#maaf* untuk mengurangi warning\n\n“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim)')
    if (global.opts['restrict']) {
      // if (!user.isAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
