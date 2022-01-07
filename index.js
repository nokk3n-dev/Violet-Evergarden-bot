//Violet Evergarden Bot
//Author Dylan Werelius
//Date Created 6 January 2022
//Violet will detect and table flips and then put them back 
//To turn on, type "node index.js"

const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const TOKEN = "OTI4NzgwNDA2ODEwMTAzOTE5.YddwKA.PpGjNc5m3zLYz_AtGgbJ4epcb8E"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//simple hello command
client.on("messageCreate", (message) => {
    if ((message.content == "(Hello Violet") || (message.content == "\\Hello Violet")){
        message.reply("I will always be here to fix the tables that you flip over. I am the Auto Memories Doll, Violet Evergarden")
    }
})

//fixing table flips
client.on("messageCreate", (message) => {
    if ((message.content == "(╯°□°)╯︵ ┻━┻") || 
        (message.content == "(ノಠ益ಠ)ノ彡┻━┻") ||
        (message.content == "(┛ಠ_ಠ)┛彡┻━┻") ||
        (message.content == "(┛◉Д◉)┛彡┻━┻") ||
        (message.content == "(╯°□°）╯︵ ┻━┻") ||
        (message.content == "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻")){
        message.reply("┬─┬ノ( º _ ºノ)")
    }
})

const welcomeChannelId = "928869657539141683"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server! I am Violet Evergarden, I will fix all the tables that you flip over.`,
        files: [img]
    })
})

client.login(process.env.TOKEN)