const { EmbedBuilder } = require('discord.js');
const { CommandType, CooldownTypes } = require('wokcommands');
const { color } = require('../../cfg/embed/embed.json')

module.exports = {
    description: 'Pings the bots latancy.',
    type: CommandType.SLASH,
    testOnly: true,
    cooldowns: {
        type: CooldownTypes.perUser,
        duration: "30 s",
    },
    deferReply: "ephemeral",

    callback: async ({ interaction, client }) => {

        const embedmsg = new EmbedBuilder()
        .setTitle(`Pong!`)
        .setDescription(`The bot ping is ${client.ws.ping}ms.`)
        .setColor(color)
        
        setTimeout(async () => {
            await interaction.editReply({
              embeds: [embedmsg],
              ephemeral: true,
            });
          }, 4000);
    }
}