const { EmbedBuilder } = require('discord.js')
const { CommandType, Command } = require('wokcommands')
const { footerlogo, footertext, color } = require('../../cfg/embed/embed.json')

module.exports = {
    description: `Gives the list of our partners.`,
    type: CommandType.SLASH,
    testOnly: true,
    guildOnly: true,

    callback: ({ interaction }) => {
        
        const reply = new EmbedBuilder()
        .setColor(color)
        .setTitle(`TrackSim Partners`)
        .setDescription(`The only partner that TrackSim has currently is CHub.\n\nWe aren't looking for partners currently.`)
        .setFooter({ text: footertext, iconURL: footerlogo })

        interaction.reply({
            embeds: [reply],
            ephemeral: true
        })

    }
}