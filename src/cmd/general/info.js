const { EmbedBuilder } = require('discord.js')
const { CommandType } = require('wokcommands')
const { footertext, footerlogo, color } = require('../../cfg/embed/embed.json')

module.exports = {
    description: `Gives information about TrackSim.`,
    type: CommandType.SLASH,
    testOnly: true,
    guildOnly: true,

    callback: ({ interaction }) => {
        const reply = new EmbedBuilder()
        .setColor(color)
        .setTitle(`TrackSim Information`)
        .setDescription(`TrackSim was founded in 2023, owned by Omnibyte Technologies. It was built because of the close down of Navio.\n\nTrackSim is being built by developers, for developers of all different types.`)
        .setFooter({ text: footertext, iconURL: footerlogo })

        interaction.reply({
            embeds: [reply],
            ephemeral: true,
        })
    }
}