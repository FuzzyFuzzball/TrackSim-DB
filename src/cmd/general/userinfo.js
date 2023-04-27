const { ApplicationCommandOptionType, EmbedBuilder, CommandInteractionOptionResolver } = require('discord.js');
const { CommandType } = require('wokcommands')
const { color } = require('../../cfg/embed/embed.json')

module.exports = {
    description: 'Gets a users information.',
    type: CommandType.SLASH,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "The user for the command.",
            type: ApplicationCommandOptionType.User,
            required: true,
        }
    ],

    callback: ({ interaction }) => {
        const userOption = interaction.options.getUser('user');
        

       
    }
}