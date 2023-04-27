const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { CommandType } = require('wokcommands')
const { color, footertext, footerlogo } = require('../../cfg/embed/embed.json')

module.exports = {
    description: 'Tell user to give context on their support requests.',
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
        .setTitle('Q: Hi, I need help.')
        .setColor(color)
        .setDescription(`A: Thank you so much for contacting TrackSim support. We really appreciate you coming to us for support. Unfortunately, our support staff can't help people that give absolutely no context for what they need help with. Please provide what you need help with below this message and we would be happy to help!\n\n[NoHello](https://nohello.net/en/)`)
        .setFooter({ text: footertext, iconURL: footerlogo });

        interaction.reply({
            content: `${userOption}`,
            embeds: [embedmsg]
        })
    }
}