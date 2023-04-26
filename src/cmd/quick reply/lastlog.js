const { ApplicationCommandOptionType, EmbedBuilder } = require('disord.js');

module.exports = {
    description: 'Tutorial on how to get last.log file.',
    type: SLASH,
    testOnly: true,
    options: [
        {
            name: "user",
            description: "The user who needs help.",
            type: ApplicationCommandOptionType.user,
            required: true,
        }
    ],

    callback: () => {
        const user = interaction.options.get('user');

        const embed = new EmbedBuilder()
        .setTitle('How to get last.log file?')
        .setColor("4c56c4")
        .setDescription(`To get your "last.log" file, go to %programdata%, this can be done via run (Windows key + R), then select TrackSim.\n\nThe file that you are looking for should be sitting right there.`)

        return {
            content: `${user}`, embed,
        }
    }
}