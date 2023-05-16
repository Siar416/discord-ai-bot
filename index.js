require("dotenv/config");
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds, // Guilds in the discord server
    IntentsBitField.Flags.GuildMessages, // Messages within the discord server
    IntentsBitField.Flags.MessageContent, // Access to the message content itself
  ],
});
