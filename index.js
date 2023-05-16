require("dotenv/config");
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds, // Guilds in the discord server
    IntentsBitField.Flags.GuildMessages, // Messages within the discord server
    IntentsBitField.Flags.MessageContent, // Access to the message content itself
  ],
});

// Event listener for everytime the bot comes online
client.on("ready", () => {
  console.log("Ai bot is online!");
});

client.on("messageCreate", (message) => {
  console.log(message);
});

client.login(process.env.TOKEN);
