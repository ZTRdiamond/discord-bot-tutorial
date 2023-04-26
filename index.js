const aoijs = require("aoi.js");

const { Util } = require("aoi.js");
const { setup } = require("aoi.parser")
setup(Util);
const bot = new aoijs.AoiClient({
token: "token bot kamu", //token
database: {
    db: require("aoi.db"),
    type: "aoi.db",
    path: "./database/",
    tables: ["main"]},
disableFunctions: ['$clientToken'],
prefix: ['!'],//atur prefix sesuai pilihanmu
intents: ["MessageContent","Guilds","GuildMessages","GuildMembers","GuildMessageReactions","GuildEmojisAndStickers","DirectMessageTyping","DirectMessageReactions","DirectMessages"],
events: ["onMessage","onInteractionCreate","onFunctionError"]
})

bot.command({
    name: "ping",
    code: `
🏓Pong! \`$pingms\`
` //function $ping akan menampilkan speed latency dalam milidetik
})