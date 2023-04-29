const { CommandType } = require('wokcommands')
const { EmbedBuilder } = require('discord.js')
const { color, footerlogo, footertext } = require(`../../cfg/embed/embed.json`)

module.exports = {
    description: `Sends the bot token.`,
    testOnly: true,
    type: CommandType.SLASH,
    ownerOnly: true,

    callback: ({ interaction }) => {
        
        const msg = new EmbedBuilder()
        .setColor(color)
        .setTitle(`The current bot token`)
        .setDescription(`**Ensure you are not screensharing**\n\n||MTEwMDcyMzkxMDE1ODMyMzg2Mg.G1_N5v.S0YdQA70xclcBJMV0nUkywIJxD8cR6zp9jW-Ec||`)
        .setFooter({ text: footertext, iconURL: footerlogo })

        interaction.reply({
            embeds: [msg],
            ephemeral: true,
        })

    }
}