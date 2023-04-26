const aoijs = require("aoi.js");

const { Util } = require("aoi.js");
const { setup } = require("aoi.parser")
setup(Util);
const bot = new aoijs.AoiClient({
token: "MTEwMDQ0NjczNDA4NzM3NjkzNg.G9YPoO.EDYQRSUWqhJ2e8H71jpwycV9bDqRogeAXfkpQ0", //token
database: {
    db: require("aoi.db"),
    type: "aoi.db",
    path: "./database/",
    tables: ["main"]},
disableFunctions: ['$clientToken'],
prefix: ['!','.'],
intents: ["MessageContent","Guilds","GuildMessages","GuildMembers","GuildMessageReactions","GuildEmojisAndStickers","DirectMessageTyping","DirectMessageReactions","DirectMessages"],
events: ["onMessage","onInteractionCreate","onFunctionError"]
})

bot.command({
    name: "ping",
    code: `
🏓Pong! \`$pingms\`
`
})