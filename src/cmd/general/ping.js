const { EmbedBuilder } = require('discord.js');
const { CommandType } = require('wokcommands');
const { color, footertext, footerlogo } = require('../../cfg/embed/embed.json')

module.exports = {
description: 'Pings the bots latancy.',
    type: CommandType.SLASH,
    testOnly: true,
    deferReply: "ephemeral",

    callback: async ({ interaction, client }) => {

        const embedmsg = new EmbedBuilder()
        .setTitle(`Pong!`)
        .setDescription(`The bot ping is ${client.ws.ping}ms.`)
        .setColor(color)
        .setFooter({ text: footertext, iconURL: footerlogo });
        
        setTimeout(async () => {
            await interaction.editReply({
              embeds: [embedmsg],
              ephemeral: true,
            });
          }, 4000);
    }
}