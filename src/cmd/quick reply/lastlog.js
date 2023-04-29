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
    description: 'Tutorial on how to get last.log file.',
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
            .setTitle('Q: How to get last.log file?')
            .setColor(color)
            .setDescription(`A: To get your "last.log" file, go to %programdata%, this can be done via run (Windows key + R), then select TrackSim.\n\nThe file that you are looking for should be sitting right there.`)
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