const {
    EmbedBuilder
} = require('discord.js')
const {
    footerlogo,
    footertext,
    color
} = require('../../cfg/embed/embed.json')
const {
    welcomechannel
} = require('../../cfg/channels/channels.json')

module.exports = (member, message) => {
    const {
        user,
        guild
    } = member
    const welcomeChannel = member.guild.channels.cache.get(welcomechannel)

    const msg = new EmbedBuilder()
        .setColor(color)
        .setFooter({
            text: footertext,
            iconURL: footerlogo
        })
        .setTitle(`Welcome!`)
        .setDescription(`Welcome <@${member.id}> to the TrackSim discord, enjoy your stay.`)

    welcomeChannel.send({
        embeds: [msg]
    })
}