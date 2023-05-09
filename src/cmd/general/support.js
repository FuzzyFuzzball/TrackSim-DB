const { EmbedBuilder } = require('discord.js')
const { CommandType } = require('wokcommands')
const { footertext, footerlogo, color } = require('../../cfg/embed/embed.json')
const { supportemail } = require('../../cfg/general/text.json')

module.exports = {

    testOnly: true,
    type: CommandType.SLASH,
    guildOnly: true,
    description: `Gives the support options for TrackSim`,

    callback: ({ interaction }) => {

        const reply = new EmbedBuilder()
        .setColor(color)
        .setTitle(`Need support for your TrackSim?`)
        .setDescription(`We have 2 options for support.\n\nOur first option is to open a ticket within the Discord server in the #support channel.\nYou can also email us at ${supportemail} and you can get support through that.`)
        .setFooter({ text: footertext, iconURL: footerlogo })

        interaction.reply({
            embeds: [reply],
            ephemeral: true
        })
    }
}