const { EmbedBuilder } = require('discord.js')
const { footerlogo, footertext, color } = require('../../cfg/embed/embed.json')
const { welcomechannel } = require('../../cfg/channels/channels.json')

module.exports = (member, message) => {
    const { user, guild } = member
    const welcomeChannel = member.guild.channels.cache.get(welcomechannel)

    const msg = new EmbedBuilder()
    .setColor(color)
    .setFooter({ text: footertext, iconURL: footerlogo })
    .setTitle(`Member Left`)
    .setDescription(`It's sad to see you leave <@${member.id}>! We hope to see you again. `)

    welcomeChannel.send({ embeds: [msg] })
}