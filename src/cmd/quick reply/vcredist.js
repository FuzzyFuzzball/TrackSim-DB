const { ApplicationCommandOptionType, EmbedBuilder, CommandInteractionOptionResolver } = require('discord.js');
const { CommandType } = require('wokcommands')
const { color } = require('../../cfg/embed/embed.json')

module.exports = {
    description: 'Tutorial on how to get vcredist.',
    type: CommandType.SLASH,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "The user who needs help.",
            type: ApplicationCommandOptionType.User,
            required: true,
        }
    ],

    callback: ({ interaction }) => {
        const userOption = interaction.options.getUser('user');
        
        const embedmsg = new EmbedBuilder()
        .setTitle('Q: How to get vcredist?')
        .setColor(color)
        .setDescription(`A: Head over to the microsoft link down below. On there are the download links for vcredist.\n\n[Link](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)`)

        interaction.reply({
            content: `${userOption}`,
            embeds: [embedmsg]
        })
    }
}