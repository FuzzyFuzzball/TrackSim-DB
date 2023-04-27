module.exports = (member) => {
    
        const { user, guild } = member
        const welcomeChannel = member.guild.channels.cache.get('1084994979316908035')
        const msg = `Welcome <@${member.id}> to the server.`

        welcomeChannel.send({ content: msg})
    
}