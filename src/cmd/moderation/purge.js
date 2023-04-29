const { CommandType } = require('wokcommands');
const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const { color, footertext, footerlogo, errcolor } = require('../../cfg/embed/embed.json')
const { logchannel } = require('../../cfg/channels/channels.json')

module.exports = {
    description: 'Delete a certain amount of messages.',
    permissions: ['MANAGE_MESSAGES'],
    type: CommandType.SLASH,
    guildOnly: true,
    testOnly: true,
    options: [
        {
            name: "amount",
            description: "The amount of messages to delete.",
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
    ],

    callback: async ({ interaction, args, channel, member, guild }) => {
        const amount = args.length ? parseInt(args.shift()) : 10
        const logchan = interaction.member.guild.channels.cache.get(logchannel)

        if (amount > 100) {
            const errorembed = new EmbedBuilder()
            .setColor(errcolor)
            .setTitle(`You can't delete more than 100 messages at a time.`)
            .setFooter({ text: footertext, iconURL: footerlogo });

            interaction.reply({
                embeds: [errorembed],
                ephemeral: true,
            })

            return
        }

        if (amount < 2) {
            const errorembed = new EmbedBuilder()
            .setColor(errcolor)
            .setTitle(`You can't delete less than 2 messages at a time.`)
            .setFooter({ text: footertext, iconURL: footerlogo });

            interaction.reply({
                embeds: [errorembed],
                ephemeral: true,
            })

            return
        }

        const { size } = await channel.bulkDelete(amount, true)

        const embedmsg = new EmbedBuilder()
        .setColor(color)
        .setTitle(`Deleted ${size} messages.`)
        .setFooter({ text: footertext, iconURL: footerlogo });

        interaction.reply({
            embeds: [embedmsg],
            ephemeral: true
        })

        const log = new EmbedBuilder()
        .setColor(color)
        .setTitle(`Message Bulk Delete`)
        .addFields(
            { name: 'Moderator', value: `<@${interaction.user.id}>`, inline: true },
            { name: 'Amount', value: `${size}`, inline: true, },
            { name: 'Channel', value: `${interaction.channel}`, inline: true }
        )
        .setFooter({ text: footertext, iconURL: footerlogo })
        


        logchan.send({
            embeds: [log]
        })
    }
}