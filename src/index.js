const { Client, IntentsBitField} = require('discord.js')
const client = new Client({ 
    intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMembers,
    ]  
})
const wokcommands = require('wokcommands')
const path = require('path')
const { token } = require('./cfg/token/token.json')

client.on('ready', () => {
    console.log(`${client.user.tag} is online.`)

    new wokcommands({
        client,
        commandsDir: path.join(__dirname, 'cmd'),
        events: {
            dir: path.join(__dirname, 'events')
        },
        testGuilds: ['1084994979316908032'],
        disabledDefaultCommands: [
            DefaultCommands.ChannelCommand,
            DefaultCommands.CustomCommand,
            DefaultCommands.Prefix,
            DefaultCommands.RequiredPermissions,
            DefaultCommands.RequiredRoles,
            DefaultCommands.ToggleCommand
          ],
    })
})

client.login(token)