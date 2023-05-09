const { EmbedBuilder } = require('discord.js')
const { CommandType } = require('wokcommands')
const { footerlogo, footerlogo, color } = require('../../cfg/embed/embed.json')

module.exports = {

    testOnly: true,
    type: CommandType.SLASH,
    guildOnly: true,
    description: `Gives the support options for TrackSim`,

    callback: ({ interaction }) => {

    }
}