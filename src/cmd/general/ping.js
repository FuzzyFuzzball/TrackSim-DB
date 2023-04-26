module.exports = {
    description: 'Pings the bots latancy.',
    type: SLASH,
    testOnly: true,

    callback: () => {
        return {
            content: `Pong! Latancy is ${Math.round(client.ws.ping)}ms.`,
            ephemeral: true,
        }
    }
}