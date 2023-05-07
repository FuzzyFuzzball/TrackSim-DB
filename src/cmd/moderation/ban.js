const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js')
const { CommandType } = require('wokcommands')

module.exports = {
    description: `Bans member of choice for a specific reason`,
    testOnly: true,
    guildOnly: true,
    permissions: ['BAN_MEMBERS'],
    options: [
        {
            name: 'user',
            description: 'User to be banned',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
        {

        },
    ],

    callback: ({  }) => {
        
    }
}