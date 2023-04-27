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

    callback: async ({ interaction }) => {
        const userOption = interaction.options.getUser('user');
        const member = await interaction.guild.members.fetch(userOption.id);
        

        const reply = new EmbedBuilder()
        .setColor(color)
        .setTitle(`User ${userOption.username}'s info.`)
        .addFields(
            { name: 'Username', value: `${userOption.username}`, inline: true },
            { name: 'Discriminator', value: `${userOption.discriminator}`, inline: true },
            { name: 'User ID', value: `\`${userOption.id}\``, inline: true },
            { name: 'Is Bot?', value: `${member.user.bot}`, inline: true},
            { name: 'Joined Server', value: `<t:${parseInt(member.joinedAt / 1000)}:R>`, inline: true },
            { name: 'Joined Discord', value: `<t:${parseInt(userOption.createdAt / 1000)}:R>`, inline: true },
            { name: 'Role List', value: `${member.roles.cache.map(r => r).join(' ')}`, inline: false }
        )

        interaction.reply({
            embeds: [reply],
            ephemeral: true,
        })
    }
}