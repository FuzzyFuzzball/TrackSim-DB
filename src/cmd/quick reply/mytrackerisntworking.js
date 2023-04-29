const {
    ApplicationCommandOptionType,
    EmbedBuilder
} = require('discord.js');
const {
    CommandType
} = require('wokcommands')
const {
    color,
    footertext,
    footerlogo
} = require('../../cfg/embed/embed.json')

module.exports = {
    description: 'FAQ: "My TrackSim is not working."',
    type: CommandType.SLASH,
    testOnly: true,
    guildOnly: true,
    options: [{
        name: "user",
        description: "The user who needs help.",
        type: ApplicationCommandOptionType.User,
        required: true,
    }],

    callback: ({
        interaction
    }) => {
        const userOption = interaction.options.getUser('user');

        const embedmsg = new EmbedBuilder()
            .setTitle(`Q: My tracker isn't working!`)
            .setColor(color)
            .setDescription(`A: If your tracker isn't working, please make sure that you have followed the correct installation guide.\nIf you have followed the guide correctly then feel free to open a support ticket to get one of the support team members to help you.\n\n [Installation Guide](https://docs.tracksim.app/docs/getting-started/installation)`)
            .setFooter({
                text: footertext,
                iconURL: footerlogo
            });
        interaction.reply({
            content: `${userOption}`,
            embeds: [embedmsg]
        })
    }
}