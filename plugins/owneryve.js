let handler = function (m) {
	this.sendContact(m.chat, '6288279268363', 'Owner YukiBot :)', m)
}

handler.customPrefix = ['🍭Owner YukiBot'] 
handler.command = new RegExp

module.exports = handler
