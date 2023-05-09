const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js')
const { color, errcolor, footerlogo, footertext } = require('../../cfg/embed/embed.json')
const { logchannel } = require('../../cfg/channels/channels.json')
const { CommandType } = require('wokcommands')
const {  } = require('../../cfg/general/text.json')

module.exports = {
    description: 'Kicks member of choice for a specific reason',
    permissions: ['KICK_MEMBERS'],
    testOnly: true,
    guildOnly: true,
    type: CommandType.SLASH,
    options: [
        {
            name: 'user',
            description: 'User to be kicked',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
        {
            name: 'reason',
            description: 'Reason for the kick',
            type: ApplicationCommandOptionType.String,
            required: false
        },
    ],

    callback: async ({ interaction }) => {
        const userOption = interaction.options.getUser('user');
        const member = await interaction.guild.members.fetch(userOption.id);
        const reasonOption = interaction.options.getString('reason')

        if (!member.kickable) {
            const errormsg = new EmbedBuilder()
            .setColor(errcolor)
            .setTitle(`Error`)
            .setDescription(`User "${member}", is not able to be kicked, therefore the command hasn't kicked the member for reason "${reasonOption}"`)
            .setFooter({ text: footertext, iconURL: footerlogo })

            interaction.reply({
                embeds: [errormsg],
                ephemeral: true,
            })

            return
        }

        if (!reasonOption) {
            const reasonOption = 'No reason provided.'
        }

        if (!member) {
            const errormsg = new EmbedBuilder()
            .setColor(errcolor)
            .setTitle(`Error`)
            .setDescription(`User "${member}", doesn't exist, therefore unable to kick the member for reason "${reasonOption}"`)
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
        .setDescription(`You have been kicked from the TrackSim official Discord server. This isn't the end of the world however! You are able to join back the server but please make sure that you are following our rules set out within the server.\n\nReason: ${reason}\n\nIf you know who kicked you please don't direct message and complain about it, instead open a ticket if you think this is false and one of the higher staff members will take a look at the situation.`)
        .setFooter({ text: footertext, iconURL: footerlogo })

        member.send(usermsg)

        member.kick({ reason: reasonOption })

    }
}