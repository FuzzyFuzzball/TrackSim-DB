const {
    Client,
    IntentsBitField,
    ActivityType
} = require('discord.js')
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildPresences
    ],
    ws: {
        properties: {
            browser: 'Discord iOS'
        }
    },
})
const wokcommands = require('wokcommands')
const {
    DefaultCommands
} = require('wokcommands')
const path = require('path')
const {
    token
} = require('./cfg/token/token.json')

client.on('ready', () => {
    console.log(`${client.user.tag} is online.`)
    client.user.setActivity({
        name: "tracksim.app",
        type: ActivityType.Watching
    })

    new wokcommands({
        client,
        commandsDir: path.join(__dirname, 'cmd'),
        events: {
            dir: path.join(__dirname, 'events')
        },
        testServers: ['1084994979316908032'],
        disabledDefaultCommands: [
            DefaultCommands.ChannelCommand,
            DefaultCommands.CustomCommand,
            DefaultCommands.Prefix,
            DefaultCommands.RequiredPermissions,
            DefaultCommands.RequiredRoles,
            DefaultCommands.ToggleCommand
        ],
        botOwners: ['1084922446248951828'],
    })
})

client.login(token)