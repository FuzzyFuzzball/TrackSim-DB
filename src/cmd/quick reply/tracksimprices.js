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
    description: 'Sends FAQ of what are the prices of TrackSim.',
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
            .setTitle('Q: What are the prices of TrackSim?')
            .setColor(color)
            .setDescription(`A: To see the prices of the TrackSim service, visit the link below to be able to see what the prices are for TrackSim.`)
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