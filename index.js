const aoijs = require("aoi.js");
const dotenv = require('dotenv');
const config = require('./config.json');
dotenv.config()

const { Util } = require("aoi.js");
const { setup } = require("aoi.parser")
setup(Util);
const bot = new aoijs.AoiClient({
<<<<<<< HEAD
token: config.token, //token
=======
token: "token bot kamu", //token
>>>>>>> 11b38bc1d4f8fc478de570f065d9768b8cf17d25
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
<<<<<<< HEAD
`
})

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./commands/")
=======
` //function $ping akan menampilkan speed latency dalam milidetik
})
>>>>>>> 11b38bc1d4f8fc478de570f065d9768b8cf17d25
