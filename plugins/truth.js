let handler  = async (m, { conn }) => {
m.reply('APIKEY SALAH, pastikan anda pernah berlangganan di https://apikey-bear3.herokuapp.com/docs')
}
handler.help = ['truth', 'dare']
handler.tags = ['fun']
handler.command = /^(truth)$/i

module.exports = handler
