const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js')
const { CommandType } = require('wokcommands')
const { color, errcolor, footerlogo, footertext } = require('../../cfg/embed/embed.json')
const { logchannel } = require('../../cfg/channels/channels.json')
const { supportemail } = require('../../cfg/general/text.json')

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

        if (!member.bannable) {
            const errormsg = new EmbedBuilder()
            .setColor(errcolor)
            .setTitle(`Error`)
            .setDescription(`User "${member}", is not able to be banned from the guild, therefore the command hasn't banned the user for "${reasonOption}"`)
            .setFooter({ text: footertext, iconURL: footerlogo })
            
            interaction.reply({
                embeds: [errormsg],
                ephemeral: true,
            })
        }

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
            
            return
        }

        const usermsg = new EmbedBuilder()
        .setColor(color)
        .setTitle(`Dear ${member.user.username}`)
        .setDescription(`You have been banned from the TrackSim official Discord server for "${reason}"\n\nIf you feel that this ban was false, please go ahead and email ${supportemail} and one of the higher staff with take a look at the situation for you.`)
        .setFooter({ text: footertext, iconURL: footerlogo })

        member.send(usermsg)

        member.ban({ reason: reasonOption })

        const reply = new EmbedBuilder()
        .setColor(color)
        .setTitle(`Success`)
        .setDescription(`Banned member ${member}, for reason ${reasonOption}`)
        .setFooter({ text: footertext, iconURL: footerlogo })

        interaction.reply({ embeds: [reply], ephemeral: true })
        
    }
}