const { CommandType } = require('wokcommands');
const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const { color } = require('../../cfg/embed/embed.json')

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

    callback: async ({ message, interaction, args, channel }) => {
        const amount = args.length ? parseInt(args.shift()) : 10

        const { size } = await channel.bulkDelete(amount, true)

        const embedmsg = new EmbedBuilder()
        .setColor(color)

        interaction.reply({
            content: `Deleted ${size} messages.`,
            ephemeral: true
        })
    }
}