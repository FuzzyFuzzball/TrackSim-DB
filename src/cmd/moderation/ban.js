const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js')
const { CommandType } = require('wokcommands')
const { color, errcolor, footerlogo, footertext } = require('../../cfg/embed/embed.json')
const { logchannel,  } = require('../../cfg/channels/channels.json')

module.exports = {
    description: `Bans member of choice for a specific reason`,
    testOnly: true,
    guildOnly: true,
    type: CommandType.SLASH,
    permissions: ['BAN_MEMBERS'],
    options: [
        {
            name: 'user',
            description: 'User to be banned',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
        {
            name: 'reason',
            description: 'Reason for the ban',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
    ],

    callback: async ({ interaction }) => {
        const userOption = interaction.options.getUser('user')
        const member = await interaction.guild.members.fetch(userOption.id)
        const reasonOption = interaction.options.getString('reason')

        if (!reasonOption) {
            const reasonOption = 'No reason provided'
        }

        if (!member) {
            const errormsg = new EmbedBuilder()
            .setColor(errcolor)
            .setTitle('Error')
            .setDescription(`User "${member}", doesn't exist therefore unable to ban them for reason "${reasonOption}"`)
            .setFooter({ text: footertext, iconURL: footerlogo })
            
            interaction.reply({
                embeds: [errormsg],
                ephemeral: true,
            })
        }
    }
}