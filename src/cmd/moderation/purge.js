const { CommandType } = require('wokcommands');
const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const { color, errcolor } = require('../../cfg/embed/embed.json')

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

    callback: async ({ interaction, args, channel }) => {
        const amount = args.length ? parseInt(args.shift()) : 10

        if (amount > 100) {
            const errorembed = new EmbedBuilder()
            .setColor(errcolor)
            .setTitle(`You can't delete more than 100 messages at a time.`)

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

        interaction.reply({
            embeds: [embedmsg],
            ephemeral: true
        })
    }
}