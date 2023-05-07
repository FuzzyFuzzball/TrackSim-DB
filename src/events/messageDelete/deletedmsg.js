// const { EmbedBuilder } = require('discord.js')
// const { footerlogo, footertext, color } = require('../../cfg/embed/embed.json')
// const { logchannel } = require('../../cfg/channels/channels.json')

// module.exports = ({ member, message, content }) => {

    
//         // Log the deleted message content
//         console.log(`Message deleted in ${message.channel.name}: "${message.content}"`);
    
//         // Send a log embed
//         const logEmbed = new MessageEmbed()
//           .setColor('#ff0000')
//           .setTitle('Message Deleted')
//           .setDescription(`A message was deleted in ${message.channel}`)
//           .addField('User', `${message.author}`, true)
//           .addField('Content', `${message.content}`, true)
//           .setTimestamp();
    
//         const channel = message.guild.channels.cache.find(channel => channel.name === 'log');
//         if (channel) {
//           channel.send({ embeds: [logEmbed] });
//         }
      

//     logchan.send({ embeds: [msg] })
// }