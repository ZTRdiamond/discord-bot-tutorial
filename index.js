const aoijs = require("aoi.js");
const dotenv = require('dotenv');
const config = require('./config.json');
dotenv.config()

const { Util } = require("aoi.js");
const { setup } = require("aoi.parser")
setup(Util);
const bot = new aoijs.AoiClient({
token: config.token, //token
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

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./commands/")